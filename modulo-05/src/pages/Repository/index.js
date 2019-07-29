import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import {
  Loading,
  Owner,
  IssueList,
  Label,
  Filters,
  Filter,
  Pagination,
} from './styles';
import { Container } from '../../components/Container';

class Repository extends React.Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        repository: PropTypes.string,
      }),
    }).isRequired,
  };

  state = {
    repository: {},
    issues: [],
    loading: true,
    filters: [
      { value: 'open', label: 'Abertas', active: true },
      { value: 'closed', label: 'Fechadas', active: false },
      { value: 'all', label: 'Todas', active: false },
    ],
    page: 1,
  };

  async componentDidMount() {
    const { page } = this.state;
    const { match } = this.props;
    const repoName = decodeURIComponent(match.params.repository);

    const [repository, issues] = await Promise.all([
      api.get(`/repos/${repoName}`),
      api.get(`/repos/${repoName}/issues`, {
        params: {
          state: 'open',
          per_page: 5,
          page,
        },
      }),
    ]);

    this.setState({
      repository: repository.data,
      issues: issues.data,
      loading: false,
    });
  }

  async componentDidUpdate(_, prevState) {
    const { page } = this.state;
    if (prevState.page !== page) {
      this.loadIssues();
    }
  }

  handleFilterClick = async e => {
    const { filters } = this.state;

    filters.forEach(f => {
      f.active = false;

      if (f.value === e) {
        f.active = true;
      }
    });

    await this.setState({
      filters: [...filters],
    });

    this.loadIssues();
  };

  handleBack = async e => {
    e.preventDefault();
    let { page } = this.state;

    if (page > 1) page -= 1;

    await this.setState({ page });
  };

  handleFoward = async e => {
    e.preventDefault();
    let { page } = this.state;
    page += 1;

    await this.setState({ page });
  };

  async loadIssues() {
    const { filters, repository, page } = this.state;
    const activeFilter = filters.find(f => f.active);

    this.setState({
      loading: true,
    });

    const issues = await api.get(`/repos/${repository.full_name}/issues`, {
      params: {
        state: activeFilter.value,
        per_page: 5,
        page,
      },
    });

    this.setState({
      issues: issues.data,
      loading: false,
    });
  }

  render() {
    const { repository, issues, loading, filters, page } = this.state;

    if (loading) {
      return <Loading>Carregando</Loading>;
    }

    return (
      <Container>
        <Owner>
          <Link to="/">Voltar aos repositórios</Link>

          <img src={repository.owner.avatar_url} alt={repository.owner.login} />
          <h1>{repository.full_name}</h1>
          <p>{repository.description}</p>
        </Owner>

        <Filters>
          {filters.map(filter => (
            <Filter
              key={filter.value}
              active={filter.active}
              onClick={() => this.handleFilterClick(filter.value)}
            >
              {filter.label}
            </Filter>
          ))}
        </Filters>

        <IssueList>
          {issues.map(issue => (
            <li key={String(issue.id)}>
              <img src={issue.user.avatar_url} alt={issue.user.login} />
              <div>
                <strong>
                  <a href={issue.html_url}>{issue.title}</a>
                  {issue.labels.map(label => (
                    <Label key={String(label.id)} color={label.color}>
                      {label.name}
                    </Label>
                  ))}
                </strong>
                <p>{issue.user.login}</p>
              </div>
            </li>
          ))}
        </IssueList>

        <Pagination>
          <button type="button" onClick={this.handleBack} disabled={page < 2}>
            &lt;
          </button>

          <button type="button" onClick={this.handleFoward}>
            &gt;
          </button>
        </Pagination>
      </Container>
    );
  }
}

export default Repository;

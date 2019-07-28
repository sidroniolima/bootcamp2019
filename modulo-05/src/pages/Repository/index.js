import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import { Loading, Owner, IssueList, Label, Filters, Filter } from './styles';
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
      { value: 'open', label: 'Abertas', active: true, },
      { value: 'closed', label: 'Fehcadas', active: false, },
      { value: 'all', label: 'Todas', active: false, }
    ]
  };

  async componentDidMount() {
    const { match } = this.props;
    const repoName = decodeURIComponent(match.params.repository);

    const [repository, issues] = await Promise.all([
      api.get(`/repos/${repoName}`),
      api.get(`/repos/${repoName}/issues`, {
        params: {
          state: 'open',
          per_page: 5,
        },
      }),
    ]);

    this.setState({
      repository: repository.data,
      issues: issues.data,
      loading: false,
    });
  }

  handleFilterClick = (e) => {
    this.setState({filters: [...this.state.filters, e]});
    console.log(this.state.filters)
  }

  render() {
    const { repository, issues, loading, filters } = this.state;

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
                onClick={() => this.handleFilterClick(filter)}
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
      </Container>
    );
  }
}

export default Repository;

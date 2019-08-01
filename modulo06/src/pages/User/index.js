import React from 'react';
import PropTypes from 'prop-types';
import api from '../../services/api';

import Loading from '../../components/Loading';

import {
  Container,
  Header,
  Avatar,
  Name,
  Bio,
  Stars,
  Starred,
  OwnerAvatar,
  Info,
  Title,
  Author,
} from './styles';

export default class User extends React.Component {
  static propTypes = PropTypes.shape({
    getParam: PropTypes.func,
    navigate: PropTypes.func,
  }).isRequired;

  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('user').name,
  });

  state = {
    stars: [],
    loading: true,
    page: 2,
    refreshing: false,
  };

  async componentDidMount() {
    await this.load();
  }

  load = async (page = 1) => {
    const { stars } = this.state;

    const { navigation } = this.props;
    const user = navigation.getParam('user');

    const response = await api.get(`/users/${user.login}/starred`, {
      params: {
        page,
      },
    });

    this.setState({
      stars: page > 2 ? [...stars, ...response.data] : response.data,
      loading: false,
      refreshing: false,
      page,
    });
  };

  refreshList = async () => {
    await this.setState({ page: 1, refreshing: true, stars: [] }, this.load);
  };

  handleStarredPress = starred => {
    const { navigation } = this.props;
    navigation.navigate('Repository', { starred });
  };

  render() {
    const { navigation } = this.props;
    const { stars, loading, refreshing, page } = this.state;
    const user = navigation.getParam('user');

    return (
      <Container>
        <Header>
          <Avatar source={{ uri: user.avatar }} />
          <Name>{user.name}</Name>
          <Bio>{user.bio}</Bio>
        </Header>

        {loading ? (
          <Loading />
        ) : (
          <Stars
            data={stars}
            keyExtractor={star => String(star.id)}
            nEndReachedThreshold={0.2}
            onEndReached={() => this.load(page + 1)}
            onRefresh={this.refreshList}
            refreshing={refreshing}
            renderItem={({ item }) => (
              <Starred onPress={() => this.handleStarredPress(item)}>
                <OwnerAvatar source={{ uri: item.owner.avatar_url }} />
                <Info>
                  <Title>{item.name}</Title>
                  <Author>{item.owner.login}</Author>
                </Info>
              </Starred>
            )}
          />
        )}
      </Container>
    );
  }
}

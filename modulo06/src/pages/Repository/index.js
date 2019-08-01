import React from 'react';
import PropTypes from 'prop-types';

import Loading from '../../components/Loading';

import { Browser } from './styles';

export default class Git extends React.Component {
  static propTypes = PropTypes.shape({
    getParam: PropTypes.func,
  }).isRequired;

  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('starred').name,
  });

  render() {
    const { navigation } = this.props;
    const htmlUrl = navigation.getParam('starred').html_url;

    return (
      <Browser
        source={{ uri: htmlUrl }}
        startInLoadingState
        renderLoading={() => <Loading />}
      />
    );
  }
}

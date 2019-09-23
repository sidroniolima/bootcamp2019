import React from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';

// import { Container } from './styles';

export default function Profile() {
  return (
    <Background>
      <View>
        <Text>Teste</Text>
      </View>
    </Background>
  );
}

function IconTab({tintColor}) {
  return <Icon name="person" size={20} color={tintColor} />;
}

IconTab.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

Profile.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: IconTab,
};

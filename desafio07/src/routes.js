import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import Header from './components/header';
import Main from './pages/Main';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
    },
    {
      defaultNavigationOptions: navigation => ({
        header: <Header {...navigation} />,
      }),
      cardStyle: {
        backgroundColor: '#141419',
      },
    }
  )
);

export default Routes;

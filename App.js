import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { store } from './Store';
import Routes from './router';

export default () => (
  <Provider store={store}>
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  </Provider>

);
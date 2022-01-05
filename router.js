import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AuthLayout from './src/layout/layout'
import Home from './src/pages/home/home';
import Login from './src/pages/login/login.js';

const App = createStackNavigator();

const PrivateRoute = () => {
  return (
    <App.Navigator
      initialRouteName={'Home'}
      screenOptions={{ headerShown: false }}
    >
      <App.Screen name={'Home'} component={Home} />
    </App.Navigator>
  )
}

export default () => {
  const dispatch = useDispatch()
  const logInStorage = localStorage.token
  const { logIn, usuario } = useSelector(state => state.appState)

  useEffect(() => {
    if(logIn || logInStorage){
      dispatch(loged())
    } 
  }, [])

  return (
    logIn || logInStorage ? 
    // true?
    <AuthLayout> 
      <PrivateRoute />
    </AuthLayout>
    :
    <App.Navigator
      initialRouteName={'login'}
      screenOptions={{ headerShown: false }}
    >
      <App.Screen name={'login'} component={Login} />
    </App.Navigator>
  )
}
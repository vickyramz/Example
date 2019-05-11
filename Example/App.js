import {createStackNavigator, createAppContainer} from 'react-navigation';
import Login from './Components/Login'
import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
const MainNavigator = createStackNavigator({
  
  Login: {screen: Login},

});

const App = createAppContainer(MainNavigator);

export default App;
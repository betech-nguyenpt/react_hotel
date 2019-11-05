/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
//import { Provider } from "react-redux";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './src/components/Main/Home';
import Profile from './src/components/Main/Profile';

const MainNagivator = createStackNavigator({
  Home: {screen: Home},
  Profile: {screen: Profile},
});

const App = createAppContainer(MainNagivator);

export default App;

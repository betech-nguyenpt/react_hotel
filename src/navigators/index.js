import React from "react";
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './../components/Main/Home';
import Profile from './../components/Main/Profile';
export const Navigators = createStackNavigator({
	Home: {
		screen: Home
	},
  	Profile: {
  		screen: Profile
  	},
});
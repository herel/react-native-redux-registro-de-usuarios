import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import Form from './screens/Form.js';
import Login from './screens/Login';
import Home from './screens/Home';


const Navigation = StackNavigator({
	home : {
		screen : Home
	},
	registro : {
		screen : Form
	},
	login : {
		screen : Login
	}
},{
	headerMode: 'none'
});

export default Navigation;
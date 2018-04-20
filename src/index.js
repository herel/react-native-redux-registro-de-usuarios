import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import Form from './screens/Form.js';


const Navigation = StackNavigator({
	home : {
		screen : Form
	}
},{
	headerMode: 'none'
});

export default Navigation;
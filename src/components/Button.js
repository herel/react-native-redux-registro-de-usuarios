import React, { Component } from 'react';
import { View, TouchableHighlight , Text } from 'react-native';
import {
	button,
	button_text 
} from '../config/styles';
import {
	REDCOLOR
} from '../config/const';


class Button extends Component{

	onPress(){
		if(this.props.onPress)
			this.props.onPress();
	}

	_getBackground(){
		if(this.props.color)
			return { backgroundColor : this.props.color };
		if(this.props.disabled)
			return { backgroundColor : 'rgba(255,255,255,0.5)' }
		return { backgroundColor : REDCOLOR };
	}

	render(){
		return (
			<TouchableHighlight
				activeOpacity={1}
				underlayColor="rgba(255,255,255,.6)"
				onPress={this.onPress.bind(this)}
				style={[button,this._getBackground()]}>
				<Text style={button_text}>{this.props.text}</Text>
			</TouchableHighlight>
		);
	}
}

export default Button;
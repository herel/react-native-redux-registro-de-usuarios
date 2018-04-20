import React, { Component } from 'react';
import { View, TextInput  } from 'react-native';
import {
  InputContainer,
  InputStyle
} from '../config/styles';

class Input extends Component{
	render(){
		return (
			<View style={InputContainer}>
				<TextInput
					placeholder={this.props.placeholder}
					placeholderTextColor="rgba(255,255,255,0.3)"
					style={InputStyle}
					value={this.props.value}
					keyboardType={this.props.keyboardType}
					autoCapitalize='none'
					underlineColorAndroid='transparent'
					secureTextEntry={this.props.secureTextEntry}
					onChangeText={this.props.onChangeText}
					autoCorrect={false}
				/>
			</View>
		)
	}

}

export default Input;
import React, { Component } from 'react';
import { View } from 'react-native';
import Input from '../components/Input';
import LinearGradient from 'react-native-linear-gradient';
import {
	container
} from '../config/styles';

class Form extends Component{
	render(){
		return (
			<LinearGradient
				colors={['#441E35','#320622']}
				style={container}>
				<Input
					placeholder="Nombre(s)"/>
				<Input
					placeholder="Apellido(s)"/>
				<Input
					placeholder="Correo electrónico"/>
				<Input
					secureTextEntry={true}
					placeholder="Contraseña"/>
			</LinearGradient>
		);
	}
}

export default Form;
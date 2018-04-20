import React, { Component } from 'react';
import { View } from 'react-native';
import Input from '../components/Input';
import Button from '../components/Button';
import LinearGradient from 'react-native-linear-gradient';
import {
	container
} from '../config/styles';

class Form extends Component{

	constructor(props){
		super(props);
		this.state = {
			firstName : '',
			lastName  : '',
			email 	  : '',
			password  : '' 
		}
	}

	_getDisabled(){
		let disabled = false;
		if(!this.state.firstName || this.state.firstName.length <=4)
			disabled = true;
		if(!this.state.lastName || this.state.lastName.length <=4)
			disabled = true;
		if(!this.state.email)
			disabled = true;
		if(!this.state.password || this.state.password.length <=5)
			disabled = true;

		return disabled;
	}
	render(){
		return (
			<LinearGradient
				colors={['#441E35','#320622']}
				style={container}>
				<Input
					placeholder="Nombre(s)"
					onChangeText={(firstName) => this.setState({firstName})}
					value={this.state.firstName}
					/>
				<Input
					placeholder="Apellido(s)"
					onChangeText={(lastName) => this.setState({lastName})}
					value={this.state.lastName}
					/>
				<Input
					placeholder="Correo electrónico"
					onChangeText={(email) => this.setState({email})}
					value={this.state.email}
				/>
				<Input
					secureTextEntry={true}
					placeholder="Contraseña"
					onChangeText={(password) => this.setState({password})}
					value={this.state.password}
				/>
				<Button
					disabled={this._getDisabled()}
					text="Registrar"
				/>
			</LinearGradient>
		);
	}
}

export default Form;
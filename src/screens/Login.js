import React, { Component } from 'react';
import { View,Alert } from 'react-native';
import Input from '../components/Input';
import Button from '../components/Button';
import LinearGradient from 'react-native-linear-gradient';
import {
	container
} from '../config/styles';

import { connect } from 'react-redux';
import { login } from '../redux/actions';

class Login extends Component{
	
	constructor(props){
		super(props);
		this.state = {
			email 	  : '',
			password  : '',
			loader 	  : false
		}
	}

	_getDisabled(){
		let disabled = false;
		if(!this.state.email)
			disabled = true;
		if(!this.state.password || this.state.password.length <=5)
			disabled = true;
		if(this.state.loader)
			disabled = true;
		return disabled;
	}


	_login(){
		this.setState({ loader : true })
		this.props.login(this.state).then(($result) => {
			this.setState({ loader : false })
			Alert.alert('confirmación','Iniciaste sesión correctamente');
			//todo salio bien enviamos a otra vista donde veremos el perfild del usuario
		}).catch( (err) => {
			this.setState({ loader : false })
			Alert.alert('Error',err.message);
		})
	}

	render(){
		return (
			<LinearGradient
				colors={['#441E35','#320622']}
				style={container}>

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
					onPress={this._login.bind(this)}
					disabled={this._getDisabled()}
					text={ (this.state.loader ? 'Cargando...' : 'Iniciar Sesión')}
				/>
			</LinearGradient>
		)
	}
}

function MapStateToProps(state){
	return {
		user : state.session && state.session.user ? state.session.user : false
	}
}

export default connect(MapStateToProps,{  login })(Login);
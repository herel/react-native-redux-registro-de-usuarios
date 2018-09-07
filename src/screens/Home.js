import React, { Component } from 'react';
import { View, Text, Alert } from 'react-native';
import Button from '../components/Button';
import LinearGradient from 'react-native-linear-gradient';
import {
	container
} from '../config/styles';
import { connect } from 'react-redux';

import FBSDK from 'react-native-fbsdk';

const {
	LoginManager,
	AccessToken
} = FBSDK;



class Home extends Component{
	
	constructor(props){
		super(props);
		this.state = { }
	}

	_go(routeName){
		this.props.navigation.navigate(routeName);
	}

	_loginFacebook(){
		LoginManager
		.logInWithReadPermissions(['public_profile','email'])
			.then( (result) => {
				if (result.isCancelled)
					Alert.alert('Ocurrio un error','Cancelaste iniciar sesión');
				else
					Alert.alert('response', JSON.stringify(result));
			})
			.catch( (err) => console.log(err));
	}


	render(){
		return (
			<LinearGradient
				colors={['#441E35','#320622']}
				style={container}>
				<Button
					onPress={() => this._go('registro')}
					text="¡Registrate!"
				/>
				<Button
					onPress={() => this._go('login')}
					text="¿Ya tienes una cuenta? Inica sesión"
				/>

				<Button
					color="#4267b2"
					onPress={this._loginFacebook.bind(this)}
					text="Iniciar sesión con facebook"
				/>
				
			</LinearGradient>
		)
	}
}

function MapStateToProps(state){
	return {
		session : state.session
	}
}
export default  connect(MapStateToProps)(Home);
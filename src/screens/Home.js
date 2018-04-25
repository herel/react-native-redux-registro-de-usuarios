import React, { Component } from 'react';
import { View } from 'react-native';
import Button from '../components/Button';
import LinearGradient from 'react-native-linear-gradient';
import {
	container
} from '../config/styles';

class Home extends Component{
	
	constructor(props){
		super(props);
		this.state = { }
	}

	_go(routeName){
		this.props.navigation.navigate(routeName);
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
			</LinearGradient>
		)
	}
}


export default Home;
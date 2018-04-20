import { Dimensions, Platform} from 'react-native'
import { REDCOLOR } from './const';

const { width, height } = Dimensions.get('window');

export const container = {
	width 	: width,
	height 	: height
}

export const InputContainer = {
  width  : width,
  height :  45,
  flexDirection: 'row',
  alignItems: 'center',
  marginTop: 15,
  marginBottom: 15
}

export const InputStyle = {
	width : width - 30,
	height : (Platform.OS === 'ios') ? 40 : 52,
	marginTop: 15,
	marginBottom: 15,
	borderBottomColor : REDCOLOR,
	borderBottomWidth : 2,
	fontSize : 24,
	color : 'white',
	marginLeft : 15
}
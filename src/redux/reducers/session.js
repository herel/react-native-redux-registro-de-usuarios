import { SET_SESSION, CLEAR_SESION, SET_USER } from '../ActionTypes.js'
const session = (state = { }, action) => {
	switch (action.type) {
		case SET_USER : {
		const { user } = action
			return {
				...state,
				user
			}
		}
		case CLEAR_SESION: {
			return { };
		}
		case SET_SESSION : {
			const { token, user } = action
			return {
				token,
				user
			}
		}
		default: {
      		return state
    	}
	}
}
export default session;
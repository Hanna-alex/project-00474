import { ACTION_TYPE } from '../actions'

const initialUserState = {
	id: null,
	login: null,
	avatar: '',
	session: null,
}

export const userReducer = (state = initialUserState, action) => {
	switch (action.type) {
		case ACTION_TYPE.SET_USER: {
			const newState = {
				...state,
				...action.payload,
			}
			localStorage.setItem('userSession', JSON.stringify(newState))
			return newState
		}
		case ACTION_TYPE.LOGOUT: {
			localStorage.removeItem('userSession')
			return {
				...initialUserState,
			}
		}
		default:
			return state
	}
}

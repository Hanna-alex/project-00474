import { ACTION_TYPE } from '../actions'

const initialUserState = {
	id: null,
	login: null,
	avatar: null,
	email: null,
	session: null,
}

export const userReducer = (state = initialUserState, action) => {
	switch (action.type) {
		case ACTION_TYPE.SET_USER: {
			const newState = {
				...state,
				...action.payload,
			}
			return newState
		}
		case ACTION_TYPE.LOGOUT: {
			return {
				...initialUserState,
			}
		}
		case ACTION_TYPE.UPDATE_USER: {
			const updatedState = { ...state, ...action.payload }
			return updatedState
		}
		default:
			return state
	}
}

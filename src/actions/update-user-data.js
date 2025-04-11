import { ACTION_TYPE } from './action-type'

export const updateUserData = (data) => ({
	type: ACTION_TYPE.UPDATE_USER,
	payload: data,
})

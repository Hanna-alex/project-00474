import { ACTION_TYPE } from './action-type'

export const updateUser = (data) => ({
	type: ACTION_TYPE.UPDATE_USER,
	payload: data,
})

import { ACTION_TYPE } from './action-type'

export const deleteAccount = (data) => ({
	type: ACTION_TYPE.DELETE_ACCOUNT,
	payload: data,
})

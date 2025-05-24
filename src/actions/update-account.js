import { ACTION_TYPE } from './action-type'

export const updateAccount = (data) => ({
	type: ACTION_TYPE.UPDATE_ACCOUNT,
	payload: data,
})

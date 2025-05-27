import { ACTION_TYPE } from './action-type'

export const updateCategory = (data) => ({
	type: ACTION_TYPE.UPDATE_CATEGORY,
	payload: data,
})

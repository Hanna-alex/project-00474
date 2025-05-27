import { ACTION_TYPE } from './action-type'

export const deleteCategory = (data) => ({
	type: ACTION_TYPE.DELETE_CATEGORY,
	payload: data,
})

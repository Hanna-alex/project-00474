import { ACTION_TYPE } from './action-type'

export const createCategory = (category) => ({
	type: ACTION_TYPE.CREATE_CATEGORY,
	payload: category,
})

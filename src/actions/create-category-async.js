import { setCategory } from './set-category'

export const createCategoryAsync =
	(requestSever, data, userId, setServerError) => async (dispatch) => {
		requestSever('createCategory', data, userId).then(({ error, res }) => {
			if (error) setServerError(error)

			dispatch(setCategory(res))
		})
	}

import { updateCategory } from './update-category'

export const updateCategoryAsync =
	(requestSever, accountId, changeData, setServerError) => async (dispatch) => {
		requestSever('updateCategory', accountId, changeData).then(({ error, res }) => {
			if (error) setServerError(error)

			dispatch(updateCategory(res))
		})
	}

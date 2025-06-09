import { updateCategory } from './update-category'

export const updateCategoryAsync =
	(requestSever, caterogyId, changeData, setServerError) => async (dispatch) => {
		requestSever('updateCategory', caterogyId, changeData).then(({ error, res }) => {
			if (error) setServerError(error)

			dispatch(updateCategory(res))
		})
	}

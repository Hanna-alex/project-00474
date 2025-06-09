import { editCategory } from '../api'
import { sessions } from '../sessions'

export const updateCategory = async (userSession, caterogyId, data) => {
	const isExists = await sessions.access(userSession)

	if (!isExists) {
		sessions.remove(userSession)
	}

	const updatedCategory = await editCategory(caterogyId, data)

	if (!updatedCategory) {
		return {
			error: 'Что-то пошло не так попробуйте позже',
			res: null,
		}
	}
	return {
		error: null,
		res: updatedCategory,
	}
}

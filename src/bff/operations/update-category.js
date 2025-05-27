import { editCategory } from '../api'

export const updateCategory = async (usserSession, id, data) => {
	const updatedCategory = await editCategory(id, data)

	if (!updatedCategory) {
		return {
			error: 'Что-то пошло не так попробуйте позже',
			res: null,
		}
	}
	return {
		error: null,
		res: updatedCategory, //объект
	}
}

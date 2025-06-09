import { addCategory } from '../api'
import { sessions } from '../sessions'

export const createCategory = async (userSession, category, userId) => {
	const isExists = await sessions.access(userSession)

	if (!isExists) {
		sessions.remove(userSession)
	}

	const newCategory = await addCategory(category, userId)

	if (!newCategory) {
		return {
			error: 'Не удалось добавить категорию, попробуйте позже',
			res: null,
		}
	}
	return {
		error: null,
		res: newCategory,
	}
}

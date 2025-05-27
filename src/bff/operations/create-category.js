import { addCategory } from '../api'

export const createCategory = async (userSession, category, userId) => {
	const newCategory = addCategory(category, userId)

	if (!newCategory) {
		return {
			error: 'Не удалось загрузить счет, обновите страницу',
			res: null,
		}
	}
	return {
		error: null,
		res: newCategory,
	}
}

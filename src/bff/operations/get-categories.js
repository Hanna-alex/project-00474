import { fetchCategories } from '../api'

export const getCategories = async (userSession, userId) => {
	const categories = await fetchCategories(userId)

	if (!categories) {
		return {
			error: 'Не удалось загрузить категории пользователя',
			res: null,
		}
	}

	return {
		error: null,
		res: categories,
	}
}

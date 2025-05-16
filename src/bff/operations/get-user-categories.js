import { fetchUserCategories } from '../api'

export const getUserCategories = async (userSession, userId) => {
	const categories = await fetchUserCategories(userId)

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

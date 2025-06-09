import { fetchCategories } from '../api'
import { sessions } from '../sessions'

export const getCategories = async (userSession, userId) => {
	const isExists = await sessions.access(userSession)

	if (!isExists) {
		sessions.remove(userSession)
	}

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

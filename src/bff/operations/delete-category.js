import { removeCategory } from '../api'
import { sessions } from '../sessions'

export const deleteCategory = async (userSession, categoryId) => {
	const isExists = await sessions.access(userSession)

	if (!isExists) {
		sessions.remove(userSession)
	}

	const res = await removeCategory(categoryId)

	if (!res.ok) {
		return {
			error: 'Что пошло не так. Попробуйте позже',
			res: false,
		}
	}
	return {
		error: null,
		res: true,
	}
}

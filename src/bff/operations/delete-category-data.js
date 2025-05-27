import { deleteCategory } from '../api'

export const deleteCategoryData = async (usserSession, categoryId) => {
	try {
		const res = await deleteCategory(categoryId)

		if (!res.ok) {
			return {
				error: 'Что пошло не так. Попробуйте позже',
				res: null,
			}
		}
		return {
			error: null,
			res: true,
		}
	} catch {
		return {
			error: 'Ошибка сети или сервера',
			res: null,
		}
	}
}

import { getDate } from '../utils'
import { DEFAULT_CATEGORIES } from '../constants'

export const addDefaultCategories = async (userId) => {
	for (const category of DEFAULT_CATEGORIES) {
		await fetch('http://localhost:3007/categories', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json;charset=utf-8',
			},
			body: JSON.stringify({
				...category,
				user_id: userId,
				created_at: getDate(),
			}),
		})
	}
}

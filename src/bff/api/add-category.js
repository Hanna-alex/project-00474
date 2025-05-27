import { getDate } from '../utils'

export const addCategory = (category, userId) =>
	fetch('http://localhost:3007/categories', {
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
		.then((addedCategory) => addedCategory.json())
		.then((addedCategory) => addedCategory)

import { getDate } from '../utils'

export const editCategory = (id, data) =>
	fetch(`http://localhost:3007/categories/${id}`, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ ...data, update_at: getDate() }),
	})
		.then((res) => res.json())
		.then((editedCategory) => editedCategory)

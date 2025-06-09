import { getDate } from '../utils'

export const editCategory = (caterogyId, data) =>
	fetch(`http://localhost:3007/categories/${caterogyId}`, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ ...data, update_at: getDate() }),
	})
		.then((res) => res.json())
		.then((editedCategory) => editedCategory)

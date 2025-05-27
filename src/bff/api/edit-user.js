import { getDate } from '../utils'

export const editUser = (id, data) =>
	fetch(`http://localhost:3007/users/${id}`, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ ...data, update_at: getDate() }),
	})
		.then((res) => res.json())
		.then((editedData) => editedData)

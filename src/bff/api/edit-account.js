import { getDate } from '../utils'

export const editAccount = (id, data) =>
	fetch(`http://localhost:3007/accounts/${id}`, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ ...data, update_at: getDate() }),
	})
		.then((res) => res.json())
		.then((editedAccount) => editedAccount)

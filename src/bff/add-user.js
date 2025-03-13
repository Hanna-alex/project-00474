import { getDate } from './get-date'

export const addUser = (login, password) =>
	fetch('http://localhost:3007/users', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify({
			login,
			password,
			avatar: '',
			created_at: getDate(),
		}),
	})

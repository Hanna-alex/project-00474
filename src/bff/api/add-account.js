import { getDate } from '../utils'

export const addAccount = (account, userId) =>
	fetch('http://localhost:3007/accounts', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify({
			...account,
			user_id: userId,
			created_at: getDate(),
		}),
	})
		.then((addedAccount) => addedAccount.json())
		.then((addedAccount) => {
			return addedAccount
		})

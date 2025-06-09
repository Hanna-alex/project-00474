export const removeAccount = (accountId) =>
	fetch(`http://localhost:3007/accounts/${accountId}`, {
		method: 'DELETE',
	})

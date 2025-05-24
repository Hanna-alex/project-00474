export const fetchAccount = (accountId) =>
	fetch(`http://localhost:3007/accounts?id=${accountId}`)
		.then((loadedAccount) => loadedAccount.json())
		.then(([loadedAccount]) => loadedAccount)

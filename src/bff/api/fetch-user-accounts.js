export const fetchUserAccounts = async (userId) =>
	fetch(`http://localhost:3007/accounts?user_id=${userId}`)
		.then((loadedAccounts) => loadedAccounts.json())
		.then((loadedUserAccounts) => loadedUserAccounts)

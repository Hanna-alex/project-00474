export const fetchIcons = async () =>
	fetch(`http://localhost:3007/icons`)
		.then((loadedAccounts) => loadedAccounts.json())
		.then((loadedUserAccounts) => loadedUserAccounts)

export const fetchUser = async (loginToFind) =>
	fetch(`http://localhost:3007/users/?login=${loginToFind}`)
		.then((loadedUser) => loadedUser.json())
		.then(([loadedUser]) => loadedUser)

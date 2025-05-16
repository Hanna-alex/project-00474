export const fetchUsers = () =>
	fetch('http://localhost:3007/users').then((loadedUsers) => loadedUsers.json())

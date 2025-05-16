import { fetchUsers } from '../api'

export const checkUserLoginExists = async (userSession, login) => {
	const loadedUsers = await fetchUsers()

	const existingUsernames = loadedUsers.map((user) => user.login)

	return existingUsernames.includes(login)
}

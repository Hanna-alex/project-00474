import { getUsers } from '../api'

export const checkUserLoginExists = async (userSession, login) => {
	const loadedUsers = await getUsers()

	const existingUsernames = loadedUsers.map((user) => user.login)

	return existingUsernames.includes(login)
}

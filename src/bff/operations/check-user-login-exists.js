import { fetchUsers } from '../api'
import { sessions } from '../sessions'

export const checkUserLoginExists = async (userSession, login) => {
	const isExists = await sessions.access(userSession)

	if (!isExists) {
		sessions.remove(userSession)
	}

	const loadedUsers = await fetchUsers()

	const existingUsernames = loadedUsers.map((user) => user.login)

	return existingUsernames.includes(login)
}

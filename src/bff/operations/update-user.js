import { editUser } from '../api'
import { sessions } from '../sessions'

export const updateUser = async (userSession, userId, data) => {
	const isExists = await sessions.access(userSession)

	if (!isExists) {
		sessions.remove(userSession)
	}

	const updatedUserData = await editUser(userId, data)

	if (!updatedUserData) {
		return {
			error: 'Что-то пошло не так попробуйте позже',
			res: null,
		}
	}
	return {
		error: null,
		res: updatedUserData,
	}
}

import { updateUser } from '../api'

export const updateUserData = async (usserSession, id, data) => {
	const updatedUserData = await updateUser(id, data)

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

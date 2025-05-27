import { editUser } from '../api'

export const updateUser = async (usserSession, id, data) => {
	const updatedUserData = await editUser(id, data)

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

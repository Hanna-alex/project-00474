import { updateAccout } from '../api'

export const updateAccountData = async (usserSession, id, data) => {
	const updatedAccount = await updateAccout(id, data)

	if (!updatedAccount) {
		return {
			error: 'Что-то пошло не так попробуйте позже',
			res: null,
		}
	}
	return {
		error: null,
		res: updatedAccount,
	}
}

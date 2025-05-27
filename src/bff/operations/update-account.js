import { editAccount } from '../api'

export const updateAccount = async (usserSession, accountId, data) => {
	const updatedAccount = await editAccount(accountId, data)

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

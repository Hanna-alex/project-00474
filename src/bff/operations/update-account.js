import { editAccount } from '../api'
import { sessions } from '../sessions'

export const updateAccount = async (userSession, accountId, data) => {
	const isExists = await sessions.access(userSession)

	if (!isExists) {
		sessions.remove(userSession)
	}
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

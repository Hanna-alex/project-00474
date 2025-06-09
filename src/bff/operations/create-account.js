import { addAccount } from '../api'
import { sessions } from '../sessions'

export const createAccount = async (userSession, account, userId) => {
	const isExists = await sessions.access(userSession)
	if (!isExists) {
		sessions.remove(userSession)
	}

	const newAccount = await addAccount(account, userId)

	if (!newAccount) {
		return {
			error: 'Не удалось добавить счет, попробуйте позже',
			res: null,
		}
	}
	return {
		error: null,
		res: newAccount,
	}
}

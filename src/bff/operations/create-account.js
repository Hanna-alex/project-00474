import { addAccount } from '../api'

export const createAccount = async (userSession, account, userId) => {
	const newAccount = await addAccount(account, userId)

	if (!newAccount) {
		return {
			error: 'Не удалось загрузить счет, обновите страницу',
			res: null,
		}
	}
	return {
		error: null,
		res: newAccount,
	}
}

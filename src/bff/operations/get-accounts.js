import { fetchAccounts } from '../api'
import { sessions } from '../sessions'

export const getAccounts = async (userSession, userId) => {
	const isExists = await sessions.access(userSession)

	if (!isExists) {
		sessions.remove(userSession)
	}

	const accounts = await fetchAccounts(userId)

	if (!accounts) {
		return {
			error: 'Не удалось загрузить счета',
			res: null,
		}
	}

	return {
		error: null,
		res: accounts,
	}
}

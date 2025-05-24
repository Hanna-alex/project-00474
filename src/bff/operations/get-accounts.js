import { fetchAccounts } from '../api'

export const getAccounts = async (userSession, userId) => {
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

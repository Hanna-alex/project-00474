import { fetchUserAccounts } from '../api'

export const getUserAccounts = async (userSession, userId) => {
	const accounts = await fetchUserAccounts(userId)

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

import { fetchAccount } from '../api'

export const getAccount = async (userSession, accountId) => {
	const account = await fetchAccount(accountId)

	if (!account) {
		return {
			error: 'Ошибка при получении счета',
			res: null,
		}
	}
	return {
		error: null,
		res: account,
	}
}

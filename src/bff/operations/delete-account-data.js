import { deleteAccount } from '../api'

export const deleteAccountData = async (usserSession, accountId) => {
	try {
		const res = await deleteAccount(accountId)

		if (!res.ok) {
			return {
				error: 'Что пошло не так. Попробуйте позже',
				res: null,
			}
		}
		return {
			error: null,
			res: true,
		}
	} catch {
		return {
			error: 'Ошибка сети или сервера',
			res: null,
		}
	}
}

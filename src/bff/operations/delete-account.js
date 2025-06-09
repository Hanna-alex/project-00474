import { removeAccount } from '../api'
import { sessions } from '../sessions'

export const deleteAccount = async (userSession, accountId) => {
	const isExists = await sessions.access(userSession)

	if (!isExists) {
		sessions.remove(userSession)
	}

	const res = await removeAccount(accountId)

	if (!res.ok) {
		return {
			error: 'Что пошло не так. Попробуйте позже',
			res: false,
		}
	}
	return {
		error: null,
		res: true,
	}
}

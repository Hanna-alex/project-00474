import { fetchIncomeOperation } from '../api'
import { sessions } from '../sessions'

export const getIncomeOperation = async (userSession, userId) => {
	const isExists = await sessions.access(userSession)

	if (!isExists) {
		sessions.remove(userSession)
	}

	const incomeOperation = await fetchIncomeOperation(userId)

	if (!incomeOperation) {
		return {
			error: 'Не удалось загрузить',
			res: null,
		}
	}

	return {
		error: null,
		res: incomeOperation,
	}
}

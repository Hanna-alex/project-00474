import { fetchAccountIcons } from '../api'

export const getAccountIcons = async (userSession) => {
	const accountIcons = await fetchAccountIcons()

	if (!accountIcons) {
		return {
			error: 'Не удалось загрузить иконки',
			res: null,
		}
	}

	return {
		error: null,
		res: accountIcons,
	}
}

import { fetchIcons } from '../api'
import { sessions } from '../sessions'

export const getIcons = async (userSession) => {
	const isExists = await sessions.access(userSession)

	if (!isExists) {
		sessions.remove(userSession)
	}

	const icons = await fetchIcons()

	if (!icons) {
		return {
			error: 'Не удалось загрузить иконки',
			res: null,
		}
	}

	return {
		error: null,
		res: icons,
	}
}

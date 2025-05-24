import { fetchIcons } from '../api'

export const getIcons = async (userSession) => {
	const icons = await fetchIcons()

	if (!icons) {
		return {}
	}

	const iconsFinance = icons['Финансы']

	return {
		error: null,
		res: iconsFinance,
	}
}

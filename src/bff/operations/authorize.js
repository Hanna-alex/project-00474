import { fetchUser } from '../api'
import { sessions } from '../sessions'

export const authorize = async (authLogin, authPassword) => {
	const user = await fetchUser(authLogin)

	if (!user) {
		return {
			error: 'Такой пользователь не найден',
			res: null,
		}
	}

	if (authPassword !== user.password) {
		return {
			error: 'Неверный пароль',
			res: null,
		}
	}

	return {
		error: null,
		res: {
			id: user.id,
			login: user.login,
			avatar: user.avatar,
			email: user.email,
			session: sessions.create(user),
		},
	}
}

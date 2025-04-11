import { getUser, addUser } from '../api'
import { sessions } from '../sessions'

export const register = async (regLogin, regPassword) => {
	const existtedUser = await getUser(regLogin)

	if (existtedUser) {
		return {
			error: 'Такой логин уже занят',
			res: null,
		}
	}

	const user = await addUser(regLogin, regPassword)

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

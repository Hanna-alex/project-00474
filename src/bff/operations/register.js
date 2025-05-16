import { fetchUser, addUser } from '../api'
import { sessions } from '../sessions'
import { addDefaultCategories } from '../api'

export const register = async (regLogin, regPassword) => {
	const existtedUser = await fetchUser(regLogin)

	if (existtedUser) {
		return {
			error: 'Такой логин уже занят',
			res: null,
		}
	}

	const user = await addUser(regLogin, regPassword)

	addDefaultCategories(user.id)

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

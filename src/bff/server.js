import { addUser } from './add-user'
import { getUser } from './get-user'
import { sessions } from './sessions'

export const server = {
	async authorize(authLogin, authPassword) {
		const user = await getUser(authLogin)

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
				session: sessions.create(user),
			},
		}
	},

	async register(regLogin, regPassword) {
		const existtedUser = await getUser(regLogin)

		if (existtedUser) {
			return {
				error: 'Такой логин уже занят',
				res: null,
			}
		}

		const user = await addUser(regLogin, regPassword)

		console.log(user)

		return {
			error: null,
			res: {
				id: user.id,
				login: user.login,
				avatar: user.avatar,
				session: sessions.create(user),
			},
		}
	},

	async logout(sission) {
		sessions.remove(sission)
	},
}

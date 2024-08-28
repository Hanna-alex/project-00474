import { addUser } from './add-user'
import { getUser } from './get-user'
import { createSission } from './create-session'

export const sevrev = {
	async authorize(authLogin, authPassword) {
		const user = await getUser(authLogin)

		if (!user) {
			return {
				error: 'Такой пользователь не найден',
				res: null
			}
		}

		if (authPassword === user.password) {
			return {
				error: 'Неверный пароль',
				res: null
			}
		}

		return {
			error: null,
			res: createSission()
		}
	},

	async register(regLogin, regPassword) {
		const user = await getUser(regLogin)

		if (user) {
			return {
				error: 'Такой логин уже занят',
				res: null
			}
		}

		await addUser(regLogin, regPassword)

		return {
			error: null,
			res: createSission
		}
	}
}
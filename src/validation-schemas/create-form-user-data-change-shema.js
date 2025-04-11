import * as yup from 'yup'
import { imageUrlRegex, emailRegex, loginRegex } from '../utils'

export const createFormUserDataChangeShema = (currentUserLogin, requestServer) => {
	return yup.object().shape({
		login: yup
			.string()
			.trim()
			.matches(
				loginRegex,
				'Неверно заполнен логин. Допускаются только буквы, цифры, тире и нежнее подчеркивание',
			)
			.min(3, 'Неверно заполнен логин. Минимум 3 символа')
			.max(16, 'Не верно заполнен логин. Максимум 16 символов')
			.test('login-exists', 'Этот логин уже занят', async (value) => {
				if (!value || value === currentUserLogin) return true
				const exists = await requestServer('checkUserLoginExists', value)
				return !exists
			}),
		email: yup
			.string()
			.trim()
			.test('is-valid-email', 'Не верный формат почты', (value) => {
				if (!value) return true
				return emailRegex.test(value)
			}),
		avatar: yup
			.string()
			.trim()
			.test(
				'is-valid-avatart',
				'Ссылка на аватар должно заканчиватся на .jpeg, .jpg, .png, .webp или .svg',
				(value) => {
					if (!value) return true
					return imageUrlRegex.test(value)
				},
			),
	})
}

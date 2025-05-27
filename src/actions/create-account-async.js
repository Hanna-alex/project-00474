import { setAccount } from './set-account'

export const createAccountAsync =
	(requestSever, data, userId, setServerError) => async (dispatch) => {
		requestSever('createAccount', data, userId).then(({ error, res }) => {
			if (error) setServerError('Ошибка сервера - ', error)

			dispatch(setAccount(res))
		})
	}

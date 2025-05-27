import { updateAccount } from './update-account'

export const updateAccountAsync =
	(requestSever, accountId, updateData, setServerError) => async (dispatch) => {
		requestSever('updateAccount', accountId, updateData).then(({ error, res }) => {
			if (error) setServerError(error)

			dispatch(updateAccount(res))
		})
	}

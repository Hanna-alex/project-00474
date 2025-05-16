import { setAccounts } from './set-accounts'

export const loadAccountsAsync = (requestSever, useId) => async (dispatch) => {
	requestSever('getUserAccounts', useId).then(({ error, res }) => {
		if (!error) dispatch(setAccounts(res))
	})
}

import { ACTION_TYPE } from '../actions'

const initialAccountsState = []

export const accountsReducer = (state = initialAccountsState, action) => {
	switch (action.type) {
		case ACTION_TYPE.SET_ACCOUNTS:
			const newAccounts = action.payload.filter(
				(newAccount) =>
					!state.some((existingAccount) => existingAccount.id === newAccount.id),
			)

			return [...state, ...newAccounts]

		case ACTION_TYPE.RESET_ACCOUNTS:
			return initialAccountsState

		default:
			return state
	}
}

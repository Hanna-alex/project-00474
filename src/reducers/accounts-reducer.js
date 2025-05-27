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

		case ACTION_TYPE.SET_ACCOUNT:
			return [...state, action.payload]

		case ACTION_TYPE.UPDATE_ACCOUNT:
			return state.map((account) =>
				account.id === action.payload.id ? { ...account, ...action.payload } : account,
			)

		case ACTION_TYPE.DELETE_ACCOUNT:
			return state.filter((obj) => obj.id !== action.payload.id)

		case ACTION_TYPE.RESET_ACCOUNTS:
			return initialAccountsState

		default:
			return state
	}
}

import { ACTION_TYPE } from '../actions'

const initialCategoriesState = {
	income: [],
	expense: [],
}

export const categoriesReducer = (state = initialCategoriesState, action) => {
	//action.payload это объект с двумя массивами
	switch (action.type) {
		case ACTION_TYPE.SET_CATEGORIES:
			const newState = { ...state }

			if (Array.isArray(action.payload.income)) {
				action.payload.income.forEach((category) => {
					if (!newState.income.some((cat) => cat.id === category.id)) {
						newState.income = [...newState.income, category]
					}
				})
			}
			if (Array.isArray(action.payload.expense)) {
				action.payload.expense.forEach((category) => {
					if (!newState.expense.some((cat) => cat.id === category.id)) {
						newState.expense = [...newState.expense, category]
					}
				})
			}

			return newState

		case ACTION_TYPE.RESET_CATEGORIES:
			return initialCategoriesState

		default:
			return state
	}
}

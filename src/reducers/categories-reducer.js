import { ACTION_TYPE } from '../actions'

const initialCategoriesState = {
	income: [],
	expense: [],
}

export const categoriesReducer = (state = initialCategoriesState, action) => {
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

		case ACTION_TYPE.SET_CATEGORY:
			return {
				income:
					action.payload.type === 'income'
						? [...state.income, action.payload]
						: [...state.income],
				expense:
					action.payload.type === 'expense'
						? [...state.expense, action.payload]
						: [...state.expense],
			}

		case ACTION_TYPE.UPDATE_CATEGORY:
			return {
				income: state.income.map((obj) =>
					obj.id === action.payload.id ? { ...obj, ...action.payload } : obj,
				),
				expense: state.expense.map((obj) =>
					obj.id === action.payload.id ? { ...obj, ...action.payload } : obj,
				),
			}

		case ACTION_TYPE.DELETE_CATEGORY:
			return {
				income:
					action.payload.type === 'income'
						? [...state.income.filter((obj) => obj.id !== action.payload.id)]
						: [...state.income],
				expense:
					action.payload.type === 'expense'
						? [...state.expense.filter((obj) => obj.id !== action.payload.id)]
						: [...state.expense],
			}

		case ACTION_TYPE.RESET_CATEGORIES:
			return initialCategoriesState

		default:
			return state
	}
}

import { setCategories } from './set-categories'

export const loadCategoriesAsync = (requestSever, useId) => async (dispatch) => {
	requestSever('getUserCategories', useId).then(({ error, res }) => {
		if (!error) {
			const grouped = res.reduce(
				(acc, cat) => {
					if (cat.type === 'income') acc.income.push(cat)
					else if (cat.type === 'expense') acc.expense.push(cat)
					return acc
				},
				{ income: [], expense: [] },
			)

			dispatch(setCategories(grouped))
		}
	})
}

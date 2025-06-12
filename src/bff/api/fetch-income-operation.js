import { transformOperation } from '../transformers'

export const fetchIncomeOperation = (userId) =>
	fetch(`http://localhost:3007/income_transactions?user_id=${userId}`)
		.then((loadedIncomeOperation) => loadedIncomeOperation.json())
		.then(
			([loadedIncomeOperation]) =>
				loadedIncomeOperation && transformOperation(loadedIncomeOperation),
		)

export const createSission = () => {
	// удалить
	const session = {
		logout() {
			Object.keys(session).forEach((key) => {
				delete session[key]
			})
		},
		addAccount() {
			console.log('Добавить счет')
		},
		updateAccount() {
			console.log('Измененить счет')
		},
		deleteAccount() {
			console.log('Удалить счет')
		},
		addTransaction() {
			console.log('Добавить транзакцию')
		},
		updateTransaction() {
			console.log('Изменить транзакцию')
		},
		deleteTransaction() {
			console.log('Удалить транзакцию')
		},
		addCategory() {
			console.log('Добавить категорию')
		},
		updateCategory() {
			console.log('Изменить категорию')
		},
		deleteCategory() {
			console.log('удалить категорию')
		},
	}

	return session
}

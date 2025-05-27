export const deleteCategory = (categoryId) =>
	fetch(`http://localhost:3007/accounts/${categoryId}`, {
		method: 'DELETE',
	})

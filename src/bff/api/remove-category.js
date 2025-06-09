export const removeCategory = (categoryId) =>
	fetch(`http://localhost:3007/categories/${categoryId}`, {
		method: 'DELETE',
	})

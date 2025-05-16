export const fetchUserCategories = async (userId) =>
	fetch(`http://localhost:3007/categories?user_id=${userId}`)
		.then((loadedCategories) => loadedCategories.json())
		.then((loadedCategories) => loadedCategories)

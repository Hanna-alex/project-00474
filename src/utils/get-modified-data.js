export const getModifiedData = (newData, currentData) =>
	Object.entries(newData).reduce((acc, [key, value]) => {
		if (value !== currentData[key]) {
			acc[key] = value
		}
		return acc
	}, {})

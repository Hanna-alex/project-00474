export const truncateWord = (str, num) =>
	str.length > num ? str.slice(0, num - 3) + '...' : str

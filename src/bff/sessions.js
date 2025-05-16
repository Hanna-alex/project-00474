export const sessions = {
	list: {},
	create(user) {
		const hash = Math.random().toFixed(50)

		this.list[hash] = user

		return hash
	},

	remove(hash) {
		delete this.list[hash]
	},

	access(hash) {
		return this.list.hasOwnProperty(hash) // не работает без сервера или хранение list в json файле
	},
}

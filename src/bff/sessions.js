import { fetchSession, removeSession, addSession } from './api'

export const sessions = {
	create(user) {
		const hash = Math.random().toFixed(50)

		addSession(hash, user)

		return hash
	},

	async remove(hash) {
		const session = await fetchSession(hash)

		if (!session) return

		removeSession(session.id)
	},

	async access(hash) {
		const session = await fetchSession(hash)

		return !!session
	},
}

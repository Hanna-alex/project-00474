import { getDate } from '../utils'

export const addSession = (hash, user) => {
	fetch('http://localhost:3007/sessions', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify({
			hash,
			user_id: user.id,
			went_at: getDate(),
		}),
	})
		.then((addedUserSessions) => addedUserSessions.json())
		.then((addedUserSessions) => addedUserSessions)
}

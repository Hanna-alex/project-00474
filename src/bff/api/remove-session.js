export const removeSession = (sessionId) =>
	fetch(`http://localhost:3007/sessions/${sessionId}`, {
		method: 'DELETE',
	})

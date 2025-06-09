export const transformSessions = (dbSession) => ({
	id: dbSession.id,
	hash: dbSession.hash,
	userId: dbSession.user_id,
	wentAt: dbSession.went_at,
})

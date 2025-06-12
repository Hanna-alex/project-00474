export const transformOperation = (dbOperation) => ({
	id: dbOperation.id,
	userId: dbOperation.user_id,
	accountId: dbOperation.account_id,
	categoryId: dbOperation.category_id,
	amount: dbOperation.amount,
	createdAt: dbOperation.created_at,
	description: dbOperation.description,
	updateAt: dbOperation.update_at,
})

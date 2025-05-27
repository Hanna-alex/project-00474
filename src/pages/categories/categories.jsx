import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { H3, List } from '../../components'
import { useServerRequest } from '../../hooks'
import { selectUserId } from '../../selectors'
import { loadCategoriesAsync } from '../../actions'
import { selectIncomeCategories, selectExpenseCategories } from '../../selectors'
import { ACTION_TYPE } from '../../actions'
import styled from 'styled-components'

const CategoriesContainer = ({ className }) => {
	const dispatch = useDispatch()
	const requestSever = useServerRequest()
	const userId = useSelector(selectUserId)
	const incomeCategories = useSelector(selectIncomeCategories)
	const expenseCategories = useSelector(selectExpenseCategories)

	useEffect(() => {
		if (userId) {
			dispatch({ type: ACTION_TYPE.RESET_CATEGORIES })
			dispatch(loadCategoriesAsync(requestSever, userId))
		}
	}, [dispatch, requestSever, userId])

	const navigate = useNavigate()

	const openForm = (selectAccount = null) => {
		if (!selectAccount) navigate('add')
		else navigate('change', { state: { account: selectAccount } })
	}

	return (
		<div className={className}>
			<div className='wrapper'>
				<H3>Доходы</H3>
				<List list={incomeCategories} openForm={openForm} />
			</div>
			<div className='wrapper'>
				<H3>Расходы</H3>
				<List list={expenseCategories} openForm={openForm} />
			</div>
		</div>
	)
}

export const Categories = styled(CategoriesContainer)`
	display: flex;
	justify-content: space-between;
	flex: 1;
	width: 100%;
	padding: 40px 0;

	& .wrapper {
		width: 480px;
		height: auto;
		background: var(--green);
		border-radius: 8px;
		padding: 30px;
	}
`

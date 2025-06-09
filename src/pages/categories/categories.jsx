import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'
import { H3, List } from '../../components'
import { useServerRequest } from '../../hooks'
import { selectUserId } from '../../selectors'
import { ACTION_TYPE, loadCategoriesAsync } from '../../actions'
import { selectIncomeCategories, selectExpenseCategories } from '../../selectors'
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

	const openForm = (selectCategory = null, typeAdd = '') => {
		if (!selectCategory) navigate('addCategory', { state: { type: typeAdd } })
		else navigate('changeCategory', { state: { category: selectCategory } })
	}

	return (
		<div className={className}>
			<Outlet />
			<div className='wrapper'>
				<H3>Доходы</H3>
				<List list={incomeCategories} openForm={openForm} typeAdd='income' />
			</div>
			<div className='wrapper'>
				<H3>Расходы</H3>
				<List list={expenseCategories} openForm={openForm} typeAdd='expense' />
			</div>
		</div>
	)
}

export const Categories = styled(CategoriesContainer)`
	position: relative;
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

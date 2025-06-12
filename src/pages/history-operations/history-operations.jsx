import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import Select from 'react-select'
import { useServerRequest } from '../../hooks'
import { selectUserId } from '../../selectors'
import { H2 } from '../../components'
import { ControlPanel } from './components/control-panel'
import styled from 'styled-components'

const HistoryOperationsContainer = ({ className }) => {
	const dispatch = useDispatch()
	const requestSever = useServerRequest()
	const userId = useSelector(selectUserId)

	useEffect(() => {
		if (userId) {
			// dispatch({ type: ACTION_TYPE.RESET_CATEGORIES })
			// dispatch(loadCategoriesAsync(requestSever, userId))
		}
	}, [userId])

	const filtersOptions = [
		{ value: 'default', label: 'по умолчанию' },
		{ value: 'dates', label: 'по дате' },
		{ value: 'accounts', label: 'по счетам' },
		{ value: 'categories', label: 'по категориям' },
	]

	return (
		<div className={className}>
			<div className='headline'>
				<H2>История операций</H2>
				<ControlPanel />
			</div>
			<div> Список историй</div>
		</div>
	)
}

export const HistoryOperations = styled(HistoryOperationsContainer)`
	// position: relative;
	display: flex;
	flex-direction: column;
	// justify-content: space-between;
	flex: 1;
	width: 100%;
	padding: 40px 0;
`

import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { H2, Icon } from '../../components'
import { useServerRequest } from '../../hooks'
import { selectUserId } from '../../selectors'
import { loadAccountsAsync } from '../../actions'
import { selectUserAccounts } from '../../selectors'
import { ACTION_TYPE } from '../../actions'
import styled from 'styled-components'

const AccountsContainer = ({ className }) => {
	const dispatch = useDispatch()
	const requestSever = useServerRequest()
	const userId = useSelector(selectUserId)
	const accounts = useSelector(selectUserAccounts)

	useEffect(() => {
		if (userId) {
			dispatch({ type: ACTION_TYPE.RESET_ACCOUNTS })
			dispatch(loadAccountsAsync(requestSever, userId))
		}
	}, [dispatch, requestSever, userId])

	return (
		<div className={className}>
			<H2>Счета</H2>

			<ul className='list'>
				{accounts.map((account) => (
					<li className='item' key={account.id}>
						<Icon iconName={account.icon} size='20px' />

						<span>{account.name}</span>
						<span>
							<b>{account.balance} </b>
							{account.currency}
						</span>
					</li>
				))}
			</ul>
		</div>
	)
}

export const Accounts = styled(AccountsContainer)`
	display: flex;
	flex-direction: column;
	align-items: center;
	flex: 1;
	width: 100%;

	& .list {
		display: flex;
		flex-wrap: wrap;
		width: 100%;
	}

	& .item {
		padding: 4px 8px;
	}
	& span {
		margin-left: 8px;
	}
`

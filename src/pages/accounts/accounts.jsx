import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'
import { Button, H2, Icon } from '../../components'
import { useServerRequest } from '../../hooks'
import { selectUserId, selectUserAccounts } from '../../selectors'
import { ACTION_TYPE, loadAccountsAsync } from '../../actions'
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

	const navigate = useNavigate()

	const openForm = (selectAccount = null) => {
		if (!selectAccount) navigate('add')
		else navigate('change', { state: { account: selectAccount } })
	}

	return (
		<div className={className}>
			<Outlet />
			<H2>Счета</H2>
			<ul className='list'>
				{accounts.map((account) => (
					<li className='item' key={account.id} onClick={() => openForm(account)}>
						<div className='icon'>
							<Icon iconName={account.icon} size='20px' />
						</div>
						<span>{account.name}</span>
						<span className='num'>
							<b>{account.amount} </b>
							{account.currency}
						</span>
					</li>
				))}
				<li className='item' onClick={() => openForm()}>
					<Button
						width='50px'
						height='50px'
						background='var(--beige)'
						borderRadius='50%'
						padding='0'
						marginRight='12px'
					>
						<Icon iconName='plus' size='26px' />
					</Button>
					<span className='icon-name'>Добавить</span>
				</li>
			</ul>
		</div>
	)
}

export const Accounts = styled(AccountsContainer)`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	flex: 1;
	width: 100%;

	& .list {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 20px;
		width: 100%;
	}

	& .item {
		display: flex;
		align-items: center;
		width: 320px;
		border-radius: 8px;
		background: var(--green);
		padding: 10px 20px;
		cursor: pointer;
		transition: all 0.3s ease-in-out;
	}

	& .item:hover {
		box-shadow: 1px 4px 4px var(--shadow);
	}

	& .icon {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 50px;
		height: 50px;
		border-radius: 50%;
		background: var(--beige);
		margin-right: 12px;
	}
	& .num {
		margin-left: auto;
	}
	& .icon-name {
		margin-left: 16px;
	}
`

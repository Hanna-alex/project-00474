import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components'
import { logout } from '../../actions'
import {
	selectUserAvatar,
	selectUserEmail,
	selectUserLogin,
	selectUserSession,
} from '../../selectors'
import { Icon } from '../../components'
import { FormUserDataChange } from './components/'
import styled from 'styled-components'

const UserContainer = ({ className }) => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const session = useSelector(selectUserSession)
	const avatar = useSelector(selectUserAvatar)
	const login = useSelector(selectUserLogin)
	const email = useSelector(selectUserEmail)

	const [isOpenFormChange, setIsOpenFormChange] = useState(false)

	const openFormChange = () => setIsOpenFormChange(true)

	const handleClick = () => {
		dispatch(logout(session))
		navigate('/')
	}

	return (
		<div className={className}>
			<div className='userData'>
				<div className='avatar'>
					{!!avatar ? (
						<img src={avatar} alt='аватар' />
					) : (
						<Icon iconName='user' size='96px' />
					)}
				</div>
				<div className='userInfo'>
					Логин: <b>{login}</b>
				</div>
				<div className='userInfo'>
					Почта: <b>{email}</b>
				</div>
			</div>
			<div className='btnGroup'>
				<Button onClick={openFormChange} fontSize='16px'>
					Изменить данные
				</Button>
				<Button onClick={handleClick} width={'120px'} fontSize='16px'>
					Выйти
					{/* <Icon iconName='sign-out' size='22px' /> */}
				</Button>
			</div>
			{isOpenFormChange && (
				<FormUserDataChange setIsOpenFormChange={setIsOpenFormChange} />
			)}
		</div>
	)
}

export const User = styled(UserContainer)`
	position: relative;
	display: flex;
	justify-content: space-between;
	width: 560px;
	height: 480px;
	background: var(--green);
	border-radius: 8px;
	padding: 40px;

	& .avatar {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 120px;
		height: 120px;
		border-radius: 50%;
		overflow: hidden;
		background: var(--beige);
		margin-bottom: 20px;
	}

	& .btnGroup {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-end;
	}

	& .userInfo {
		margin-bottom: 8px;
	}
`

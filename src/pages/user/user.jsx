import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components'
import { logout } from '../../actions'
import { selectUserSession } from '../../selectors'
import styled from 'styled-components'

const UserContainer = () => {
	const dispatch = useDispatch()
	const session = useSelector(selectUserSession)
	const navigate = useNavigate()

	const handleClick = () => {
		dispatch(logout(session))
		navigate('/')
	}

	return (
		<Button onClick={handleClick}>
			Выйти
			{/* <Icon iconName='sign-out' size='22px' /> */}
		</Button>
	)
}

export const User = styled(UserContainer)``

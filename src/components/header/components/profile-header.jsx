import { useSelector } from 'react-redux'
import { selectUserLogin, selectUserAvatar } from '../../../selectors'
import { Icon } from '../../icon/icon'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const ProfileHeaderContainer = ({ className }) => {
	const login = useSelector(selectUserLogin)
	const avatar = useSelector(selectUserAvatar)

	return (
		<div className={className}>
			<Link to='/user' className='name'>
				{login}
			</Link>
			<Link to='/user' className='avatar'>
				{!!avatar ? <img src={avatar} alt='аватар' /> : <Icon iconName='user' />}
			</Link>
		</div>
	)
}

export const ProfileHeader = styled(ProfileHeaderContainer)`
	display: flex;
	align-items: center;
	& .name {
		font-size: 18px;
		font-weight: 500;
		margin-right: 8px;
	}
	& .avatar {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 60px;
		height: 60px;
		border-radius: 50%;
		overflow: hidden;
		background: var(--beige);
	}
`

const Link = styled(NavLink)`
	list-style-type: none;
	text-decoration: none;
	color: var(--brown);
	font-size: 18px;
	font-weight: 500;
`

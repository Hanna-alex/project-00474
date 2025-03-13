import { useSelector } from 'react-redux'
import { selectUserLogin, selectUserAvatar } from '../../../selectors'
import { Icon } from '../../icon/icon'

import styled from 'styled-components'

const ProfileHeaderContainer = ({ className }) => {
	const login = useSelector(selectUserLogin)
	const avatar = useSelector(selectUserAvatar)

	return (
		<div className={className}>
			<span>{login}</span>
			<div>{!!avatar ? <img src={avatar} alt='аватар' /> : <Icon iconName='user' />}</div>
		</div>
	)
}

export const ProfileHeader = styled(ProfileHeaderContainer)`
	display: flex;
	align-items: center;
	& > span {
		font-size: 18px;
		font-weight: 500;
		margin-right: 8px;
	}
	> div {
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

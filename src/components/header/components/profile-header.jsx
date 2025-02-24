import styled from 'styled-components'

const ProfileHeaderContainer = ({ className }) => (
	<div className={className}>
		<UserName>Имя пользователя</UserName>
		<Icon />
	</div>
)

export const ProfileHeader = styled(ProfileHeaderContainer)`
	display: flex;
	align-items: center;
`
const Icon = styled.div`
	width: 70px;
	height: 70px;
	border-radius: 50%;
	overflow: hidden;
	background: #c7c7c7;
`

const UserName = styled.span`
	padding-right: 8px;
`

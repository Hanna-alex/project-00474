import { Menu, ProfileHeader } from './components'
import styled from 'styled-components'

const HeaderContainer = ({ className }) => (
	<header className={className}>
		<Menu />
		<ProfileHeader />
	</header>
)

export const Header = styled(HeaderContainer)`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	display: flex;
	justify-content: space-between;
	height: 120px;
	padding: 10px 70px;
	background: var(--green);
	align-items: center;
`

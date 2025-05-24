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
	z-index: 50;
	display: flex;
	justify-content: space-between;
	width: 1200px;
	height: 120px;
	background: var(--green);
	align-items: center;
	padding: 10px 70px;
	margin: 0 auto;
`

import { NavLink } from 'react-router-dom'
import { APP_NAVIGATE } from '../../../constants'
import styled from 'styled-components'

const MenuContainer = ({ className }) => (
	<header className={className}>
		<ul className={className}>
			{APP_NAVIGATE.map((elemNav) => (
				<Li key={elemNav.id}>
					<Link to={elemNav.path}>{elemNav.page}</Link>
				</Li>
			))}
		</ul>
	</header>
)

export const Menu = styled(MenuContainer)`
	display: flex;
	justify-content: space-between;
	// width: 320px;
`

const Li = styled.li`
	list-style: none;
	padding-right: 8px;
`

const Link = styled(NavLink)`
	list-style-type: none;
	text-decoration: none;
	color: var(--brown);
	font-size: 18px;
	font-weight: 500;
	transition: all 0.3s ease-in-out;

	&.active {
		color: var(--blue);
		font-weight: 600;
	}

	&:hover {
		color: var(--pink);
	}
`

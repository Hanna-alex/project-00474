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
	color: #4b3d3d;
	font-weight: 500;

	&:hover {
		color: #66b2a8;
	}
	&.active {
		color: #d42a5b;
		font-weight: 600;
	}
`

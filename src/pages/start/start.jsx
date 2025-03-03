import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const StartPageContainer = ({ className }) => (
	<div className={className}>
		<h1>Finance Tracker</h1>
		<h3>
			Планирование и контроль <br /> доступны всем
		</h3>
		<Link to='/login'>Вход</Link>
		<Link to='/register'>Регистрация</Link>
	</div>
)

export const StartPage = styled(StartPageContainer)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	flex: 1;

	& > h1 {
		font-size: 48px;
		color: var(--pink);
		margin-bottom: 3px;
		cursor: default;
	}
	& > h3 {
		font-size: 18px;
		font-weight: 400;
		text-align: center;
		margin-bottom: 32px;
		cursor: default;
	}

	& > a {
		display: flex;
		justify-content: center;
		text-align: center;
		width: 320px;
		height: 52px;
		font-size: 24px;
		font-weight: 500;
		text-decoration: none;
		color: var(--brown);
		background: var(--beige);
		border-radius: 8px;
		padding: 13px;
		margin-bottom: 20px;

		&:hover {
			transition: all 0.3s ease;
			color: var(--beige);
			background: var(--blue);
		}
	}
`

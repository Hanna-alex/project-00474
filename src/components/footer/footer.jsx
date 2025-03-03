import styled from 'styled-components'
import { ExchangeRate } from './components'

const carrentYear = new Date().getFullYear()

const FooterContainer = ({ className }) => {
	return (
		<footer className={className}>
			<TextBlock>
				<span>Планирование и контроль доступны всем</span>
				<span>Hanna-Alex {carrentYear} ©</span>
			</TextBlock>
			<ExchangeRate />
		</footer>
	)
}

export const Footer = styled(FooterContainer)`
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 80px;
	padding: 10px 70px;
	background: var(--green);
`
const TextBlock = styled.div`
	display: flex;
	flex-direction: column;
`

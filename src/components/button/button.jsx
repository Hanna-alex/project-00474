import styled from 'styled-components'

const ButtonContainer = ({ className, children, ...props }) => (
	<button className={className} {...props}>
		{children}
	</button>
)

export const Button = styled(ButtonContainer)`
	width: ${({ width }) => width || `100%`};
	outline: none;
	border: none;
	border-radius: 8px;
	background: var(--blue);
	color: var(--brown);
	font-size: ${({ fontSize }) => fontSize || '18px'};
	font-weight: 600;
	letter-spacing: 1px;
	cursor: pointer;
	transition: all ease 0.3s;
	padding: ${(props) => props.padding || '15px 30px'};

	&:hover {
		box-shadow: 1px 4px 4px var(--shadow);
	}
	&:active {
		color: var(--beige);
	}
	&:disabled {
		box-shadow: none;
		cursor: not-allowed;
	}
`

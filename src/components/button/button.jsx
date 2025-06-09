import styled from 'styled-components'

const ButtonContainer = ({
	className,
	children,
	hoverStyles,
	width,
	height,
	background,
	fontSize,
	fontWeight,
	borderRadius,
	padding,
	marginRight,
	marginBottom,
	...props
}) => (
	<button className={className} {...props}>
		{children}
	</button>
)

export const Button = styled(ButtonContainer)`
	display: flex;
	justify-content: center;
	align-items: center;
	width: ${({ width }) => width || `100%`};
	height: ${({ height }) => height || 'auto'};
	background: ${({ background }) => background || 'var(--blue)'};
	color: ${({ color }) => color || 'var(--brown)'};
	font-size: ${({ fontSize }) => fontSize || '18px'};
	font-weight: ${({ fontWeight }) => fontWeight || '600'};
	letter-spacing: 1px;
	border-radius: ${({ borderRadius }) => borderRadius || '8px'};
	outline: none;
	border: none;
	cursor: pointer;
	transition: all 0.3s ease;
	box-sizing: border-box;
	padding: ${({ padding }) => padding || '15px 30px'};
	margin: ${({ margin }) => margin || '0'};

	&:hover {
		${({ hoverStyles }) =>
			hoverStyles &&
			Object.entries(hoverStyles).map(
				([prop, value]) => `
      ${prop}: ${value};
    `,
			)}
	}
	&:active {
		color: var(--beige);
	}
	&:disabled {
		box-shadow: none;
		cursor: not-allowed;
	}
	& .exid:hover {
		text-shadow: 1px 4px 4px var(--shadow);
	}
`

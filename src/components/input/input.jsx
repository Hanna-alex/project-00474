import styled from 'styled-components'
import { forwardRef } from 'react'

const InputContainer = forwardRef(({ className, marginBottom, ...props }, ref) => (
	<input className={className} {...props} ref={ref} />
))

export const Input = styled(InputContainer)`
	height: 45px;
	border-radius: 8px;
	outline: none;
	border: none;
	font-size: 16px;
	background: var(--beige);
	transition: all ease 0.3s;
	padding: 13px 20px;
	margin-bottom: ${({ marginBottom }) => marginBottom || '24px'};

	-webkit-appearance: none; /* Chrome, Safari, Edge */
	-moz-appearance: none; /* Firefox */
	appearance: none;

	&:hover {
		box-shadow: 0px 4px 4px var(--shadow);
	}

	&:focus {
		box-shadow: 1px 2px 4px var(--blue) inset;
	}
	&::-webkit-inner-spin-button,
	&::-webkit-calendar-picker-indicator {
		display: none;
		-webkit-appearance: none; /* Chrome/Safari */
	}
`

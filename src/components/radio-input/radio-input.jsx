import { forwardRef } from 'react'
import { Icon } from '../icon/icon'
import styled from 'styled-components'

const RadioInputContainer = forwardRef(
	({ className, iconName, htmlFor, labelName, styleType, ...props }, ref) => (
		<div className={className}>
			<input type='radio' {...props} ref={ref} />
			<label className='radio-label' htmlFor={htmlFor}>
				{styleType === 'icon' ? <Icon iconName={iconName} size='28px' /> : labelName}
			</label>
		</div>
	),
)

export const RadioInput = styled(RadioInputContainer)`
	${(props) => {
		if (props.styleType === 'icon') {
			return `
		margin: 5px;

		& input[type='radio'] {
			display: none;

			&:checked + .radio-label {
				background-color: var(--blue);
			}
		}

		& .radio-label {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 50px;
			height: 50px;
			cursor: pointer;
			border-radius: 50%;
			background: var(--beige);
			transition: all 0.3s ease-in-out;
			box-shadow: 0 0 0 transparent;

			&:hover {
				box-shadow: 1px 4px 4px var(--shadow);
			}
		}
	`
		} else if (props.styleType === 'circle') {
			return `
		display: flex;
		justify-content: center;
		align-items: center;
		margin-right: 16px;

	 & .radio-label {
			cursor: pointer;
		}

		& input[type='radio'] {
			position: relative;
			width: 20px;
			height: 20px;
			border: 2px solid var(--blue);
			border-radius: 50%;
			cursor: pointer;
			padding: 0;
			margin-right: 8px;

			&::after {
				content: '';
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				display: block;
				border-radius: 50%;
				background: var(--blue);
				width: 0px;
				height: 0px;
				overflow: hidden;
			}

			&:checked::after {
				width: 12px;
				height: 12px;
			}

		}
	  `
		}
	}}
`

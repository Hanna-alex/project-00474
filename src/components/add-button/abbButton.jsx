import styled from 'styled-components'
import { Icon } from '../icon/icon'

const AddButtonContainer = ({ className }) => (
	<button className={className}>
		<Icon iconName='plus' size='34px' />
	</button>
)

export const AddButton = styled(AddButtonContainer)`
	width: 70px;
	height: 70px;
	background: var(--beige);
	outline: none;
	border: none;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
	margin-bottom: 4px;
	cursor: pointer;
`

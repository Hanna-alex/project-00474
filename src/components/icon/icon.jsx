import styled from 'styled-components'

const IconContainer = ({ iconName, className, size }) => (
	<i className={`fa fa-${iconName} ${className}`} />
)

export const Icon = styled(IconContainer)`
	font-size: ${(props) => props.size || '44px'};
	color: var(--brown);
`

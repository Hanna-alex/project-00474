import styled from 'styled-components'

const IconContainer = ({ iconName, className, props }) => (
	<i className={`fa fa-${iconName} ${className}`} />
)

export const Icon = styled(IconContainer)`
	font-size: ${({ size }) => size || '44px'};
	color: var(--brown);
`

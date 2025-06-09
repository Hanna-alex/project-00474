import styled from 'styled-components'

const IconContainer = ({ className, iconName, size, color, ...props }) => (
	<i className={`fa fa-${iconName} ${className}`} {...props} />
)

export const Icon = styled(IconContainer)`
	font-size: ${({ size }) => size || '44px'};
	color: ${({ color }) => color || 'var(--brown)'};
`

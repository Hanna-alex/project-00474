import styled from 'styled-components'

const H3Container = ({ className, children, ...props }) => (
	<h3 className={className}>{children}</h3>
)

export const H3 = styled(H3Container)`
	font-size: 22px;
	margin-bottom: 16px;
	text-align: ${({ textAlign }) => textAlign || 'left'};
`

import styled from 'styled-components'

const H2Container = ({ className, children }) => <h2 className={className}>{children}</h2>

export const H2 = styled(H2Container)`
	text-align: center;
	font-size: 32px;
	margin-bottom: 32px;
`

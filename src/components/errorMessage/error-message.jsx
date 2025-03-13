import styled from 'styled-components'

const ErrorMessageContainer = ({ className, children }) => (
	<div className={className}>{children}</div>
)

export const ErrorMessage = styled(ErrorMessageContainer)`
	width: 100%;
	color: var(--white);
	background: var(--pink);
	border-radius: 8px;
	padding: 13px 20px;
	margin-top: 36px;
`

import styled from 'styled-components'
import { Button, Icon } from '../../../components'

const ControlPanelContainer = ({ className }) => {
	return (
		<div className={className}>
			<div className='filters'>
				<Button width='124px' height='40px' fontSize='16px' padding='16px'>
					Фильтры
				</Button>

				{/* <Select options={filtersOptions} defaultValue={filtersOptions[0]}></Select> */}
			</div>
			<Button
				width='250px'
				height='50px'
				fontSize='16px'
				padding='8px'
				margin=' 0 0 0 8px'
				color='var(--beige)'
				hoverStyles={{ 'box-shadow': ` 1px 4px 4px var(--shadow)` }}
			>
				<Icon iconName='plus' size='26px' color='var(--beige)' />
				<span className='button-text'>Добавить операцию</span>
			</Button>
		</div>
	)
}

export const ControlPanel = styled(ControlPanelContainer)`
	display: flex;
	align-items: center;
	height: 50px;
`

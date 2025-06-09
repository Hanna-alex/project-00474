import { Button } from '../button/button'
import { Icon } from '../icon/icon'
import styled from 'styled-components'

const ListContainer = ({ className, list, openForm, typeAdd }) => {
	return (
		<ul className={className}>
			{list.map((item) => (
				<li className='item' key={item.id} onClick={() => openForm(item)}>
					<div className='icon-wrapper'>
						<Icon iconName={item.icon} size='30px' />
					</div>
					<span className='icon-name'>{item.name}</span>
				</li>
			))}
			<li className='item' onClick={() => openForm('', typeAdd)}>
				<Button
					width='50px'
					height='50px'
					borderRadius='50%'
					background='var(--blue)'
					padding='8px'
					margin='0 0 8px 0'
					size='24x'
					hoverStyles={{ 'box-shadow': ` 1px 4px 4px var(--shadow)` }}
				>
					<Icon iconName='plus' size='26px' color='var(--beige)' />
				</Button>
				<span className='icon-name'>Добавить</span>
			</li>
		</ul>
	)
}

export const List = styled(ListContainer)`
	display: flex;
	align-items: flex-end;
	flex-wrap: wrap;
	width: 100%;

	& .item {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		cursor: pointer;
		padding: 12px;
		transition: all 0.3s ease-in-out;

		&:hover .icon-wrapper {
			box-shadow: 1px 4px 4px var(--shadow);
		}

		&:hover button {
			box-shadow: 1px 4px 4px var(--shadow);
		}
	}

	& .icon-wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 60px;
		height: 60px;
		background: var(--beige);
		border-radius: 50%;
		margin-bottom: 4px;
	}
`

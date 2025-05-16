import { AddButton } from '../add-button/abbButton'
import { Icon } from '../icon/icon'
import styled from 'styled-components'

const ListContainer = ({ className, list }) => (
	<ul className={className}>
		{list.map((item) => (
			<li className='item' key={item.id}>
				<div className='icon-wrapper'>
					<Icon iconName={item.icon} size='34px' />
				</div>
				<span className='icon-name'>{item.name}</span>
			</li>
		))}
		<li className='item'>
			<AddButton />
			<span className='icon-name'>Добавить</span>
		</li>
	</ul>
)

export const List = styled(ListContainer)`
	display: flex;
	flex-wrap: wrap;
	width: 100%;

	& .item {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		cursor: pointer;
		padding: 12px;
		&:hover ${AddButton} {
			background: var(--blue);
		}
		&:hover .icon-wrapper {
			box-shadow: 1px 4px 4px var(--shadow);
		}
	}

	& .icon-wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 70px;
		height: 70px;
		background: var(--beige);
		border-radius: 50%;
		margin-bottom: 4px;
	}
`

import { Button } from '../button/button'
import { Icon } from '../icon/icon'
import styled from 'styled-components'

const ListContainer = ({ className, list, openForm }) => (
	<ul className={className}>
		{list.map((item) => (
			<li className='item' key={item.id} onClick={() => openForm(item)}>
				<div className='icon-wrapper'>
					<Icon iconName={item.icon} size='34px' />
				</div>
				<span className='icon-name'>{item.name}</span>
			</li>
		))}
		<li className='item' onClick={() => openForm()}>
			<Button
				width='70px'
				height='70px'
				borderRadius='50%'
				background='var(--beige)'
				marginBottom='4px'
				size='34px'
				hoverStyles={{ background: `var(--blue)` }}
			>
				<Icon iconName='plus' size='34px' />
			</Button>
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
		transition: all 0.3s ease-in-out;

		&:hover .icon-wrapper {
			box-shadow: 1px 4px 4px var(--shadow);
		}

		&:hover ${Button} {
			background: var(--blue);
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

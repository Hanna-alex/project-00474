import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { getDateFormat } from '../../../utils'

const ExchangeRateContainer = ({ className }) => {
	const [baseСurrency, setBaseCurrency] = useState('')
	const [rates, setRates] = useState({})

	useEffect(() => {
		fetch(
			'https://openexchangerates.org/api/latest.json?app_id=447a6e6a4bfb46e593da950c627ee196&symbols=RUB,EUR,CNY',
			// 'https://www.cbr-xml-daily.ru/latest.js',
		)
			.then((res) => res.json())
			.then((data) => {
				setBaseCurrency(data.base)
				setRates(data.rates)
			})
	}, [])

	return (
		<div className={className}>
			<h4>
				Курс {baseСurrency} на {getDateFormat(new Date())}
			</h4>
			<List>
				{Object.keys(rates).map((key) => (
					<ListItem key={key}>
						{key} - {rates[key].toFixed(2)}
					</ListItem>
				))}
			</List>
		</div>
	)
}

export const ExchangeRate = styled(ExchangeRateContainer)`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	background: #66b2a8;
	border-radius: 8px;
	height: 60px;
	box-shadow: 0 4px 8px #292734 inset;
	padding: 10px 14px;
`
const List = styled.ul`
	display: flex;
	justify-content: space-between;
	list-style: none;
`

const ListItem = styled.li`
	padding: 0 4px;
	&:not(:last-child)::after {
		content: ' |';
	}
`

import { Routes, Route } from 'react-router-dom'
import { Header, Footer } from './components'
import styled from 'styled-components'

const Content = styled.main`
	padding: 128px 70px 60px 70px;
	background: #fde5c9;
	min-height: 100vh;
`

const H2 = styled.h2`
	text-align: center;
`

export const App = () => {
	return (
		<>
			<Header />
			<Content>
				<H2>Контент страницы</H2>
				<Routes>
					<Route path='/' element={<div>Главная страница</div>} />
					<Route path='/accounts' element={<div>Счета</div>} />
					<Route path='/login' element={<div>Авторизация</div>} />
					<Route path='/register' element={<div>Регистрация</div>} />
					<Route path='/history' element={<div>История операций</div>} />
					<Route path='/categories' element={<div>Категории</div>} />
					<Route path='user' element={<div>Пользователь</div>} />
					<Route path='*' element={<div>Ошибка</div>} />
				</Routes>
			</Content>
			<Footer />
		</>
	)
}

// cd ./project-00474
// json-server --watch src/db.json --port 3007

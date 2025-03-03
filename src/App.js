import { Routes, Route } from 'react-router-dom'
import { Header, Footer } from './components'
import { SignInForm, StartPage } from './pages'
import styled from 'styled-components'

const Content = styled.main`
	display: flex;
	// flex-direction: column;
	// justify-content: center;
	// align-items: center;
	min-height: 100vh;
	background: #98fb98;
	padding: 120px 70px 80px 70px;
`

export const App = () => {
	return (
		<>
			<Header />
			<Content>
				<Routes>
					<Route path='/' element={<div>Главная страница</div>} />
					<Route path='/accounts' element={<div>Счета</div>} />
					<Route path='/login' element={<SignInForm />} />
					<Route path='/register' element={<div>Регистрация</div>} />
					<Route path='/history' element={<div>История операций</div>} />
					<Route path='/categories' element={<div>Категории</div>} />
					<Route path='/user' element={<div>Пользователь</div>} />
					<Route path='/start' element={<StartPage />} />

					<Route path='*' element={<div>Ошибка</div>} />
				</Routes>
			</Content>
			<Footer />
		</>
	)
}

// cd ./project-00474
// json-server --watch src/db.json --port 3007

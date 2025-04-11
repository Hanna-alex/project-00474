import { Routes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Header, Footer } from './components'
import { StartPage, SignInForm, SignUpForm, User } from './pages'
import { selectUserSession } from './selectors'
import styled from 'styled-components'

export const App = () => {
	const session = useSelector(selectUserSession)

	return (
		<>
			{session && <Header />}

			<ContentApp session={session}>
				<Routes>
					{!session ? (
						<>
							<Route path='/' element={<StartPage />} />
							<Route path='/sign-in' element={<SignInForm />} />
							<Route path='/sign-up' element={<SignUpForm />} />
							<Route path='*' element={<div>Ошибка</div>} />
						</>
					) : (
						<>
							<Route path='/' element={<div>Главная страница</div>} />
							<Route path='/accounts' element={<div>Счета</div>} />
							<Route path='/history' element={<div>История операций</div>} />
							<Route path='/categories' element={<div>Категории</div>} />
							<Route path='/user' element={<User />} />
							<Route
								path='*'
								element={<div>Ошибки зарегистрированных пользователей</div>}
							/>
						</>
					)}
				</Routes>
			</ContentApp>
			{session && <Footer />}
		</>
	)
}

const ContentApp = styled.main`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
	background: ${(props) => (props.session ? 'var(--beige)' : 'var(--green)')};
	padding: ${(props) => (props.session ? '120px 70px 80px 70px' : '0px 70px')};
`

// cd ./project-00474
// json-server --watch src/db.json --port 3007

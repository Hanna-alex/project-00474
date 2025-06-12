import { Routes, Route } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Header, Footer } from './components'
import {
	StartPage,
	SignInForm,
	SignUpForm,
	User,
	Accounts,
	Account,
	Categories,
	Category,
	HistoryOperations,
} from './pages'
import { selectUserSession } from './selectors'

import styled from 'styled-components'
import { useLayoutEffect } from 'react'
import { setUser } from './actions'

export const App = () => {
	const dispatch = useDispatch()

	useLayoutEffect(() => {
		const currentUserSessionJson = localStorage.getItem('userSession')
		if (!currentUserSessionJson) return

		const currentUserSession = JSON.parse(currentUserSessionJson)
		dispatch(setUser(currentUserSession))
	}, [dispatch])

	const session = useSelector(selectUserSession)
	const isSession = !!session

	return (
		<>
			{!!session && <Header />}

			<ContentApp $session={isSession}>
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
							<Route path='/accounts' element={<Accounts />}>
								<Route path='change' element={<Account />}></Route>
								<Route path='add' element={<Account />}></Route>
							</Route>
							<Route path='/history' element={<HistoryOperations />} />
							<Route path='/categories' element={<Categories />}>
								<Route path=':action' element={<Category />} />
							</Route>
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
	position: relative;
	z-index: 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 1200px;
	min-height: 100vh;
	background: ${(props) => (props.$session ? 'var(--beige)' : 'var(--green)')};
	padding: ${(props) => (props.$session ? '120px 70px 80px' : '0px 70px')};
	margin: 0 auto;
`

// cd ./project-00474
// json-server --watch src/db.json --port 3007

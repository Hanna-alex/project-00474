import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate } from 'react-router-dom'
import { useServerRequest } from '../../hooks'
import { Button, Input, ErrorMessage, H2 } from '../../components'
import { setUser } from '../../actions'
import { signInFormSchema } from '../../validation-schemas'
import styled from 'styled-components'

const SignInFormContainer = ({ className }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			login: '',
			password: '',
		},
		resolver: yupResolver(signInFormSchema),
	})

	const [serverError, setServerError] = useState(null)
	const serverRequest = useServerRequest()

	const dispatch = useDispatch()
	const navigate = useNavigate()

	const onSubmit = ({ login, password }) => {
		serverRequest('authorize', login, password).then(({ error, res }) => {
			if (error) {
				setServerError(`Ошибка запроса: ${error}`)
				return
			}
			dispatch(setUser(res))
			navigate('/')
		})
	}

	const formError = errors?.login?.message || errors?.password?.message
	const errorMessage = formError || serverError

	return (
		<div className={className}>
			<H2>Вход</H2>

			<form onSubmit={handleSubmit(onSubmit)}>
				<Input
					type='text'
					placeholder='Логин'
					{...register('login', { onChange: () => setServerError(null) })}
				/>
				<Input
					type='text'
					placeholder='Пароль'
					{...register('password', { onChange: () => setServerError(null) })}
				/>
				<div>
					<Link to='/sign-up'>Регистрация</Link>
					<Button
						type='submit'
						disabled={!!errorMessage}
						width={'120px'}
						hoverStyles={{
							'box-shadow': `1px 4px 4px var(--shadow)`,
						}}
					>
						Войти
					</Button>
				</div>
				{errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
			</form>
		</div>
	)
}

export const SignInForm = styled(SignInFormContainer)`
	display: flex;
	flex-direction: column;
	align-items: stretch;
	width: 420px;
	height: 486px;
	background: var(--green);
	border-radius: 8px;
	box-shadow: 1px 2px 8px var(--shadow);
	padding: 54px 25px;

	& > form {
		display: flex;
		flex-direction: column;

		& > div {
			display: flex;
			justify-content: space-between;
			align-items: center;

			& a {
				font-size: 18px;
				font-weight: 600;
				color: var(--brown);
				transition: all ease 0.3s;

				&:hover {
					color: var(--pink);
				}
				&:active {
					color: var(--beige);
				}
			}
		}
	}
`

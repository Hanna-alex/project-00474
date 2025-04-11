import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useServerRequest } from '../../hooks'
import { Link } from 'react-router-dom'
import { Button, Input, ErrorMessage, H2 } from '../../components'
import { signUpFormSchema } from '../../validation-schemas'
import { setUser } from '../../actions'
import styled from 'styled-components'

const SignUpFormContainer = ({ className }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			login: '',
			password: '',
			confirmPassword: '',
		},
		resolver: yupResolver(signUpFormSchema),
	})

	const [serverError, setServerError] = useState(null)
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const serverRequest = useServerRequest()

	const onSubmit = ({ login, password }) => {
		serverRequest('register', login, password).then(({ error, res }) => {
			if (error) {
				setServerError(`Ошибка запроса: ${error}`)
			} else {
				dispatch(setUser(res))
				navigate('/')
			}
		})
	}

	const formError =
		errors?.login?.message ||
		errors?.password?.message ||
		errors?.confirmPassword?.message

	const errorMessage = formError || serverError

	return (
		<div className={className}>
			<H2>Регистрация</H2>
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
				<Input
					type='text'
					placeholder='Повторите пароль'
					{...register('confirmPassword', { onChange: () => setServerError(null) })}
				/>
				<div>
					<Link to='/sign-in'>Вход</Link>
					<Button type='submit' disabled={!!errorMessage} width={'250px'}>
						Зарегистрироватся
					</Button>
					{}
				</div>
			</form>
			{errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
		</div>
	)
}

export const SignUpForm = styled(SignUpFormContainer)`
	display: flex;
	flex-direction: column;
	align-items: stretch;
	width: 420px;
	height: 535px;
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

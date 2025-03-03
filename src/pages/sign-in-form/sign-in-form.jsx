import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import styled from 'styled-components'
import { server } from '../../bff'

const signInFormSchema = yup.object().shape({
	login: yup
		.string()
		.required('Заполните логин')
		.matches(
			/^[a-zA-Z0-9_]+$/,
			'Неверно заполнен логин. Допускаются только буквы, цифры, тире и нежнее подчеркивание',
		)
		.min(3, 'Неверно заполнен логин. Минимум 3 символа')
		.max(16, 'Не верно заполнен логин. Максимум 16 символов'),

	password: yup
		.string()
		.required('Заполните пароль')
		.matches(/[^\w\d]/gi, 'Неверно заполнен пароль. В пароле должен быть один спецсимвол')
		.matches(/[A-Z]/, 'Неверно заполнен пароль. В пароле должна быть одна большая буква')
		.matches(
			/[a-z]/,
			'Неверно заполнен пароль. В пароле должна быть одна маленькая буква',
		)
		.matches(/\d/, 'Неверно заполнен пароль. В пароле должна быть одна цифра')
		.min(8, 'Неверно заполнен пароль. Пароль быть не меньше 8 символов'),
})

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

	const [serverError, setServerError] = useState('')

	const onSubmit = ({ login, password }) => {
		server.authorize(login, password).then(({ error, res }) => {
			if (error) {
				setServerError(`Ошибка запроса: ${error}`)
			} else {
			}
		})
	}

	const formError = errors?.login?.message || errors?.password?.message
	const errorMessage = formError || serverError

	console.log(Boolean(errorMessage))

	return (
		<div className={className}>
			<h2>Авторизация</h2>

			<form onSubmit={handleSubmit(onSubmit)}>
				<input type='text' placeholder='Логин' {...register('login')} />
				<input type='text' placeholder='Пароль' {...register('password')} />
				<div>
					<Link to='/register'>Регистрация</Link>
					<button type='submit' disabled={!!errorMessage}>
						Войти
					</button>
				</div>
				{errorMessage && <ErrorBlock>{errorMessage}</ErrorBlock>}
			</form>
		</div>
	)
}

export const SignInForm = styled(SignInFormContainer)`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 420px;
	height: 486px;
	background: var(--green);
	border-radius: 8px;
	box-shadow: 1px 2px 8px var(--shadow);
	padding: 54px 25px;

	& > h2 {
		padding-bottom: 32px;
		font-size: 32px;
	}

	& > form {
		display: flex;
		flex-direction: column;

		& > input {
			width: 370px;
			border-radius: 8px;
			outline: none;
			border: none;
			background: var(--beige);
			transition: all ease 0.3s;
			padding: 13px 20px;
			margin-bottom: 24px;

			&:hover {
				box-shadow: 1px 2px 4px var(--shadow);
			}
			&:focus {
				box-shadow: 1px 2px 4px var(--blue) inset;
			}
		}

		& > div {
			display: flex;
			justify-content: space-between;
			align-items: center;

			& > button {
				border-radius: 8px;
				outline: none;
				border: none;
				background: var(--blue);
				color: var(--brown);
				font-size: 18px;
				font-weight: 600;
				letter-spacing: 1px;
				cursor: pointer;
				transition: all ease 0.2s;
				padding: 13px 20px;

				&:hover {
					box-shadow: 1px 2px 4px var(--shadow);
				}
				&:active {
					color: var(--beige);
				}
				&:disabled {
					box-shadow: none;
					cursor: not-allowed;
				}
			}
			& > a {
				font-size: 18px;
				font-weight: 600;
				color: var(--brown);
				transition: all ease 0.2s;

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

const ErrorBlock = styled.div`
	color: var(--white);
	background: var(--pink);
	border-radius: 8px;
	padding: 13px 20px;
	margin-top: 36px;
`

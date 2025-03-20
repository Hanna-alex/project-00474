import { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { server } from '../../bff'
import { Link } from 'react-router-dom'
import { Button, Input, ErrorMessage, H2 } from '../../components'
import styled from 'styled-components'
import { setUser } from '../../actions'

const signUpFormSchema = yup.object().shape({
	login: yup
		.string()
		.required('Заполните логин')
		.matches(
			/^[a-zA-Z0-9_-]+$/,
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

	confirmPassword: yup
		.string()
		.required('Заполните повтор пароль')
		.oneOf([yup.ref('password')], 'Пароли должны совпадать'),
})

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

	const onSubmit = ({ login, password }) => {
		server.register(login, password).then(({ error, res }) => {
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
					<Button type='submit' disabled={!!errorMessage}>
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

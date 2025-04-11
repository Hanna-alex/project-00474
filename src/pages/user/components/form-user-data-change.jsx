import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import {
	selectUserAvatar,
	selectUserEmail,
	selectUserId,
	selectUserLogin,
} from '../../../selectors'
import { ErrorMessage, H2, Input, Button, Icon } from '../../../components'
import { createFormUserDataChangeShema } from '../../../validation-schemas'
import { updateUserData } from '../../../actions'
import { useServerRequest } from '../../../hooks'
import styled from 'styled-components'

const FormUserDataChangeContainer = ({ className, ...props }) => {
	const currentUserLogin = useSelector(selectUserLogin)
	const currentUserEmail = useSelector(selectUserEmail)
	const currentUserAvatar = useSelector(selectUserAvatar)
	const userId = useSelector(selectUserId)
	const currentUser = {
		login: currentUserLogin,
		email: currentUserEmail,
		avatar: currentUserAvatar,
	}
	const requestServer = useServerRequest()

	const formUserDataChangeShema = createFormUserDataChangeShema(
		currentUserLogin,
		requestServer,
	)

	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
	} = useForm({
		defaultValues: {
			login: currentUserLogin,
			email: currentUserEmail,
			avatar: currentUserAvatar,
		},
		resolver: yupResolver(formUserDataChangeShema),
	})

	const [serverError, setServerError] = useState(null)
	const dispatch = useDispatch()
	const serverRequest = useServerRequest()

	const closeFormChange = () => props.setIsOpenFormChange(false)

	const onSubmit = (data) => {
		const changeData = Object.entries(data).reduce((acc, [key, value]) => {
			if (value !== currentUser[key]) {
				acc[key] = value
			}
			return acc
		}, {})

		serverRequest('updateUserData', userId, changeData).then(({ error, res }) => {
			if (error) {
				setServerError(error)
				return
			}
			dispatch(updateUserData(res))
			closeFormChange()
		})
	}

	const formError =
		errors?.login?.message || errors.email?.message || errors.avatar?.message
	const errorMessage = formError || serverError

	const formValues = watch()

	const hasChanges = () => {
		return Object.entries(formValues).some(([key, value]) => value !== currentUser[key])
	}

	return (
		<div className={className}>
			<button className='closeBtn' onClick={closeFormChange}>
				<Icon iconName='times' size='26px' />
			</button>
			<H2>Изменить данные:</H2>
			<form className='formChange' onSubmit={handleSubmit(onSubmit)} noValidate>
				<Input
					type='text'
					placeholder='Изменить логин'
					{...register('login', { onChange: () => setServerError(null) })}
				/>
				<Input
					type='email'
					placeholder='Добавить почту'
					{...register('email', { onChange: () => setServerError(null) })}
				/>
				<Input
					type='text'
					placeholder='Изменить ссылку на аватар'
					{...register('avatar', { onChange: () => setServerError(null) })}
				/>
				{/* попробывать сделать добавление аватара как картинку  */}

				<Button type='submit' disabled={!hasChanges() || !!errorMessage}>
					Изменить
				</Button>
			</form>

			{errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
		</div>
	)
}

export const FormUserDataChange = styled(FormUserDataChangeContainer)`
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	background: #98fb98ce;
	padding: 40px;

	& .formChange {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	& .closeBtn {
		position: absolute;
		top: 24px;
		right: 40px;
		outline: none;
		border: none;
		background: transparent;
		cursor: pointer;
	}
`

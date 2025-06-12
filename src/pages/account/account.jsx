import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useLocation, useNavigate } from 'react-router-dom'
import { H3, Button, Input, Icon, ErrorMessage, RadioInput } from '../../components'
import { accountFormChangeSchem } from '../../validation-schemas'
import {
	loadAccountsAsync,
	createAccountAsync,
	updateAccountAsync,
	deleteAccount,
} from '../../actions'
import { useServerRequest, useGetAccountIcons } from '../../hooks'
import { getModifiedData, hasChanges } from '../../utils'
import { selectUserId } from '../../selectors'
import styled from 'styled-components'

const AccountContainer = ({ className }) => {
	const location = useLocation()
	const account = location.state?.account || null
	const userId = useSelector(selectUserId)
	const isEditModeAccount = !!account
	const dispatch = useDispatch()
	const serverRequest = useServerRequest()
	const { icons, serverErrorIcon } = useGetAccountIcons(serverRequest)

	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
	} = useForm({
		defaultValues: {
			name: account?.name || '',
			amount: account?.amount || '',
			icon: account?.icon || '',
		},
		resolver: yupResolver(accountFormChangeSchem),
	})

	const [error, setError] = useState(null)
	const formError =
		errors?.name?.message || errors?.amount?.message || errors?.icon?.message
	const [serverError, setServerError] = useState(null)

	const errorMessage = error || formError || serverError || serverErrorIcon || null

	const navigate = useNavigate()

	const reloadAccount = () => {
		dispatch(loadAccountsAsync(serverRequest, userId))
	}

	const formValues = watch()

	const onSubmit = (data) => {
		if (isEditModeAccount) {
			const changeData = getModifiedData(data, account)

			dispatch(updateAccountAsync(serverRequest, account.id, changeData, setServerError))
			reloadAccount()
			navigate('/accounts')
		} else {
			dispatch(createAccountAsync(serverRequest, data, userId, setServerError))
			reloadAccount()
			navigate('/accounts')
		}
	}

	const removeAccount = (account) => {
		serverRequest('deleteAccount', account.id).then(({ error, res }) => {
			if (!res) {
				setServerError(error)
				return
			}
			dispatch(deleteAccount(account))
			reloadAccount()
			navigate(-1)
		})
	}

	return (
		<div className={className}>
			<form className='form' onSubmit={handleSubmit(onSubmit)}>
				<Button
					type='button'
					width='30px'
					height='30px'
					padding='6px 2px'
					background='transparent'
					hoverStyles={{
						'text-shadow': `4px -2px 2px var(--shadow)`,
					}}
					onClick={() => navigate(-1)}
				>
					<Icon iconName='arrow-left' size='22px' />
				</Button>
				<H3 textAlign={'center'}>
					{isEditModeAccount ? (
						<>
							<span>Изменить счет: </span>
							<br />
							<span>{account.name}</span>
						</>
					) : (
						'Создать счет'
					)}
				</H3>
				<div className='form-group'>
					<label className='label' htmlFor='name'>
						Имя счета
					</label>
					<Input
						type='text'
						id='name'
						{...register('name', { onChange: () => setError(null) })}
					/>
				</div>
				<div className='form-group'>
					<label className='label' htmlFor='amount'>
						Сумма счета
					</label>
					<Input
						type='text'
						id='amount'
						{...register('amount', { onChange: () => setError(null) })}
					/>
				</div>
				<div>
					<H3 className='label'>Иконки</H3>
					<div className='checkbox-group'>
						{icons.map((icon) => (
							<div className='checkbox-box' key={icon.id}>
								<RadioInput
									styleType='icon'
									key={icon.id}
									id={icon.id}
									value={icon.name}
									iconName={icon.name}
									htmlFor={icon.id}
									defaultChecked={isEditModeAccount ? icon.name === account.icon : null}
									{...register('icon', { onChange: () => setError(null) })}
								/>
							</div>
						))}
					</div>
				</div>

				<Button
					type='submit'
					disabled={isEditModeAccount ? !hasChanges(formValues, account) : false}
					margin='0 0 24px 0'
					hoverStyles={{
						'box-shadow': '1px -4px 4px var(--shadow)',
					}}
				>
					Сохранить
				</Button>

				{isEditModeAccount && (
					<Button
						type='button'
						fontSize='16px'
						width='160px'
						color='var(--brown)'
						background='var(--green)'
						hoverStyles={{
							'box-shadow': '1px 2px 4px var(--shadow)',
							color: 'var(--pink)',
						}}
						onClick={() => removeAccount(account)}
					>
						Удалить
					</Button>
				)}

				{errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
			</form>
		</div>
	)
}

export const Account = styled(AccountContainer)`
	position: absolute;
	top: 0;
	right: -70px;
	bottom: 0;
	left: -70px;
	display: flex;
	justify-content: center;
	align-items: center;
	background: rgba(213, 245, 213, 0.8);

	& .form {
		position: relative;
		width: 620px;
		height: 720px;
		background: var(--green);
		border-radius: 8px;
		padding: 35px 40px;
	}

	& .form-group {
		display: flex;
		flex-direction: column;
	}

	& .label {
		font-size: 16px;
		font-weight: 400;
		margin-bottom: 8px;
	}

	& .checkbox-label {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 50px;
		height: 50px;
		cursor: pointer;
		border-radius: 50%;
		background: var(--beige);
		transition: all 0.3s ease-in-out;
	}

	& .checkbox-group {
		display: flex;
		flex-wrap: wrap;
		margin-bottom: 24px;
	}
`

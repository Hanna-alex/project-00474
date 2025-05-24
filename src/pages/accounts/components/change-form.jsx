import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useLocation, useNavigate } from 'react-router-dom'
import { Button, ErrorMessage, H3, Icon, Input, Scrollbar } from '../../../components'
import { accountFormChangeSchem } from '../../../validation-schemas'
import { updateAccount } from '../../../actions'
import { useServerRequest } from '../../../hooks'
import styled from 'styled-components'

const AccountChangeFormContainer = ({ className }) => {
	const location = useLocation()
	const { account } = location.state
	const dispatch = useDispatch()
	const serverRequest = useServerRequest()

	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
	} = useForm({
		defaultValues: {
			name: account.name,
			amount: account.amount,
			icon: account.icon,
		},
		resolver: yupResolver(accountFormChangeSchem),
	})

	const [icons, setIcons] = useState([])
	const [error, setError] = useState(null)
	const formError =
		errors?.name?.message || errors?.amount?.message || errors?.icon?.message
	const [serverError, setServerError] = useState(null)
	const [serverErrorIcon, setServerErrorIcon] = useState(null)

	const errorMessage = error || formError || serverError || serverErrorIcon || null

	const navigate = useNavigate()

	useEffect(() => {
		serverRequest('getIcons').then(({ error, res }) => {
			if (error) {
				setServerErrorIcon(`Ошибка запроса: ${error}`)
			} else {
				setIcons(res)
			}
		})
	}, [serverRequest])

	const formValues = watch()

	const hasChanges = () => {
		return Object.entries(formValues).some(([key, value]) => value !== account[key])
	}

	const onSubmit = (data) => {
		const changeData = Object.entries(data).reduce((acc, [key, value]) => {
			if (value !== account[key]) {
				acc[key] = value
			}
			return acc
		}, {})

		serverRequest('updateAccountData', account.id, changeData).then(({ error, res }) => {
			if (error) {
				setServerError(error)
				return
			}
			dispatch(updateAccount(res))
			navigate('/accounts')
		})
	}

	return (
		<div className={className}>
			<form className='form' onSubmit={handleSubmit(onSubmit)}>
				<Scrollbar width='540px' height='480px'>
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
						<span>Изменить счет: </span>
						<br />
						<span>{account.name}</span>
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
						<label className='label'>Иконки</label>
						<div className='checkbox-group'>
							{icons.map((icon) => (
								<div className='checkbox-box' key={icon.id}>
									<Input
										type='radio'
										id={icon.id}
										marginBottom='0'
										value={icon.name}
										defaultChecked={icon.name === account.icon}
										{...register('icon', { onChange: () => setError(null) })}
									/>
									<label className='checkbox-label' htmlFor={icon.id}>
										<Icon iconName={icon.name} size='28px' />
									</label>
								</div>
							))}
						</div>
					</div>
					<Button
						type='submit'
						disabled={!hasChanges()}
						hoverStyles={{
							'box-shadow': '1px -4px 4px var(--shadow)',
						}}
					>
						Сохранить
					</Button>
				</Scrollbar>

				{errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
			</form>
		</div>
	)
}

export const AccountChangeForm = styled(AccountChangeFormContainer)`
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
		background: var(--green);
		border-radius: 8px;
		padding: 35px 40px;
	}

	& .form-group {
		display: flex;
		flex-direction: column;
	}

	& .label {
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

		& input[type='radio'] {
			display: none;
		}

		& input[type='radio']:checked + label {
			background-color: var(--blue);
		}
		& label:hover {
			box-shadow: 1px 4px 4px var(--shadow);
		}
		& .checkbox-box {
			margin: 5px;
		}
	}
`

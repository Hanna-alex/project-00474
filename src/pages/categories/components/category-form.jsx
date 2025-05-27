import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useLocation, useNavigate } from 'react-router-dom'
import { H3, Button, Input, Icon, ErrorMessage, Scrollbar } from '../../../components'
import { accountFormChangeSchem } from '../../../validation-schemas'
import {
	loadCategoriesAsync,
	updateCategoryAsync,
	// createCategory,
	deleteCategory,
} from '../../../actions'
import { useServerRequest, useGetAccountIcons } from '../../../hooks'
import { getModifiedData, hasChanges } from '../../../utils'
import { selectUserId } from '../../../selectors'
import styled from 'styled-components'

const CategoryFormContainer = ({ className, category: initialAccount = null }) => {
	const location = useLocation()
	const category = location.state?.category || null
	const userId = useSelector(selectUserId)
	const isEditModeAccount = !!category
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
			name: category?.name || '',
			amount: category?.amount || '',
			icon: category?.icon || '',
		},
		resolver: yupResolver(accountFormChangeSchem),
	})

	const [error, setError] = useState(null)
	const formError =
		errors?.name?.message || errors?.amount?.message || errors?.icon?.message
	const [serverError, setServerError] = useState(null)

	const errorMessage = error || formError || serverError || serverErrorIcon || null

	const navigate = useNavigate()

	const reloadCategory = () => {
		dispatch(loadCategoriesAsync(serverRequest, userId))
	}

	const formValues = watch()

	const onSubmit = (data) => {
		if (isEditModeAccount) {
			const changeData = getModifiedData(data, category)

			// serverRequest('updateAccount', category.id, changeData).then(({ error, res }) => {
			// 	if (error) {
			// 		setServerError(error)
			// 		return
			// 	}
			// 	dispatch(updateCategory(res))
			// 	reloadCategory()
			// 	navigate('/accounts')
			// })
		} else {
			// serverRequest('createCategory', data, userId).then(({ error, res }) => {
			// 	if (error) {
			// 		setServerError(error)
			// 		return
			// 	}
			// 	dispatch(createCategory(data))
			// 	reloadCategory()
			// 	navigate('/accounts')
			// })
		}
	}

	const removeAccount = (category) => {
		serverRequest('deleteCategory', category.id).then(({ error, res }) => {
			if (!res) {
				setServerError(error)
				return
			}
			dispatch(deleteCategory(category))
			reloadCategory()
			navigate(-1)
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
						{isEditModeAccount ? (
							<>
								<span>Изменить счет: </span>
								<br />
								<span>{category.name}</span>
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
						<label className='label'>Иконки</label>
						<div className='checkbox-group'>
							{icons.map((icon) => (
								<div className='checkbox-box' key={icon.id}>
									<Input
										type='radio'
										id={icon.id}
										marginBottom='0'
										value={icon.name}
										defaultChecked={
											isEditModeAccount ? icon.name === category.icon : null
										}
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
						disabled={isEditModeAccount ? !hasChanges(formValues, category) : false}
						marginBottom='24px'
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
							marginBottom='4px'
							hoverStyles={{
								'box-shadow': '1px 2px 4px var(--shadow)',
								color: 'var(--pink)',
							}}
							onClick={() => removeAccount(category)}
						>
							Удалить
						</Button>
					)}
				</Scrollbar>

				{errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
			</form>
		</div>
	)
}

export const CategoryForm = styled(CategoryFormContainer)`
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

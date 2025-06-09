import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useLocation, useNavigate } from 'react-router-dom'
import { H3, Button, Input, Icon, ErrorMessage, Scrollbar } from '../../components'
import { categoryFormChangeSchem } from '../../validation-schemas'
import {
	loadCategoriesAsync,
	updateCategoryAsync,
	createCategoryAsync,
	deleteCategory,
} from '../../actions'
import { useServerRequest, useGetIcons } from '../../hooks'
import { getModifiedData, hasChanges } from '../../utils'
import { selectUserId } from '../../selectors'
import styled from 'styled-components'
import { RadioInput } from '../../components/radio-input/radio-input'

const CategoryContainer = ({ className }) => {
	const location = useLocation()
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const serverRequest = useServerRequest()
	const userId = useSelector(selectUserId)
	const category = location.state?.category || null
	const typeAdd = location.state?.type || ''
	const isEditModeCategory = !!category
	const { icons, serverErrorIcon } = useGetIcons(serverRequest)

	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
	} = useForm({
		defaultValues: {
			name: category?.name || '',
			type: category?.type || '',
			icon: category?.icon || '',
		},
		resolver: yupResolver(categoryFormChangeSchem),
	})

	const [serverError, setServerError] = useState(null)
	const formValues = watch()
	const [error, setError] = useState(null)
	const formError =
		errors?.name?.message || errors?.type?.message || errors?.icon?.message

	const onSubmit = (data) => {
		if (isEditModeCategory) {
			const changeData = getModifiedData(data, category)

			dispatch(
				updateCategoryAsync(serverRequest, category.id, changeData, setServerError),
			)
			reloadCategory()
			navigate(-1)
		} else {
			dispatch(createCategoryAsync(serverRequest, data, userId, setServerError))
			reloadCategory()
			navigate(-1)
		}
	}

	const reloadCategory = () => {
		dispatch(loadCategoriesAsync(serverRequest, userId))
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

	const errorMessage = error || formError || serverError || serverErrorIcon || null

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
					{isEditModeCategory ? (
						<>
							<span>Изменить категорию: </span>
							<br />
							<span>{category.name}</span>
						</>
					) : (
						'Создать категорию'
					)}
				</H3>
				<div className='form-group'>
					<label className='label' htmlFor='name'>
						Название категории
					</label>
					<Input
						type='text'
						id='name'
						{...register('name', { onChange: () => setError(null) })}
					/>
				</div>
				<div className='radio-circle-wrapper'>
					<RadioInput
						styleType='circle'
						id='income'
						value='income'
						htmlFor='income'
						labelName='ДОХОДЫ'
						defaultChecked={category?.type === 'income' || typeAdd === 'income'}
						{...register('type', { onChange: () => setError(null) })}
					/>
					<RadioInput
						styleType='circle'
						id='expense'
						value='expense'
						htmlFor='expense'
						labelName='РАСХОДЫ'
						defaultChecked={category?.type === 'expense' || typeAdd === 'expense'}
						{...register('type', { onChange: () => setError(null) })}
					/>
				</div>

				<h4 className='label'>Иконки</h4>
				<div className='wrapper-icon'>
					<Scrollbar width='540px' height='250px'>
						{Object.entries(icons).map(([keyIcon, arrIcons]) => (
							<div key={keyIcon}>
								<h4 className='icon-heading'>{keyIcon}</h4>
								<div className='radio-wrapper'>
									{arrIcons.map((icon) => (
										<RadioInput
											styleType='icon'
											key={icon.id}
											id={icon.id}
											value={icon.name}
											iconName={icon.name}
											htmlFor={icon.id}
											defaultChecked={
												isEditModeCategory ? icon.name === category.icon : null
											}
											{...register('icon', { onChange: () => setError(null) })}
										/>
									))}
								</div>
							</div>
						))}
					</Scrollbar>
				</div>

				<Button
					type='submit'
					disabled={isEditModeCategory ? !hasChanges(formValues, category) : false}
					margin='16px 0 24px 0'
					hoverStyles={{
						'box-shadow': '1px -4px 4px var(--shadow)',
					}}
				>
					Сохранить
				</Button>

				{isEditModeCategory && (
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
						onClick={() => removeAccount(category)}
					>
						Удалить
					</Button>
				)}

				{errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
			</form>
		</div>
	)
}

export const Category = styled(CategoryContainer)`
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
		height: 740px;
		background: var(--green);
		border-radius: 8px;
		padding: 35px 40px;

		& .form-group {
			display: flex;
			flex-direction: column;
		}
		& .label {
			font-size: 16px;
			font-weight: 400;
			margin-bottom: 8px;
		}

		& .radio-wrapper {
			display: flex;
			align-items: center;
			flex-wrap: wrap;
			margin-bottom: 12px;
		}

		& .radio-circle-wrapper {
			display: flex;
			margin-bottom: 24px;
		}
	}
	& .wrapper-icon {
		border-bottom: 1px solid var(--beige);
		border-top: 1px solid var(--beige);
		padding: 4px 0;
	}
`

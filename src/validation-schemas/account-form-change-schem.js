import * as yup from 'yup'

export const accountFormChangeSchem = yup.object().shape({
	name: yup.string().trim().required('Имя не может быть пустым'),
	amount: yup
		.number('Только числа и через точку')
		.transform((value, originalValue) => {
			if (originalValue === '' || originalValue == null) {
				return 0
			}
			return value
		})
		.nullable()
		.default(0),
	icon: yup.string().required('Выберите иконку'),
})

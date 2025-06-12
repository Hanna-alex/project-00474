import * as yup from 'yup'

export const accountFormChangeSchem = yup.object().shape({
	name: yup
		.string()
		.trim()
		.required('Имя счета не может быть пустым')
		.max(16, 'Имя счета не может быть больше 16 символов'),
	amount: yup
		.string()
		.transform((value, originalValue) => {
			if (originalValue === '' || originalValue == null) {
				return '0'
			}
			return value
		})
		.test('is-valid-number', 'Введите корректное число', (value) => {
			if (!value) return false
			const normalized = value.replace(',', '.')
			return !isNaN(parseFloat(normalized))
		}),
	icon: yup.string().required('Выберите иконку'),
})

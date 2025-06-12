import * as yup from 'yup'

export const categoryFormChangeSchem = yup.object().shape({
	name: yup
		.string('Название категории не может быть пустым')
		.min(3, 'Название категории должно быть не меньше трех символов')
		.required(),
	type: yup.string().required('Выберите тип категории'),
	icon: yup.string().required('Выберите иконку'),
})

import * as yup from 'yup'

export const accountFormChangeSchem = yup.object().shape({
	name: yup.string().trim().required('Имя не может быть пустым'),
	amount: yup.number('Только числа и через точку').required(),
	icon: yup.string().required(),
})

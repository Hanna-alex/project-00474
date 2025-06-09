import * as yup from 'yup'

export const categoryFormChangeSchem = yup.object().shape({
	name: yup
		.string()
		.min(3, 'Название категории болжно быть не меньше трех символов')
		.required(),
	type: yup.string().required(),
	icon: yup.string().required(),
})

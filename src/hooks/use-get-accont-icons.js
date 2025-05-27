import { useEffect, useState } from 'react'

export const useGetAccountIcons = (serverRequest) => {
	const [icons, setIcons] = useState([])
	const [serverErrorIcon, setServerErrorIcon] = useState(null)

	useEffect(() => {
		serverRequest('getAccountIcons').then(({ error, res }) => {
			if (error) {
				setServerErrorIcon(`Ошибка запроса: ${error}`)
			} else {
				setIcons(res)
			}
		})
	}, [serverRequest])

	return { icons, serverErrorIcon }
}

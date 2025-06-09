import { useEffect, useState } from 'react'

export const useGetIcons = (serverRequest) => {
	const [icons, setIcons] = useState({})
	const [serverErrorIcon, setServerErrorIcon] = useState(null)

	useEffect(() => {
		serverRequest('getIcons').then(({ error, res }) => {
			if (error) {
				setServerErrorIcon(`Ошибка запроса: ${error}`)
			} else {
				setIcons(res)
			}
		})
	}, [serverRequest])

	return { icons, serverErrorIcon }
}

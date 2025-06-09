import { transformSessions } from '../transformers'

export const fetchSession = (hash) =>
	fetch(`http://localhost:3007/sessions?hash=${hash}`)
		.then((loadedsesion) => loadedsesion.json())
		.then(([loadedsesion]) => loadedsesion && transformSessions(loadedsesion))

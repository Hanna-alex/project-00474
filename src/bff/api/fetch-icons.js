export const fetchIcons = async () =>
	fetch(`http://localhost:3007/icons`)
		.then((icons) => icons.json())
		.then((icons) => icons)

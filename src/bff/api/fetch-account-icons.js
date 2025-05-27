export const fetchAccountIcons = async () =>
	fetch(`http://localhost:3007/account_icons`)
		.then((accountIcons) => accountIcons.json())
		.then((accountIcons) => accountIcons)

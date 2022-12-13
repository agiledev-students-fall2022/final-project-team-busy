// The following two function are imported from https://mui.com/material-ui/react-avatar/,
// the mui website
export function stringToColor(string) {
	let hash = 0;
	let i;

	/* eslint-disable no-bitwise */
	for (i = 0; i < string.length; i += 1) {
		hash = string.charCodeAt(i) + ((hash << 5) - hash);
	}

	let color = "#";

	for (i = 0; i < 3; i += 1) {
		const value = (hash >> (i * 8)) & 0xff;
		color += `00${value.toString(16)}`.slice(-2);
	}
	/* eslint-enable no-bitwise */

	return color;
}
export function stringAvatar(name, isProfile = false) {
	if (isProfile) {
		return {
			sx: {
				bgcolor: stringToColor(name),
				height: 175,
				width: 175,
				fontSize: 70,
			},
			children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
		};
	}
	return {
		sx: {
			bgcolor: stringToColor(name),
		},
		children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
	};
}

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import { faker } from "@faker-js/faker";
import { Avatar } from "@mui/material";

function FriendCard({ data }) {
    // The following two function are imported from https://mui.com/material-ui/react-avatar/,
    // the mui website
	function stringToColor(string) {
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

	function stringAvatar(name) {
		return {
			sx: {
				bgcolor: stringToColor(name),
			},
			children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
		};
	}
	return (
		<Card style={{ width: "95vw" }}>
			<CardHeader
				avatar={
					data.profilePic ? (
						<Avatar src={data.profilePic} />
					) : (
						<Avatar
							{...stringAvatar(`${data.first} ${data.last}`)}
						/>
					)
				}
				title={`${data.first} ${data.last}`}
				action
			/>
		</Card>
	);
}

export default FriendCard;

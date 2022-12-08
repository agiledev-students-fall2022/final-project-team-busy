import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import { Avatar } from "@mui/material";
import {stringAvatar, stringToColor} from '../Util/Avatars'

function FriendCard({ data }) {

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

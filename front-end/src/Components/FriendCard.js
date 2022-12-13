import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import { Avatar } from "@mui/material";
import { stringAvatar, stringToColor } from "../Util/Avatars";
import { Link } from "react-router-dom";

function FriendCard({ className, id, data }) {
  return (
    <Link to={`/user/${id}`}>
      <Card style={{ width: "95vw" }} className={className}>
        <CardHeader
          avatar={
            data.profilePic ? (
              <Avatar src={data.profilePic} />
            ) : (
              <Avatar {...stringAvatar(`${data.first} ${data.last}`)} />
            )
          }
          title={`${data.first} ${data.last}`}
          action
        />
      </Card>
    </Link>
  );
}

export default FriendCard;

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import { blue } from "@mui/material/colors";
import { Link } from "react-router-dom";
const GroupCard = ({ className, id, name, profilePic }) => {
  return (
    <Link to={`/GroupProfile/${id}`} style={{ textDecoration: "none" }}>
      <Card
        style={{
          width: "90vw",
          margin: "-4px",
        }}
        className={className}
      >
        <CardHeader
          title={name}
          avatar={
            <Avatar src={profilePic} alt={name} sx={{ bgcolor: blue[500] }}>
              {name[0].toUpperCase()}
            </Avatar>
          }
          action
        />
      </Card>
    </Link>
  );
};

export default GroupCard;

import { Avatar } from "@mui/material";
// import { faker } from "@faker-js/faker";
import "./User.css";
import { Button } from "@mui/material";
import { IconButton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { Link, useLocation, useParams } from "react-router-dom";
import { stringAvatar, stringToColor } from "../Util/Avatars";
import { useEffect, useState } from "react";
import axios from "axios";

const User = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const [isFriend, setIsFriend] = useState();
  useEffect(() => {
    axios
      .get(`/user/${id}`)
      .then((res) => {
        console.log(res);
        setUser(res.data.user);
        setIsFriend(res.data.isFriend);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="intro">
      <div className="home">
        <IconButton aria-label="home" component={Link} to="/home">
          <HomeIcon
            sx={{
              height: 45,
              width: 45,
              ":hover": { cursor: "pointer" },
            }}
          />
        </IconButton>
      </div>
      <div className="profile-pic-container">
        {user.profilePic ? (
          <Avatar
            src={user.profilePic}
            sx={{
              width: 175,
              height: 175,
              border: 1,
              borderColor: "black",
              bgcolor: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          />
        ) : (
          <Avatar {...stringAvatar(`${user.first} ${user.last}`, true)} />
        )}
      </div>
      <div className="handle">
        <h1>{`@${user.username}`}</h1>
      </div>
      <div>
        <h4 className="bio">Bio:</h4>
        <p>{user.bio}</p>
      </div>
      <div className="friendc">
        {isFriend ? (
          <Link to="/FriendCalendar">
            <Button variant="contained" className="friend-button">
              Calendar
            </Button>
          </Link>
        ) : (
          <Link to="/FriendCalendar">
            <Button variant="contained" className="friend-button">
              Add friend
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default User;

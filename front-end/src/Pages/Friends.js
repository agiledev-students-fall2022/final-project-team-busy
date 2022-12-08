import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import FriendCard from "../Components/FriendCard";
import HomeButton from "../Components/HomeButton";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Friends() {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    axios
      .get("/friends")
      .then((res) => {
        console.log(res.data.friends);
        setFriends(res.data.friends);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Grid container alignItems="flex-start">
      <Grid
        container
        margin="0 2vw"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="h3">Friends</Typography>
        <HomeButton />
      </Grid>
      <Grid
        container
        direction="column"
        alignItems="center"
        rowSpacing={2}
        margin="0vw 1vw"
      >
        {friends.map((e, i) => {
          return (
            <Grid item>
              <Link to={`/user/${e.id}`}>
                <FriendCard key={i} data={e} />
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
}

export default Friends;

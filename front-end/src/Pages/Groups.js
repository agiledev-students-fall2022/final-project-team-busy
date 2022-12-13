import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import GroupCard from "../Components/GroupCard";
import HomeIcon from "@mui/icons-material/Home";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import HomeButton from "../Components/HomeButton";

const Groups = ({ groups }) => {
  const navigate = useNavigate();
  return (
    <Grid container alignItems="flex-start">
      <Grid
        container
        margin="0 2vw"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="h3">Groups</Typography>
        <HomeButton />
      </Grid>
      <Grid
        container
        direction="column"
        alignItems="center"
        rowSpacing={2}
        margin="0vw 1vw"
      >
        <Grid item>
          <Button
            variant="contained"
            style={{ width: "95vw" }}
            onClick={() => navigate("/create-group")}
          >
            Create Group
          </Button>
        </Grid>
        {groups &&
          groups.map((group) => (
            <Grid item key={group.id}>
              <GroupCard
                id={group.id}
                key={group.id}
                name={group.groupName}
                profilePic={group.profilePic ? group.profilePic : ""}
              />
            </Grid>
          ))}
      </Grid>
    </Grid>
  );
};

export default Groups;

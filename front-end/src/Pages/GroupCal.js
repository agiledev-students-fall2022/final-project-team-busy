import { Grid, Typography } from "@mui/material";
import HomeButton from "../Components/HomeButton";
import GroupCalendar from "../Components/GroupCalendar";
import { faker } from "@faker-js/faker";

// This the Group Calendar page here
const GroupCal = ({ groups, events}) => {
    // Get the group id from the url
    const groupId = window.location.pathname.split("/")[2];
    // Find the group with the id
    const group = groups.find((group) => group._id === groupId);
    // Get the group name
    const groupName = group.groupName;

    return (
        <Grid 
        container
        alignItems="flex-start"
        padding={"25px"}
        >
            <Grid 
            container
            margin="0 2vw"
            justifyContent="space-between"
            alignItems="center"
            >
                <h2
                >{`${groupName}'s Calendar`}</h2 >
                <HomeButton />
            </Grid>
            <Grid item>
                <GroupCalendar />
            </Grid>
        </Grid>
     );
}

export default GroupCal;
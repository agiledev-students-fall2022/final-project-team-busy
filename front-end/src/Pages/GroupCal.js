import { Grid, Typography } from "@mui/material";
import HomeButton from "../Components/HomeButton";
import GroupCalendar from "../Components/GroupCalendar";
import { faker } from "@faker-js/faker";

// This the Group Calendar page here
function GroupCal() {
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
                >{faker.internet.userName("@")+ "'s Calendar" }</h2 >
                <HomeButton />
            </Grid>
            <Grid item>
                <GroupCalendar />
            </Grid>
        </Grid>
     );
}

export default GroupCal;
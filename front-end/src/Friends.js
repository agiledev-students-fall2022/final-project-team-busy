import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import FriendCard from './Components/FriendCard';
import HomeButton from './Components/HomeButton';

function Friends() {

    return ( 
    <Grid 
    container
    alignItems="flex-start"
    >
        <Grid 
        container
        margin="0 2vw"
        justifyContent="space-between"
        alignItems="center"

        >
            <Typography
            variant="h3"
            >Friends</Typography >
            <HomeButton />
        </Grid>
        <Grid 
        container
        direction="column"
        alignItems="center"
        rowSpacing={2}
        margin="0vw 1vw"
        >
            <Grid item >
                <FriendCard />
            </Grid>
            <Grid item >
                <FriendCard />
            </Grid>
            <Grid item >
                <FriendCard />
            </Grid>
            <Grid item >
                <FriendCard />
            </Grid>
            <Grid item >
                <FriendCard />
            </Grid>
            <Grid item >
                <FriendCard />
            </Grid>
            <Grid item >
                <FriendCard />
            </Grid>
            <Grid item >
                <FriendCard />
            </Grid>
            <Grid item >
                <FriendCard />
            </Grid>
            <Grid item >
                <FriendCard />
            </Grid>     
        </Grid>
    </Grid>
    );
}

export default Friends;
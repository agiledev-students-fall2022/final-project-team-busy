import Grid from '@mui/material/Grid';
import FriendCard from './Components/FriendCard';

function Friends() {

    return ( 
    <>
        <h3> Friends</h3>
        <Grid 
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        rowSpacing={2}
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
            
    </>
    );
}

export default Friends;
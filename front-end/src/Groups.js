import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import GroupCard from './Components/GroupCard';
import HomeIcon from '@mui/icons-material/Home';

function Groups() {

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
            >Group</Typography >
            <HomeIcon />
        </Grid>
        <Grid 
        container
        direction="column"
        alignItems="center"
        rowSpacing={2}
        margin="0vw 1vw"
        >
            <Grid item >
                <GroupCard />
            </Grid>
            <Grid item >
                <GroupCard />
            </Grid>
            <Grid item >
                <GroupCard />
            </Grid>
            <Grid item >
                <GroupCard />
            </Grid>
            <Grid item >
                <GroupCard />
            </Grid>
            <Grid item >
                <GroupCard />
            </Grid>
            <Grid item >
                <GroupCard />
            </Grid>
            <Grid item >
                <GroupCard />
            </Grid>
            <Grid item >
                <GroupCard />
            </Grid>
            <Grid item >
                <GroupCard />
            </Grid>     
        </Grid>
    </Grid>
    );
}

export default Groups;
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import GroupCard from './Components/GroupCard';
import HomeIcon from '@mui/icons-material/Home';
import Button from "@mui/material/Button";
import { useNavigate, Link } from 'react-router-dom';
import HomeButton from './Components/HomeButton';

function Groups() {
    const navigate = useNavigate();
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
                <Button variant='contained' style={{width: "95vw"}} onClick={() => navigate('/create-group')}>Create group</Button>
            </Grid>
            <Grid item >
                <Link to={'/igroup'}>
                    <GroupCard />
                </Link>
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
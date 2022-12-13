import { IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from "react-router-dom";

function HomeButton() {
    return ( 
        <IconButton aria-label="home" component={Link} to="/home">
            <HomeIcon sx={{height: 45, width: 45, ":hover": {cursor: 'pointer'}}}/>
        </IconButton>
     );
}

export default HomeButton;
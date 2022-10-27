import { Avatar } from '@mui/material';
import {faker} from '@faker-js/faker';
import "./FriendProfile.css";
import { Button } from '@mui/material';
import { IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from "react-router-dom";


const GroupProfile = () =>{
    return(
        <div className='intro'>
            <div className='home'>
                <IconButton aria-label="home" component={Link} to="/home">
                        <HomeIcon sx={{height: 45, width: 45, ":hover": {cursor: 'pointer'}}}/>
                </IconButton>
            </div>
            <div className='profile-pic-container'>
                <Avatar src={faker.image.avatar()} sx={{ width: 175, height: 175, border: 1, borderColor: "black",  bgcolor: "white", display: 'flex', justifyContent: 'center', alignItems: 'center' }}></Avatar>
            </div>
            <div className='handle'>
                <h1>{faker.internet.userName('@')}</h1>
            </div>
            <div>
                <h4 className='bio'>
                    Bio:
                </h4>
                <p>
                    Hi, this lorem ipson is great!. 
                    Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit, sed do eiusmod tempor i
                    ncididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation
                     ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                </p>
            </div>
            <div className='friendc'>
                <Button variant="contained" className='friend-button' >Friend's Calendar</Button>
            </div>
            
        </div>
    )
}

export default GroupProfile;
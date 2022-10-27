import { Avatar } from '@mui/material';
import {faker} from '@faker-js/faker';
import GroupsIcon from '@mui/icons-material/Groups';
import { deepOrange } from '@mui/material/colors';
import "./GroupProfile.css";
import AvatarGroup from '@mui/material/AvatarGroup';
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
                <Avatar sx={{ width: 175, height: 175, border: 1, borderColor: "black",  bgcolor: "white", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <AvatarGroup max={4}>
                        <Avatar src={faker.image.avatar()} />
                        <Avatar src={faker.image.avatar()} />
                        <Avatar src={faker.image.avatar()} />
                        <Avatar src={faker.image.avatar()} />
                    <Avatar src={faker.image.avatar()} />
              </AvatarGroup>
                </Avatar>
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
            <div className='groupc'>
                <Button variant="contained" className='group-button' >Group's Calendar</Button>
            </div>
            
        </div>
    )
}

export default GroupProfile;
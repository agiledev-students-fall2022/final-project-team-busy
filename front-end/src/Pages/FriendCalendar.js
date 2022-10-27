import FriendCal from "../Components/FriendCal";
import TitleCalendar from "../Components/TitleCalendar";
import {faker} from '@faker-js/faker';
import "./FriendCalendar.css";
import { Button } from '@mui/material';
import { IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from "react-router-dom";


const FriendCalendar = () =>{
    return (
        <div className="friend-calendar-page"> 
            <div className="heading-and-home-button-header">
                <div>       
                    <h2 className="calendar-heading">{faker.name.firstName()}'s Calendar</h2>
                </div>
                <div className="home-button">
                    <IconButton aria-label="home" component={Link} to="/home">
                        <HomeIcon sx={{height: 45, width: 45, ":hover": {cursor: 'pointer'}}}/>
                    </IconButton>
                </div>
            </div>

            

            <div>
                <FriendCal/>
            </div>
        </div>
    )
}

export default FriendCalendar;
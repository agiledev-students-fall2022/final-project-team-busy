import FriendCal from "../Components/FriendCal";
import TitleCalendar from "../Components/TitleCalendar";
import {faker} from '@faker-js/faker';
import "./FriendCalendar.css";
import { Button } from '@mui/material';
import { IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


const FriendCalendar = () =>{
    const {id} = useParams();
    const [events, setEvents] = useState([]);
    const [username, setUsername] = useState('');
    useEffect(() => {
        axios.get(`/user/${id}/events`)
        .then((res) => {
            setEvents(res.data.events);
        }).catch((err) => {
            console.log(err)
        })
        axios.get(`/user/${id}`)
        .then((res) => {
            setUsername(res.data.user.username);
        }).catch((err) => {
            console.log(err)
        })
    }, []);
    return (
        <div className="friend-calendar-page"> 
            <div className="heading-and-home-button-header">
                <div>       
                    <h2 className="calendar-heading">{username}'s Calendar</h2>
                </div>
                <div className="home-button">
                    <IconButton aria-label="home" component={Link} to="/home">
                        <HomeIcon sx={{height: 45, width: 45, ":hover": {cursor: 'pointer'}}}/>
                    </IconButton>
                </div>
            </div>

            

            <div>
                <FriendCal events={events} />
            </div>
        </div>
    )
}

export default FriendCalendar;
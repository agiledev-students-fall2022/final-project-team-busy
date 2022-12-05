import { Avatar } from '@mui/material';
import "./GroupProfile.css";
import { Button } from '@mui/material';
import { IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { Link, Navigate, useNavigate } from "react-router-dom";
import { blue } from '@mui/material/colors';


const GroupProfile = ({ groups, friends, user }) => {
    // Get the group id from the url
    const groupId = window.location.pathname.split("/")[2];
    // Find the group with the id
    const group = groups.find((group) => group._id === groupId);
    // Get the group members
    const members = group.members;
    // From members, get the friends that are also members
    const groupFriends = friends.filter((friend) => members.includes(friend._id));
    const numOfNotFriends = members.length - groupFriends.length;
    // Get the group name
    const groupName = group.groupName;

    const handleLeaveRequest = (e) => {
        const leaveRequest = JSON.stringify({
            groupId: groupId,
            userId: user.id,
            requestType: "leave",
        });
        fetch(`http://localhost:3001/GroupProfile/${groupId}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: leaveRequest,
        })
            .then((res) => res.json())
            .then((response) => console.log("Form Submitted Successfully:", response))
            .catch((error) => console.error("Error:", error));
    }

    const navigate = useNavigate();
    function refreshPage() {
        setTimeout(()=>{
            navigate("/groups");
            window.location.reload(false);
        }, 500);
        console.log('page to reload')
    }
    

    return (
        <div className='intro'>
            <div className='home'>
                <IconButton aria-label="home" component={Link} to="/home">
                    <HomeIcon sx={{ height: 45, width: 45, ":hover": { cursor: 'pointer' } }} />
                </IconButton>
            </div>
            <div className='profile-pic-container'>
                <Avatar sx={{ width: 115, height: 115, fontSize: '3rem', bgcolor: blue[500], display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    {groupName[0].toUpperCase()}
                </Avatar>
            </div>
            <div className='group-handle'>
                <h1>{groupName}</h1>
            </div>
            {/* If any friends are members, display them in a numbered list */}
            {groupFriends.length > 0 && (
                <div className='friends'>
                    <h4>Members: </h4>
                    <ol>
                        {groupFriends.map((friend, index) => (
                            <li key={index}>{friend.first} {friend.last}</li>
                        ))}
                    </ol>
                    <h4 className='others'>...and {numOfNotFriends} {numOfNotFriends <= 1 ? "other" : "others"} </h4>
                </div>
            )}
            <div className='groupc'>
                <Link to={`/GroupCalendar/${group._id}`} >
                    <Button variant="contained" className='group-button'>Group's Calendar</Button>
                </Link>
            </div>

            <div className='leave-group'>
                <Button variant="contained" className='leave-button' onClick={
                    () => {
                        if (window.confirm("Are you sure you want to leave this group?")) {
                            handleLeaveRequest();
                            refreshPage();
                        }
                    }
                }>Leave Group</Button>
            </div>

        </div>
    )
}

export default GroupProfile;
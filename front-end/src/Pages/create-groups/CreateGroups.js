import React from 'react'
import './CreateGroups.css'
import { TextField } from '@mui/material'
import { useState } from 'react'
import { Avatar } from '@mui/material'
import { IconButton } from '@mui/material'
import GroupsIcon from '@mui/icons-material/Groups'
import { blue } from '@mui/material/colors'
import FriendList from '../../Components/friends-list/FriendList'
import { Button } from '@mui/material'
// import { FormControl } from '@mui/material'
import ConfirmationMessage from '../../Components/confirmation-messages/ConfirmationMessage'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'


const CreateGroups = ({ friends, groups, setGroups}) => {
    const [name, setName] = useState('');
    const [dp, setDP] = useState();
    const [dpURL, setDPURL] = useState();
    const [nameChanges, setNameChanges] = useState(0);
    const [friendsChecked, setChecked] = useState([1]);
    const [created, setCreated] = useState(false);

    // const [friends, setFriends] = useState([])
    // useEffect(() => {
    //     fetch("/create-group/", {
    //         method: 'GET',
    //         headers: { 'Content-Type': 'application/json' },
    //     }).then(response => response.json())
    //         .then(response => {
    //             console.log('Friend Data Loaded Successfully.')
    //             setFriends(response);
    //         })
    //         .catch(error => console.error('Error:', error))
    // }, []);
    const [friendsAdded, setAdded] = useState([friends[1]._id.$oid]);

    const handleNameChange = (e) => {
        // console.log(e.target.value);
        setName(e.target.value);
        setNameChanges(nameChanges + 1);
    }

    const handleDPChange = (e) => {
        setDP(e.target.files[0]);
        setDPURL(URL.createObjectURL(e.target.files[0]));
    }

    const handleSubmission = (e) => {
        e.preventDefault();
        setCreated(true);
        setTimeout(() => {
            setCreated(false);
        }, 1500);
        const groupInfo = JSON.stringify({
            members: friendsAdded,
            events: [],
            groupName: name,
            desc: "",
            creator: friends[Math.floor(Math.random() * friends.length)]._id.$oid, // Placeholder creator ID
            profilePic: dpURL
        })
        fetch("/create-group/", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: groupInfo
        }).then(res => res.json())
            .then(response => console.log('Form Submitted Successfully:', response))
            .catch(error => console.error('Error:', error))
        
        const groupsUpdated = [...groups]
        groupsUpdated.push(groupInfo);
        setGroups(groupsUpdated);
    }

    const handleToggle = (value) => () => {
        const currentIndex = friendsChecked.indexOf(value);
        const newChecked = [...friendsChecked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);

        let newAdded = []
        newChecked.forEach(friendNum => {
            newAdded.push(friends[friendNum]._id.$oid)
        })
        setAdded(newAdded)
        console.log(newAdded)
    };

    let nameError = (nameChanges > 0 && name === '')
    let noNameSubmitted = (name === '')
    let noFriendsAddedError = (friendsChecked.length === 0)
    let anyError = (nameError || noFriendsAddedError || noNameSubmitted)


    return (
        <div className='create-groups-page'>
            <h2 className='create-group-heading'>Create Group</h2>
            <form onSubmit={handleSubmission} method='post'>
                <IconButton className='dp-picker' color="primary" aria-label="upload picture" component="label">
                    <input hidden accept="image/*" type="file" onChange={handleDPChange} />
                    <Avatar alt="Group" src={dpURL} sx={{ width: 75, height: 75, bgcolor: blue[400], display: 'flex', justifyContent: 'center', alignItems: 'center' }}><GroupsIcon sx={{ width: 42.5, height: 42.5, ":hover": 'cursor: pointer', position: 'relative', bottom: '1.5%' }} /></Avatar>
                </IconButton>
                <TextField className='group-name' id="group-name" label="Enter Group Name" variant="outlined" required value={name} onChange={handleNameChange} inputProps={{ maxLength: 30 }} error={nameError} helperText={nameError ? 'Please enter group name' : ''} />
                <p>Add friends to group {name}</p>
                <FriendList friends={friends} checked={friendsChecked} handleToggle={handleToggle} />
                <ConfirmationMessage relation={"Group"} confirmed={created} />
                <div className="form-submit-buttons">
                    <Button variant="outlined" className='cancel-button' component={Link} to="/groups">Cancel</Button>
                    <Button type='submit' variant="contained" className='create-group-button' disabled={anyError} >Create Group</Button>
                </div>
            </form>
        </div>
    )
}

export default CreateGroups
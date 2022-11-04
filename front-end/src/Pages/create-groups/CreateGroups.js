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
import { FormControl } from '@mui/material'


const CreateGroups = () => {
    const [name, setName] = useState('');
    const [dp, setDP] = useState();
    const [dpURL, setDPURL] = useState();
    const [nameChanges, setNameChanges] = useState(0);
    const [friendsChecked, setChecked] = useState([1]);
    const [created, setCreated] = useState(false);

    let friends = [
        {
            "value": 0,
            "name": "Oran McCullough",
            "bgcolor": "#f44336"
        },
        {
            "value": 1,
            "name": "Jacynthe Walter",
            "bgcolor": "#f44336"
        },
        {
            "value": 2,
            "name": "Darrell Renner",
            "bgcolor": "#e91e63"
        },
        {
            "value": 3,
            "name": "Darrell Renner",
            "bgcolor": "#e91e63"
        },
        {
            "value": 4,
            "name": "Jeremie Gorczany",
            "bgcolor": "#4caf50"
        },
        {
            "value": 5,
            "name": "Oran McCullough",
            "bgcolor": "#f44336"
        },
        {
            "value": 6,
            "name": "Jaquan Von",
            "bgcolor": "#4caf50"
        },
        {
            "value": 7,
            "name": "Darrell Renner",
            "bgcolor": "#e91e63"
        },
        {
            "value": 8,
            "name": "Oran McCullough",
            "bgcolor": "#f44336"
        },
        {
            "value": 9,
            "name": "Darrell Renner",
            "bgcolor": "#2196f3"
        }
    ]

    const handleNameChange = (e) => {
        // console.log(e.target.value);
        setName(e.target.value);
        setNameChanges(nameChanges + 1);
    }

    const handleDPChange = (e) => {
        setDP(e.target.files[0]);
        setDPURL(URL.createObjectURL(e.target.files[0]));
    }

    const handleSubmission = () => {
        setCreated(true);
        setTimeout(() => {
            setCreated(false);
        }, 1500);
        console.log("Form submitted")
    }

    const handleToggle = (value) => () => {
        const currentIndex = friendsChecked.indexOf(value);
        const newChecked = [...friendsChecked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        console.log(friends[newChecked[newChecked.length - 1]])

        setChecked(newChecked);
    };

    let nameError = (nameChanges > 0 && name === '')
    let noNameSubmitted = (name === '')
    let noFriendsAddedError = (friendsChecked.length === 0)
    let anyError = (nameError || noFriendsAddedError || noNameSubmitted)


    return (
        <div className='create-groups-page'>
            <h2 className='create-group-heading'>Create Group</h2>
            <form action='/create-group' method='post'>
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
                    <Button type='submit' onClick={handleSubmission} variant="contained" className='create-group-button' disabled={anyError} >Create Group</Button>
                </div>
            </form>
        </div>
    )
}

export default CreateGroups
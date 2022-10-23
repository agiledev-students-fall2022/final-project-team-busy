import React from 'react'
import './CreateGroups.css'
import { TextField } from '@mui/material'
import { useState } from 'react'
import { Avatar } from '@mui/material'
import { IconButton } from '@mui/material'
import GroupsIcon from '@mui/icons-material/Groups'
import { blue } from '@mui/material/colors'
import FriendList from '../create-events/FriendList'
import { Button } from '@mui/material'
// import { FormControl } from '@mui/material'


const CreateGroups = () => {
    const [name, setName] = useState('');
    const [dp, setDP] = useState();
    const [dpURL, setDPURL] = useState();
    const [nameChanges, setNameChanges] = useState(0);
    const [friendsChecked, setChecked] = useState([1]);

    let friends = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

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

        console.log(newChecked);

        setChecked(newChecked);
    };

    let nameError = (nameChanges > 0 && name === '')
    let noNameSubmitted = (name === '')
    let noFriendsAddedError = (friendsChecked.length === 0)
    let anyError = (nameError || noFriendsAddedError || noNameSubmitted)


    return (
        <div className='create-groups-page'>
            <h2 className='create-group-heading'>Create Group</h2>
            <IconButton className='dp-picker' color="primary" aria-label="upload picture" component="label">
                <input hidden accept="image/*" type="file" onChange={handleDPChange} />
                <Avatar alt="Group" src={dpURL} sx={{ width: 75, height: 75, bgcolor: blue[400], display: 'flex', justifyContent: 'center', alignItems: 'center' }}><GroupsIcon sx={{ width: 42.5, height: 42.5, ":hover": 'cursor: pointer', position: 'relative', bottom: '1.5%' }} /></Avatar>
            </IconButton>
            <TextField className='group-name' id="group-name" label="Enter Group Name" variant="outlined" required value={name} onChange={handleNameChange} inputProps={{ maxLength: 30 }} error={nameError} helperText={nameError ? 'Please enter group name' : ''}/>
            <p>Add friends to group {name}</p>
            <FriendList friends={friends} checked={friendsChecked} handleToggle={handleToggle}/>
            <div className="form-submit-buttons">
                <Button variant="outlined" className='cancel-button'>Cancel</Button>
                <Button type='submit' onClick={handleSubmission} variant="contained" className='create-group-button' disabled={anyError} >Create Group</Button>
            </div>
        </div>
    )
}

export default CreateGroups
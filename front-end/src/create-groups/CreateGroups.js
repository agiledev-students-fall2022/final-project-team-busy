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


const CreateGroups = () => {
    const [name, setName] = useState('');
    const [dp, setDP] = useState();

    const handleNameChange = (e) => {
        // console.log(e.target.value);
        setName(e.target.value);
    }

    const handleDPChange = (e) => {
        // console.log()
        setDP(URL.createObjectURL(e.target.files[0]));
    }

    return (
        <div className='create-groups-page'>
            <h2 className='create-group-heading'>Create Group</h2>
            <IconButton className='dp-picker' color="primary" aria-label="upload picture" component="label">
                <input hidden accept="image/*" type="file" onChange={handleDPChange}/>
                <Avatar alt="Group" src={dp} sx={{ width: 75, height: 75, bgcolor: blue[400], display: 'flex', justifyContent: 'center', alignItems: 'center' }}><GroupsIcon sx={{width: 42.5, height: 42.5, ":hover": 'cursor: pointer', position: 'relative', bottom: '1.5%'}}/></Avatar>
            </IconButton>
            <TextField className='group-name' id="group-name" label="Enter Group Name" variant="outlined" required value={name} onChange={handleNameChange} />
            <p>Add friends to group {name}</p>
            <FriendList />
            <div className="form-submit-buttons">
                    <Button variant="outlined" className='cancel-button'>Cancel</Button>
                    <Button variant="contained" className='create-group-button'>Create Group</Button>
                </div>
        </div>
    )
}

export default CreateGroups
import React from 'react'
import './CreateEvents.css'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DateTimePicker } from '@mui/x-date-pickers'
import { useState } from 'react';
import { TextField } from '@mui/material';
import FriendList from '../../Components/friends-list/FriendList';
import { Button } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import ConfirmationMessage from '../../Components/confirmation-messages/ConfirmationMessage';


const CreateEvents = props => {
    let currentDate = new Date().toLocaleString()
    const [startDate, setStartDate] = useState(currentDate)
    const [endDate, setEndDate] = useState(currentDate)
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [nameChanges, setNameChanges] = useState(0);
    const [friendsChecked, setFriendsChecked] = useState([1]);
    const [groupsChecked, setGroupsChecked] = useState([2]);
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

    let groups = [
        {
            "value": 0,
            "name": "Study Group",
            "bgcolor": "#f44336"
        },
        {
            "value": 1,
            "name": "Walking Group",
            "bgcolor": "#f44336"
        },
        {
            "value": 2,
            "name": "My Group",
            "bgcolor": "#e91e63"
        },
        {
            "value": 3,
            "name": "Your Group",
            "bgcolor": "#e91e63"
        },
        {
            "value": 4,
            "name": "This Group",
            "bgcolor": "#4caf50"
        },
        {
            "value": 5,
            "name": "That Group",
            "bgcolor": "#f44336"
        }]

    const handleToggleFriends = (value) => () => {
        const currentIndex = friendsChecked.indexOf(value);
        const newChecked = [...friendsChecked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        console.log(friends[newChecked[newChecked.length - 1]])

        setFriendsChecked(newChecked);
    };

    const handleToggleGroups = (value) => () => {
        const currentIndex = groupsChecked.indexOf(value);
        const newChecked = [...groupsChecked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        console.log(groups[newChecked[newChecked.length - 1]])

        setGroupsChecked(newChecked);
    };

    const handleSubmission = () => {
        setCreated(true);
        setTimeout(() => {
            setCreated(false);
        }, 1500);
        console.log("Form submitted")
    }

    // const displayDate = () => {
    //     console.log(date)
    // }
    // displayDate();

    const handleNameChange = (e) => {
        // console.log(e.target.value);
        setName(e.target.value);
        setNameChanges(nameChanges + 1);
    }

    const handleDescriptionChange = (e) => {
        // console.log(e.target.value);
        setDescription(e.target.value);
    }


    let nameError = (nameChanges > 0 && name === '')
    let noNameSubmitted = (name === '')
    let dateError = (startDate < currentDate || new Date(endDate) < new Date(startDate))
    let anyError = (nameError || noNameSubmitted || dateError)

    return (
        <div className='create-events-page'>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <h2 className="create-event-heading">Create Event</h2>
                <TextField id="event-name" label="Enter Event Name" variant="outlined" required value={name} onChange={handleNameChange} inputProps={{ maxLength: 50 }} error={nameError} helperText={nameError ? 'Please enter group name' : ''} />
                <TextField id="event-description" label="Enter Event Description" variant="outlined" multiline minRows={3} value={description} onChange={handleDescriptionChange} />
                <DateTimePicker
                    renderInput={(props) => <TextField {...props} />}
                    label="Event Start Date and Time"
                    value={startDate}
                    onChange={(newDate) => {
                        setStartDate(newDate);
                    }}
                    minDateTime={new Date()}
                />
                <DateTimePicker
                    renderInput={(props) => <TextField {...props} />}
                    label="Event End Date and Time"
                    value={endDate}
                    onChange={(newDate) => {
                        setEndDate(newDate);
                    }}
                    minDateTime={new Date(startDate)}
                />
                <p>Add friends to {name}</p>
                <FriendList friends={friends} checked={friendsChecked} handleToggle={handleToggleFriends} setChecked={setFriendsChecked} />
                <p>Add Group to {name}</p>
                <FriendList friends={groups} checked={groupsChecked} handleToggle={handleToggleGroups} setChecked={setGroupsChecked} />
                <ConfirmationMessage relation={"Event"} confirmed={created} />
                <div className="form-submit-buttons">
                    <Button variant="outlined" className='cancel-button' component={Link} to="/events">Cancel</Button>
                    <Button type='submit' disabled={anyError} onClick={handleSubmission} variant="contained" className='create-event-button'>Create Event</Button>
                </div>
            </LocalizationProvider>
        </div>
    )
}

export default CreateEvents
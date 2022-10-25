import React from 'react'
import './CreateEvents.css'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DateTimePicker } from '@mui/x-date-pickers'
import { useState } from 'react';
import { TextField } from '@mui/material';
import FriendList from './FriendList';
import { Button } from '@mui/material'


const CreateEvents = props => {
    let currentDate = new Date().toLocaleString()
    const [date, setDate] = useState(currentDate)
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [nameChanges, setNameChanges] = useState(0);
    const [friendsChecked, setChecked] = useState([1]);

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

    const handleSubmission = () => {
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
    let dateError = (date < new Date());
    let noFriendsAddedError = (friendsChecked.length === 0)
    let anyError = (nameError || noFriendsAddedError || noNameSubmitted || dateError)

    return (
        <div className='create-events-page'>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <h2 className="create-event-heading">Create Event</h2>
                <TextField id="event-name" label="Enter Event Name" variant="outlined" required value={name} onChange={handleNameChange} inputProps={{ maxLength: 50 }} error={nameError} helperText={nameError ? 'Please enter group name' : ''} />
                <TextField id="event-description" label="Enter Event Description" variant="outlined" multiline minRows={3} value={description} onChange={handleDescriptionChange} />
                <DateTimePicker
                    renderInput={(props) => <TextField {...props} />}
                    label="Date and Time"
                    value={date}
                    onChange={(newDate) => {
                        setDate(newDate);
                    }}
                />
                <p>Add friends to {name}</p>
                <FriendList friends={friends} checked={friendsChecked} handleToggle={handleToggle} setChecked={setChecked} />
                <div className="form-submit-buttons">
                    <Button variant="outlined" className='cancel-button'>Cancel</Button>
                    <Button type='submit' disabled={anyError} onClick={handleSubmission} variant="contained" className='create-event-button'>Create Event</Button>
                </div>
            </LocalizationProvider>
        </div>
    )
}

export default CreateEvents
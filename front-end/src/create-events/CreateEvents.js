import React from 'react'
import './CreateEvents.css'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DateTimePicker } from '@mui/x-date-pickers'
import { useState } from 'react';
import { TextField } from '@mui/material';

const CreateEvents = props => {
    let currentDate = new Date().toLocaleString()
    const [date, setDate] = useState(currentDate)
    const [name, setName] = useState('');

    // const displayDate = () => {
    //     console.log(date)
    // }
    // displayDate();

    const handleNameChange = (e) => {
        // console.log(e.target.value);
        setName(e.target.value);
    }

    return (
        <div className='create-events-page'>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <h2 className="create-event-heading">Create Event</h2>
                <TextField id="event-name" label="Enter Event Name" variant="standard" required value={name} onChange={handleNameChange} />
                <TextField id="event-description" label="Enter Event Description" variant="outlined" multiline minRows={3} />
                <DateTimePicker
                    renderInput={(props) => <TextField {...props} />}
                    label="Date and Time"
                    value={date}
                    onChange={(newDate) => {
                        setDate(newDate);
                    }}
                />
                <p>Add friends to {name}</p>
            </LocalizationProvider>
        </div>
    )
}

export default CreateEvents
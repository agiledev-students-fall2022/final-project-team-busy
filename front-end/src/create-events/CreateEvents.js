import React from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DateTimePicker } from '@mui/x-date-pickers'
import { useState } from 'react';
import { TextField } from '@mui/material';

const CreateEvents = props => {
    let currentDate = new Date().toLocaleString()
    const [date, setDate] = useState(currentDate)

    // const displayDate = () => {
    //     console.log(date)
    // }
    // displayDate();

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            {/* <h2 className="create-event-heading">Create Event</h2> */}
            <DateTimePicker
                renderInput={(props) => <TextField {...props} />}
                label="Date and Time"
                value={date}
                onChange={(newDate) => {
                    setDate(newDate);
                }}
            />
        </LocalizationProvider>

    )
}

export default CreateEvents
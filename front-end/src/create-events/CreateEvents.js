import React from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';


const CreateEvents = props => {
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <h2 className="create-event-heading">Create Event</h2>
        </LocalizationProvider>
    )
}

export default CreateEvents
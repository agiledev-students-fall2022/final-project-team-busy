import TextField from '@mui/material/TextField'; 
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import {useState} from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';



const AddPersonalCalendar = () =>{


    return(

        <div className='intro'>
            <h1 className='heading'>New Event</h1>

            <div className='container'>
                <TextField id = "text" label="Enter Event Name" variant="outlined" />
                <TextField id = "text" label="Add Description" variant="outlined" />
                <TextField id = "text" label="Date (MM/DD/YYYY)" variant="outlined" />
                <TextField id = "text" label="Start Time  " variant="outlined" />
                <TextField id = "text" label="End Time" variant="outlined" />
            </div>

            


            
        </div>


        

        


    )



}

export default AddPersonalCalendar;
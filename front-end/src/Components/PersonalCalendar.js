import * as React from 'react';
import {useState} from 'react'; 
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import Calendar from 'react-calendar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './PersonalCalendar.css';

const PersonalCalendar = (props) => {

  

  return (
    <div> 
      <Calendar onChange={props.onChange} value={props.date} /> 
    </div>

  )
}


export default PersonalCalendar; 
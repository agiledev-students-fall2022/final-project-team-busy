import React from 'react'
import './AddExtCal.css'
import { Button, Select, MenuItem } from '@mui/material'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const AddExtCal = () => {
  const [extCal, setExtCal] = useState('')
  const [replace, setReplace] = useState(false);

  const handleOption = () => {
    if (replace === false) setReplace(true);
    else setReplace(false);
  }

  const handleSubmission = () => {
    console.log("Calendar Exported")
  }

  const handleCalSubmission = (e) => {
    setExtCal(URL.createObjectURL(e.target.files[0]))
    console.log("Calendar Loaded");
  }

  let anyError = (extCal === '')

  return (
    <div className='add-external-calendar'>
      <h2 className='add-external-calendar-heading'>Add External Calendar</h2>
      <div className='add-external-calendar-button-container'>
        <Button className='add-external-calendar-button' variant="contained" component="label" sx={{ textAlign: 'center', fontWeight: 'bold' }}>
          Add External Calendar<br></br>
          Supports .ics files
          <input hidden accept="text/calendar" multiple type="file" onChange={handleCalSubmission} />
        </Button>
      </div>
      <p className='export-options'>Export Options: </p>
      <Select
        labelId="calendar-export-options"
        id="calendar-export-options"
        value={replace}
        label="Age"
        onChange={handleOption}
      >
        <MenuItem value={false}>Add Events to Personal Calendar</MenuItem>
        <MenuItem value={true}>Replace Personal Calendar</MenuItem>
      </Select>
      <div className="form-submit-buttons">
        <Button variant="outlined" className='cancel-button' component={Link} to="/profile">Cancel</Button>
        <Button type='submit' onClick={handleSubmission} variant="contained" className='export-cal-button' disabled={anyError} >Create Group</Button>
      </div>
    </div>
  )
}

export default AddExtCal
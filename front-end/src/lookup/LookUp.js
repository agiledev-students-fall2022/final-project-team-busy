import * as React from 'react';
import {useState} from 'react';
import TextField from '@mui/material/TextField';
import './lookup.css'; 
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';


const LookUp = () => {
    const [search, setSearch] = useState("Search Users")

    const handleClick = (event, newSearch) => [
        setSearch(newSearch)

    ]

    return (
        <div className='intro'>
            <h1 className='heading'>
                Look Up
            </h1>
            <ToggleButtonGroup color = "primary" value = {search} exclusive onChange = {handleClick}>
                <ToggleButton value = "Search Users" sx = {{width: 220}}>Users</ToggleButton>
                <ToggleButton value = "Search Groups" sx = {{width: 220}}>Groups</ToggleButton>
            </ToggleButtonGroup>
            <TextField fullWidth id = "outlined-basic" label = {search} variant="outlined" sx = {{mt: 1}} ></TextField>
            
        </div>



    )
} 

export default LookUp;
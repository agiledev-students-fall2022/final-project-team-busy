import * as React from 'react';
import {useState} from 'react';

import './lookup.css'; 
import ToggleButton from '../Components/ToggleButton';
import SearchBar from '../Components/SearchBar';
import { IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from "react-router-dom";
import { Button } from '@mui/material'
import TextField from '@mui/material/TextField'; 



const LookUp = () => {

    const [state, setState] = useState("Searching Users")


    return(
        
        <div className = "intro"> 
            <div className='home-head'>
                <div>
                    <h2 className='heading'>Look Up</h2>
                </div>
                <div className='offset'>
                    <IconButton aria-label="home" component={Link} to="/home">
                        <HomeIcon sx={{height: 45, width: 45, ":hover": {cursor: 'pointer'}}}/>
                    </IconButton>
                </div>
            </div>
            

            <div> 
                <Button onClick = {() => setState("Searching Users")} className = 'user' variant="contained">Users</Button>
                <Button onClick = {() => setState("Searching Groups")} className = 'groups' variant="contained">Groups</Button>
            </div>

            <div className = 'searching' >
                <TextField id="outlined-basic" label={state} variant="outlined" sx={{height:'20'}} />
            </div>


        </div>


    )

} 

export default LookUp;
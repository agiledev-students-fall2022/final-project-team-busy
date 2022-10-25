import * as React from 'react';
import {useState} from 'react';

import './lookup.css'; 
import ToggleButton from '../Components/ToggleButton';
import SearchBar from '../Components/SearchBar';
import { IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from "react-router-dom";


const LookUp = () => {

    const [state, setState] = useState("Searching Users")

    const selectUser = () => setState("Searching Users")

    const selectGroups = () => setState("Searching Groups")
    

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
                <ToggleButton onClick = {selectUser} text = "Users" ></ToggleButton>
                <ToggleButton onClick = {selectGroups} text = "Groups" ></ToggleButton>
            </div>


            <SearchBar placeholder = {state}  ></SearchBar> 



        </div>


    )

} 

export default LookUp;
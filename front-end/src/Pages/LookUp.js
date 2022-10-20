import * as React from 'react';
import {useState} from 'react';
import TextField from '@mui/material/TextField';
import './lookup.css'; 
import ToggleButton from '../Components/ToggleButton';
import SearchBar from '../Components/SearchBar';


const LookUp = () => {

    const [state, setState] = useState("Searching Users")

    const selectUser = () => setState("Searching Users")

    const selectGroups = () => setState("Searching Groups")
    

    return(
        

        <div> 
            <h1 className='heading'>Lookup Profiles</h1>

            <div> 
                <ToggleButton onClick = {selectUser} text = "Users" ></ToggleButton>
                <ToggleButton onClick = {selectGroups} text = "Groups" ></ToggleButton>
            </div>


            <SearchBar placeholder = {state}  ></SearchBar> 



        </div>


    )

} 

export default LookUp;
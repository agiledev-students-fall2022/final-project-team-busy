import React from 'react';
import './ToggleButton.css';

const ToggleButton = ({onClick, text}) => {
    return(
    <button onClick = {onClick}>{text}</button>
    )
}

export default ToggleButton; 
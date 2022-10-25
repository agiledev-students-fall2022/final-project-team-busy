import React from 'react';
import './ToggleButton.css';

const ToggleButton = ({onClick, text}) => {
    return(
    <button className = "ripple" onClick = {onClick}>{text}</button>
    )
}

export default ToggleButton; 
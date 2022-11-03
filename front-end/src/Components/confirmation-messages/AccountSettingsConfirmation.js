import React from 'react'
import './AccountSettingsConfirmation.css'

const AccountSettingsConfirmation = ({ changesSaved }) => {
    if (changesSaved) {
        return (
            <span className='confirmation-message'>&#9989; Changes Saved Successfully!</span>
        )
    }
}

export default AccountSettingsConfirmation
import React from 'react'
import './ConfirmationMessage.css'

const ConfirmationMessage = ({relation, confirmed}) => {
  if (confirmed) {
    return (
        <span className='confirmation-message'>&#9989; {relation} created successfully</span>
    )
  }
}

export default ConfirmationMessage
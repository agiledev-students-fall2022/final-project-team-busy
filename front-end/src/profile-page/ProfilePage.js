import React from 'react'
import './ProfilePage.css'
import { Avatar } from '@mui/material'
import { deepOrange } from '@mui/material/colors'
import ProfilePic from './profile-page-dp.jpeg'
import GroupsIcon from '@mui/icons-material/Groups'
import { Button } from '@mui/material'

const ProfilePage = () => {
    return (
        <div className='profile-page'>
            <h2 className='profile-heading'>Profile</h2>
            <span className='username'>@username</span>
            {/* <div className='profile-pic-container'>
                <img src={ProfilePic} alt='sample profile pic' />
            </div> */}
            <div className='profile-pic-container'>
                <Avatar alt="Profile Picture" src={ProfilePic} sx={{ width: 175, height: 175, bgcolor: deepOrange[500], display: 'flex', justifyContent: 'center', alignItems: 'center' }}><GroupsIcon sx={{ width: 42.5, height: 42.5, position: 'relative', bottom: '1.5%' }} /></Avatar>
            </div>
            <h4 className='bio-heading'>Bio: </h4>
            <section className='bio-text'>Who lives in a pineapple under the sea?
                SpongeBob SquarePants!
                Absorbent and yellow and porous is he
                SpongeBob SquarePants!
                If nautical nonsense be something you wish
                SpongeBob SquarePants!
                Then drop on the deck and flop like a fish!
                SpongeBob SquarePants!
            </section>
            <div className='external-buttons'>
            <Button variant="contained" className='account-settings-button'>Account Settings</Button>
            <Button variant="contained" className='add-external-calendar-button'>Add External Calendar</Button>
            </div>
        </div>
    )
}

export default ProfilePage
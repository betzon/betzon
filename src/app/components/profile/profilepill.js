import React from 'react'
import Profile from './profile'
import AvatarGroup from '@mui/material/AvatarGroup';
import { Button, Chip } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const ProfilePill = (props) => {

    return (
        <Button
            color='neutral'
            variant='outlined'
            sx={{
                borderRadius: '100px',
                paddingLeft:'4px',
                paddingRight:'4px'
            }}
        >
            <AvatarGroup max={props.max}>
                <Profile size={props.size} />
                <Profile size={props.size} />
                <Profile size={props.size} />
                <Profile size={props.size} />
            </AvatarGroup>
            <ArrowDropDownIcon color='white' sx={{
                color: 'white'
            }} />
        </Button>
    )
}

export default ProfilePill
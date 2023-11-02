'use client'
import React, { useState } from 'react'
import Profile from './profile'
import AvatarGroup from '@mui/material/AvatarGroup';
import { Avatar, Button, Chip, ListItemIcon, Menu, MenuItem, Stack, Typography } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const ProfilePill = (props) => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (

        <div>
            <Button
                onClick={handleClick}
                color='neutral'
                variant='outlined'
                sx={{
                    borderRadius: '100px',
                    padding: '4px 6px'
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
            <Menu
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >

                <MenuItem
                    onClick={handleClose}
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-start',  // Align to the left
                        alignItems: 'center',
                        gap: '12px'
                    }}>
                    <Profile size={props.size} />
                    <Typography variant='caption'>username</Typography>
                </MenuItem>


                <MenuItem
                    onClick={handleClose}
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-start',  // Align to the left
                        alignItems: 'center',
                        gap: '12px'
                    }}>
                    <Profile size={props.size} />
                    <Typography variant='caption'>Available</Typography>
                </MenuItem>
            </Menu>

        </div>
    )


}

export default ProfilePill
"use client"
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useTheme } from '@emotion/react';
import HomeIcon from '@mui/icons-material/Home';
import HandshakeIcon from '@mui/icons-material/Handshake';
import AddIcon from '@mui/icons-material/Add';
import SavingsIcon from '@mui/icons-material/Savings';
import PersonIcon from '@mui/icons-material/Person';
import { useRouter } from 'next/navigation';

const MobileBottomNavigation = ({pathname}) => {

    const [value, setValue] = useState(pathname);

    const theme = useTheme()

    const router = useRouter()

    const changeScreensHandler = (event, newValue) => {
        console.log(newValue)
        setValue(newValue);
        setTimeout(() => {
            router.push(newValue)
        }, 200); // adjust the delay as needed
    }

    console.log(value)

    return (
        <Box sx={{
            display: {
                xs: 'inline-block',
                sm: 'inline-block',

            },
            position: 'fixed',
            bottom: 0,
            left: 0,
            boxSizing: 'border-box',
            width: '100%'
        }}>
            <BottomNavigation
                sx={{
                    borderTop: `1px solid ${theme.palette.dark.main}`,
                    position: 'relative',
                    width: '100%'
                }}
                showLabels
                value={value}
                onChange={changeScreensHandler}
            >
                <BottomNavigationAction value='/dashboard' label="Home" icon={<HomeIcon />} />
                <BottomNavigationAction value='/wagers' label="Wagers" icon={<HandshakeIcon />} />
                <BottomNavigationAction value='/create' label="Create" icon={<AddIcon />} />
                <BottomNavigationAction value='/chipbank' label="Bank" icon={<SavingsIcon />} />
                <BottomNavigationAction value='/profile' label="Profile" icon={<PersonIcon />} />
            </BottomNavigation>
        </Box>
    );
}

export default MobileBottomNavigation;
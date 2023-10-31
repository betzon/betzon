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

const MobileBottomNavigation = () => {

    const [value, setValue] = useState(0);

    const theme = useTheme()

    return (
        <Box sx={{
            position:'fixed',
            bottom:0,
            left:0,
            boxSizing:'border-box',
            width:'100%'
        }}>
            <BottomNavigation
                sx={{
                    borderTop: `1px solid ${theme.palette.dark.main}`,
                    position:'relative',
                    width:'100%'
                }}
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction label="Home" icon={<HomeIcon />} />
                <BottomNavigationAction label="Wagers" icon={<HandshakeIcon />} />
                <BottomNavigationAction label="Create" icon={<AddIcon />} />
                <BottomNavigationAction label="Bank" icon={<SavingsIcon />} />
                <BottomNavigationAction label="Profile" icon={<PersonIcon />} />
            </BottomNavigation>
        </Box>
    );
}

export default MobileBottomNavigation;
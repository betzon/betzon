"use client"
import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { useTheme } from '@emotion/react';
import MenuMobileDropDown from './main-mobile-drawer';
import { useRouter } from 'next/navigation';

const pages = ['ABOUT', 'SUPPORT'];

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const MainNavigation = () => {

    const theme = useTheme()

    const router = useRouter()

    const [anchorElNav, setAnchorElNav] = useState(null);

    const [anchorElUser, setAnchorElUser] = useState(null);

    const [toggleMobileMenu, setToggleMobileMenu] = useState(false);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const toggleDrawer = () => {
        setToggleMobileMenu(!toggleMobileMenu)
    };

    return (
        <>
            <MenuMobileDropDown toggle={toggleMobileMenu} toggleDrawer={toggleDrawer} />
            <AppBar position="fixed">
                <Container maxWidth="xl" sx={{
                    backgroundColor: "#000000"
                }}>
                    <Toolbar disableGutters>

                        <Typography
                            variant="h6"
                            noWrap
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontWeight: 700,
                                color: 'inherit',
                            }}
                        >
                            BETZON
                        </Typography>


                        <Typography
                            variant="h5"
                            sx={{
                                display: { xs: 'flex', md: 'none' },
                                color: 'inherit',
                                fontWeight: 700,
                                flexGrow: 1,
                            }}
                        >
                            BETZON
                        </Typography>



                        <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={toggleDrawer}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                        </Box>



                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    //  onClick={toggleDrawer}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    {page}
                                </Button>
                            ))}
                        </Box>

                        <Box sx={{
                            display: { xs: 'none', md: 'flex' }
                        }}>

                            <Button
                                sx={{
                                    fontWeight: 700
                                }}
                                onClick={() => router.push('/signup')}
                                color='neutral'
                                variant='text'>
                                SIGN UP
                            </Button>

                            <Button
                                onClick={() => router.push('/login')}
                                sx={{
                                    marginLeft: '12px',
                                    fontWeight: 700
                                }}
                                variant='contained'>
                                LOGIN
                            </Button>

                        </Box>

                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
}

export default MainNavigation;
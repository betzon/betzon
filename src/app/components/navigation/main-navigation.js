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
import Link from 'next/link';
import Image from 'next/image'
import logo from "../../assets/betzon_logo.png"

const pages = [
    /*
    {
        title: 'ABOUT',
        path: '/about'
    },
    {
        title: 'SUPPORT',
        path: '/support'
    }*/
];

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

    const routeHandler = (path) => {
        router.push(path)
    }

    return (
        <AppBar position="absolute" sx={{
            background: 'transparent',
            boxShadow: 'none'
            //borderBottom: `1px solid ${theme.palette.primary.main}` 
        }}>
            <MenuMobileDropDown toggle={toggleMobileMenu} toggleDrawer={toggleDrawer} />
            <Container maxWidth="xl" sx={{
                backgroundColor: "transparent"
            }}>
                <Toolbar disableGutters>
                    <Box sx={{
                        ///background: theme.palette.primary.main,
                        border: `3px solid ${theme.palette.primary.main}`,
                        background: "black",
                        borderRadius: '8px 8px 8px 0',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '48px',
                        height: '48px'
                    }}>
                        <Image src={logo} height={24} />
                    </Box>

                    <Link href='/' className='no-link-decor'>
                        <Typography
                            onClick={() => routeHandler('/')}
                            variant="h6"
                            noWrap
                            sx={{
                                ml: 1,
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontWeight: 700,
                                color: 'white'
                            }}
                        >
                            BETZON
                        </Typography>
                    </Link>

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
                            sx={{
                                padding: 0
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Box>



                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={() => routeHandler(page.path)}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page.title}
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{
                        display: { xs: 'none', md: 'flex' }
                    }}>
                        <Tooltip title="Coming Soon!">
                            <span>
                                <Button
                                    sx={{
                                        fontWeight: 700
                                    }}
                                    disabled
                                    onClick={() => router.push('/signup')}
                                    color='neutral'
                                    variant='text'>
                                    SIGN UP
                                </Button>
                            </span>
                        </Tooltip>

                        <Tooltip title="Coming Soon!">
                            <span>
                                <Button
                                    disabled
                                    onClick={() => router.push('/login')}
                                    sx={{
                                        marginLeft: '12px',
                                        fontWeight: 700
                                    }}
                                    variant='contained'>
                                    LOGIN
                                </Button>
                            </span>
                        </Tooltip>

                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default MainNavigation;
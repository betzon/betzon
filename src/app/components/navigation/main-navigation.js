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
import logo from "../../assets/mb.png"

const pages = [
    {
        title: 'Home',
        path: '/'
    },
    {
        title: 'Help Center',
        path: '/help-center'
    }
];

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const MainNavigation = () => {

    const theme = useTheme()

    const router = useRouter()

    const [toggleMobileMenu, setToggleMobileMenu] = useState(false);

    const toggleDrawer = () => {
        setToggleMobileMenu(!toggleMobileMenu)
    };

    const routeHandler = (path) => {
        router.push(path)
    }

    return (
        <AppBar position="absolute" sx={{
            background: 'black',
            boxShadow: 'none'
            //borderBottom: `1px solid ${theme.palette.primary.main}` 
        }}>
            <MenuMobileDropDown toggle={toggleMobileMenu} toggleDrawer={toggleDrawer} />
            <Container maxWidth="xl" sx={{
                backgroundColor: "transparent"
            }}>
                <Toolbar disableGutters>
                    <Box sx={{
                        flexGrow: { xs: 1, md: 0, lg: 0, xl: 0 },
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center'
                    }}>
                        {
                            /*
                            <Box sx={{
                                ///background: theme.palette.primary.main,
                                border: `3px solid ${theme.palette.primary.main}`,
                                background: "black",
                                borderRadius: '8px 8px 8px 0',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '40px',
                                height: '40px'
                            }}>
                                <Image src={logo} height={20} />
                            </Box>
                            */
                        }
                        <Image src={logo} height={40} />

                        <Typography
                            variant="h4"
                            noWrap
                            fontSize={24}
                            fontWeight={900}
                            sx={{
                                ml: 1,
                                color: 'white'
                            }}
                        >
                            BETZON
                        </Typography>

                    </Box>

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

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, ml: 2 }}>
                        {pages.map((page, index) => (
                            <Button
                                key={index}
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
                        {

                            <Button
                                onClick={() => window.open("https://apps.apple.com/us/app/betzon/id6550891419")}
                                sx={{
                                    marginLeft: '12px',
                                    fontWeight: 700
                                }}
                                variant='contained'>
                                AVAILABLE ON APP STORE
                            </Button>
                        }


                        {
                            /*
<Button
                            onClick={() => router.push('#waitlist')}
                            sx={{
                                marginLeft: '12px',
                                fontWeight: 700
                            }}
                            variant='contained'>
                            Join Waitlist
                        </Button>
                            */
                        }
                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default MainNavigation;
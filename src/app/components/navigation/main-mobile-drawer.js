"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { IconButton, Stack, Tooltip, Typography } from '@mui/material';
import { useTheme } from '@emotion/react';
import CloseIcon from '@mui/icons-material/Close';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useRouter } from 'next/navigation';

import Image from 'next/image'
import logo from "../../assets/mb.png"

const pages = [
    {
        title: 'Home',
        path: '/'
    }
    ,
    {
        title: 'Help Center',
        path: '/help-center'
    }

    /*
    ,
    {
        title: 'SUPPORT',
        path: '/support'
    }
    */
];

const MenuMobileDropDown = ({ toggle, toggleDrawer }) => {

    const theme = useTheme()

    const router = useRouter()

    const isLargeWidth = useMediaQuery(theme.breakpoints.up('md'));

    React.useEffect(() => {
        if (isLargeWidth && toggle === true) {
            toggleDrawer()
        }
    }, [isLargeWidth]);

    const redirectToAnotherSite = () => {
        window.open('https://app.motobookie.com/signup', '_blank');
    };
    const redirectToAnotherSiteLogin = () => {
        window.open('https://app.motobookie.com', '_blank');
    };

    const list = (anchor) => (
        <Box
            sx={{
                width: 'auto',
                background: "black",
                position: 'relative'
            }}
            role="presentation"
            onClick={toggleDrawer}
            onKeyDown={toggleDrawer}
        >

            <List>

                <ListItem sx={{
                    display: 'flex',
                    justifyContent: 'space-between'
                }}>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        gap: 1
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
                        <Box sx={{
                            ///background: theme.palette.primary.main,
                            background: "black",
                            borderRadius: '8px 8px 8px 0',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Image src={logo} height={30} />
                        </Box>
                        <Typography sx={{ fontWeight: 700 }} variant='h6'>Motobookie</Typography>
                    </Box>

                    <IconButton>
                        <CloseIcon />
                    </IconButton>

                </ListItem>

                {pages.map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton onClick={() => router.push(text.path)}>
                            <ListItemText primary={text.title} sx={{ fontWeight: 700 }} />
                        </ListItemButton>
                    </ListItem>
                ))}

            </List>

            <Divider />

            <List>

                <ListItem >
                    <Button
                        sx={{
                            width: '100%',
                            fontWeight: 700
                        }}
                        onClick={() => redirectToAnotherSiteLogin()}
                        color='primary'
                        variant='contained'
                    >
                        LOGIN
                    </Button>
                </ListItem>


                <ListItem >
                    <Button
                        sx={{
                            width: '100%',
                            fontWeight: 700
                        }}
                        color='neutral'
                        variant='text'
                        onClick={() => redirectToAnotherSite()}
                    >
                        CREATE AN ACCOUNT
                    </Button>

                </ListItem>


            </List>

        </Box >
    );

    return (
        <div>
            {['top'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Drawer
                        anchor={anchor}
                        open={toggle}
                        sx={{
                            display: { lg: 'none' }
                        }}
                        onClose={toggleDrawer}
                    >
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))
            }
        </div >
    );
}

export default MenuMobileDropDown
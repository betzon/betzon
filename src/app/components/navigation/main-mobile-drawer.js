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
import logo from "../../assets/betzon_logo.png"

const MenuMobileDropDown = ({ toggle, toggleDrawer }) => {

    const theme = useTheme()

    const router = useRouter()

    const isLargeWidth = useMediaQuery(theme.breakpoints.up('md'));

    React.useEffect(() => {
        if (isLargeWidth && toggle === true) {
            toggleDrawer()
        }
    }, [isLargeWidth]);



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

                        <Typography sx={{ fontWeight: 700 }} variant='h6'>BETZON</Typography>
                    </Box>

                    <IconButton>
                        <CloseIcon />
                    </IconButton>

                </ListItem>

                {[].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemText primary={text} sx={{ fontWeight: 700 }} />
                        </ListItemButton>
                    </ListItem>
                ))}

            </List>

            <Divider />

            <List>

                <ListItem >
                    <Tooltip title="Coming Soon!">
                        <span style={{
                            width: '100%'
                        }}>
                            <Button
                                sx={{
                                    width: '100%',
                                    fontWeight: 700
                                }}
                                disabled
                                onClick={() => router.push('/login')}
                                color='primary'
                                variant='contained'
                            >
                                LOGIN
                            </Button>
                        </span>
                    </Tooltip>
                </ListItem>


                <ListItem >
                    <Tooltip title="Coming Soon!">
                        <span style={{
                            width: '100%'
                        }}>
                            <Button
                                sx={{
                                    width: '100%',
                                    fontWeight: 700
                                }}
                                color='neutral'
                                variant='text'
                                disabled
                                onClick={() => router.push('/signup')}
                            >
                                CREATE AN ACCOUNT
                            </Button>
                        </span>
                    </Tooltip>

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
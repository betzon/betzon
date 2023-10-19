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
import { IconButton, Typography } from '@mui/material';
import { useTheme } from '@emotion/react';
import CloseIcon from '@mui/icons-material/Close';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useRouter } from 'next/navigation';


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

                    <Typography sx={{ fontWeight: 700 }} variant='h6'>BETZON</Typography>

                    <IconButton>
                        <CloseIcon />
                    </IconButton>

                </ListItem>

                {['HOME', 'ABOUT', 'SUPPORT'].map((text, index) => (
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

                    <Button
                        sx={{
                            width: '100%',
                            fontWeight: 700
                        }}

                        onClick={() => router.push('/login')}
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
                        onClick={() => router.push('/signup')}
                    >
                        CREATE AN ACCOUNT
                    </Button>

                </ListItem>


                <Divider />
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
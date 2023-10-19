import React from 'react'
import Layout from '../layout'
import { Typography, Box, IconButton } from '@mui/material'
import SettingsIcon from '@mui/icons-material/Settings';
import InboxIcon from '@mui/icons-material/Inbox';
import NotificationsIcon from '@mui/icons-material/Notifications';

const DashboardHeader = (props) => {
    return (
        <Layout>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >

                <IconButton
                    sx={{
                        position: 'absolute',
                        left: 0
                    }}
                >
                    <SettingsIcon fontSize='small' />
                </IconButton>


                <Typography
                    variant='h6'
                    sx={{
                        flexGrow: 1,
                        textAlign: 'center'
                    }}>
                    {props.title}
                </Typography>

                <Box
                    sx={{
                        position: 'absolute',
                        right: 0
                    }}
                >
                    <IconButton>
                        <NotificationsIcon fontSize='small' />
                    </IconButton>
                    <IconButton>
                        <InboxIcon fontSize='small' />
                    </IconButton>
                </Box>

            </Box>

        </Layout>
    )
}

export default DashboardHeader
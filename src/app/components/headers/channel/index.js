import React from 'react'
import Layout from '../layout'
import { Box, IconButton } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PendingIcon from '@mui/icons-material/Pending';

const ChannelHeader = () => {
    return (
        <Layout>
            <Box
                sx={{
                    position: 'relative'
                }}
            >

                <IconButton sx={{
                    position: '',
                    left: 0
                }}>
                    <ArrowBackIcon />
                </IconButton>


                <IconButton sx={{
                    position: '',
                    float: 'right',
                    right: 0
                }}>
                    <PendingIcon />
                </IconButton>

            </Box>
        </Layout>
    )
}

export default ChannelHeader
import { Box, Typography } from '@mui/material'
import React from 'react'

const page = () => {
    return (

        <Box id='page-header' sx={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            //    background: 'red'
        }}>

            <Typography variant='h6'>Leave Fantasy in the dust.</Typography>

            <Typography
                component='h1'
                variant='h2'
                sx={{
                    
                    fontWeight: 700
                }}>
                IT&apos;S ON!
            </Typography>


            <Typography variant='body2'>No more house bets. Wager with friends.</Typography>

        </Box>
    )
}

export default page
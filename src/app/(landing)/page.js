"use client"
import React from 'react'
import { Box, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@emotion/react';

const LandingPage = () => {

    const theme = useTheme();

    const isMediumUp = useMediaQuery(theme.breakpoints.up('md'));

    const variant = isMediumUp ? 'h1' : 'h3';

    return (

        <Box id='page-header' sx={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center'
            //    background: 'red'
        }}>

            <Typography variant='h6'>Leave Fantasy in the dust.</Typography>

            <Typography
                component='h1'
                variant={variant}
                sx={{

                    fontWeight: 700
                }}>
                IT&apos;S ON!
            </Typography>


            <Typography variant='body2'>No more house bets. Wager with friends.</Typography>

        </Box>
    )
}

export default LandingPage
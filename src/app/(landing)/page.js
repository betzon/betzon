"use client"
import React from 'react'
import { Box, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@emotion/react';

const LandingPage = () => {

    const theme = useTheme();

    const isMediumUp = useMediaQuery(theme.breakpoints.up('md'));

    const variant = isMediumUp ? 'h1' : 'h3';
    /*
    ALLOW PEOIPLE TO CHECK OUT THE APP WUITHOUT CREATING AN ACCOUNT BUT LIMIT A LOT OF THINGS
    */
    return (
        <Box id='page-header' sx={{
            //height: 'calc(100vh - 72px)',
            left: 0,
            display: 'flex',
            paddingTop: '24px',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            background: 'red'
        }}>


            <Box sx={{
                //background: 'blue',
                width: '100%',
                textAlign: 'left'
            }}>
                <Typography
                    component='h1'
                    variant={variant}
                    sx={{

                        fontWeight: 700
                    }}>
                    Take your friends money on any game.
                </Typography>
            </Box>


        </Box>
    )
}
//IT&apos;S ON!
export default LandingPage


/*

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

*/
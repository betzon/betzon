"use client"
import React from 'react'
import { Box, Button, Stack, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@emotion/react';
import Phone from '../components/phone';
import { useRouter } from 'next/navigation';

const HomeHeaderSection = () => {

    const router = useRouter()

    const theme = useTheme();

    const isMediumUp = useMediaQuery(theme.breakpoints.up('lg'));

    const variant = isMediumUp ? 'h1' : 'h3';
    /*
    ALLOW PEOIPLE TO CHECK OUT THE APP WUITHOUT CREATING AN ACCOUNT BUT LIMIT A LOT OF THINGS
    */

    const handlerButton = (event) => {
        event.preventDefault()
        router.push('#waitlist-form')
    }

    return (
        <Box sx={{
            left: 0,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            paddingBottom: '144px',
        }}>
            <Box id='page-header' sx={{
                //height: 'calc(100vh - 72px)',
                left: 0,
                height: { xs: 'auto', sm: 'auto', md: '100vh', lg: '100vh' },
                display: { xs: 'flex', sm: 'flex', md: 'grid', lg: 'grid' },
                paddingTop: { xs: '144px', sm: '144px', md: '0', lg: '0' },
                flexDirection: 'column',
                gridTemplateColumns: '1fr 1fr',
                justifyContent: 'center',
                columnGap: '24px'
            }}>

                <Stack
                    spacing={{ xs: 1, sm: 1, md: 3, lg: 3 }}
                    sx={{
                        alignSelf: 'center',
                        textAlign: { xs: 'center', sm: 'center', md: 'left', lg: 'left' },
                    }}>
                    <Typography
                        component='h1'
                        variant={variant}
                        sx={{

                            fontWeight: 700
                        }}>
                        Social Media meets Sports Betting.
                    </Typography>

                    <Typography
                        color={theme.palette.dark.light}
                        variant="h5">
                        No more house betting. Wager with friends. Keep 100% of your winnings.
                    </Typography>

                    <Box sx={{
                        width: '100%',
                        paddingTop: { xs: '24px', sm: '24px', md: '0', lg: '0' }
                    }}>
                        <Button variant="contained" sx={{ width: 'fit-content' }} onClick={handlerButton}>
                            Join the waitlist today
                        </Button>
                    </Box>
                </Stack>

                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    paddingTop: '72px'
                }}>
                    <Box sx={{
                        width: 'fit-content',
                        borderRadius: '24px',
                        justifySelf: 'center',
                        alignSelf: 'center',
                        border: '4px solid gray',
                        overflow: 'hidden'
                    }}>
                        <Phone />
                    </Box>
                </Box>

            </Box>
        </Box >
    )
}
//IT&apos;S ON!
export default HomeHeaderSection
"use client"
import { useTheme } from '@emotion/react'
import { Typography, Box, Button } from '@mui/material'
import React from 'react'

const InformationPage = () => {

    const theme = useTheme()

    const boxStyles = {
        width: '100%',
        display: "flex",
        flexDirection: 'column',
        justifyContent: 'center'
    }

    return (

        <Box
            sx={{
                boxSizing: 'border-box',
                display: 'flex',
                height: '100%',
                position: 'relative',
                flexDirection: 'column',
                justifyContent: { xs: 'space-between', md: 'center' },
                alignItems: 'center',
                gap: '84px',
            }}
        >

            <Typography
                sx={{
                    textAlign: 'center'
                }}>
                NEW LOGO HERE BC CHAD HATED MINE
            </Typography>



            <Box sx={{
                ...boxStyles,
                alignItems: 'left',
                gap: '16px',
                alignItems: 'center',
                width: { xs: '100%', md: '400px' }
            }}>


                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: 700,
                        textAlign: 'center',
                        fontSize: { xs: '24px', md: '48px' }
                    }}>
                    How it works
                </Typography>

                <Typography variant='caption' color={theme.palette.dark.otherlight}>
                    To wager
                </Typography>

                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '16px',
                    width: '100%'
                }}>

                    <Typography>CONTENT HERE</Typography>

                </Box>

            </Box>





            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '16px',
                width: { xs: '100%', md: '400px' }
            }}>


                <Button
                    sx={{
                        width: '100%'
                    }}
                    color='primary'
                    size='large'
                    variant='outlined'>
                    Go Back
                </Button>

                <Button
                    sx={{
                        width: '100%'
                    }}
                    onClick={() => router.push('/onboarding/team-select')}
                    color='primary'
                    size='large'
                    variant='contained'>
                    CONTINUE
                </Button>

            </Box>

        </Box>
    )
}

export default InformationPage

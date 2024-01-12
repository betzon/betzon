
"use client"
import { setWaitlistDefault, waitListSignUpRequest } from '@/app/redux/actions/landingPageAction'
import { useTheme } from '@emotion/react'
import { Box, Button, Card, TextField, Typography, useMediaQuery } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CheckIcon from '@mui/icons-material/Check';

const StatusHandler = () => {

    const theme = useTheme()

    const dispatch = useDispatch()

    const status = useSelector(state => state.landing.waitlist.status);

    const error = useSelector(state => state.landing.waitlist.error);

    const [inputs, setInputs] = useState({
        first_name: '',
        last_name: '',
        email: ''
    })

    const submitWaitlistRequest = async () => {
       // dispatch(waitListSignUpRequest(inputs))
    }

    const handleInputs = (event) => {
        if (error.status) {
            dispatch(setWaitlistDefault())
        }
        let temp = inputs
        inputs[event.target.name] = event.target.value
        setInputs({ ...temp })
    }

    const isMediumUp = useMediaQuery(theme.breakpoints.up('sm'));

    const variant = isMediumUp ? 'h4' : 'h5';

    switch (status) {
        case 0:
            return (
                <>
                    <Box sx={{
                        textAlign: 'center'
                    }}>
                        <Typography variant={variant} sx={{ fontWeight: 700 }}>Be part of what&apos;s next</Typography>
                        <Typography variant='body2'>Join our mail list for exclusive awards </Typography>
                    </Box>

                    {
                        error.status ?
                            <Box sx={{
                                textAlign: 'center'
                            }}>
                                <Typography variant='body1' sx={{ fontWeight: 700 }} color='error'>{error.message}</Typography>
                            </Box> : ''
                    }

                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        gap: '24px'
                    }}>
                        <TextField
                            onChange={() => handleInputs(event)}
                            error={error.status}
                            sx={{ width: '100%' }}
                            variant='filled'
                            name="first_name"
                            label='First Name'
                        />
                        <TextField
                            onChange={() => handleInputs(event)}
                            error={error.status}
                            sx={{ width: '100%' }}
                            variant='filled'
                            name="last_name"
                            label='Last Name'
                        />
                    </Box>

                    <TextField
                        onChange={() => handleInputs(event)}
                        error={error.status}
                        variant='filled'
                        name="email"
                        label='Email'
                    />
                    <Button
                        disabled={error.status}
                        onClick={() => submitWaitlistRequest()}
                        variant='contained'
                        size='large'>Join the Waitlist</Button>
                </>
            )
            break;

        case 1:
            return (
                <>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '16px',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Box sx={{
                            background: theme.palette.primary.main,
                            height: '84px',
                            width: '84px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: '100px'
                        }}>
                            <CheckIcon sx={{
                                fontSize: '48px',
                            }} />
                        </Box>
                        <Typography variant='h5' sx={{ fontWeight: 700 }}>Thanks for joining our waitlist!</Typography>
                    </Box>
                </>
            )
            break;
        default:
            return (
                <></>
            )
            break;
    }
}

const ContactSection = () => {

    const theme = useTheme()

    return (
        <Box
            id="contact"
            sx={{

                //background: 'green',
                display: 'flex',
                justifyContent: 'center',
                borderRadius: '8px'
            }}>

            <Card sx={{
                //backdropFilter: 'blur(500px)', // Apply blur effect
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: '24px',
                background: 'black',
                border: `1px solid ${theme.palette.dark.otherlight}`,
                p: '36px 24px',
                borderRadius: '12px',
                width: { sm: '100%', md: '100%', lg: '450px', xl: '450px' }
            }}>
                <StatusHandler />
            </Card>


        </Box >
    )
}

export default ContactSection

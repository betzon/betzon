"use client"
import { useTheme } from '@emotion/react'
import { LoadingButton } from '@mui/lab'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import CheckIcon from '@mui/icons-material/Check';
import api from "../../../config/axios"

import { useDispatch, useSelector } from 'react-redux'
import { helpCenterContactSupport, setHelpCenterContactSupportResetFailure } from '@/app/redux/actions/landingPageAction'

const ContactSupport = () => {

    const theme = useTheme()

    const dispatch = useDispatch()

    const status = useSelector(state => state.landing.helpcenter.contactSupport.status);

    const error = useSelector(state => state.landing.helpcenter.contactSupport.error);

    const [loader, setLoader] = useState(false)

    const [submitted, setSubmitted] = useState(false)

    const [inputs, setInputs] = useState({
        full_name: '',
        email: '',
        message: ''
    })

    const submitMessage = async () => {
        setLoader(true)
        dispatch(helpCenterContactSupport(inputs))
        setLoader(false)
    }

    const handleInputs = (event) => {
        dispatch(setHelpCenterContactSupportResetFailure())
        let temp = inputs
        temp[event.target.name] = event.target.value
        setInputs({ ...temp })
    }
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%'
        }}>

            <Box sx={{
                //background: theme.palette.dark.dark,
                border: { xs: '', sm: `2px solid ${theme.palette.dark.otherlight}`, md: `2px solid ${theme.palette.dark.otherlight}`, lg: `2px solid ${theme.palette.dark.otherlight}`, xl: `2px solid ${theme.palette.dark.otherlight}` },
                borderRadius: '12px',
                width: 'fit-content',
                width: { xs: '100%', sm: '450px', md: '450px', lg: '450px', xl: '450px' },
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'center',
                gap: '16px',
                padding: { xs: '0', sm: '24px', md: '24px', lg: '24px', xl: '24px' },
            }}>
                {
                    status ?
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
                            <Typography variant='h5' sx={{ fontWeight: 700 }}>Our support team will reach out to you within 24 hours!</Typography>
                        </Box>
                        :
                        <>
                            <Typography variant='h5' sx={{ fontWeight: 600 }}>Contact Support</Typography>
                            {
                                error.status ?
                                    <Box sx={{
                                        textAlign: 'center'
                                    }}>
                                        <Typography variant='body1' sx={{ fontWeight: 700 }} color='error'>{error.message}</Typography>
                                    </Box> : ''
                            }
                            <TextField error={false} disabled={loader} label='Full Name' variant='filled' name='full_name' onChange={(event) => handleInputs(event)} />
                            <TextField error={false} disabled={loader} label='Email' variant='filled' name='email' onChange={(event) => handleInputs(event)} />
                            <TextField error={false} disabled={loader} label='Message' variant='filled' multiline rows={4} name='message' onChange={(event) => handleInputs(event)} />
                            <LoadingButton
                                loading={loader}
                                variant='contained'
                                size='large'
                                onClick={submitMessage}
                                disabled={inputs.fullname === '' || inputs.email === '' || inputs.message === ''}>
                                Submit
                            </LoadingButton>
                        </>

                }
            </Box>

        </Box >
    )
}

export default ContactSupport

"use client"
import Input from '@/app/components/(forms)/main'
import theme from '@/app/styles/theme'
import { useTheme } from '@emotion/react'
import { Box, TextField, Typography, Link as MUILink, Button } from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState, useRef } from 'react'
import EmailIcon from '@mui/icons-material/Email';
import OnboardingHeaderLogo from '../header-logo/header-logo'

const EmailVerification = () => {

    const theme = useTheme()

    const router = useRouter()

    const [verificationCode, setVerificationCode] = useState('')

    const refs = [useRef(null), useRef(null), useRef(null), useRef(null)];

    const handleInputChange = (index) => (event) => {
        // If the user has input a digit, move focus to the next input
        if (event.target.value.length === 1 && index < 3) {
            refs[index + 1].current.focus();
        }
    };

    const handleKeyDown = (index) => (event) => {
        // If the user presses backspace on an empty input, move focus to the previous input
        if (event.key === 'Backspace' && !event.target.value && index > 0) {
            refs[index - 1].current.focus();
        }
    };

    const getValuesFromRefs = () => {
        return refs.map(ref => ref.current.value);
    };

    //const values = getValuesFromRefs();

    const boxStyles = {
        width: '100%',
        display: "flex",
        flexDirection: 'column',
        justifyContent: 'center'
    }

    const inputStyles = {
        width: '100%',
        textAlign: 'center'
    }

    return (

        <Box
            sx={theme.components.boardingBox}
        >

            <OnboardingHeaderLogo />

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
                    Email Verification
                </Typography>

                <EmailIcon sx={{
                    fontSize: '84px'
                }} />

                <Typography variant='caption' color={theme.palette.dark.otherlight}>Please enter the 4-digit code sent to your email.</Typography>

                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '16px',
                    width: '100%'
                }}>

                    {
                        [1, 2, 3, 4].map((item, index) => (
                            <TextField
                                key={index}
                                hiddenLabel
                                inputRef={refs[index]}
                                variant="filled"
                                size="large"
                                inputProps={{
                                    type: 'text',
                                    maxLength: 1,
                                    pattern: "\\d" // allows only a single digit
                                }}
                                onChange={handleInputChange(index)}
                                onKeyDown={handleKeyDown(index)}
                                sx={{
                                    ...inputStyles,
                                    '& input': {
                                        textAlign: 'center',
                                        fontSize: { xs: '24px', sm: '24px', md: '36px', lg: '40px' }
                                    }
                                }}
                            />
                        ))
                    }

                </Box>

            </Box>

            <Box sx={{
                ...boxStyles,
                alignItems: 'center',
                gap: '8px',
                width: { xs: '100%', md: '400px' }
            }}>

                <Button
                    sx={{
                        width: '100%'
                    }}
                    onClick={() => router.push('/onboarding/age-verification')}
                    color='primary'
                    size='large'
                    variant='contained'>
                    CONFIRM
                </Button>

                <Box sx={{
                    display: 'flex',
                    gap: '6px'
                }}>

                    <MUILink
                        color={theme.palette.dark.otherlight}
                        href="/login"
                        sx={{ fontWeight: 700 }}>
                        Resend Code
                    </MUILink>

                </Box>

            </Box>

        </Box>
    )
}

export default EmailVerification
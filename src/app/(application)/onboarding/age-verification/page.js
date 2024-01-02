"use client"
import { Box, MenuItem, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useTheme } from '@emotion/react';
import { LoadingButton } from '@mui/lab';
import GoogleMaps from './location-field';
import OnboardingHeaderLogo from '../header-logo/header-logo';
import { useRouter } from 'next/navigation';

const OnboardingAgeVerificationProcess = () => {

    const theme = useTheme()

    const router = useRouter()

    const [dateValue, setDateValue] = useState(null);

    const [inputs, setInputs] = useState({
        full_name: '',
        dateOfBirth: '',
        address: null
    })

    const handleDateChange = (event) => {
        const dateValue = event
        //const twentyOneYearsAgo = dayjs().subtract(21, 'year');
        let temp = { ...inputs }
        temp.dateOfBirth = dateValue.format()
        setInputs({ ...temp })
        //console.log(twentyOneYearsAgo.format() >= dateValue.format()) // returns true if input IS OLDER else false
    };

    const handleInputs = (event) => {
        let temp = { ...inputs }
        temp[event.target.name] = event.target.value
        setInputs({ ...temp })
    }

    const handleLocation = (newInputValuet) => {
        let temp = { ...inputs }
        temp.address = newInputValuet
        setInputs({ ...temp })
    }

    const handleSubmit = () => {
        router.push('/onboarding/billing')
    }

    return (
        <Box
            spacing={6}
            sx={theme.components.boardingBox}>

            <OnboardingHeaderLogo />

            <Stack spacing={2}>

                <Typography
                    variant='h5'
                    sx={{
                        fontWeight: 700
                    }}>
                    Tell us about yourself!
                </Typography>

                <Stack spacing={6}>
                    <Stack spacing={2}>
                        <Typography variant='body1' sx={{ fontWeight: 700 }}>Enter your full name.</Typography>
                        <TextField
                            name='full_name'
                            onChange={handleInputs}
                            label='Full Name'
                            variant='filled' />
                    </Stack>
                    <Stack spacing={2}>
                        <Typography variant='body1' sx={{ fontWeight: 700 }}>What's your date of birth?</Typography>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoItem >
                                <DatePicker
                                    label="Date of Birth"
                                    slotProps={{
                                        textField: {
                                            variant: 'filled',
                                        },
                                    }}
                                    onChange={handleDateChange}
                                //maxDate={twentyOneYearsAgo}
                                />
                            </DemoItem>
                        </LocalizationProvider>
                    </Stack>
                    <Stack spacing={2}>
                        <Typography variant='body1' sx={{ fontWeight: 700 }}>Where do you live?</Typography>
                        <GoogleMaps handleLocation={handleLocation} />
                    </Stack>
                </Stack>
            </Stack>
            <LoadingButton
                onClick={handleSubmit}
                disabled={inputs.full_name === '' || inputs.dateOfBirth === '' || inputs.address === null}
                variant='contained'
                size='large'>
                Continue
            </LoadingButton>

        </Box>
    )
}

export default OnboardingAgeVerificationProcess

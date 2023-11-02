'use client'
import { Box, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import image from '../../../assets/lids.jpg'
import { useTheme } from '@emotion/react';

const AdItem = () => {

    const theme = useTheme()

    return (
        <Box
            sx={{
                display: 'flex',
                minHeight: '84px',
                height: 'auto',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '12px'
            }}
        >


            <Image src={image}
                alt="logo"
                style={{
                    width: '84px',
                    height: '84px',
                    objectFit: 'contain',
                    borderRadius: '6px',
                }} />


            <Box
                sx={{
                    minHeight: '84px',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start'
                }}
            >

                <Stack spacing={-0.5}>
                    <Typography variant='body1'>The Perfect fit for you!</Typography>
                    <Typography variant='caption' sx={{ fontWeight: 700 }}>Sponsored</Typography>
                </Stack>

                <Typography variant='caption' sx={{ lineHeight: '' }}>
                    Don't miss out on the trendiest hats, exclusively at LIDS!
                </Typography>

            </Box>

            <KeyboardArrowRightIcon />

        </Box>
    )
}

export default AdItem

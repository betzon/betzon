'use client'
import ProfilePill from '@/app/components/profile/profilepill'
import WagerTags from '@/app/components/tags/wagertags'
import { Avatar, Box, Stack, Typography } from '@mui/material'
import React from 'react'

const WagerHeader = () => {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>

            <Stack spacing={1} direction="row" >
                <Avatar
                    sx={{ width: 42, height: 42 }}
                />
                <Stack spacing={.5}>
                    <Typography sx={{
                        margin: '0'
                    }}>@bookiebro</Typography>
                    <Stack direction="row" spacing={.5}>
                        <WagerTags title={'NBA'} />
                        <WagerTags title={'Team VS Team'} />
                    </Stack>
                </Stack>
            </Stack>

            <ProfilePill max={4} size={20} />

        </Box>
    )
}

export default WagerHeader

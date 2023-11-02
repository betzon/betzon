import { Avatar, Stack, Typography } from '@mui/material'
import React from 'react'

const WagerCardTeamItem = () => {
    return (
        <Stack spacing={1} direction="row">

            <Avatar sx={{ width: '42px', height: '42px' }} />

            <Stack spacing={0}>

                <Typography
                    variant='body1'
                    sx={{
                        fontWeight: 700
                    }}
                >
                    Los Angeles Lakers
                </Typography>

                <Typography
                    sx={{ lineHeight: '16px' }}
                    variant='caption'
                >Prediction: Winner by 25 points or more</Typography>

            </Stack>

        </Stack>
    )
}

export default WagerCardTeamItem

'use client'
import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import LikesComponents from './likes/likes'
import { useTheme } from '@emotion/react'

const WagerCardEngagementBar = ({ liked, likes, belongsToLoggedIn, toggleLiked }) => {

    const theme = useTheme()

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>

            <LikesComponents
                toggleLiked={toggleLiked}
                liked={liked}
                likes={likes}
            />

            <Stack spacing={1}>

                <Button
                    sx={theme.buttonStyles.iconButton}
                    color='neutral'
                    variant="outlined">
                    <Typography variant='caption' sx={{ fontWeight: 700 }}>
                        View Details
                    </Typography>
                </Button>

            </Stack>

        </Box>
    )
}

export default WagerCardEngagementBar

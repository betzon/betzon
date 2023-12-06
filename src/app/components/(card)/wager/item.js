'use client'
import { useTheme } from '@emotion/react'
import { Box, Divider, ListItem, Stack } from '@mui/material'
import React, { useState } from 'react'
import WagerHeader from './header'
import WagerCardTeamStack from './teams/team-stack'
import WagerCardEngagementBar from './engagement-bar'
import CardLayout from '../layout'

const WagerCardItem = ({ grouped, showDivider, fake }) => {

    const theme = useTheme()

    const [liked, setLiked] = useState(false)

    const [likes, setLikes] = useState(10)


    const handleLikedToggle = () => {
        if (liked) {
            setLikes(likes - 1);
            setLiked(false);
        } else {
            setLikes(likes + 1);
            setLiked(true);
        }
    };

    return (
        <>
            <ListItem sx={{
                width: '100%',
                padding: 0
            }}>
                <CardLayout spacing={2} grouped={grouped} fake={fake}>

                    <WagerHeader
                        user />

                    <WagerCardTeamStack />

                    <WagerCardEngagementBar
                        toggleLiked={handleLikedToggle}
                        likes={likes}
                        liked={liked} />

                </CardLayout>
            </ListItem>
            {showDivider || !grouped ? '' : <Divider sx={{ width: '100%' }} />}
        </>
    )
}

export default WagerCardItem

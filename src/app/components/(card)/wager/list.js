import { Box, Divider, List, Typography } from '@mui/material'
import React from 'react'
import WagerCardItem from './item'

const WagerFeed = ({ feed, grouped }) => {

    return (
        <Box
            sx={{
                width: '100%',
                height: '100%',
                overflow: 'scroll',
            }
            } >

            <List sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '24px'
            }}>
                {
                    feed.map((item, index) => (

                        <WagerCardItem key={index} grouped={grouped} showDivider={feed.length - 1 === index} />
                    ))
                }
            </List>

        </Box >
    )
}

export default WagerFeed

import React from 'react'
import WagerCardTeamItem from './team-item'
import { Box, Stack } from '@mui/material'
import WagerCardItemChipsDisplay from '../chips'

const WagerCardTeamStack = () => {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            gap:'30px'
        }}>

            <Stack spacing={1.25}>
                <WagerCardTeamItem />
                <WagerCardTeamItem />
            </Stack>

            <WagerCardItemChipsDisplay />
        </Box>
    )
}

export default WagerCardTeamStack

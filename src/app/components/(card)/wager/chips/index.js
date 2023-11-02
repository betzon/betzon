import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

const ChipAsset = ({ margin }) => {
    return (
        <Box sx={{
            borderRadius: '100px',
            border: 'solid 2px white',
            height: '30px',
            width: '30px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'black',
            marginLeft: `${margin}px`
        }}>

            <Typography variant='caption' sx={{ fontWeight: 700 }}>10</Typography>

        </Box>
    )
}

const ChipGroup = () => {
    return (
        <Box sx={{
            display: 'flex',
        }}>
            <ChipAsset margin={0} />
            <ChipAsset margin={-6} />
        </Box>
    )
}

const WagerCardItemChipsDisplay = () => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '4px',
            width: 'fit-content',
            whiteSpace: 'nowrap'
        }}>
            <ChipGroup />
            <Typography variant='caption' sx={{ fontWeight: 700 }}>20 chips</Typography>
        </Box>
    )
}

export default WagerCardItemChipsDisplay

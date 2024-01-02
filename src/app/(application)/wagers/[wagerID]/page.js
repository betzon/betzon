import GoBackTitleHeader from '@/app/components/headers/gobacktitle'
import { Box } from '@mui/material'
import React from 'react'



const WagerDetails = () => {
    return (
        <Box sx={{
            background: 'red',
            minHeight: '100vhs'
        }}>
            <GoBackTitleHeader title='Wager details' />

            <Box sx={{
                background: 'blues'
            }}>
                TEst
            </Box>

        </Box>
    )
}

export default WagerDetails
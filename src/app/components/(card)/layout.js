'use client'
import { useTheme } from '@emotion/react'
import { Stack } from '@mui/material'
import React from 'react'

const CardLayout = ({ children, spacing, grouped }) => {
    const theme = useTheme()
    return (
        <Stack
            spacing={spacing}
            sx={{
                // background: 'red',
                width: { xs: '100%', sm: '100%', md: '400px', lg: '400px' },
                padding: grouped ? '' :'12px',
                boxSizing: 'border-box',
                borderRadius: '8px',
                border: grouped ? '' : `.5px solid ${theme.palette.dark.otherlight}`
            }}>

            {children}
        </Stack>
    )
}

export default CardLayout

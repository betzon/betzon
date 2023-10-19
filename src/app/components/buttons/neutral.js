'use client'
import { useTheme } from '@emotion/react'
import { Button, Typography } from '@mui/material'
import React from 'react'

const NeutralButton = ({ children }) => {
    const theme = useTheme()
    return (
        <Button
            sx={theme.buttonStyles.iconButton}
            color='neutral'
            variant="outlined">

            <Typography variant='caption1'>
                {children}
            </Typography>
        </Button>
    )
}

export default NeutralButton
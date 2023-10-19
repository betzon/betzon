import { Button, Typography } from '@mui/material'
import React from 'react'

export const SecondaryButton = ({ children, props }) => {
    return (
        <Button
            sx={{
                display: 'flex',
                gap: 1
            }}
            color='primary'
            variant='outlined'
        >
            {children}
        </Button>
    )
}

export const SecondaryIconButton = ({ children, icon, disabled }) => {
    return (
        <Button
            sx={{
                display: 'flex',
                gap: 1,
                borderRadius: '100px'
            }}
            disabled={disabled}
            color='primary'
            variant='outlined'
        >
            {icon}
            <Typography variant='caption1'>{children}</Typography>
        </Button>
    )
}

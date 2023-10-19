import { IconButton, Typography, Button } from '@mui/material'
import React from 'react'

const ButtonIconNumber = ({ children, icon }) => {
    return (
        <Button
            color='neutral'
            variant='text'
            sx={{
                display: 'flex',
                padding: '0 !important',
                maxWidth: 'none',
                width: 'fit-content'
            }}
        >
            {icon}
            <Typography variant='body1'>{children}</Typography>
        </Button>
    )
}

export default ButtonIconNumber
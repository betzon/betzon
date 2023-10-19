import { Button } from '@mui/material'
import React from 'react'

const PrimaryButton = ({ children }) => {
    return (
        <Button
            variant='contained'>
            {children}
        </Button>
    )
}

export default PrimaryButton


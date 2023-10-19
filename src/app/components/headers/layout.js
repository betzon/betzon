'use client'
import { useTheme } from '@emotion/react'
import { Box } from '@mui/system'
import React from 'react'

const Layout = ({ children }) => {

    const theme = useTheme()

    return (
        <Box
            sx={{
                padding: '12px',
                borderBottom: `1px solid ${theme.palette.dark.otherlight}`
            }}>
            {children}
        </Box>
    )
}

export default Layout
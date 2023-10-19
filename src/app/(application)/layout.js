import { Container } from '@mui/material'
import React from 'react'
import Bulge from '../components/background/bulge'

const DashboardLayout = ({ children }) => {
    return (
        <Container
            sx={{
                height: '100vh',
                position: 'relative',
                boxSizing: 'border-box',
                paddingTop: '16px',
                paddingBottom: '16px'
            }}
        >
            {children}

            {
                //<Bulge />
            }
        </Container>
    )
}

export default DashboardLayout

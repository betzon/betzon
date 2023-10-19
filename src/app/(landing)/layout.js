import { Container } from '@mui/material'
import React from 'react'
import MainNavigation from '../components/navigation/main-navigation.js'
import Bulge from '../components/background/bulge'

const MainLayout = ({ children }) => {
    return (
        <Container sx={{
            //  paddingTop:'72px'
        }}>
            <MainNavigation />
            {children}
        </Container>
    )
}

export default MainLayout
import { Container } from '@mui/material'
import React from 'react'
import MainNavigation from '../components/navigation/main-navigation.js'
import Bulge from '../components/background/bulge'
import LandingFooter from '../components/navigation/landing-footer.js'

const MainLayout = ({ children }) => {
    return (
        <Container sx={{
            paddingTop:'72px',
            boxSizing:'border-box',
           // background: 'green',
        }}>
            <MainNavigation />
            {children}
            <LandingFooter />
        </Container>
    )
}

export default MainLayout
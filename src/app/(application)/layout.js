"use client"
import { Container, useMediaQuery } from '@mui/material';
import React from 'react'
import Bulge from '../components/background/bulge'
import MobileBottomNavigation from '../components/navigation/bottom-navigation'
import { usePathname } from 'next/navigation';
import { useTheme } from '@emotion/react';

const DashboardLayout = ({ children }) => {

    const theme = useTheme()

    const isWidthAboveMedium = useMediaQuery(theme.breakpoints.down('md'));

    const pathname = usePathname()

    // List of routes where MobileBottomNavigation should be visible
    const allowedRoutes = ['/dashboard']; // replace with your routes

    const shouldShowNavigation =
        allowedRoutes.includes(pathname) &&
        isWidthAboveMedium;

    return (
        <Container
            sx={{
                height: 'auto',
                position: 'relative',
                boxSizing: 'border-box',
                paddingTop: '16px',
                paddingBottom: '16px',
                overflow: 'visible'
            }}
        >
            {children}

            {
                //<Bulge />
            }
            {shouldShowNavigation && <MobileBottomNavigation />}
        </Container>
    )
}

export default DashboardLayout

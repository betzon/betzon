"use client"
import React, { useState } from 'react';
import { Container } from '@mui/material';
import { useRouter } from 'next/navigation';
import MainNavigation from '../components/navigation/main-navigation.js';
import LandingFooter from '../components/navigation/landing-footer.js';
import Bulge from '../components/background/bulge.js';

const MainLayout = ({ children }) => {
    
    const router = useRouter()

    return (
        <Container maxWidth="xl" sx={{
            paddingTop: 0,
            boxSizing: 'border-box',
            overflow: 'show',
        }}>
            <MainNavigation />
            {children}

            <Bulge />
            <LandingFooter />
        </Container>
    );
};

export default MainLayout;

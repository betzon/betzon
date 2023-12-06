"use client"
import React from 'react';
import { Container } from '@mui/material';
import { useRouter } from 'next/navigation';
import MainNavigation from '../components/navigation/main-navigation.js';
import LandingFooter from '../components/navigation/landing-footer.js';
import Bulge from '../components/background/bulge.js';

const MainLayout = ({ children }) => {
    const router = useRouter()
    const scrollToSection = (event, sectionId) => {
        event.preventDefault();  // Prevents the default action of Router.push
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            router.push('#' + sectionId);
            // Updates the URL after the scroll
        }
    };

    return (
        <Container maxWidth="xl" sx={{
            paddingTop: 0,
            boxSizing: 'border-box',
            overflow: 'show'
        }}>
            <MainNavigation />
            <button onClick={(e) => scrollToSection(e, 'target-section')}>Go to Section</button>
            {children}
            <Bulge />
            <LandingFooter />
        </Container>
    );
};

export default MainLayout;

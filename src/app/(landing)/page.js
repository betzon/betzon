"use client"
import React from 'react'
import HomeHeaderSection from './sections/header';
import LeagueDisplaySection from './sections/league-display';
import { Divider } from '@mui/material';
import OurResponsibilitiesSection from './sections/responsibilities';
import ContactSection from './sections/contact';

const LandingPage = () => {
//<Divider sx={{ marginBottom: '120px', marginTop: '120px' }} />
    return (
        <>
            <HomeHeaderSection />
            <Divider sx={{ marginBottom: '120px' }} />
            <LeagueDisplaySection />
            <div style={{marginBottom: '120px', marginTop: '120px'}}></div>
            <OurResponsibilitiesSection />
            <ContactSection/>
        </>
    )
}
//IT&apos;S ON!
export default LandingPage
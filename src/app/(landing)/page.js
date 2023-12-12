"use client"
import React, { useEffect, useRef, useState } from 'react';
import HomeHeaderSection from './sections/header';
import LeagueDisplaySection from './sections/league-display';
import { Divider, useMediaQuery } from '@mui/material';
import OurResponsibilitiesSection from './sections/responsibilities';
import ContactSection from './sections/contact';
import { Box, Container, Tab, Tabs } from '@mui/material';
import { useTheme } from '@emotion/react';
import { styled } from '@mui/material/styles';
import ValuePropositionSection from './sections/value-proposition';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';

const SmoothScroll = dynamic(
    () => import('smooth-scroll'),
    { ssr: false }
);

const StyledTabs = styled((props) => <Tabs {...props} scrollButtons="auto" variant="scrollable" allowScrollButtonsMobile TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }} />)(
    ({ theme }) => ({
        '& .MuiTabs-indicator': {
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: 'transparent',
        },
        '& .MuiTabs-indicatorSpan': {
            maxWidth: 40,
            width: '100%',
            backgroundColor: theme.palette.primary.main,
        },
    }),
);


const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
    ({ theme }) => ({
        textTransform: 'none',
        fontWeight: theme.typography.fontWeightRegular,
        fontSize: theme.typography.pxToRem(15),
        marginRight: theme.spacing(1),
        color: theme.palette.dark.otherlight,
        '&.Mui-selected': {
            color: '#fff',
            fontWeight: 700,
        },
        '&.Mui-focusVisible': {
            backgroundColor: theme.palette.dark.otherlight,
        },
    }),
);

const LandingPage = () => {

    const theme = useTheme()
    const [value, setValue] = useState(0);
    const router = useRouter()
    const [isScrollingFromHandleChange, setIsScrollingFromHandleChange] = useState(false);
    const [isSmoothScrollLoaded, setIsSmoothScrollLoaded] = useState(false);



    // Initialize SmoothScroll

    const scrollRef = useRef(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            import('smooth-scroll').then((SmoothScrollModule) => {
                scrollRef.current = new SmoothScrollModule.default();
                setIsSmoothScrollLoaded(true);
            });
        }
    }, []);

    const smoothScrollTo = (elementId) => {
        const targetElement = document.getElementById(elementId);
        if (targetElement && scrollRef.current && isSmoothScrollLoaded) {
            scrollRef.current.animateScroll(targetElement, null, {
                speed: 500,
                easing: 'easeInOutCubic',
                offset: 125 // 50 pixels offset from the top
            });
        }
    };


    const handleChange = (event, newValue) => {
        setIsScrollingFromHandleChange(true); // Set flag to true
        setValue(newValue);
        smoothScrollTo(event.target.name);

        setTimeout(() => {

        setIsScrollingFromHandleChange(false);
        }, 2500);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (isScrollingFromHandleChange) return; // Skip if scrolling from handleChange

            const sections = [
                document.getElementById('top'),
                document.getElementById('our-sports'),
                // other sections
                document.getElementById('why-betzon'),
                document.getElementById('contact'),
            ];

            const currentSection = sections.findIndex((section) => {
                if (section) {
                    const sectionRect = section.getBoundingClientRect();
                    if (typeof window !== "undefined") {
                        // browser code
                        // Check if any part of the section is within the viewport
                        const isSectionInView = sectionRect.top < window.innerHeight && sectionRect.bottom >= 205;

                        return isSectionInView;
                    }
                }
                return false;
            });

            if (currentSection !== -1 && currentSection !== value) {
                setValue(currentSection);
            }
        };

        if (typeof window !== "undefined") {
            window.addEventListener('scroll', handleScroll);
        }
        return () => {
            if (typeof window !== "undefined") {
                window.removeEventListener('scroll', handleScroll);
            }
        };
    }, [value, isScrollingFromHandleChange]);


    useEffect(() => {
        // Scroll to the top of the page on page load/refresh
        if (typeof window !== "undefined") {
            window.scrollTo(0, 0);
        }
    }, []);

    //<Divider sx={{ marginBottom: '120px', marginTop: '120px' }} />
    return (
        <>
            <HomeHeaderSection />

            <Box sx={{
                position: 'sticky',
                zIndex: 999,
                // bgcolor: theme.palette.dark.dark,
                borderRadius: '8px',
                top: '24px',
                bottom: '48px',
                border: `1px solid ${theme.palette.dark.dark}`,
                width: { xs: '100%', sm: 'fit-content', md: 'fit-content', lg: 'fit-content', xl: 'fit-content' },
                margin: 'auto',
                overflow: 'hidden',
                backdropFilter: 'blur(300px)', // Apply blur effect

            }}>
                <StyledTabs
                    value={value}
                    onChange={handleChange}
                    aria-label="styled tabs example"
                >
                    <StyledTab label="Scroll to Top" name='top' />
                    <StyledTab label="Our Sports" name='our-sports' />
                    <StyledTab label="Why BetzOn?" name='why-betzon' />
                    <StyledTab label="Waitlist" name='contact' />
                </StyledTabs>
            </Box>
            <div style={{ marginBottom: '120px' }} />
            <LeagueDisplaySection />
            <div style={{ marginBottom: '120px' }} />
            <OurResponsibilitiesSection />
            <div style={{ marginBottom: '120px' }} />
            <ContactSection />
            <div style={{ marginBottom: '120px' }} />
        </>
    )
}
//IT&apos;S ON!
export default LandingPage
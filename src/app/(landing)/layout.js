"use client"
import React, { useEffect, useState } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import MainNavigation from '../components/navigation/main-navigation.js';
import LandingFooter from '../components/navigation/landing-footer.js';
import Bulge from '../components/background/bulge.js';
import { useTheme } from '@emotion/react';
import Image from 'next/image.js';
import { gsap } from "gsap";
import logo from "../assets/betzon_logo.png"
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";



const MainLayout = ({ children }) => {
    const [shouldShowLoader, setShouldShowLoader] = useState(null);

    const router = useRouter()

    const theme = useTheme()

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const hasVisited = !!!sessionStorage.getItem('hasVisited');
            if (hasVisited) {
                gsap.fromTo("#logo-container", { height: 0, width: 0, opacity: 0 }, { height: '220px', opacity: 1, width: '220px', duration: 2, ease: "elastic" });
                gsap.fromTo("#logo", { opacity: 0 }, { opacity: 1, duration: 1 });
                gsap.fromTo('#logo-container', { rotation: 10 }, {
                    rotation: 0, duration: 2.5, ease: "elastic", onComplete: () => {
                        // Third animation starts after second one completes
                        gsap.to('#loader-body',
                            {
                                opacity: 0,
                                duration: 1.25,
                                ease: "expo",
                                onComplete: () => {
                                    sessionStorage.setItem('hasVisited', 'true');
                                    setShouldShowLoader(!hasVisited);
                                    //setIsClientSide(!!!sessionStorage.getItem('hasVisited'));
                                }
                            })
                    }
                })
            }
            else {
                setShouldShowLoader(true);
            }
        }
    }, []);
    return (
        <>
            {
                !shouldShowLoader ?

                    <div
                        id='loader-body'
                        style={{
                            width: '100vw',
                            height: '100vh',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            background: 'black',
                            position: 'fixed',
                            zIndex: 99999
                        }}>

                        <Box
                            id='logo-container'
                            sx={{
                                border: `14px solid ${theme.palette.primary.main}`,
                                background: "black",
                                borderRadius: '24px 24px 24px 0',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                opacity: 0
                            }}>
                            {
                                <Image id='logo' src={logo} height={144} />
                            }
                        </Box>
                    </div>

                    :

                    ""
            }
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
        </>
    );
};

export default MainLayout;

/*

"use client"
import React, { useEffect, useState } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import MainNavigation from '../components/navigation/main-navigation.js';
import LandingFooter from '../components/navigation/landing-footer.js';
import Bulge from '../components/background/bulge.js';
import { useTheme } from '@emotion/react';
import Image from 'next/image.js';
import { gsap } from "gsap";
import logo from "../assets/betzon_logo.png"
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";



const MainLayout = ({ children }) => {
    const [isClientSide, setIsClientSide] = useState(() => {
        if (typeof window !== 'undefined') {
            // This code runs on the client-side
            return !!!sessionStorage.getItem('hasVisited');
        }
        return false; // Default value for server-side rendering
    });



    const router = useRouter()

    const theme = useTheme()


    useEffect(() => {

        if (typeof window !== 'undefined') {

            sessionStorage.clear()
            if (isClientSide) {
                gsap.fromTo("#logo-container", { height: 0, width: 0, opacity: 0 }, { height: '220px', opacity: 1, width: '220px', duration: 2, ease: "elastic" });
                gsap.fromTo("#logo", { opacity: 0 }, { opacity: 1, duration: 1 });
                gsap.fromTo('#logo-container', { rotation: 10 }, {
                    rotation: 0, duration: 2.5, ease: "elastic", onComplete: () => {
                        // Third animation starts after second one completes
                        gsap.to('#loader-body',
                            {
                                opacity: 0,
                                duration: 1,
                                ease: "expo",
                                onComplete: () => {

                                    console.log('AFTER SETTING')
                                    sessionStorage.setItem('hasVisited', 'true');
                                    setIsClientSide(!!!sessionStorage.getItem('hasVisited'));
                                }
                            })
                    }
                })
            }
        }
    }, []);
    return (
        <>
            {
                isClientSide ?
                    <div
                        id='loader-body'
                        style={{
                            width: '100vw',
                            height: '100vh',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            background: 'black',
                            position: 'fixed',
                            zIndex: 99999
                        }}>

                        <Box
                            id='logo-container'
                            sx={{
                                border: `14px solid ${theme.palette.primary.main}`,
                                background: "black",
                                borderRadius: '24px 24px 24px 0',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                opacity: 0
                            }}>
                            {
                                <Image id='logo' src={logo} height={144} />
                            }
                        </Box>
                    </div>
                    : '' // or whatever you want to render if the condition is false
            }
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
        </>
    );
};

export default MainLayout;


*/

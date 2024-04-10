"use client"
import React, { useEffect, useState } from 'react';
import { Box, Container, LinearProgress, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import MainNavigation from '../components/navigation/main-navigation.js';
import LandingFooter from '../components/navigation/landing-footer.js';
import Bulge from '../components/background/bulge.js';
import { useTheme } from '@emotion/react';
import Image from 'next/image.js';
import { gsap } from "gsap";
import logo from "../assets/logo.svg"
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import AlertModal from '../components/landing-modals/index.js';

const MainLayout = ({ children }) => {

    const [shouldShowLoader, setShouldShowLoader] = useState(null);
    const [progress, setProgress] = useState(0);

    const [showProgress, setShowProgress] = useState(false);

    const theme = useTheme()

    useEffect(() => {
        const intervalTime = 50; // Interval of each update in milliseconds
        const totalDuration = 5000; // Total duration to fill the progress (5 seconds)
        const startDelay = 2000; // Delay before the progress starts (2 seconds)
        const incrementPerUpdate = 100 / (totalDuration / intervalTime); // Increment per update

        let timer;

        const startProgress = () => {
            setShowProgress(true)
            timer = setInterval(() => {
                setProgress((oldProgress) => {
                    if (oldProgress >= 100) {
                        clearInterval(timer); // Stop the interval when progress reaches 100
                        return 100;
                    }
                    return oldProgress + incrementPerUpdate;
                });
            }, intervalTime);
        };

        // Delay the start of the progress
        const delayTimer = setTimeout(startProgress, startDelay);

        return () => {
            clearTimeout(delayTimer); // Clear the delay timeout if the component unmounts
            clearInterval(timer); // Clear the interval as well
        };
    }, []);



    useEffect(() => {
        if (typeof window !== 'undefined') {
            const hasVisited = !!!sessionStorage.getItem('hasVisited');
            console.log('Checking: ', hasVisited)
            if (hasVisited) {
                /*
                BETZON LOGO LOAD
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
                                    gsap.to('#loader-body',
                                        {
                                            display: 'none'
                                        })
                                }
                            })
                    }
                })
                */
                gsap.fromTo("#logo-container", { opacity: 0 }, { opacity: 1 });

                gsap.fromTo("#logo",
                    {
                        rotation: 100,
                        attr: { width: 10, height: 10 },
                    },
                    {
                        height: 240, width: 240, duration: 3, ease: 'elastic', rotation: 0, onComplete: () => {
                            // Third animation starts after second one completes
                            gsap.to('#loader-body',
                                {
                                    opacity: 0,
                                    duration: 1.25,
                                    ease: "expo",
                                    onComplete: () => {
                                        sessionStorage.setItem('hasVisited', 'true');
                                        setShouldShowLoader(!hasVisited);
                                        gsap.to('#loader-body',
                                            {
                                                display: 'none'
                                            })
                                    }
                                })
                        }
                    });


                //gsap.to("#logo", { rotation: 27, x: 100, duration: 1 });

                //gsap.from("#logo", { rotation: 27, x: "1000%", duration: 1 });
            }
            else {
                setShouldShowLoader(true);
            }
        }
    }, []);

    return (
        <>
            <AlertModal />
            {
                //!shouldShowLoader ?
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

                        {
                            /*
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
                        */
                            <Box
                                id='logo-container'

                                sx={{
                                    opacity: 0
                                }}>
                                <Image id='logo' src={logo} height={288} />
                            </Box>
                        }
                    </div >

                    :

                    ""
            }
            <Container maxWidth="xl" sx={{
                paddingTop: 0,
                bgcolor: 'transparent',
                boxSizing: 'border-box',
                overflow: 'show'
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
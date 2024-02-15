'use client'
import { useTheme } from '@emotion/react'
import { Box, Button, Card, Stack, Typography, useMediaQuery } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import LinearProgress from '@mui/material/LinearProgress';
import { useRouter } from 'next/navigation';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import SportsHockeyIcon from '@mui/icons-material/SportsHockey';
import SportsFootballIcon from '@mui/icons-material/SportsFootball';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import SportsMmaIcon from '@mui/icons-material/SportsMma';
import GolfCourseIcon from '@mui/icons-material/GolfCourse';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import SportsMotorsportsIcon from '@mui/icons-material/SportsMotorsports';

const LeaguePillEngagementBar = ({ status, completion }) => {
    const statusSpacing = -.5

    const contentButtonSpacing = 3
    switch (status) {

        case 'in-development':
            return (
                <Stack spacing={contentButtonSpacing}>
                    <Stack
                        spacing={statusSpacing}>
                        <Typography
                            variant='subtitle1'>
                            Status: <span style={{ fontWeight: 700 }}>In Development</span>
                        </Typography>
                        <Typography
                            variant='subtitle1'>
                            Planned Release Date: <span style={{ fontWeight: 700 }}>March 2024!</span>
                        </Typography>
                    </Stack>

                    <LinearProgress variant="determinate" value={completion} />

                </Stack>
            )

        case 'live':
            return (
                <Stack spacing={contentButtonSpacing}>

                    <Stack
                        spacing={statusSpacing}>
                        <Typography
                            variant='subtitle1'>
                            Status: <span style={{ fontWeight: 700 }}>LIVE!</span>
                        </Typography>

                        <Typography
                            variant='subtitle1'>
                            Wagers: <span style={{ fontWeight: 700 }}>+200</span>
                        </Typography>
                    </Stack>

                </Stack>
            );

        case 'idle':
            return (
                <>
                    <Stack spacing={contentButtonSpacing}>
                        <Stack
                            spacing={statusSpacing}
                            sx={{

                            }}>
                            <Typography
                                variant='subtitle1'>
                                Status: <span style={{ fontWeight: 700 }}>Coming Soon</span>
                            </Typography>

                            {
                                /*
     <Typography
                                    variant='subtitle1'>
                                    Upvotes: <span style={{ fontWeight: 700 }}>10</span>
                                </Typography>
    
                                <Typography
                                    variant='subtitle1'>
                                    Downvotes: <span style={{ fontWeight: 700 }}>8</span>
                                </Typography>
                            </Stack>
    
                            <Box sx={{
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'space-between'
                            }}>
                                <Button variant='outlined'>Downvote</Button>
                                <Button variant='outlined'>Upvote</Button>
                            </Box>
                                */
                            }
                        </Stack>
                    </Stack>
                </>
            )

        default:
            return '';

    }
}

const LeaguePill = ({ title, status, completion, icon }) => {

    const theme = useTheme()
    const active = status === 'live' ? {
        background: theme.palette.primary.main,
    } : {}
    return (
        <Card
            sx={{
                minWidth: '350px',
                height: 'auto',
                width: 'fit-content',
                padding: '24px', // top right bottom left
                borderRadius: '12px',
                width: '100%',
                opacity: status === 'in-development' ? .65 : 1,
                ...active
            }}>

            <Stack
                spacing={3}
                sx={{
                    //background: 'green',
                    width: '100%',
                }}>
                <Box sx={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '100px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    border: '4px solid white'
                }}>
                    {icon}
                </Box>

                <Stack spacing={1}>

                    <Typography
                        sx={{
                            fontWeight: 700
                        }}
                        variant="h4">
                        {title}
                    </Typography>

                    <LeaguePillEngagementBar status={status} completion={completion} />

                </Stack>


            </Stack>

        </Card>
    )
}

const LeagueDisplaySectionRows = ({ list, title, caption, status }) => {

    const theme = useTheme()

    const router = useRouter()

    const isMediumUp = useMediaQuery(theme.breakpoints.up('lg'));
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

    const smoothScrollTo = () => {
        const targetElement = document.getElementById('contact');
        if (targetElement && scrollRef.current && isSmoothScrollLoaded) {
            scrollRef.current.animateScroll(targetElement, null, {
                speed: 500,
                easing: 'easeInOutCubic',
                offset: 125 // 50 pixels offset from the top
            });
        }
    };


    const handleChange = () => {
        smoothScrollTo('#contact');
    };


    const redirectToAnotherSite = () => {
        window.open('https://app.betzon.com/signup', '_blank');
    };

    return (
        <Stack spacing={6} sx={{
            width: '100%',
        }}>


            <Stack spacing={1} sx={{
                textAlign: 'center'
            }}>

                <Typography variant="h3" sx={{ fontWeight: 700 }}>
                    {title}
                </Typography>
                {
                    caption ?
                        <Typography variant="subtitle1" color={theme.palette.dark.light}>
                            {caption}
                        </Typography>

                        : ''
                }

            </Stack>


            <Box sx={{
                display: 'grid',
                gridTemplateColumns: list.length < 4 ? { xs: '1fr', sm: '1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr 1fr', xl: list.length === 2 ? '1fr 1fr 1fr 1fr' : `repeat(${list.length}, 1fr)` } : { xs: '1fr', sm: '1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr', xl: '1fr 1fr 1fr 1fr' },
                gap: '24px',
                height: 'auto',
                width: '100%',
            }}>
                {
                    list.length === 2 && isMediumUp ? <div></div> : ''
                }
                {
                    list.map((item, index) => (
                        <LeaguePill key={index} title={item.sport} status={item.status} completion={item.completion} icon={item.icon} />
                    ))
                }
                {
                    list.length === 2 && isMediumUp ? <div></div> : ''
                }
            </Box>

            {

                status === 'live' ?
                    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Button size='large' variant='contained' sx={{ fontWeight: 700, width: 'fit-content' }} onClick={() => redirectToAnotherSite()}>Check it out!</Button>
                    </Box>
                    : ''
            }

            {

                status === 'idle' ?
                    <Stack spacing={1.5} sx={{
                        dispaly: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'

                    }}>
                        <Typography color={theme.palette.dark.light}>Don&apos;t see a certain sport?</Typography>
                        <Button size='large' variant='contained' sx={{ fontWeight: 700, width: 'fit-content' }} onClick={() => handleChange()}>Contact Support</Button>
                    </Stack>
                    : ''
            }

        </Stack>
    )
}

const LeagueDisplaySection = () => {
    /*
                    const live = [
                    {
                        sport: 'Basketball',
                    status: 'live'
            },
                    {
                        sport: 'Soccer',
                    status: 'live'
            },
                    {
                        sport: 'Football',
                    status: 'live'
            },
                    {
                        sport: 'Slap Box',
                    status: 'live'
            },
                    {
                        sport: 'E-Sports',
                    status: 'live'
            },
                    {
                        sport: 'Golf',
                    status: 'live'
            }
                    ]
                    */

    const live = [
        {
            sport: 'Motocross',
            icon: <SportsMotorsportsIcon fontSize='large' />,
            status: 'live'
        },
        {
            sport: 'Supercross',
            icon: <TwoWheelerIcon fontSize='large' />,
            status: 'live'
        },
        {
            sport: 'NASCAR',
            icon: <SportsBasketballIcon fontSize='large' />,
            status: 'live'
        }
    ]

    const dev = [
        {
            sport: 'Formula1',
            status: 'in-development',
            icon: <SportsBasketballIcon fontSize='large' />,
            completion: 10
        },
        {
            sport: 'MotoGP',
            status: 'in-development',
            icon: <SportsBasketballIcon fontSize='large' />,
            completion: 10
        },
        /*
        {
            sport: 'Basketball',
            status: 'in-development',
            icon: <SportsBasketballIcon fontSize='large' />,
            completion: 10
        },
        {
            sport: 'Hockey',
            status: 'in-development',
            icon: <SportsHockeyIcon fontSize='large' />,
            completion: 10
        },
        {
            sport: 'Football',
            status: 'in-development',
            icon: <SportsFootballIcon fontSize='large' />,
            completion: 10
        },
        {
            sport: 'Soccer',
            status: 'in-development',
            icon: <SportsSoccerIcon fontSize='large' />,
            completion: 10
        }*/
    ]

    const idle = [
        {
            sport: 'MMA',
            icon: <SportsMmaIcon fontSize='large' />,
            status: 'idle'
        },

        {
            sport: 'Golf',
            icon: <GolfCourseIcon fontSize='large' />,
            status: 'idle'
        }
    ]

    return (
        <Box
            id="our-sports"
            sx={{
                display: 'grid',
                gridTemplateRows: 'auto auto auto',
                rowGap: '120px',
                overflowX: 'show',
                marginBottom: '-120px'
            }}>
            {
                live.length != 0 ? <LeagueDisplaySectionRows list={[...live]} title='Wager on the following sports!' status='live' /> : ''
            }
            <LeagueDisplaySectionRows list={[...dev]} title='Coming soon.' />
            {
                /*
     <LeagueDisplaySectionRows
                    status='idle'
                    list={[...idle]}
                    title='Your favorites.'
                    caption='We check this weekly! Upvote the sport you would like to see on BetzOn!' />
                */
            }
        </Box>
    )
}

export default LeagueDisplaySection


/*
SCROLLABLE


const LeagueDisplaySectionRows = ({ list, title, caption, status }) => {

    const theme = useTheme()
    return (
        <Stack spacing={4} sx={{
            width: '100vh'
        }}>

            {
                caption ?
                    <Stack spacing={1}>

                        <Typography variant="h3" sx={{
                            fontWeight: 700
                        }}>
                            {title}
                        </Typography>
                        <Typography variant="subtitle1" color={theme.palette.dark.light}>
                            {caption}
                        </Typography>

                    </Stack>
                    :
                    <Typography variant="h3" sx={{
                        fontWeight: 700
                    }}>
                        {title}
                    </Typography>
            }

            <Box sx={{
                position: 'relative',
                overflow: 'show',
                left: '-24px'
            }}>

                <Box sx={{
                    //background: 'red',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    justifyContent: "flex-start",
                    gap: '36px',
                    height: 'auto',
                    overflowX: 'scroll',
                    width: '100vw',
                    paddingLeft: '24px',
                    paddingRight: '24px',
                    '&::-webkit-scrollbar': {
                        display: 'none', // hides the scrollbar
                    }
                }}>
                    {
                        list.map((item, index) => (
                            <LeaguePill key={index} title={item.sport} status={item.status} completion={item.completion} />
                        ))
                    }
                </Box>

            </Box>




            {

                status === 'live' ?
                    <Button size='large' variant='contained' sx={{ fontWeight: 700, width: 'fit-content' }}>Check it out!</Button>
                    : ''
            }

            {

                status === 'idle' ?
                    <Stack spacing={1.5}>
                        <Typography color={theme.palette.dark.light}>Don&apos;t see a certain sport?</Typography>
                        <Button size='large' variant='contained' sx={{ fontWeight: 700, width: 'fit-content' }}>Contact Support</Button>
                    </Stack>
                    : ''
            }

        </Stack>
    )
}
*/
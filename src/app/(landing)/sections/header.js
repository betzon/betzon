"use client"
import React, { useEffect, useRef, useState } from 'react'
import { Box, Button, Stack, Tab, Tabs, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@emotion/react';
import Phone from '../components/phone';
import { useRouter } from 'next/navigation';

import { styled } from '@mui/material/styles';


const StyledTabs = styled((props) => <Tabs {...props} TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }} />)(
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
        fontWeight: 700,
        '&.Mui-selected': {
            color: '#fff',
        },
        '&.Mui-focusVisible': {
            backgroundColor: theme.palette.dark.otherlight,
        },
    }),
);

const HomeHeaderSection = () => {

    const router = useRouter()

    const theme = useTheme();

    const isMediumUp = useMediaQuery(theme.breakpoints.up('md'));

    const variant = isMediumUp ? 'h1' : 'h3';




    /*
    ALLOW PEOIPLE TO CHECK OUT THE APP WUITHOUT CREATING AN ACCOUNT BUT LIMIT A LOT OF THINGS
    */

    const handlerButton = (event) => {
        event.preventDefault()
        router.push('#waitlist-form')
    }


    const [value, setValue] = useState(2);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box
            id="top"
            sx={{
                left: 0,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                boxSizing: 'border-box',
                position: 'relative',
                height: '100vh'
            }}>

            <Typography
                sx={{
                    fontWeight: 700
                }}
                //color={theme.palette.dark.light}

                variant={variant}>
                Sports Wagering Meets <br /> Social Media
            </Typography>

        </Box >
    )
}
//IT&apos;S ON!
export default HomeHeaderSection


/*



            <Box ref={headerRef} sx={{
                position: isSticky ? 'fixed' : 'absolute',
                zIndex: 999,
                bgcolor: theme.palette.dark.dark,
                borderRadius: '8px',
                top: isSticky ? '24px' : 'auto',
                bottom: isSticky ? 'auto' : '48px',
            }}>
                <StyledTabs
                    value={value}
                    onChange={handleChange}
                    aria-label="styled tabs example"
                >
                    <StyledTab label="Workflows" />
                    <StyledTab label="Datasets" />
                    <StyledTab label="Connections" />
                </StyledTabs>
            </Box>



        <Box sx={{
            left: 0,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            paddingBottom: '144px',
        }}>
            <Box id='page-header' sx={{
                //height: 'calc(100vh - 72px)',
                left: 0,
                height: { xs: 'auto', sm: 'auto', md: '100vh', lg: '100vh' },
                display: { xs: 'flex', sm: 'flex', md: 'grid', lg: 'grid' },
                paddingTop: { xs: '144px', sm: '144px', md: '0', lg: '0' },
                flexDirection: 'column',
                gridTemplateColumns: '1fr 1fr',
                justifyContent: 'center',
                columnGap: '24px'
            }}>

                <Stack
                    spacing={{ xs: 1, sm: 1, md: 3, lg: 3 }}
                    sx={{
                        alignSelf: 'center',
                        textAlign: { xs: 'center', sm: 'center', md: 'left', lg: 'left' },
                    }}>
                    <Typography
                        component='h1'
                        variant={variant}
                        sx={{

                            fontWeight: 700
                        }}>
                        Social Media meets Sports Betting.
                    </Typography>

                    <Typography
                        color={theme.palette.dark.light}
                        variant="h5">
                        No more house betting. Wager with friends. Keep 100% of your winnings.
                    </Typography>

                    <Box sx={{
                        width: '100%',
                        paddingTop: { xs: '24px', sm: '24px', md: '0', lg: '0' }
                    }}>
                        <Button variant="contained" sx={{ width: 'fit-content' }} onClick={handlerButton}>
                            Join the waitlist today
                        </Button>
                    </Box>
                </Stack>

                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    paddingTop: '72px'
                }}>
                    <Box sx={{
                        width: 'fit-content',
                        borderRadius: '24px',
                        justifySelf: 'center',
                        alignSelf: 'center',
                        border: '4px solid gray',
                        overflow: 'hidden'
                    }}>
                        <Phone />
                    </Box>
                </Box>

            </Box>
        </Box >

*/
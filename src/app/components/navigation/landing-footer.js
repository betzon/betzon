"use client"
import { useTheme } from '@emotion/react'
import { Box, Container, Divider, IconButton, List, ListItem, ListItemButton, Stack, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Image from 'next/image'
import logo from "../../assets/mb.png"

const LandingFooter = () => {
    const theme = useTheme()
    //const icons = [<FacebookIcon />, <InstagramIcon />, <YouTubeIcon />]
    const icons = []
    const footerItems = [
        {
            title: 'Home',
            path: '/'
        },
        {
            title: 'Privacy Policy',
            path: 'https://app.termly.io/policy-viewer/policy.html?policyUUID=bb5d82f6-4a0d-4019-a48d-2add7721ba10',
        },
        {
            title: 'End User License Agreement',
            path: 'https://app.termly.io/policy-viewer/policy.html?policyUUID=083bd9f8-a41c-4f37-8dbc-efbccbe1242a',
        },
        {
            title: 'Terms of Use',
            path: 'https://app.termly.io/policy-viewer/policy.html?policyUUID=5ea07cf6-56df-4a98-8d00-e5357ae41958',
        },
        {
            title: 'Acceptable Use Policy',
            path: 'https://app.termly.io/policy-viewer/policy.html?policyUUID=5f2223cf-7007-4c12-93ad-b8e5acbf2155',
        },
        {
            title: 'Delete account & data',
            path: '/delete-account',
        },
        {
            title: 'Get Help',
            path: "https://putyzkkvo0z.typeform.com/to/MTG2HghG"
        },
        {
            title: 'Investors',
            path: "/investors"
        }
    ]

    const handleEmailClick = () => {
        if (typeof window !== "undefined") {
            window.location.href = 'mailto:info@betzon.com';
        }
    };

    const isPolcyAndTermUseReady = false

    return (
        <Box sx={{
            // background: 'red',
            width: '100vw',
            position: 'absolute',
            left: 0,
            background: 'black',
            //backdropFilter: 'blur(200px)', // Apply blur effect
            paddingTop: '84px',
            paddingBottom: '48px',
            borderTop: `1px solid ${theme.palette.primary.main}`
        }}>
            <Container maxWidth='xl'>
                <Stack spacing={6}>
                    <Box sx={{
                        display: { xs: 'flex', sm: 'flex', md: 'grid', lg: 'grid', xl: 'grid' },
                        flexDirection: 'column',
                        gridTemplateColumns: '.5fr 1fr 1fr 1fr',
                        gap: '48px'
                    }}>
                        <Image src={logo} height={100} />

                        <Stack spacing={2}>
                            <Typography variant='h6' sx={{ fontWeight: 700 }}>Help Center</Typography>

                            <Stack spacing={1}>
                                {
                                    footerItems.map((item, index) => (
                                        <Link
                                            key={index}
                                            href={item.path}
                                            style={{
                                                color: 'white',
                                                textDecoration: 'none'
                                            }}>
                                            <Typography
                                                key={index} sx={{ color: theme.palette.dark.otherlight }}>{item.title}</Typography>
                                        </Link>

                                    ))
                                }
                            </Stack>
                        </Stack>

                        {
                            icons.length === 0 ? '' : <Stack spacing={2}>
                                <Typography variant='h6' sx={{ fontWeight: 700 }}>Follow Us</Typography>

                                <Stack spacing={3} direction='row'>
                                    {
                                        icons.map((item, index) => (

                                            <IconButton
                                                key={index}
                                                sx={{
                                                    padding: 0, color: theme.palette.dark.otherlight,
                                                }}>
                                                {item}
                                            </IconButton>


                                        ))
                                    }
                                </Stack>
                            </Stack>
                        }

                        <Stack spacing={2}>
                            <Typography variant='h6' sx={{ fontWeight: 700 }}>Contact Details</Typography>
                            <Typography variant='body2' sx={{ color: theme.palette.dark.otherlight }}>For individuals seeking assistance with problem gaming, support is available through the National Problem Gaming Helpline at 1-800-522-4700.</Typography>
                            <Typography variant='body2' sx={{ color: theme.palette.dark.otherlight }}>If you have any questions, feel free to contact our team!</Typography>

                            <List spacing={1}>

                                <ListItemButton
                                    onClick={handleEmailClick} // Add this line
                                    sx={{
                                        color: theme.palette.dark.otherlight,
                                        display: 'flex',
                                        justifyContent: 'flex-start',
                                        gap: '16px'
                                    }}>
                                    <EmailIcon />
                                    <Typography>info@betzon.com</Typography>
                                </ListItemButton>

                                <ListItem sx={{
                                    color: theme.palette.dark.otherlight,
                                    display: 'flex',
                                    justifyContent: 'flex-start',
                                    gap: '16px'
                                }}>
                                    <LocationOnIcon />
                                    <Typography>611 N. Brand Blvd, <br /> Glendale, California</Typography>
                                </ListItem>

                            </List>
                        </Stack>
                    </Box>
                    {
                        isPolcyAndTermUseReady ?
                            <>
                                <Divider />

                                <Box sx={{
                                    display: 'flex',
                                    flexDirection: { xs: 'column', sm: 'column', md: 'row', lg: 'row', xl: 'row' },
                                    gap: '16px',
                                    justifyContent: 'space-between',
                                    pt: '24px',
                                    pb: '24px'
                                }}>
                                    <Typography sx={{ color: theme.palette.dark.otherlight }}>© 2024 BetzOn Inc.</Typography>

                                    <Stack spacing={1} direction='row'>
                                        <Link
                                            href='#'
                                            style={{
                                                color: 'white',
                                                textDecoration: 'none'
                                            }}>
                                            <Typography sx={{ color: theme.palette.dark.otherlight }}>Privacy Policy</Typography>
                                        </Link>

                                        <Typography sx={{ color: theme.palette.dark.otherlight }}>•</Typography>

                                        <Link
                                            href='#'
                                            style={{
                                                color: 'white',
                                                textDecoration: 'none'
                                            }}>
                                            <Typography sx={{ color: theme.palette.dark.otherlight }}>Terms of Use</Typography>
                                        </Link>
                                    </Stack>

                                </Box>
                            </>
                            : ''
                    }
                </Stack>
            </Container>
        </Box>
    )
}

export default LandingFooter

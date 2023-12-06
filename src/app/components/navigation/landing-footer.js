"use client"
import { useTheme } from '@emotion/react'
import { Box, Container, Divider, IconButton, List, ListItem, ListItemButton, Stack, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const LandingFooter = () => {
    const theme = useTheme()
    return (
        <Box sx={{
            // background: 'red',
            width: '100vw',
            position: 'absolute',
            left: 0,
            background: 'black',
            paddingTop: '84px',
            paddingBottom: '48px',
            borderTop: `1px solid ${theme.palette.primary.main}`
        }}>
            <Container maxWidth='xl'>
                <Stack spacing={6}>
                    <Box sx={{
                        display: 'grid',
                        gridTemplateColumns: '.5fr 1fr 1fr 1fr',
                        gap: '48px'
                    }}>
                        <Box sx={{
                            background: theme.palette.primary.main,
                            borderRadius: '8px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '100px',
                            height: '100px'
                        }}>
                            <Typography sx={{ fontWeight: 700 }}>LOGO</Typography>
                        </Box>
                        <Stack spacing={2}>
                            <Typography variant='h6' sx={{ fontWeight: 700 }}>Links</Typography>

                            <Stack spacing={1}>
                                {
                                    ['Home', 'About us'].map((item, index) => (
                                        <Link
                                            key={index}
                                            href='#'
                                            style={{
                                                color: 'white',
                                                textDecoration: 'none'
                                            }}>
                                            <Typography sx={{ color: theme.palette.dark.otherlight }}>{item}</Typography>
                                        </Link>
                                    ))
                                }
                            </Stack>
                        </Stack>

                        <Stack spacing={2}>
                            <Typography variant='h6' sx={{ fontWeight: 700 }}>Follow Us</Typography>

                            <Stack spacing={3} direction='row'>
                                {
                                    [<FacebookIcon />, <InstagramIcon />, <YouTubeIcon />].map((item, index) =>
                                        <IconButton key={index}
                                            sx={{
                                                padding: 0, color: theme.palette.dark.otherlight,
                                            }}>
                                            {item}
                                        </IconButton>
                                    )
                                }
                            </Stack>
                        </Stack>
                        <Stack spacing={2}>
                            <Typography variant='h6' sx={{ fontWeight: 700 }}>Contact Details</Typography>
                            <Typography variant='body2' sx={{ color: theme.palette.dark.otherlight }}>If you have any questions, feel free to contact our team!</Typography>

                            <List spacing={1}>

                                <ListItemButton sx={{
                                    color: theme.palette.dark.otherlight,
                                    display: 'flex',
                                    justifyContent: 'flex-start',
                                    gap: '16px'
                                }}>
                                    <LocalPhoneIcon />
                                    <Typography>info@betzon.com</Typography>
                                </ListItemButton>

                                <ListItemButton sx={{
                                    color: theme.palette.dark.otherlight,
                                    display: 'flex',
                                    justifyContent: 'flex-start',
                                    gap: '16px'
                                }}>
                                    <LocationOnIcon />
                                    <Typography>611 N. Brand Blvd, <br /> Glendale, California</Typography>
                                </ListItemButton>

                            </List>
                        </Stack>
                    </Box>
                    <Divider />
                    <Box sx={{
                        display: 'flex',
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
                </Stack>
            </Container>
        </Box>
    )
}

export default LandingFooter

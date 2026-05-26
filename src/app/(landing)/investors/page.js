"use client"
import React from 'react'
import {
    Box,
    Container,
    Typography,
    Button,
} from '@mui/material'
import { useTheme } from '@emotion/react'
import DownloadIcon from '@mui/icons-material/Download'

const PDF_URL = '/investors/BETZON-2026-MAY-FINAL.pdf'

const InvestorsPage = () => {
    const theme = useTheme()

    const handleDownload = () => {
        const link = document.createElement('a')
        link.href = PDF_URL
        link.download = 'Betzon-Investor-Pitch-Deck.pdf'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                py: 8,
                px: 2,
            }}
        >
            <Container maxWidth="md">
                <Box
                    sx={{
                        p: { xs: 4, sm: 6 },
                        borderRadius: 4,
                        backgroundColor: 'transparent',
                        border: `1px solid white`,
                        textAlign: 'center',
                    }}
                >
                    <Typography
                        variant="h3"
                        component="h1"
                        sx={{
                            fontWeight: 700,
                            mb: 2,
                        }}
                    >
                        LET&apos;S DISRUPT<br />THE DFS SPACE TOGETHER
                    </Typography>

                    <Typography
                        variant="subtitle1"
                        sx={{
                            color: theme.palette.dark.light,
                            mb: 4,
                        }}
                    >
                        Download our latest investor pitch deck.
                    </Typography>

                    <Button
                        fullWidth
                        variant="contained"
                        size="large"
                        onClick={handleDownload}
                        startIcon={<DownloadIcon />}
                        sx={{
                            py: 1.5,
                            fontSize: '1.1rem',
                            fontWeight: 600,
                            borderRadius: 2,
                            backgroundColor: theme.palette.primary.main,
                            '&:hover': {
                                backgroundColor: theme.palette.primary.main,
                                transform: 'translateY(-2px)',
                                boxShadow: `0 8px 24px ${theme.palette.primary.main}40`,
                            },
                            transition: 'all 0.3s ease',
                        }}
                    >
                        Download Investor Pitch Deck
                    </Button>
                </Box>
            </Container>
        </Box>
    )
}

export default InvestorsPage

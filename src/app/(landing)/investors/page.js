"use client"
import React, { useState } from 'react'
import {
    Box,
    Container,
    Typography,
    TextField,
    Button,
    Paper,
    Alert,
    Snackbar
} from '@mui/material'
import { LoadingButton } from '@mui/lab'
import { useTheme } from '@emotion/react'
import DownloadIcon from '@mui/icons-material/Download'
import api from '../../config/axios'

const InvestorsPage = () => {
    const theme = useTheme()
    const [email, setEmail] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const [error, setError] = useState('')
    const [showSuccess, setShowSuccess] = useState(false)
    const [loading, setLoading] = useState(false)
    const [honeypot, setHoneypot] = useState('') // Bot detection honeypot

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return emailRegex.test(email)
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!email) {
            setError('Please enter your email address')
            return
        }

        if (!validateEmail(email)) {
            setError('Please enter a valid email address')
            return
        }

        // Honeypot check - if filled, it's likely a bot
        if (honeypot) {
            console.log('Bot detected - honeypot field was filled')
            // Pretend to succeed to fool the bot
            setLoading(true)
            setTimeout(() => {
                setLoading(false)
                setSubmitted(true)
                setShowSuccess(true)
            }, 1000)
            return
        }

        setLoading(true)
        setError('')

        try {
            const response = await api.post('/landing/help-center/investors', {
                email: email
            })

              setSubmitted(true)
              setShowSuccess(true)
        } catch (err) {
            console.error('Error submitting investor email:', err)
            setError(err.response?.data?.message || 'Failed to submit email. Please try again.')
        } finally {
            setLoading(false)
        }
    }

    const handleDownload = () => {
        // Create a link to download the PDF
        // Replace this with your actual PDF file path
        const pdfUrl = 'https://betzon-motobookie.s3.us-east-2.amazonaws.com/investors/BETZON_DECK_OCTOBER_2025.pdf'
        const link = document.createElement('a')
        link.href = pdfUrl
        link.download = 'Betzon-Investor-Deck.pdf'
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
                        backgroundColor: "transparent",
                        border: `1px solid white`,
                    }}
                >
                    <Box sx={{ textAlign: 'center', mb: 4 }}>
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
                            variant="subtitle"
                            sx={{
                                color: theme.palette.dark.light,
                                mb: 4,
                            }}
                        >
                            ENTER YOUR EMAIL TO ACCESS OUR INVESTOR DECK.
                        </Typography>
                    </Box>

                    {!submitted ? (
                        <Box component="form" onSubmit={handleSubmit}>
                            <TextField
                                fullWidth
                                label="Email Address"
                                variant="outlined"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                error={!!error}
                                helperText={error}
                                sx={{
                                    mb: 3,
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: theme.palette.dark.otherlight,
                                        },
                                        '&:hover fieldset': {
                                            borderColor: theme.palette.primary.main,
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: theme.palette.primary.main,
                                        },
                                    },
                                    '& .MuiInputLabel-root': {
                                        color: theme.palette.dark.light,
                                    },
                                    '& .MuiInputLabel-root.Mui-focused': {
                                        color: theme.palette.primary.main,
                                    },
                                    '& .MuiOutlinedInput-input': {
                                        color: theme.palette.neutral.main,
                                    },
                                }}
                            />

                            {/* Honeypot field - invisible to humans, visible to bots */}
                            <Box
                                sx={{
                                    position: 'absolute',
                                    left: '-9999px',
                                    width: '1px',
                                    height: '1px',
                                    overflow: 'hidden',
                                }}
                            >
                                <input
                                    type="text"
                                    name="website"
                                    value={honeypot}
                                    onChange={(e) => setHoneypot(e.target.value)}
                                    tabIndex={-1}
                                    autoComplete="off"
                                    aria-hidden="true"
                                />
                            </Box>

                            <LoadingButton
                                fullWidth
                                variant="contained"
                                type="submit"
                                size="large"
                                disabled={!email}
                                loading={loading}
                                sx={{
                                    py: 1.5,
                                    fontSize: '1.5rem',
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
                                Submit
                            </LoadingButton>
                        </Box>
                    ) : (
                        <Box sx={{ textAlign: 'center' }}>
                            <Typography
                                variant="h5"
                                sx={{
                                    color: theme.palette.success.main,
                                    mb: 3,
                                    fontWeight: 600,
                                }}
                            >
                                Thank you for your interest!
                            </Typography>

                            <Typography
                                variant="body1"
                                sx={{
                                    color: theme.palette.dark.light,
                                    mb: 4,
                                }}
                            >
                                Your investor deck is ready to download.
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
                                    mb: 2,
                                }}
                            >
                                Download Investor Deck
                            </Button>

                            <Button
                                fullWidth
                                variant="outlined"
                                size="large"
                                onClick={() => {
                                    setSubmitted(false)
                                    setEmail('')
                                }}
                                sx={{
                                    py: 1.5,
                                    fontSize: '1rem',
                                    borderRadius: 2,
                                    color: theme.palette.neutral.main,
                                    borderColor: theme.palette.dark.otherlight,
                                    '&:hover': {
                                        borderColor: theme.palette.primary.main,
                                        backgroundColor: `${theme.palette.primary.main}10`,
                                    },
                                }}
                            >
                                Submit Another Email
                            </Button>
                        </Box>
                    )}
                </Box>
            </Container>

            <Snackbar
                open={showSuccess}
                autoHideDuration={4000}
                onClose={() => setShowSuccess(false)}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
                <Alert
                    onClose={() => setShowSuccess(false)}
                    severity="success"
                    sx={{
                        width: '100%',
                        backgroundColor: theme.palette.success.main,
                        color: '#000',
                    }}
                >
                    Email submitted successfully!
                </Alert>
            </Snackbar>
        </Box>
    )
}

export default InvestorsPage

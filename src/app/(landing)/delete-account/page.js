"use client"

import React, { useState } from 'react'
import {
    Box,
    Container,
    Typography,
    TextField,
    Button,
    Alert,
    Snackbar,
} from '@mui/material'
import { LoadingButton } from '@mui/lab'
import { useTheme } from '@emotion/react'

const validateEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)

const DeleteAccountPage = () => {
    const theme = useTheme()
    const [email, setEmail] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const [error, setError] = useState('')
    const [showSuccess, setShowSuccess] = useState(false)
    const [loading, setLoading] = useState(false)
    const [honeypot, setHoneypot] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!email.trim()) {
            setError('Please enter the email you use in the Betzon app.')
            return
        }

        if (!validateEmail(email.trim())) {
            setError('Please enter a valid email address.')
            return
        }

        if (honeypot) {
            setLoading(true)
            setTimeout(() => {
                setLoading(false)
                setSubmitted(true)
                setShowSuccess(true)
            }, 800)
            return
        }

        setLoading(true)
        setError('')

        try {
            const res = await fetch('/api/delete-account-request', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: email.trim() }),
            })
            const data = await res.json().catch(() => ({}))

            if (!res.ok) {
                setError(data.message || 'Something went wrong. Please try again.')
                return
            }

            setSubmitted(true)
            setShowSuccess(true)
        } catch (err) {
            console.error(err)
            setError('Network error. Please try again.')
        } finally {
            setLoading(false)
        }
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
            <Container maxWidth="sm">
                <Box
                    sx={{
                        p: { xs: 4, sm: 6 },
                        borderRadius: 4,
                        backgroundColor: 'transparent',
                        border: `1px solid white`,
                    }}
                >
                    <Box sx={{ textAlign: 'center', mb: 4 }}>
                        <Typography
                            variant="h4"
                            component="h1"
                            sx={{ fontWeight: 700, mb: 2 }}
                        >
                            Delete account &amp; data
                        </Typography>
                        {!submitted && (
                            <>
                                <Typography
                                    variant="body1"
                                    sx={{ color: theme.palette.dark.light, mb: 1 }}
                                >
                                    Enter the email associated with your Betzon account. If an account
                                    exists, we email you a confirmation link. The account is closed only
                                    after you open that link and confirm. We also notify our team.
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{ color: theme.palette.dark.light, mb: 1, textAlign: 'left' }}
                                >
                                    Closed: you can no longer sign in, and your identity record with our
                                    verification provider is removed.
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{ color: theme.palette.dark.light, mb: 1, textAlign: 'left' }}
                                >
                                    Kept: username, email, and phone stay on the account so contest
                                    history and messages still show your name. Wallet and contest
                                    transaction records are retained.
                                </Typography>
                            </>
                        )}
                    </Box>

                    {!submitted ? (
                        <Box component="form" onSubmit={handleSubmit} sx={{ position: 'relative' }}>
                            <TextField
                                fullWidth
                                label="Email (as used in the app)"
                                variant="outlined"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                error={!!error}
                                helperText={error}
                                autoComplete="email"
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

                            <Box
                                sx={{
                                    position: 'absolute',
                                    left: '-9999px',
                                    width: '1px',
                                    height: '1px',
                                    overflow: 'hidden',
                                }}
                                aria-hidden
                            >
                                <input
                                    type="text"
                                    name="website"
                                    value={honeypot}
                                    onChange={(e) => setHoneypot(e.target.value)}
                                    tabIndex={-1}
                                    autoComplete="off"
                                />
                            </Box>

                            <LoadingButton
                                fullWidth
                                variant="contained"
                                type="submit"
                                size="large"
                                disabled={!email.trim()}
                                loading={loading}
                                sx={{
                                    py: 1.5,
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
                                Request deletion
                            </LoadingButton>
                        </Box>
                    ) : (
                        <Box sx={{ textAlign: 'center' }}>
                            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                                Request received
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{ color: theme.palette.dark.light, mb: 3 }}
                            >
                                We have notified our team. You will be contacted at the email you
                                provided if we need anything further.
                            </Typography>
                            <Button
                                variant="outlined"
                                onClick={() => {
                                    setSubmitted(false)
                                    setEmail('')
                                }}
                                sx={{
                                    color: theme.palette.neutral.main,
                                    borderColor: theme.palette.dark.otherlight,
                                    '&:hover': {
                                        borderColor: theme.palette.primary.main,
                                        backgroundColor: `${theme.palette.primary.main}10`,
                                    },
                                }}
                            >
                                Submit another request
                            </Button>
                        </Box>
                    )}
                </Box>
            </Container>

            <Snackbar
                open={showSuccess}
                autoHideDuration={5000}
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
                    Your deletion request was sent.
                </Alert>
            </Snackbar>
        </Box>
    )
}

export default DeleteAccountPage

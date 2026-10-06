"use client"

import React, { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { Box, Container, Typography } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import { useTheme } from '@emotion/react'

const ConfirmDeleteAccountForm = () => {
    const theme = useTheme()
    const searchParams = useSearchParams()
    const token = searchParams.get('token') || ''
    const [error, setError] = useState(token ? '' : 'This link is invalid or has expired.')
    const [done, setDone] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleConfirm = async () => {
        if (!token) {
            setError('This link is invalid or has expired.')
            return
        }

        setLoading(true)
        setError('')

        try {
            const res = await fetch('/api/delete-account-confirm', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ token }),
            })
            const data = await res.json().catch(() => ({}))
            if (!res.ok) {
                setError(data.message || 'Failed to delete the account. Please try again later.')
                return
            }
            setDone(true)
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
                        border: '1px solid white',
                    }}
                >
                    <Typography variant="h4" component="h1" sx={{ fontWeight: 700, mb: 2, textAlign: 'center' }}>
                        Confirm account close
                    </Typography>
                    {done ? (
                        <Typography variant="body1" sx={{ color: theme.palette.dark.light, textAlign: 'center' }}>
                            Your Betzon account is closed. You can no longer sign in.
                        </Typography>
                    ) : (
                        <>
                            <Typography variant="body1" sx={{ color: theme.palette.dark.light, mb: 2 }}>
                                This closes the account. You will not be able to sign in. Your
                                username stays on past contests and messages. Wallet and contest
                                records are kept.
                            </Typography>
                            {error ? (
                                <Typography variant="body2" sx={{ color: theme.palette.error.main, mb: 2 }}>
                                    {error}
                                </Typography>
                            ) : null}
                            <LoadingButton
                                fullWidth
                                variant="contained"
                                size="large"
                                loading={loading}
                                disabled={!token}
                                onClick={handleConfirm}
                                sx={{
                                    py: 1.5,
                                    fontWeight: 600,
                                    borderRadius: 2,
                                    backgroundColor: theme.palette.primary.main,
                                }}
                            >
                                Confirm close
                            </LoadingButton>
                        </>
                    )}
                </Box>
            </Container>
        </Box>
    )
}

export default ConfirmDeleteAccountForm

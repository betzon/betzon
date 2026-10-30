"use client"
import { Box, Button, Stack, Typography } from '@mui/material'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import Image from 'next/image'
import { useParams, useSearchParams } from 'next/navigation'
import ShareContestCard from './ShareContestCard'
import { loadShareContest } from './loadShareContest.mjs'
import logo from '../../assets/logo.svg'

import { detectOs, openSharedContest, parseSharePreview } from './shareAppLink.mjs'

function parseShareContestId(value) {
    const raw = String(value ?? '').trim()
    if (!/^[1-9]\d*$/.test(raw)) return null
    return raw
}

function ShareLoader() {
    return (
        <Box
            sx={{
                py: 8,
                '@keyframes shareSpin': {
                    to: { transform: 'rotate(360deg)' },
                },
                '@keyframes sharePulse': {
                    '0%, 100%': { opacity: 0.4, transform: 'scale(0.82)' },
                    '50%': { opacity: 1, transform: 'scale(1)' },
                },
            }}
        >
            <Box
                sx={{
                    position: 'relative',
                    width: 64,
                    height: 64,
                }}
            >
                <Box
                    sx={{
                        position: 'absolute',
                        inset: 0,
                        borderRadius: '50%',
                        border: '3px solid #341C0A',
                        borderTopColor: '#FF9539',
                        animation: 'shareSpin 0.75s linear infinite',
                    }}
                />
                <Box
                    sx={{
                        position: 'absolute',
                        inset: 22,
                        borderRadius: '50%',
                        backgroundColor: '#FF9539',
                        boxShadow: '0 0 16px rgba(255, 149, 57, 0.7)',
                        animation: 'sharePulse 1.2s ease-in-out infinite',
                    }}
                />
            </Box>
        </Box>
    )
}

const BetzonShare = () => {
    const { shareid } = useParams()
    const searchParams = useSearchParams()
    const preview = parseSharePreview(searchParams)
    const contestId = useMemo(() => parseShareContestId(shareid), [shareid])
    const [deviceOs, setDeviceOs] = useState(null)
    const [opening, setOpening] = useState(false)
    const [openHint, setOpenHint] = useState('')
    const cancelOpen = useRef(() => {})
    const os = preview.os ?? deviceOs
    const [contest, setContest] = useState(null)
    const [retryCount, setRetryCount] = useState(0)
    const [loadState, setLoadState] = useState(contestId ? 'loading' : 'invalid')

    useEffect(() => {
        setDeviceOs(detectOs(navigator))
    }, [])

    useEffect(() => () => cancelOpen.current(), [])

    useEffect(() => {
        if (!contestId) {
            setLoadState('invalid')
            return
        }

        let cancelled = false
        setLoadState('loading')

        const controller = new AbortController()
        loadShareContest(contestId, { controller })
            .then((data) => {
                if (cancelled) return
                setContest(data.contest)
                setLoadState('ready')
            })
            .catch((error) => {
                if (cancelled) return
                setContest(null)
                setLoadState(error.status === 400 || error.status === 404 ? 'invalid' : 'error')
            })

        return () => {
            cancelled = true
            controller.abort()
        }
    }, [contestId, retryCount])

    const handleContestCta = () => {
        if (!contestId || !deviceOs || opening) return
        cancelOpen.current()
        setOpening(true)
        setOpenHint('')
        cancelOpen.current = openSharedContest({
            contestId,
            os: deviceOs,
            window,
            document,
            onLeaving: () => {
                setOpening(false)
            },
            onFallback: () => {
                setOpening(false)
                setOpenHint(os === 'android' ? 'Betzon for Android is coming soon on Google Play.' : 'If Betzon did not open, download it from the App Store.')
            },
        })
        if (deviceOs === 'desktop') setOpening(false)
    }

    return (
        <Stack
            spacing={3}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
                minHeight: '100vh',
                px: 3,
                pt: 4,
                pb: 6,
                backgroundColor: '#0C0D11',
            }}>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Image src={logo} width={72} height={72} alt="Betzon" />
            </Box>
            {loadState === 'loading' && <ShareLoader />}

            {loadState === 'invalid' && (
                <Typography align="center" sx={{ color: '#FFFFFF' }}>
                    This contest link is invalid.
                </Typography>
            )}

            {loadState === 'error' && (
                <Stack spacing={2} alignItems="center">
                    <Typography align="center" sx={{ color: '#FFFFFF' }} role="alert">
                        We couldn&apos;t load this contest. Please try again.
                    </Typography>
                    <Button variant="contained" onClick={() => setRetryCount((count) => count + 1)}>
                        Retry
                    </Button>
                </Stack>
            )}

            {(loadState === 'error' || loadState === 'invalid') && contestId && (
                <Button variant="outlined" disabled={!deviceOs || opening} onClick={handleContestCta}>
                    {opening ? 'Opening Betzon…' : 'Open contest in Betzon'}
                </Button>
            )}

            {loadState === 'ready' && contest && (
                <ShareContestCard
                    contest={contest}
                    onCta={handleContestCta}
                    ctaOpening={opening}
                    ctaHint={openHint}
                    ctaDisabled={!os || opening}
                    joinDisabled={!os || opening}
                />
            )}
        </Stack>
    )
}

export default BetzonShare

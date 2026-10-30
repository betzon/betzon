"use client"
import { useId, useState } from 'react'
import { isShareProcessed, shareParticipantResult } from './shareSettlement.mjs'
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Stack, Typography } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import { faApple, faGooglePlay } from '@fortawesome/free-brands-svg-icons'

const colors = {
    dark: '#0C0D11',
    darkGray: '#131418',
    subgray: '#32343B',
    light: '#FFFFFF',
    lightestGray: '#989BAA',
    primaryLight: '#FF9539',
    primaryOpaque: '#341C0A',
    successDark: '#141F14',
    successLight: '#31FF31',
}

function formatPayout(amount) {
    const value = Number(amount)
    if (!Number.isFinite(value) || value <= 0) return null
    return value.toFixed(2)
}

function getJoinCta(contest) {
    const viewer = contest?.finances?.viewer ?? contest?.viewer
    const maxWin = formatPayout(viewer?.gross_potential)
    if (!maxWin) return null
    return {
        maxWin,
        multiple: viewer?.winnings_multiple ?? '2x',
    }
}

function formatPropLabel(prop) {
    return String(prop ?? '')
        .split(' ')
        .filter(Boolean)
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
}

function splitStackedPropLabel(label) {
    const match = String(label ?? '').match(/^(.*(?:Overall|Defensive))\s+(Performance Points)$/i)
    if (!match) return null
    return { line1: match[1], line2: match[2] }
}

function formatEventTime(iso) {
    if (!iso) return null
    const date = new Date(iso)
    if (Number.isNaN(date.getTime())) return null
    const day = date.toLocaleDateString('en-US', { weekday: 'short' })
    const time = date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })
    return `${day} ${time}`
}

function athleteName(athlete) {
    const full = String(athlete?.athlete_name ?? athlete?.team_name ?? athlete?.name ?? '').trim()
    if (!full) return { first: '', last: '', display: '' }
    const parts = full.split(/\s+/)
    if (parts.length === 1) return { first: parts[0], last: '', display: full }
    return { first: parts[0], last: parts.slice(1).join(' '), display: full }
}

function AthleteBlock({ athlete }) {
    const name = athleteName(athlete)
    const details = athlete?.athlete_name
        ? [athlete?.position, athlete?.team_full_name || athlete?.team_name].filter(Boolean).join(' • ')
        : ''
    const eventName = athlete?.event_name ?? ''
    const timeLabel = formatEventTime(athlete?.event_start_time)
    const stacked = Boolean(name.first && name.last && athlete?.athlete_name)

    return (
        <Box
            sx={{
                width: '100%',
                backgroundColor: colors.darkGray,
                border: `1px solid ${colors.subgray}`,
                borderRadius: '16px',
                px: 1.5,
                py: 1.5,
                textAlign: 'center',
            }}
        >
            {eventName ? (
                <Typography
                    sx={{
                        color: colors.lightestGray,
                        fontWeight: 600,
                        letterSpacing: '0.6px',
                        textTransform: 'uppercase',
                        fontSize: 13,
                        mb: 0.5,
                    }}
                >
                    {eventName}
                </Typography>
            ) : null}
            {stacked ? (
                <>
                    <Typography sx={{ color: colors.light, fontWeight: 600, fontSize: 22, lineHeight: 1.15 }}>
                        {name.first}
                    </Typography>
                    <Typography sx={{ color: colors.light, fontWeight: 600, fontSize: 22, lineHeight: 1.15 }}>
                        {name.last}
                    </Typography>
                </>
            ) : name.display ? (
                <Typography sx={{ color: colors.light, fontWeight: 600, fontSize: 22 }}>
                    {name.display}
                </Typography>
            ) : null}
            {details ? (
                <Typography sx={{ color: colors.lightestGray, fontWeight: 500, fontSize: 14, mt: 0.75 }}>
                    {details}
                </Typography>
            ) : null}
            {timeLabel ? (
                <Box
                    sx={{
                        display: 'inline-block',
                        mt: 1,
                        px: 1,
                        py: 0.4,
                        borderRadius: 1000,
                        backgroundColor: colors.darkGray,
                    }}
                >
                    <Typography sx={{ color: colors.lightestGray, fontWeight: 600, fontSize: 13 }}>
                        {timeLabel}
                    </Typography>
                </Box>
            ) : null}
        </Box>
    )
}

function ParticipantLine({ username, suffix, userLogo, result }) {
    if (!username) return null
    return (
        <Stack direction="row" spacing={1} alignItems="center" justifyContent="center" sx={{ flexWrap: 'wrap', rowGap: 1 }}>
            <Box
                sx={{
                    width: 36,
                    height: 36,
                    borderRadius: '50%',
                    overflow: 'hidden',
                    backgroundColor: userLogo ? colors.darkGray : colors.primaryOpaque,
                    border: `1px solid ${colors.subgray}`,
                    flexShrink: 0,
                }}
            >
                {userLogo ? (
                    <Box
                        component="img"
                        src={userLogo}
                        alt={`@${username}`}
                        sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                ) : null}
            </Box>
            <Typography sx={{ color: colors.light, fontWeight: 500, fontSize: 15 }}>
                @{username}
                <Box component="span" sx={{ fontWeight: 600 }}>{suffix}</Box>
            </Typography>
            {result ? (
                <Box component="span" aria-label={`${result.outcome}: ${result.label}`} sx={{
                    borderRadius: 1000, px: 1.25, py: 0.5, color: colors.light,
                    fontSize: 16, fontWeight: 700,
                    backgroundColor: result.outcome === 'won' ? '#186329' : result.outcome === 'lost' ? '#A32626' : colors.subgray,
                }}>
                    {result.label}
                </Box>
            ) : null}
        </Stack>
    )
}

export default function ShareContestCard({
    contest,
    onCta,
    onStoreCta = onCta,
    storeLabel,
    storeHint,
    storeDisabled = false,
    storePlatform = null,
    showStore = true,
    joinDisabled = false,
}) {
    const [explainerOpen, setExplainerOpen] = useState(false)
    const explainerId = useId()
    const explanation = contest?.config?.prop_explainer?.opponent
        || 'Challenge this pick by taking the opposite side in Betzon. Open the contest in the app to review its winning conditions and payout before joining.'
    const winners = contest?.winners ?? []
    const losers = contest?.losers ?? []
    const propLabel = formatPropLabel(contest?.config?.prop ?? contest?.prop)
    const stackedProp = Math.max(winners.length, losers.length) >= 2
        ? splitStackedPropLabel(propLabel)
        : null
    const creator = contest?.creator
    const opponents = contest?.opponents ?? []
    const processed = isShareProcessed(contest)
    const joinCta = processed ? null : getJoinCta(contest)

    return (
        <Stack
            spacing={2}
            sx={{
                width: '100%',
                maxWidth: 420,
                px: 1.5,
            }}
        >
            <Stack spacing={1.25}>
                {winners.map((athlete, index) => (
                    <AthleteBlock key={athlete?.athlete_id ?? athlete?.team_id ?? `w-${index}`} athlete={athlete} />
                ))}

                <Stack direction="row" alignItems="center" spacing={1}>
                    <Box sx={{ flex: 1, height: '1px', backgroundColor: colors.subgray }} />
                    <Box
                        sx={{
                            backgroundColor: colors.primaryOpaque,
                            border: `1px solid ${colors.primaryLight}`,
                            px: 1.5,
                            py: stackedProp ? 0.75 : 0.6,
                            borderRadius: stackedProp ? '12px' : 1000,
                            flexShrink: 0,
                            textAlign: 'center',
                        }}
                    >
                        {stackedProp ? (
                            <>
                                <Typography sx={{ color: colors.primaryLight, fontWeight: 700, fontSize: 14, lineHeight: 1.2 }}>
                                    {stackedProp.line1}
                                </Typography>
                                <Typography sx={{ color: colors.primaryLight, fontWeight: 700, fontSize: 14, lineHeight: 1.2 }}>
                                    {stackedProp.line2}
                                </Typography>
                            </>
                        ) : (
                            <Typography sx={{ color: colors.primaryLight, fontWeight: 700, fontSize: 14 }}>
                                {propLabel}
                            </Typography>
                        )}
                    </Box>
                    <Box sx={{ flex: 1, height: '1px', backgroundColor: colors.subgray }} />
                </Stack>

                {losers.map((athlete, index) => (
                    <AthleteBlock key={athlete?.athlete_id ?? athlete?.team_id ?? `l-${index}`} athlete={athlete} />
                ))}
            </Stack>

            <Stack spacing={0.75} alignItems="center">
                <ParticipantLine
                    username={creator?.username}
                    userLogo={creator?.userLogo}
                    suffix="'s Pick"
                    result={shareParticipantResult(contest, creator, 'creator')}
                />
                {opponents.map((opponent) => (
                    <ParticipantLine
                        key={opponent?.id ?? opponent?.username}
                        username={opponent?.username}
                        userLogo={opponent?.userLogo}
                        suffix=" Challenged"
                        result={shareParticipantResult(contest, opponent, 'opponent')}
                    />
                ))}
            </Stack>

            {joinCta ? (
                <Box
                    component="button"
                    type="button"
                    disabled={joinDisabled}
                    onClick={onCta}
                    sx={{
                        mt: 0.5,
                        width: '100%',
                        border: `1px solid ${colors.successLight}`,
                        backgroundColor: colors.successDark,
                        borderRadius: 1000,
                        py: 1.5,
                        px: 3,
                        cursor: joinDisabled ? 'default' : 'pointer',
                        textAlign: 'center',
                    }}
                >
                    <Typography sx={{ color: colors.successLight, fontWeight: 600, fontSize: 18 }}>
                        {`Max Win: $${joinCta.maxWin}`}
                    </Typography>
                    <Typography sx={{ color: colors.light, fontWeight: 600, fontSize: 16, mt: 0.4 }}>
                        {`Tap to Challenge This Pick • Win ${joinCta.multiple}`}
                    </Typography>
                </Box>
            ) : null}

            {showStore ? (
                <Box
                    component="button"
                    type="button"
                    disabled={storeDisabled}
                    onClick={storeDisabled ? undefined : onStoreCta}
                    sx={{
                        width: '100%',
                        border: storePlatform ? '1px solid #FFFFFF' : `1px solid ${colors.primaryLight}`,
                        backgroundColor: storePlatform ? '#000000' : colors.primaryOpaque,
                        borderRadius: storePlatform ? '12px' : 1000,
                        py: 1.5,
                        px: 3,
                        cursor: storeDisabled ? 'default' : 'pointer',
                        textAlign: 'center',
                    }}
                >
                    <Stack direction="row" spacing={1} alignItems="center" justifyContent="center">
                        {storePlatform ? (
                            <FontAwesomeIcon icon={storePlatform === 'android' ? faGooglePlay : faApple} color="#FFFFFF" style={{ fontSize: 22 }} />
                        ) : null}
                        <Typography sx={{ color: storePlatform ? '#FFFFFF' : colors.primaryLight, fontWeight: 600, fontSize: 18 }}>
                            {storeLabel}
                        </Typography>
                    </Stack>
                    {storeHint ? (
                        <Typography sx={{ color: colors.lightestGray, fontWeight: 500, fontSize: 15, mt: 0.5 }}>
                            {storeHint}
                        </Typography>
                    ) : null}
                </Box>
            ) : null}

            <Button
                variant="text"
                onClick={() => setExplainerOpen(true)}
                aria-haspopup="dialog"
                endIcon={<FontAwesomeIcon icon={faCircleInfo} style={{ fontSize: 16 }} />}
                sx={{
                    alignSelf: 'center',
                    color: colors.lightestGray,
                    fontSize: 14,
                    fontStyle: 'italic',
                    textTransform: 'none',
                    textDecoration: 'underline',
                    '&:hover': { color: colors.light, backgroundColor: 'transparent', textDecoration: 'underline' },
                }}
            >
                How does this work?
            </Button>

            <Dialog
                open={explainerOpen}
                onClose={() => setExplainerOpen(false)}
                aria-labelledby={`${explainerId}-title`}
                aria-describedby={`${explainerId}-description`}
                maxWidth="xs"
                fullWidth
                PaperProps={{ sx: { backgroundColor: colors.darkGray, borderRadius: '16px', border: `1px solid ${colors.subgray}`, p: 1 } }}
                slotProps={{ backdrop: { sx: { backgroundColor: 'rgba(0, 0, 0, 0.85)' } } }}
            >
                <DialogTitle id={`${explainerId}-title`} sx={{ color: colors.light, textAlign: 'center', fontSize: 22, fontWeight: 600 }}>
                    How this works
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id={`${explainerId}-description`} sx={{ color: colors.lightestGray, textAlign: 'center', fontSize: 16, lineHeight: 1.6 }}>
                        {explanation}
                    </DialogContentText>
                    <Box sx={{ mt: 3, textAlign: 'center' }}>
                        <Typography sx={{ color: colors.successLight, fontWeight: 700, fontSize: 18 }}>
                            WR · Win Rate
                        </Typography>
                        <Typography sx={{ color: colors.lightestGray, fontSize: 16, mt: 1, lineHeight: 1.6 }}>
                            The percent of settled contests this profile has won. Refunds do not count.
                        </Typography>
                    </Box>
                </DialogContent>
                <DialogActions sx={{ justifyContent: 'center', pb: 2 }}>
                    <Button
                        variant="outlined"
                        onClick={() => setExplainerOpen(false)}
                        sx={{ color: colors.primaryLight, borderColor: colors.primaryLight, borderRadius: 1000, px: 4, textTransform: 'none' }}
                    >
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </Stack>
    )
}

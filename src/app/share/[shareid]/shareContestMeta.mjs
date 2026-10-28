export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.betzon.com').replace(/\/$/, '')
export const OG_IMAGE_WIDTH = 1200
export const OG_IMAGE_HEIGHT = 630

const API_BASE = (process.env.BETZON_API_BASE || (
    process.env.NODE_ENV === 'development'
        ? 'http://localhost:2040/api/v1'
        : 'https://teams-server-xkro.onrender.com/api/v1'
)).replace(/\/$/, '')

export function parseShareContestId(value) {
    const raw = String(value ?? '').trim()
    if (!/^[1-9]\d*$/.test(raw)) return null
    return raw
}

export function shareContestUrl(contestId) {
    return `${SITE_URL}/share/${contestId}`
}

export function shareContestImageUrl(contestId) {
    return `${SITE_URL}/api/share-contest/${contestId}/og`
}

export function formatPropLabel(prop) {
    return String(prop ?? '')
        .split(' ')
        .filter(Boolean)
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
}

function sideLabel(item) {
    return String(item?.athlete_name ?? item?.team_name ?? item?.name ?? '').trim()
}

export function shareSideNames(items) {
    const namedItems = (items ?? []).filter((item) => sideLabel(item))
    return namedItems.map((item) => {
        const name = sideLabel(item)
        if (namedItems.length < 2 || !item?.athlete_name) return name
        const parts = name.split(/\s+/)
        return parts.length > 1 ? `${parts[0]} ${Array.from(parts[parts.length - 1])[0]}.` : name
    })
}

export function buildShareTitle(contest) {
    if (!contest) return 'Betzon Contest'
    const winners = shareSideNames(contest.winners).join(' & ')
    const losers = shareSideNames(contest.losers).join(' & ')
    const prop = formatPropLabel(contest.config?.prop ?? contest.prop)
    if (winners && losers && prop) return `${winners} vs ${losers} · ${prop}`
    if (winners && losers) return `${winners} vs ${losers}`
    if (contest.caption) return String(contest.caption)
    return 'Betzon Contest'
}

export function buildShareDescription(contest) {
    const explainer = contest?.config?.prop_explainer?.opponent
    if (explainer) return explainer
    const creator = contest?.creator?.username
    if (creator) return `Challenge @${creator}'s pick on Betzon.`
    return 'Open this contest on Betzon to win.'
}

export function pickContestImage(contest) {
    const candidates = [
        contest?.image,
        contest?.image_url,
        contest?.imageUrl,
        contest?.group?.url,
        contest?.group?.image_url,
        ...(contest?.winners ?? []).map((item) => item?.image || item?.image_url || item?.headshot),
        ...(contest?.losers ?? []).map((item) => item?.image || item?.image_url || item?.headshot),
    ]
    return candidates.find((url) => /^https:\/\//i.test(String(url ?? ''))) || null
}

export async function fetchShareContest(contestId, {
    fetchImpl = fetch,
    timeoutMs = 4000,
} = {}) {
    const id = parseShareContestId(contestId)
    if (!id) return null

    const controller = new AbortController()
    const timer = setTimeout(() => controller.abort(), timeoutMs)
    try {
        const headers = {
            'Content-Type': 'application/json',
            platform: 'web',
            'x-api-key': 'mb52ea2d-4567-4956-9d19-35a7e75a2c17',
        }
        const bases = [API_BASE]
        if (API_BASE.includes('localhost')) {
            bases.push('https://teams-server-xkro.onrender.com/api/v1')
        }
        for (const base of bases) {
            try {
                const response = await fetchImpl(`${base}/landing/share/${id}`, {
                    headers,
                    cache: 'no-store',
                    signal: controller.signal,
                })
                const data = await response.json().catch(() => ({}))
                if (response.ok && data?.contest) return data.contest
            } catch {
                // Try the next base, or fall through to the branded metadata fallback.
            }
        }
        return null
    } catch {
        return null
    } finally {
        clearTimeout(timer)
    }
}

import { ImageResponse } from '@vercel/og'
import {
    OG_IMAGE_HEIGHT,
    OG_IMAGE_WIDTH,
    buildShareTitle,
    shareSideNames,
    fetchShareContest,
    formatPropLabel,
    parseShareContestId,
    pickContestImage,
} from '../../../../share/[shareid]/shareContestMeta.mjs'

export const runtime = 'edge'

function toDataUri(bytes, mime) {
    return `data:${mime};base64,${Buffer.from(bytes).toString('base64')}`
}

async function loadImageSrc(url) {
    if (!url) return null
    try {
        const response = await fetch(url)
        const contentType = response.headers.get('content-type') || 'image/png'
        if (!response.ok || !contentType.startsWith('image/')) return null
        return toDataUri(await response.arrayBuffer(), contentType.split(';')[0])
    } catch {
        return null
    }
}

async function loadInterBlack() {
    try {
        const response = await fetch('https://cdn.jsdelivr.net/fontsource/fonts/inter@5.2.5/latin-900-normal.ttf')
        if (!response.ok) return null
        return await response.arrayBuffer()
    } catch {
        return null
    }
}

function NameBlock({ name, align }) {
    if (!name) return null
    return (
        <div
            style={{
                color: '#FFFFFF',
                fontSize: 54,
                fontWeight: 700,
                lineHeight: 1.1,
                textAlign: align,
                letterSpacing: '-1px',
            }}
        >
            {name}
        </div>
    )
}

export async function GET(request, { params }) {
    const contestId = parseShareContestId(params?.shareid)
    const contest = contestId ? await fetchShareContest(contestId) : null
    const origin = new URL(request.url).origin
    const [logoSrc, contestImageSrc, interBlack] = await Promise.all([
        loadImageSrc(`${origin}/icon.png`),
        loadImageSrc(pickContestImage(contest)),
        loadInterBlack(),
    ])
    const winners = shareSideNames(contest?.winners)
    const losers = shareSideNames(contest?.losers)
    const prop = formatPropLabel(contest?.config?.prop ?? contest?.prop) || 'Contest'
    const creator = contest?.creator?.username
    const title = contest ? buildShareTitle(contest) : 'Betzon Contest'

    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    backgroundColor: '#000000',
                    padding: '48px 64px 44px',
                    fontFamily: 'sans-serif',
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                    {logoSrc ? (
                        <img
                            src={logoSrc}
                            width={88}
                            height={88}
                            alt="Betzon"
                            style={{ borderRadius: 18 }}
                        />
                    ) : null}
                    <div
                        style={{
                            marginLeft: 20,
                            color: '#FFFFFF',
                            fontSize: 42,
                            fontWeight: 900,
                            fontFamily: 'Inter',
                            letterSpacing: '2px',
                        }}
                    >
                        BETZON
                    </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    {contestImageSrc ? (
                        <img
                            src={contestImageSrc}
                            width={360}
                            height={360}
                            alt={title}
                            style={{
                                objectFit: 'cover',
                                borderRadius: 28,
                                border: '2px solid #32343B',
                                marginRight: 40,
                            }}
                        />
                    ) : null}
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            flex: 1,
                            alignItems: contestImageSrc ? 'flex-start' : 'center',
                        }}
                    >
                        <NameBlock name={winners.join(' & ') || title} align={contestImageSrc ? 'left' : 'center'} />
                        <div
                            style={{
                                display: 'flex',
                                marginTop: 22,
                                marginBottom: 22,
                                padding: '10px 28px',
                                borderRadius: 999,
                                backgroundColor: '#341C0A',
                                border: '2px solid #FF9539',
                                color: '#FF9539',
                                fontSize: 28,
                                fontWeight: 700,
                            }}
                        >
                            {prop}
                        </div>
                        <NameBlock name={losers.join(' & ')} align={contestImageSrc ? 'left' : 'center'} />
                    </div>
                </div>

                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        color: '#989BAA',
                        fontSize: 24,
                        fontWeight: 500,
                    }}
                >
                    <div>{creator ? `@${creator}'s pick` : 'Betzon Contest'}</div>
                    <div>Open in Betzon to win</div>
                </div>
            </div>
        ),
        {
            width: OG_IMAGE_WIDTH,
            height: OG_IMAGE_HEIGHT,
            headers: {
                'Cache-Control': 'public, max-age=60, s-maxage=300',
            },
            ...(interBlack ? {
                fonts: [{ name: 'Inter', data: interBlack, style: 'normal', weight: 900 }],
            } : {}),
        }
    )
}

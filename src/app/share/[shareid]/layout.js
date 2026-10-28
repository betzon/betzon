import {
    OG_IMAGE_HEIGHT,
    OG_IMAGE_WIDTH,
    buildShareDescription,
    buildShareTitle,
    fetchShareContest,
    parseShareContestId,
    shareContestImageUrl,
    shareContestUrl,
} from './shareContestMeta.mjs'

export async function generateMetadata({ params }) {
    const contestId = parseShareContestId(params?.shareid)
    const shareUrl = contestId ? shareContestUrl(contestId) : 'https://www.betzon.com'
    const contest = contestId ? await fetchShareContest(contestId) : null
    const title = contest ? buildShareTitle(contest) : 'Betzon Contest'
    const description = contest
        ? buildShareDescription(contest)
        : 'Open this contest on Betzon to win.'
    const imageUrl = contestId
        ? shareContestImageUrl(contestId)
        : 'https://www.betzon.com/icon.png'
    const image = {
        url: imageUrl,
        width: OG_IMAGE_WIDTH,
        height: OG_IMAGE_HEIGHT,
        type: 'image/png',
        alt: title,
    }

    return {
        metadataBase: new URL('https://www.betzon.com'),
        title,
        description,
        manifest: '/betzon-share.webmanifest',
        openGraph: {
            title,
            description,
            url: shareUrl,
            type: 'website',
            siteName: 'Betzon',
            images: [image],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [imageUrl],
        },
        other: {
            'apple-itunes-app': `app-id=6550891419, app-argument=${shareUrl}`,
        },
    }
}

export default function ShareLayout({ children }) {
    return children
}

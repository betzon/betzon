export async function generateMetadata({ params }) {
    const contestId = String(params?.shareid ?? '')
    const appArgument = /^[1-9]\d*$/.test(contestId)
        ? `https://www.betzon.com/share/${contestId}`
        : 'https://www.betzon.com'
    return {
        manifest: '/betzon-share.webmanifest',
        other: {
            'apple-itunes-app': `app-id=6550891419, app-argument=${appArgument}`,
        },
    }
}

export default function ShareLayout({ children }) {
    return children
}

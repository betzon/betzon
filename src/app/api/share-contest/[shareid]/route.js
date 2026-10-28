import { NextResponse } from 'next/server'

// Local previews use the local share endpoint; production uses the live Render API.
const API_BASE = (process.env.BETZON_API_BASE || (
    process.env.NODE_ENV === 'development'
        ? 'http://localhost:2040/api/v1'
        : 'https://teams-server-xkro.onrender.com/api/v1'
)).replace(/\/$/, '')

function parseShareContestId(value) {
    const raw = String(value ?? '').trim()
    if (!/^[1-9]\d*$/.test(raw)) return null
    return raw
}

export async function GET(_request, { params }) {
    const contestId = parseShareContestId(params?.shareid)
    if (!contestId) {
        return NextResponse.json({ status: false, message: 'Invalid contest id' }, { status: 400 })
    }

    try {
        const apiResponse = await fetch(`${API_BASE}/landing/share/${contestId}`, {
            headers: {
                'Content-Type': 'application/json',
                platform: 'web',
                'x-api-key': 'mb52ea2d-4567-4956-9d19-35a7e75a2c17',
            },
            cache: 'no-store',
            signal: AbortSignal.timeout(8000),
        })

        const data = await apiResponse.json().catch(() => ({}))
        if (apiResponse.ok && data?.contest) {
            return NextResponse.json(data, { status: 200 })
        }
        if (apiResponse.status === 404 || apiResponse.status === 400) {
            return NextResponse.json({ status: false, message: 'Contest not found' }, { status: apiResponse.status })
        }
    } catch {
        // Let the page show its retry and app-opening options on backend failures.
    }

    return NextResponse.json({ status: false, message: 'Contest unavailable' }, { status: 502 })
}

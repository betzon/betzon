import { NextResponse } from 'next/server'

export async function POST(request) {
    let body
    try {
        body = await request.json()
    } catch {
        return NextResponse.json({ message: 'Invalid JSON body.' }, { status: 400 })
    }

    const token = typeof body.token === 'string' ? body.token : ''
    if (!token) {
        return NextResponse.json({ message: 'This link is invalid or has expired.' }, { status: 400 })
    }

    const apiResponse = await fetch('https://api.betzon.com/api/v1/landing/delete-account/confirm', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            platform: 'web',
            'x-api-key': 'mb52ea2d-4567-4956-9d19-35a7e75a2c17',
        },
        body: JSON.stringify({ token }),
    })

    const data = await apiResponse.json().catch(() => ({}))
    if (!apiResponse.ok) {
        return NextResponse.json(
            { message: data.message || 'Failed to delete the account. Please try again later.' },
            { status: apiResponse.status === 400 ? 400 : 502 }
        )
    }

    return NextResponse.json({ ok: true })
}

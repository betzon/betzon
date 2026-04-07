import { NextResponse } from 'next/server'

const RESEND_URL = 'https://api.resend.com/emails'

function isValidEmail(value) {
    if (typeof value !== 'string') return false
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())
}

export async function POST(request) {
    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
        console.error('RESEND_API_KEY is not set')
        return NextResponse.json(
            { message: 'Email service is not configured.' },
            { status: 503 }
        )
    }

    let body
    try {
        body = await request.json()
    } catch {
        return NextResponse.json({ message: 'Invalid JSON body.' }, { status: 400 })
    }

    const email = typeof body.email === 'string' ? body.email.trim() : ''
    if (!email || !isValidEmail(email)) {
        return NextResponse.json({ message: 'Please provide a valid email address.' }, { status: 400 })
    }

    const res = await fetch(RESEND_URL, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            from: 'it@betzon.com',
            to: ['info@betzon.com'],
            subject: 'User Deletion Request',
            text: email,
        }),
    })

    const data = await res.json().catch(() => ({}))

    if (!res.ok) {
        console.error('Resend error:', res.status, data)
        return NextResponse.json(
            { message: 'Failed to send request. Please try again later.' },
            { status: 502 }
        )
    }

    return NextResponse.json({ ok: true })
}

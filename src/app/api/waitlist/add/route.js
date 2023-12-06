import { NextResponse } from 'next/server';
import { waitListSignUp } from '../../middleware/dataValidation';

export async function POST(request) {

    try {
        const body = await request.json();

        const valid = await waitListSignUp(body)
        console.log(valid)

        const options = {
            method: 'POST', // or 'GET' depending on the type of request you're making
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'api-key': 'process.env.BREVO_API_KEY' // Replace YOUR_API_KEY with your actual API key
            },
            body: JSON.stringify({
                email: body.email,
                attributes: {
                    FNAME: body.first_name,
                    LNAME: body.last_name
                },
                emailBlacklisted: false,
                smsBlacklisted: false,
                updateEnabled: false
            }) // where `data` is the payload you want to send, if any
        };

        const createdBrevoUser = await fetch('https://api.brevo.com/v3/contacts', options)

        const res = await createdBrevoUser.json()

        //400 --> dublicate

        //401 --> wrong api key

        if (!!res.id) {
            return NextResponse.json({
                status: 200,
                message: 'signed up!',
            })
        }

        else if (res.code === 'duplicate_parameter') {
            throw new Error('This email already signed up!')
        }

        else {
            console.log(res)
            throw new Error('There appears to be an error! Contact Support')
        }

    } catch (error) {
        console.log(error)
        return NextResponse.json({ status: 400, message: error.message })
    }
}

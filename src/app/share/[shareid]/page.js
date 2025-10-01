"use client"
import { Button, Stack } from '@mui/material'
import React from 'react'
import logo from "../../assets/mb.png"
import Image from 'next/image'
import { useParams } from 'next/navigation'

const BetzonShare = () => {
    const { shareid } = useParams();

    console.log(shareid)

    return (
        <Stack
            spacing={6}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh'
            }}>
            <Image src={logo} height={200} />
            <Button
                variant='contained'
                fullWidth
                color='primary'
                size='large'
                sx={{
                    maxWidth: '300px',
                }}>
                OPEN THE APP
            </Button>
        </Stack >
    )
}

export default BetzonShare

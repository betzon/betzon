"use client"
import React from 'react'
import '../../globals.css'
import { useTheme } from '@emotion/react'
import { Box, IconButton } from '@mui/material'
import GifIcon from '@mui/icons-material/Gif';
import PanoramaIcon from '@mui/icons-material/Panorama';
import SendIcon from '@mui/icons-material/Send';
import HandshakeIcon from '@mui/icons-material/Handshake';

const MessagingInput = () => {
    const theme = useTheme()
    const username = 'zackovando'

    const IconButtonStyle = {

    }
    return (
        <Box
            id='messaging-input-wrapper'
            style={{
                border: `solid 1px ${theme.palette.dark.otherlight}`
            }}
        >

            <Box
                sx={{
                    width: 'fit-content'
                }}
            >

                <IconButton sx={IconButtonStyle}>
                    <GifIcon fontSize='small' />
                </IconButton>

                <IconButton sx={IconButtonStyle}>
                    <PanoramaIcon fontSize='small' />
                </IconButton>

                <IconButton sx={IconButtonStyle}>
                    <HandshakeIcon fontSize='small' />
                </IconButton>

            </Box>

            <input
                placeholder={`Send @${username} a message!`}
                id='messaging-input'
            />


            <IconButton sx={IconButtonStyle}>
                <SendIcon fontSize='small' />
            </IconButton>

        </Box>
    )
}

export default MessagingInput
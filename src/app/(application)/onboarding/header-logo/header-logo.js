import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import logo from "../../../assets/betzon_logo.png"
import { useTheme } from '@emotion/react'

const OnboardingHeaderLogo = () => {

    const theme = useTheme()

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: "flex-start",
            alignItems: 'center',
            gap: '4px'
        }}>
            <Box sx={{
                ///background: theme.palette.primary.main,
                border: `3px solid ${theme.palette.primary.main}`,
                background: "black",
                borderRadius: '8px 8px 8px 0',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '40px',
                height: '40px'
            }}>
                <Image src={logo} height={20} />
            </Box>
            {
                /*
     <Typography
                    onClick={() => routeHandler('/')}
                    variant="h6"
                    noWrap
                    sx={{
                        ml: 1,
                        fontWeight: 700,
                        color: 'white'
                    }}
                >
                    BETZON
                </Typography>s
                */
            }
        </Box>
    )
}

export default OnboardingHeaderLogo

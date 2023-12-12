import { useTheme } from '@emotion/react'
import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

const ContentBox = ({ data }) => {
    return (
        <Stack
            spacing={1}
            sx={{
                //background: 'red',
                textAlign: { xs: 'center', sm: 'left', md: 'left', lg: 'left', xl: 'left' },
                width: '100%'
            }}>
            <Typography variant='h5' sx={{ fontWeight: 700 }}>{data.title}</Typography>
            <Typography>{data.content}</Typography>
        </Stack>
    )
}

const OurResponsibilitiesSection = () => {
    const theme = useTheme()

    const content = [
        {
            title: 'Direct Betting, No Middleman',
            content: "At BetzOn, you're not placing bets against the house but directly with other genuine fans and enthusiasts. Whether you're clashing with fans of the Lakers or the Steelers, BetzOn is your go-to platform for authentic, fan-to-fan wagering."
        },
        {
            title: 'Enjoy Full Winnings - Zero Fees!',
            content: "That's right, BetzOn ensures that you keep 100% of your winnings. We don't take a cut. To start or accept a bet, simply buy wager credits and dive into the action!"
        },
        {
            title: 'Focusing on You, the User',
            content: "Our goal is to craft a platform that you'll absolutely love. Have a feature in mind that BetzOn should include, or a sport you're eager to bet on? Drop us a message at our support email. We're committed to replying within 12 hours, because your input shapes BetzOn."
        }
    ]

    return (
        <Stack
            id="why-betzon"
            spacing={6}
            sx={{
                //background: theme.palette.primary.main,
                margin: 0,
                backdropFilter: 'blur(100px)', // Apply blur effect
                border: `1px solid ${theme.palette.dark.otherlight}`,
                padding: '48px 24px',
                borderRadius: '8px',
                textAlign: 'center'
            }}>

            <Typography variant='h3'>Why BetzOn?</Typography>

            <Box
                sx={{
                    display: { xs: 'flex', sm: 'grid', md: 'grid', lg: 'grid', xl: 'grid' },
                    flexDirection: 'column',
                    justifyContent: 'center',
                    gridTemplateColumns: { xs: '1fr 1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr', lg: '1fr 1fr 1fr', xl: '1fr 1fr 1fr' },
                    gridTemplateRows: '1fr',
                    columnGap: '60px',
                    rowGap: '60px',
                    gap: '48px'
                }}
            >
                {
                    content.map((item, index) => (
                        <ContentBox data={item} key={index} />
                    ))
                }
            </Box>

        </Stack>
    )
}

export default OurResponsibilitiesSection

import { openUserModal } from '@/app/redux/actions/modalAction';
import { useTheme } from '@emotion/react'
import { Box, Button, Stack, Typography } from '@mui/material'
import { useMediaQuery } from '@mui/material';
import React from 'react'
import { useDispatch } from 'react-redux';

const ContentBox = ({ data }) => {
    const isSmallScreen = useMediaQuery('md');

    return (
        <Stack
            spacing={1}
            sx={{
                //background: 'red',
                textAlign: { xs: 'center', sm: 'left', md: 'left', lg: 'left', xl: 'left' },
                width: '100%'
            }}>
            <Typography variant={isSmallScreen ? 'h5' : 'h5'} sx={{ fontWeight: 700 }}>{data.title}</Typography>
            <Typography>{data.content}</Typography>
        </Stack>
    )
}

const OurResponsibilitiesSection = () => {

    const dispatch = useDispatch()

    const theme = useTheme()

    const isSmallScreen = useMediaQuery('md');

    const triggerModal = () => {
        dispatch(openUserModal())
    }

    const content = [
        {
            title: isSmallScreen ?
                `Direct Betting, No Middleman` :
                (<>
                    Direct Betting,
                    <br />
                    No more Middleman
                </>),
            content: "At Motobookie, you're not placing bets against the house but directly with other genuine fans and enthusiasts. Whether you're clashing with fans of the Lakers or the Steelers, Motobookie is your go-to platform for authentic, fan-to-fan wagering."
        },
        {
            title: isSmallScreen ?
                `Enjoy Full Winnings - Zero Fees!` :
                (<>
                    Enjoy Full Winnings
                    <br />
                    - Zero Fees!
                </>),
            content: "That's right, Motobookie ensures that you keep 100% of your winnings. We don't take a cut. To start or accept a bet, simply buy wager credits and dive into the action!"
        },
        {
            title: isSmallScreen ?
                `Focusing on You, the User` :
                (<>
                    Focusing on You,
                    <br />
                    the User
                </>),
            content: "Our goal is to craft a platform that you'll absolutely love. Have a feature in mind that Motobookie should include, or a sport you're eager to bet on? Drop us a message at our support email. We're committed to replying within 12 hours, because your input shapes Motobookie."
        }
    ]

    return (
        <Stack
            id="why-motobookie"
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

            <Typography variant='h3' sx={{ fontWeight: 700 }}>Why Motobookie?</Typography>

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

            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <Button variant='contained' onClick={() => triggerModal()} sx={{ width: 'fit-content', fontWeight:700}}>Check out our Motobookie Challenge!</Button>
            </Box>

        </Stack>
    )
}

export default OurResponsibilitiesSection

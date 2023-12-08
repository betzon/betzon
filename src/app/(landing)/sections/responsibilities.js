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
            title: 'No House',
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'
        },
        {
            title: 'No Fees',
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'
        },
        {
            title: 'User Centric',
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'
        },
        {
            title: 'Value 4',
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'
        },
        {
            title: 'Value 5',
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'
        },
        {
            title: 'Value 6',
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'
        },
    ]

    return (
        <Stack
            id="why-betzon"
            spacing={6}
            sx={{
                //background: theme.palette.primary.main,
                margin:0,
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
                    gridTemplateRows: '1fr 1fr',
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

'use client'
import { Box, Link, Typography } from '@mui/material'
import React from 'react'
import WagerFeed from './list'
import { useTheme } from '@emotion/react'
const WagerSectionTitleList = ({ title, link, feed }) => {

    const theme = useTheme()

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            width: { xs: '100%', sm: '100%', md: '400px', lg: '400px' }
        }}>

            <Box sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <Typography
                    variant='h6'>
                    {title}
                </Typography>

                <Link href={link.path} color={theme.palette.dark.light} sx={{
                    textDecoration: 'none'
                }}>
                    <Typography variant='body'>
                        {link.name}
                    </Typography>
                </Link>

            </Box>

            <WagerFeed feed={[...feed]} />

        </Box>
    )
}

export default WagerSectionTitleList

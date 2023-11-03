'use client'
import { Box, Divider, Link, Typography } from '@mui/material'
import React from 'react'
import WagerFeed from './list'
import { useTheme } from '@emotion/react'
import { useSelector } from "react-redux"


const WagerSectionTitleList = ({ title, link, grouped }) => {

    const theme = useTheme()

    const feed = useSelector((state) => state.leagues.feed);

    return (
        <>
            {
                feed.length != 0 ? <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                    width: { xs: '100%', sm: '100%', md: '400px', lg: '400px' },
                    border: grouped ? `1px solid ${theme.palette.dark.otherlight}` : '',
                    padding: grouped ? '16px' : '',
                    borderRadius: grouped ? '12px' : ''
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


                    {
                        grouped ? <Divider sx={{ width: '100%' }} /> : ''
                    }
                    
                    <WagerFeed feed={[...feed]} grouped={grouped} />

                </Box> : ''
            }
        </>
    )
}

export default WagerSectionTitleList

"use client"
import React from 'react'
import { Box, Divider, List, ListItemButton, Stack, Typography } from '@mui/material'
import WagerCardTeamItem from '../teams/team-item'
import WagerTags from '@/app/components/tags/wagertags'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useTheme } from '@emotion/react';
import { useRouter } from 'next/navigation'

const MyWagersList = () => {

    const list = [1, 2]

    const theme = useTheme()

    const router = useRouter()

    return (
        <List>
            {
                list.map((item, index) => (
                    <div key={index}>
                        <ListItemButton sx={{ pt: 4, pb: 4 }} key={index} onClick={() => router.push("/wagers/testers")}>
                            <Stack spacing={3} sx={{
                                width: '100%'
                            }}>
                                <WagerTags title='NBA' />
                                <Box sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between'
                                }}>
                                    <Stack
                                        spacing={2}>
                                        <WagerCardTeamItem predictionOnly />
                                        <WagerCardTeamItem predictionOnly />
                                    </Stack>

                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '6px'
                                    }}>
                                        <Box sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'flex-end',
                                            color: theme.palette.dark.light
                                        }}>
                                            <Typography variant='caption'>Status: <strong style={{ fontWeight: 700, color: theme.palette.success.main }}>Won</strong></Typography>
                                            <Typography variant='caption'>Losses: <strong style={{ fontWeight: 700 }}>30 chips</strong></Typography>
                                            <Typography variant='caption'>Owner: <strong style={{ fontWeight: 700 }}>@bookiebro</strong></Typography>
                                        </Box>
                                        <KeyboardArrowRightIcon />
                                    </Box>
                                </Box>
                            </Stack>
                        </ListItemButton>
                        {
                            index != 1 || list.length - 1 != index ? <Divider key={index} /> : ''
                        }
                    </div>
                ))
            }
        </List>
    )
}

export default MyWagersList
/*
<List>
            <ListItemButton sx={{
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                <Stack
                    spacing={2}>
                    <WagerTags title='NBA' />
                    <WagerCardTeamItem />
                    <WagerCardTeamItem />
                </Stack>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <Box sx={{
                        display:'flex',
                        flexDirection:'column',
                        alignItems:'flex-end'
                    }}>
                        <Typography variant='caption'>Status: Won</Typography>
                        <Typography variant='caption'>Losses: 30 chips</Typography>
                        <Typography variant='caption'>Owner: @bookiebro</Typography>
                    </Box>
                    <KeyboardArrowRightIcon />
                </Box>
            </ListItemButton>
        </List>
                */

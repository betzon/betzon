import React, { useState } from 'react'
import Layout from '../layout'
import { Box, Button, Divider, Typography } from '@mui/material'
import { useSelector, useDispatch } from "react-redux"
import { setCurrentLeague } from '@/app/redux/actions/leagueBarAction';
import FestivalIcon from '@mui/icons-material/Festival';
import DateBarHeader from './date-bar';

const LeagueHeaders = ({ leagues }) => {

    const dispatch = useDispatch();

    const addOrRemoveTeamHandler = (index) => {
        dispatch(setCurrentLeague(index))
    }

    return (
        <>
            <Box
                sx={{
                    width: '100%',
                    overflow: 'auto',
                    top: 0,
                    backgroundColor: 'black',
                    zIndex: '99',
                    padding: '12px 16px',
                    position: 'sticky',
                    // Hide scrollbar for Chrome, Safari and Opera
                    '&::-webkit-scrollbar': {
                        display: 'none'
                    },
                    // Hide scrollbar for Firefox
                    scrollbarWidth: 'none',
                    // Hide scrollbar for IE and Edge
                    '-ms-overflow-style': 'none'
                }}
            >

                <Box sx={{
                    display: 'flex',
                    width: 'fit-content',
                    gap: '12px'
                }}>


                    <Button
                        sx={{
                            display: 'flex',
                            gap: 1,
                            width: 'fit-content',
                            borderRadius: '100px',
                            paddingTop: '4px',
                            paddingBottom: '4px',
                            height: '36px',
                            width: '186px',
                            opacity: leagues[0].status ? 1 : .3
                        }}
                        onClick={() => addOrRemoveTeamHandler(0)}
                        color='primary'
                        variant='outlined'
                    >

                        <FestivalIcon fontSize='small' />

                        <Typography variant='caption1'>
                            {leagues[0].title}
                        </Typography>

                    </Button>

                    <Divider orientation="vertical" flexItem />

                    {
                        leagues.slice(1).map((item, index) => (
                            <Button
                                key={index}
                                onClick={() => addOrRemoveTeamHandler(index + 1)}  // Notice the adjustment here
                                sx={{
                                    display: 'flex',
                                    width: 'fit-content',
                                    gap: 1,
                                    borderRadius: '100px',
                                    height: '36px',
                                    minWidth: '96px',
                                    opacity: item.status ? 1 : .3
                                }}
                                color='primary'
                                variant='outlined'
                            >
                                {item.icon}
                                <Typography variant='caption1'>
                                    {item.title}
                                </Typography>
                            </Button>
                        ))
                    }


                </Box>

            </Box>
            {
                leagues[0].status ? '' : <DateBarHeader />
            }
        </>

    )
}

export default LeagueHeaders

//<Divider flexItem sx={{ marginTop: '12px' }} />

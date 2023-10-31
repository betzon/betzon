'use client'
import React, { useState } from 'react'
import Layout from '../layout'
import { Box, Button, Divider, Typography } from '@mui/material'
import FestivalIcon from '@mui/icons-material/Festival';

const LeagueHeaders = () => {

    const [leagues, setLeagues] = useState([

        {
            title: 'Trending Events',
            status: true,
            icon: <FestivalIcon fontSize='small' />

        },
        {
            title: 'NBA',
            status: false,
            icon: <FestivalIcon fontSize='small' />

        },
        {
            title: 'NFL',
            status: false,
            icon: <FestivalIcon fontSize='small' />
        },
        {
            title: 'MLB',
            status: false,
            icon: <FestivalIcon fontSize='small' />
        },
        {
            title: 'NHL',
            status: false,
            icon: <FestivalIcon fontSize='small' />
        }
    ])

    const addOrRemoveTeamHandler = (index) => {
        // Create a deep copy of the current leagues state.
        let newLeagues = [...leagues];

        // If the clicked league is already true, we leave it as it is. 
        // Otherwise, set the clicked one to true and all others to false.
        if (!newLeagues[index].status) {
            newLeagues.forEach((league, i) => {
                league.status = i === index;
            });
        }

        setLeagues(newLeagues);
    };


    return (
        <>
            <Box
                sx={{
                    width: '100%',
                    overflow: 'auto',
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

                        {leagues[0].icon}

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
            
        </>

    )
}

export default LeagueHeaders

//<Divider flexItem sx={{ marginTop: '12px' }} />

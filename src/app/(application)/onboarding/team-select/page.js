"use client"
import LeagueBar from '@/app/components/onboarding/team-select/league-bar'
import LeagueGrid from '@/app/components/onboarding/team-select/league-grid'
import { Box, Button, Divider, Typography } from '@mui/material'
import React, { useState } from 'react'

const TeamSelect = () => {

    const leagues = ['nba', 'nfl', 'mlb', 'nhl']

    const [selected, setSelected] = useState('nba')


    const leagueTeams = {
        nba: [
            'Atlanta Hawks',
            'Boston Celtics',
            'Brooklyn Nets',
            'Charlotte Hornets',
            'Chicago Bulls',
            'Cleveland Cavaliers',
            'Dallas Mavericks',
            'Denver Nuggets',
            'Detroit Pistons',
            'Golden State Warriors',
            'Houston Rockets',
            'Indiana Pacers',
            'LA Clippers',
            'Los Angeles Lakers',
            'Memphis Grizzlies',
            'Miami Heat',
            'Milwaukee Bucks',
            'Minnesota Timberwolves',
            'New Orleans Pelicans',
            'New York Knicks',
            'Oklahoma City Thunder',
            'Orlando Magic',
            'Philadelphia 76ers',
            'Phoenix Suns',
            'Portland Trail Blazers',
            'Sacramento Kings',
            'San Antonio Spurs',
            'Toronto Raptors',
            'Utah Jazz',
            'Washington Wizards'
        ],
        nhl: [
            'Boston Bruins',
            'Chicago Blackhawks',
            'Detroit Red Wings',
            'New York Rangers',
            'Toronto Maple Leafs',
            'Boston Bruins',
            'Chicago Blackhawks',
            'Detroit Red Wings',
            'New York Rangers',
            'Toronto Maple Leafs',
            // ... add other NHL teams here
        ],
        nfl: [
            'Dallas Cowboys',
            'Green Bay Packers',
            'New England Patriots',
            'Pittsburgh Steelers',
            'San Francisco 49ers',
            'Green Bay Packers',
            'New England Patriots',
            'Pittsburgh Steelers',
            'San Francisco 49ers',
            // ... add other NFL teams here
        ],
        mlb: [
            'Boston Red Sox',
            'Chicago Cubs',
            'Los Angeles Dodgers',
            'New York Yankees',
            'San Francisco Giants',
            'New York Yankees',
            'San Francisco Giants',
            // ... add other MLB teams here
        ]
    };

    const handleLeagueSelection = (event, newLeague) => {
        console.log(newLeague)
        setSelected(newLeague);
    };

    return (
        <>

            <Typography variant='h6' fontWeight={700}>Select your favorite teams!</Typography>
            <Typography variant='caption'>Select teams you&apos;re rooting for. Don&apos;t Worry, you can change this later!</Typography>


            <LeagueBar
                leagues={leagues}
                handleLeagueSelection={handleLeagueSelection}
                selected={selected} />


            <Divider />

            <Box
                sx={{
                    overflowY: 'scroll',
                    height: '75%'
                }}>
                <LeagueGrid list={[...leagueTeams[selected]]} />
            </Box>


            <Box sx={{
                position: 'relative',
                width: 'inherit'
            }}>

                <Button
                    sx={{
                        width: '100%'
                    }}
                    variant='contained'>
                    CONTINUE
                </Button>

            </Box>

        </>
    )
}

export default TeamSelect
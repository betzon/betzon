"use client"
import LeagueBar from '@/app/components/onboarding/team-select/league-bar'
import LeagueGrid from '@/app/components/onboarding/team-select/league-grid'
import { Box, Button, Divider, Typography } from '@mui/material'
import React, { useCallback, useState } from 'react'

const TeamSelect = () => {

    const leagues = ['nba', 'nfl', 'mlb', 'nhl']

    //league selection
    const [selected, setSelected] = useState('nba')

    //teamselection
    const [leagueTeams, setleagueTeams] = useState({
        nba: [
            { name: "Atlanta Hawks", status: false },
            { name: "Boston Celtics", status: false },
            { name: "Brooklyn Nets", status: false },
            { name: "Charlotte Hornets", status: false },
            { name: "Chicago Bulls", status: false },
            { name: "Cleveland Cavaliers", status: false },
            { name: "Dallas Mavericks", status: false },
            { name: "Denver Nuggets", status: false },
            { name: "Detroit Pistons", status: false },
            { name: "Golden State Warriors", status: false },
            { name: "Houston Rockets", status: false },
            { name: "Indiana Pacers", status: false },
            { name: "LA Clippers", status: false },
            { name: "Los Angeles Lakers", status: false },
            { name: "Memphis Grizzlies", status: false },
            { name: "Miami Heat", status: false },
            { name: "Milwaukee Bucks", status: false },
            { name: "Minnesota Timberwolves", status: false },
            { name: "New Orleans Pelicans", status: false },
            { name: "New York Knicks", status: false },
            { name: "Oklahoma City Thunder", status: false },
            { name: "Orlando Magic", status: false },
            { name: "Philadelphia 76ers", status: false },
            { name: "Phoenix Suns", status: false },
            { name: "Portland Trail Blazers", status: false },
            { name: "Sacramento Kings", status: false },
            { name: "San Antonio Spurs", status: false },
            { name: "Toronto Raptors", status: false },
            { name: "Utah Jazz", status: false },
            { name: "Washington Wizards", status: false }
        ],
        nhl: [
            { name: "Boston Bruins", status: false },
            { name: "Chicago Blackhawks", status: false },
            { name: "Detroit Red Wings", status: false },
            { name: "New York Rangers", status: false },
            { name: "Toronto Maple Leafs", status: false },
            { name: "Boston Bruins", status: false },
            { name: "Chicago Blackhawks", status: false },
            { name: "Detroit Red Wings", status: false },
            { name: "New York Rangers", status: false },
            { name: "Toronto Maple Leafs", status: false }
        ],
        nfl: [
            { name: "Dallas Cowboys", status: false },
            { name: "Green Bay Packers", status: false },
            { name: "New England Patriots", status: false },
            { name: "Pittsburgh Steelers", status: false },
        ],
        mlb: [
            { name: "Boston Red Sox", status: false },
            { name: "Chicago Cubs", status: false },
            { name: "Los Angeles Dodgers", status: false },
            { name: "New York Yankees", status: false },
        ]
    })

    const [teamsSelected, setTeamsSelected] = useState({
        nba: [],
        nhl: [],
        nfl: [],
        mlb: []
    });

    const handleLeagueSelection = (event, newLeague) => {
        console.log(newLeague)
        setSelected(newLeague);
    };

    const addOrRemoveTeamHandler = useCallback((teamName, index) => {
        // Create a deep copy of the current teamsSelected state.
        let updatedTeamsSelected = { ...teamsSelected, [selected]: [...teamsSelected[selected]] };

        let newLeagueTeams = { ...leagueTeams }
        // Check if the team is already selected.
        const isTeamSelected = updatedTeamsSelected[selected].includes(teamName);

        if (isTeamSelected) {
            // Remove the team from the array.
            updatedTeamsSelected[selected] = updatedTeamsSelected[selected].filter(item => item !== teamName);

        } else {
            // Add the team to the array.
            updatedTeamsSelected[selected].push(teamName);
        }

        // Update the status of the team in the leagueTeams object.
        // This assumes leagueTeams is in the component's state or available in the component's scope.
        const teamIndex = newLeagueTeams[selected].findIndex(team => team.name === teamName);

        if (teamIndex !== -1) {
            newLeagueTeams[selected][teamIndex].status = !isTeamSelected;
        }

        // Update the teamsSelected state.
        console.log(leagueTeams)
        setleagueTeams(newLeagueTeams)
        setTeamsSelected(updatedTeamsSelected);
    }, [teamsSelected, leagueTeams, selected]);



    console.log(teamsSelected)
    //console.log(teamsSelected)
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
                <LeagueGrid
                    teamsSelected={teamsSelected}
                    list={leagueTeams[selected]}
                    addOrRemoveTeamHandler={addOrRemoveTeamHandler} />
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
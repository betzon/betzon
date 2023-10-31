'use client'
import React, { useState } from 'react'
import nba from '../../../assets/nba.svg'
import { ToggleButton, Typography } from '@mui/material'
import Image from 'next/image'

const LeagueTeamItem = ({ data, index, addOrRemoveTeamHandler, teamsSelected }) => {

    const ImageSize = '96px'

    const [selectedTeam, setSelectedTeam] = useState(false)

    const handleLeagueTeamSelection = () => {
        // addOrRemoveTeamHandler(data.name)
    };

    //when selected shoot a redux request to create a list of what teams have been selected!
    
    return (
        <ToggleButton
            onClick={() => addOrRemoveTeamHandler(data.name, 0)}
            value={data.name}
            selected={data.status}
            sx={{
                width: ImageSize,
                height: ImageSize,
                borderRadius: 0
                // justifySelf: index % 3 == 1 ? 'center' : index % 3 == 2 ? 'end' : 'start'
            }}>
            {
                //<Image alt="here" src={nba} height={60} />
            }
            <Typography variant='caption'>{data.name}</Typography>
        </ToggleButton>
    )
}

export default LeagueTeamItem
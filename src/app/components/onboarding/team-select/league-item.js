'use client'
import React, { useState } from 'react'
import nba from '../../../assets/nba.svg'
import { ToggleButton } from '@mui/material'
import Image from 'next/image'

const LeagueTeamItem = ({ data, index }) => {

    const ImageSize = '96px'

    const [selectedTeam, setSelectedTeam] = useState(false)

    const handleLeagueTeamSelection = () => {
        setSelectedTeam(!selectedTeam);
    };

    //when selected shoot a redux request to create a list of what teams have been selected!

    return (
        <ToggleButton
            onClick={handleLeagueTeamSelection}
            value={data}
            selected={selectedTeam}
            sx={{
                width: ImageSize,
                height: ImageSize,
                opacity: selectedTeam ? '1' : '0.3',
                borderRadius: 0
                // justifySelf: index % 3 == 1 ? 'center' : index % 3 == 2 ? 'end' : 'start'
            }}>
            <Image alt="here" src={nba} height={60} />
        </ToggleButton>
    )
}

export default LeagueTeamItem
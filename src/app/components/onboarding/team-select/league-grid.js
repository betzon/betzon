"use client"
import React, { useState } from 'react'
import LeagueTeamItem from './league-item'
import { Box, ToggleButtonGroup, ToggleButton } from '@mui/material'
import { styled } from '@mui/material/styles';
import { FormatBold } from '@mui/icons-material';
import Image from 'next/image'

import nba from '../../../assets/nba.svg'

const LeagueGrid = ({ list, addOrRemoveTeamHandler, teamsSelected }) => {

    return (

        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px 24px', // vertical gap of 8px and horizontal gap of 24px
                // spacing between grid items, adjust as needed
                justifyContent: { xs: 'center', sm: 'sspace-between' },  // horizontally centers the items within the grid container
                alignItems: 'flex-start',
                paddingBottom: '36px',
                paddingTop: '12px'
            }}
        >

            {
                list.map((team, index) => (
                    <LeagueTeamItem
                        teamsSelected={teamsSelected}
                        addOrRemoveTeamHandler={addOrRemoveTeamHandler}
                        data={team}
                        index={index}
                        key={index}
                    />
                ))
            }

        </Box>

    )
}

export default LeagueGrid

/*
 <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                //   display: 'grid',
                //  gridTemplateColumns: '1fr 1fr 1fr',
                gap: '24px', // spacing between grid items, adjust as needed
                justifyContent: 'space-between',  // horizontally centers the items within the grid container
                //            alignContent: 'space-between', // distributes rows with equal spacing between them
                padding: '8px'
            }}
        >
            {
                list.map((team, index) => (
                    <LeagueTeamItem
                        data={team}
                        index={index}
                        key={index}
                    />
                ))
            }
        </Box>
*/

/*


 <StyledToggleButtonGroup
            value={formats}
            onChange={handleFormat}
            aria-label="text formatting"

            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: '12px',
                borderRadius: 0,
                background: 'black'
            }}
        >

            {
                list.map((items, index) => (

                    <ToggleButton
                        key={index}
                        value={items}
                        sx={{
                            width: ImageSize,
                            height: ImageSize,
                            borderRadius: 0,
                            opacity: true ? '1' : '0.3',
                            // justifySelf: index % 3 == 1 ? 'center' : index % 3 == 2 ? 'end' : 'start'
                        }}>

                        <Image alt="here" src={nba} height={48} />

                    </ToggleButton>

                ))
            }

        </StyledToggleButtonGroup>


        */
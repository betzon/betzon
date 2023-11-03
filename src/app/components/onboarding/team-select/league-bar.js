"use client"// Because we're inside a server component
import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import { ToggleButton, ToggleButtonGroup } from '@mui/material'
import Image from 'next/image'
import nba from '../../../assets/nba.svg'

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
    '& .MuiToggleButtonGroup-grouped': {
        margin: theme.spacing(0.5),
        border: 0,
        '&.Mui-disabled': {
            border: 0,
        },
        '&:not(:first-of-type)': {
            borderRadius: theme.shape.borderRadius,
        },
        '&:first-of-type': {
            borderRadius: theme.shape.borderRadius,
        },
    },
}));

const LeagueBar = ({ leagues, handleLeagueSelection, selected }) => {

    const ImageSize = '72px'

    return (
        <StyledToggleButtonGroup
            exclusive
            value={selected}
            onChange={handleLeagueSelection}
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                borderRadius: 0,
                position: 'sticky',
                top: 0,  // <-- This is the key for sticking the element at the top
                zIndex: 1000,
                background: 'black',
                paddingTop: '12px',
                paddingBottom: '12px'
            }}>

            {
                leagues.map((item, index) => (

                    <ToggleButton
                        key={index}
                        value={item}
                        sx={{
                            width: ImageSize,
                            height: ImageSize,
                            opacity: item === selected ? '1' : '0.3',
                            borderRadius: 0,
                        }}>

                        <Image alt="here" src={nba} height={48} />

                    </ToggleButton>

                ))
            }

        </StyledToggleButtonGroup>
    )
}

export default LeagueBar

//<LeagueItem key={index} value={item} selected={item === selected}/>
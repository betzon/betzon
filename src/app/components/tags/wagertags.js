'use client'
import React from 'react'
import { Chip } from '@mui/material'
import { useTheme } from '@emotion/react'
import { textTransform } from '@mui/system'

const WagerTags = (props) => {
    const theme = useTheme()
    return (
        <Chip
            sx={{
                width: 'fit-content',
                backgroundColor: theme.palette.dark.dark,
                color: theme.palette.dark.light,
                textTransform: 'uppercase',
                paddingTop: '.5px !important',
                paddingBottom: '.5px !important',
                fontSize: '0.7rem'  // adjust this value as per your requirement

            }}
            size='small'
            label={props.title} />
    )
}

export default WagerTags
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
                backgroundColor: theme.palette.dark.main,
                color: theme.palette.dark.light,
                textTransform: 'uppercase',
                paddingTop:'1px !important',
                paddingBottom:'1px !important'
            }}
            size='small'
            label={props.title} />
    )
}

export default WagerTags
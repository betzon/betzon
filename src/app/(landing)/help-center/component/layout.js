"use client"
import { useTheme } from '@emotion/react';
import { Box, Container, Typography, useMediaQuery } from '@mui/material'
import React from 'react'

const PolicyHeaderTitle = () => {

  const theme = useTheme();

  const isMediumUp = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'pink',
      minHeight: isMediumUp ? '500px' : '250px'
    }}>
      <Typography variant={isMediumUp ? 'h3' : 'h5'} sx={{ fontWeight: 700 }}>POLICY TITLE</Typography>
    </Box>
  )
}

const PolicyContent = () => {
  return (
    <Box sx={{
      height: '100vh',
      background: 'red'
    }}>

      <PolicyHeaderTitle />

    </Box>
  )
}

export default PolicyContent

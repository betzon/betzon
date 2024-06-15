import theme from '@/app/styles/theme'
import { Typography, useMediaQuery } from '@mui/material'
import { Box, borderColor, borderRadius, width } from '@mui/system'
import React from 'react'

export default function OutlinedTitledBox({text, children}) {
  const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.up("md"));

  return (
    <Box style={{
      border: '6px solid',
      borderColor: theme.palette.primary.main,
      flex: 1,
      width:"100%",
      position: "relative",
      borderRadius: '5px',
      display: 'flex', // Flexbox to arrange children
      flexDirection: 'column', // Arrange children in a column
      alignItems: 'center', // Center items horizontally
      justifyContent: 'center', // Center items verticall
      overflow:"hidden"
    }}>
      <Typography variant='h2' style = {{
        paddingBottom:"70px",
        paddingTop: isLargeScreen ? '60px' : '30px',
        lineHeight: isLargeScreen ? '50px' : '30px',
        paddingLeft: isLargeScreen ? '43px' : '30px',
        paddingRight: isLargeScreen ? '43px' : '30px',

        textAlign: isLargeScreen ? "left" : 'center'
      }}>{text}</Typography>
      {children}
    </Box>
  )
}

import theme from '@/app/styles/theme'
import { Typography, useMediaQuery } from '@mui/material'
import { Box, borderColor, borderRadius, width } from '@mui/system'
import React from 'react'

import { Inter } from 'next/font/google'
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export default function OutlinedTitledBox({ text, children }) {
  const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.up("md"));

  return (
    <Box style={{
      border: '6px solid',
      borderColor: theme.palette.primary.main,
      width: "100%",
      borderRadius: '5px',
      display: 'flex', // Flexbox to arrange children
      flexDirection: 'column', // Arrange children in a column
      alignItems: 'center', // Center items horizontally
      justifyContent: 'center', // Center items verticall
      overflow: "hidden",
      padding: 12,
      paddingTop: 36
    }}>
      <Box sx={{
        paddingBottom: 8
      }}>
        <Typography
          variant='h2'
          sx={{
            lineHeight: 1,
            letterSpacing: -1.5,
            fontWeight: 900,
            textAlign: 'left'
          }}>
          {text}
        </Typography>
      </Box>
      {children}
    </Box>
  )
}

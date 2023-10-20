"use client"
import Input from '@/app/components/(forms)/main'
import theme from '@/app/styles/theme'
import { useTheme } from '@emotion/react'
import { Box, TextField, Typography, Link as MUILink, Button } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const SignUp = () => {

  const theme = useTheme()

  const boxStyles = {
    width: '100%',
    display: "flex",
    flexDirection: 'column',
    justifyContent: 'center'
  }

  return (

    <Box
      sx={{
        boxSizing: 'border-box',
        display: 'flex',
        height: '100%',
        position: 'relative',
        flexDirection: 'column',
        justifyContent: { xs: 'space-between', md: 'center' },
        alignItems: 'center',
        gap: '48px',
      }}
    >

      <Typography>NEW LOGO HERE BC CHAD HATED MINE</Typography>

      <Box sx={{
        ...boxStyles,
        alignItems: 'left',
        gap: '16px',
        alignItems: { xs: 'left', md: 'center' },
        width: { xs: '100%', md: '400px' }
      }}>

        <Typography variant="h5" sx={{ fontWeight: 700 }}>Create an Account</Typography>

        <TextField
          sx={{ width: '100%' }}
          label={'Email'}
          variant='outlined' />

        <TextField
          sx={{ width: '100%' }}
          label={'Username'}
          variant='outlined' />

        <TextField
          sx={{ width: '100%' }}
          label={'Password'}
          variant='outlined' />

        <TextField
          sx={{ width: '100%' }}
          label={'Confirm Password'}
          variant='outlined' />

      </Box>


      <Box sx={{
        ...boxStyles,
        alignItems: 'center',
        gap: '8px',
        width: { xs: '100%', md: '400px' }
      }}>

        <Button
          sx={{
            width: '100%'
          }}
          color='primary'
          size='large'
          variant='contained'>
          CREATE AN ACCOUNT
        </Button>

        <Box sx={{
          display: 'flex',
          gap: '6px'
        }}>
          <Typography variant='body1' color={theme.palette.dark.otherlight}>
            Already have an account?
          </Typography>

          <MUILink color={theme.palette.neutral.main} href="/login" sx={{ fontWeight: 700 }}>
            LOGIN
          </MUILink>
        </Box>

        <MUILink color={theme.palette.neutral.main} href="/" sx={{ fontWeight: 700 }}>
          Go back to Home Page
        </MUILink>

      </Box>

    </Box>
  )
}

export default SignUp
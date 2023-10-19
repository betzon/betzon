"use client"
import Input from '@/app/components/(forms)/main'
import theme from '@/app/styles/theme'
import { useTheme } from '@emotion/react'
import { Box, TextField, Typography, Link as MUILink, Button } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const Login = () => {

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
        width: '100%',
        alignItems: 'center',
        gap: '48px',
      }}
    >

      <Typography>NEW LOGO HERE BC CHAD HATED MINE</Typography>

      <Box sx={{
        ...boxStyles,
        alignItems: { xs: 'left', md: 'center' },
        gap: '16px',
        width: { xs: '100%', md: '400px' }
      }}>

        <Typography variant="h5" sx={{ fontWeight: 700 }}>Welcome Back!</Typography>

        <TextField
          sx={{ width: '100%' }}
          label={'Username'}
          variant='outlined' />

        <TextField
          sx={{ width: '100%' }}
          label={'Password'}
          variant='outlined' />

        <MUILink variant='body1' color={theme.palette.dark.otherlight} href="#">
          Forgot Password?
        </MUILink>

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
          LOGIN
        </Button>

        <Box sx={{
          display: 'flex',
          gap: '6px'
        }}>
          <Typography variant='body1' color={theme.palette.dark.otherlight}>
            Don&apos;t have an account?
          </Typography>

          <MUILink color={theme.palette.neutral.main} href="/signup" sx={{ fontWeight: 700 }}>
            SIGN UP
          </MUILink>
        </Box>

      </Box>

    </Box>
  )
}

export default Login
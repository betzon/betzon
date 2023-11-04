'use client'
import TitleHeader from '@/app/components/headers/title'
import Image from 'next/image'
import React from 'react'
import chips from '../../assets/chips.svg'
import { Box, Divider, Stack, Typography } from '@mui/material'
import styled from '@emotion/styled'
import { useTheme } from '@emotion/react'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const StyledBox = styled(Box)(({ theme }) => ({
  width: '100px',       // Set your desired width
  position: 'relative', // Needed for the child Image with absolute positioning
}));

const ChipBankItem = ({ data }) => {
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%'
    }}>
      <Typography variant='caption'>{data.title}</Typography>
      <Typography variant='caption'>{data.data}</Typography>
    </Box>
  )
}


const ChipBankLinkItem = ({ data }) => {
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%'
    }}>
      <Typography variant='caption' sx={{ fontWeight: 700 }}>{data.title}</Typography>
      <KeyboardArrowRightIcon fontSize='small' />
    </Box>
  )
}

const ChipBank = () => {

  const theme = useTheme()

  const data = [
    {
      title: 'Wager Credits Available',
      data: '20'
    },
    {
      title: 'Active Wagers',
      data: '2'
    },
    {
      title: 'Pending Wagers',
      data: '10'
    },
    {
      title: 'Chips Won',
      data: '100'
    }
  ]

  const dataLinks = [
    {
      title: 'Transfer History',
      path: '/'
    },
    {
      title: 'Get more chips',
      path: '/'
    },
    {
      title: 'Cash out my chipss',
      path: '/'
    },
    {
      title: 'Get more wager credits',
      path: '/'
    }
  ]

  return (
    <>

      <TitleHeader title={'Chip Bank'} />

      <Box sx={{
        height: '90%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: '24px',
        paddingRight: '24px'
      }}>

        <Box sx={{
          width: { xs: '100%', sm: '400px', md: '400px', lg: '400px' },
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: '24px'
        }}>

          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '16px'
          }}>

            <Image
              src={chips}
            />

            <Stack spacing={-.5} sx={{ textAlign: 'center' }}>
              <Typography variant='h6' sx={{ fontWeight: 700 }}>150 Chips</Typography>
              <Typography variant='caption' color={theme.palette.dark.otherlight}>Available balance</Typography>
            </Stack>

          </Box>

          <Box sx={{
            //background: 'pink',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '12px'
          }}>
            <Divider sx={{ width: '100%', marginBottom: '12px' }} />
            {
              data.map((item, index) => (
                <ChipBankItem data={item} key={index} />
              ))
            }

            {
              dataLinks.map((item, index) => (
                <ChipBankLinkItem data={item} key={index} />
              ))
            }

            <Divider sx={{ width: '100%', marginTop: '12px' }} />
          </Box>
        </Box>

      </Box>



    </>
  )
}

export default ChipBank
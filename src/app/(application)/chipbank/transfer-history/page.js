import GoBackTitleHeader from '@/app/components/headers/gobacktitle'
import { Box, Divider, List, ListItem, ListItemText, Typography } from '@mui/material'
import React from 'react'

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

const TransferHistory = () => {
  const history = [
    {
      type: 0,
      status: 'pending',
      chips: 25,
      date: '01/10/23',
      transferId: '123411'
    },
    {
      type: 1,
      status: 'success',
      chips: 25,
      date: '01/10/23',
      transferId: '123411'
    },
    {
      type: 0,
      status: 'failed',
      chips: 25,
      date: '01/10/23',
      transferId: '123411'
    }
  ]
  return (
    <>
      <GoBackTitleHeader title={'Transfer History'} />

      <List>

        <Divider sx={{ width: '100%', marginBottom: '12px' }} />


        {
          history.map((item, index) => (
            <>
              <ListItem disablePadding sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>

                <Box sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start'
                }}>
                  <Typography variant='subtitle1' sx={{ fontWeight: 700 }}>{item.type === 0 ? "Chip Withdrawal" : "Chip Purchase"}</Typography>
                  <Typography variant='caption'>Transfer IDN: #{item.transferId}</Typography>
                </Box>

                <Box sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-end'
                }}>
                  <Typography
                    variant='subtitle1'
                    sx={{
                      fontWeight: 700,
                      color: item.status === 'failed' ? 'red' : item.status === 'pending' ? 'white' : 'green'
                    }}>
                    {capitalizeFirstLetter(item.status)}: {item.chips} Chips
                  </Typography>
                  <Typography variant='caption'>Date: 10/12/2023</Typography>
                </Box>

              </ListItem>

              <Divider sx={{ width: '100%', marginTop: '16px', marginBottom: '12px' }} />
            </>
          ))
        }

      </List>
    </>
  )
}

export default TransferHistory
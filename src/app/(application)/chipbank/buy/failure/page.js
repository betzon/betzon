import { Box, Button, Divider, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import barcode from '../../../../assets/barcode.svg'
import React from 'react'

const ChipBankFailPage = () => {
    return (
        <Box sx={{
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Box sx={{
                height: '100%',
                width: { xs: '100%', sm: '325px', md: '325px', lg: '325px' },
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'column',
            }}>
                <Box sx={{ textAlign: 'center' }}>
                    <Typography sx={{ fontWeight: 700 }}>BETZON</Typography>
                </Box>

                <Box sx={{
                    border: 'solid 1px gray',
                    borderRadius: '12px',
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    textAlign: 'center',
                    gap: '8px'
                }}>
                    <Typography variant='body1'>BETZON</Typography>
                    <Stack spacing={0}>
                        <Typography variant='h2' sx={{ fontWeight: 700 }}>OOPS</Typography>
                        <Stack spacing={-.5}>
                            <Typography variant='caption'>There seems to be an error!</Typography>
                            <Typography variant='caption'>Try again later or contact support!</Typography>
                        </Stack>
                    </Stack>
                </Box>

                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexDirection: 'row',
                    gap: '16px',
                    flexWrap: 'nowrap'

                }}>
                    <Button variant='outlined' sx={{ width: '100%' }}>Support </Button>
                    <Button variant='contained' sx={{ width: '100%' }}>Try Again</Button>
                </Box>
            </Box>
        </Box>
    )
}

export default ChipBankFailPage

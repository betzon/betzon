import { Box, Button, Divider, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import barcode from '../../../../assets/barcode.svg'
import React from 'react'

const ChipBankSuccessPage = () => {
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
                    gap: '36px'
                }}>

                    <Box sx={{ textAlign: 'center' }}>
                        <Typography variant='h4'>BETZON</Typography>
                        <Typography variant='body1'>Tagline</Typography>
                    </Box>

                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '24px'
                    }}>
                        <Divider />
                        <Typography sx={{ fontWeight: 700 }}>ORDER SUMMARY</Typography>
                        <Box sx={{
                            display: 'grid',
                            gridTemplateColumns: '1.3fr 2fr 0fr',
                            gridTemplateRows: '1.3fr 0fr 0fr',
                        }}>
                            {
                                ['ITEMS', 'QUANTITY', 'PRICE'].map((items, index) => (
                                    <Typography sx={{ fontSize: '10px' }} key={index}>{items}</Typography>
                                ))
                            }
                            {
                                ['Tawnt Chips', '20', '$25', 'Stripe Fee', '0.03%', '$3'].map((items, index) => (
                                    <Typography variant='caption' sx={{ fontWeight: 700 }} key={index}>{items}</Typography>
                                ))
                            }
                        </Box>

                        <Divider />
                    </Box>


                    <Stack spacing={1.5}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Typography>TOTAL</Typography>
                            <Typography>$28</Typography>
                        </Box>
                        {
                            <Image src={barcode} sx={{ width: '100%' }} />
                        }
                    </Stack>

                </Box>

                <Button variant='contained'>Continue</Button>
            </Box>
        </Box>
    )
}

export default ChipBankSuccessPage
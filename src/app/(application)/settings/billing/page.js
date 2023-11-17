'use client'
import GoBackTitleHeader from '@/app/components/headers/gobacktitle'
import { Typography, Box, Button, Link as MUILink, TextField, Checkbox } from '@mui/material'
import React from 'react'
import LockIcon from '@mui/icons-material/Lock';
import { faStripe } from '@fortawesome/free-brands-svg-icons';
import { useTheme } from '@emotion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SettingsBillingPage = () => {

    const theme = useTheme()

    const boxStyles = {
        width: '100%',
        display: "flex",
        flexDirection: 'column'
    }

    return (
        <>
            <GoBackTitleHeader title='Add Payment' />

            <Box sx={{

                height: '95%',
                ...boxStyles,
                justifyContent: 'space-between',
                gap:'48px',
                alignItems: 'left',
                width: { xs: '100%', md: '400px' },
                paddingBottom: '16px'
            }}>

                <Box sx={{
                    ...boxStyles,
                    justifyContent: 'center',
                    alignItems: 'left',
                    gap: '36px',
                }}>
                    <Box sx={{
                        ...boxStyles,
                        alignItems: 'left',
                        gap: '16px',
                        alignItems: 'left',
                        width: '100%'
                    }}>

                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: 700,
                                textAlign: 'left'
                            }}>
                            Add card information.
                        </Typography>

                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            gap: '16px',
                            width: '100%'
                        }}>

                            <TextField
                                label='Name on card'
                            />

                            <TextField
                                label='Card Number'
                            />

                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '12px'
                                }}>
                                <TextField
                                    label='Expiration Date'
                                />

                                <TextField
                                    label='CVC/CVV'
                                />
                            </Box>

                        </Box>

                    </Box>

                    <Box sx={{
                        ...boxStyles,
                        alignItems: 'left',
                        gap: '16px',
                        alignItems: 'left',
                        width: '100%'
                    }}>


                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: 700,
                                textAlign: 'left'
                            }}>
                            Add billing address.
                        </Typography>

                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            gap: '16px',
                            width: '100%'
                        }}>


                            <TextField
                                label='Street Address'
                            />

                            <TextField
                                label='City'
                            />

                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '12px'
                                }}>
                                <TextField
                                    label='Expiration Date'
                                />

                                <TextField
                                    label='CVC/CVV'
                                />
                            </Box>

                        </Box>

                    </Box>

                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            gap: '12px',
                            width: { xs: '100%', md: '400px' }
                        }}>

                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            gap: '4px'
                        }}>
                            <LockIcon />
                            <Typography variant='caption'>Guarenteed safe and secure by</Typography>
                        </Box>

                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                            gap: '4px',
                            background: 'white',
                            paddingLeft: '12px',
                            paddingRight: '12px'
                        }}>
                            <Typography variant='caption' color='black'>Powered by</Typography>
                            <FontAwesomeIcon icon={faStripe} size="2x" style={{ color: 'black' }} />
                        </Box>


                    </Box>

                    <Box
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: '36px 1fr',
                            gap: '12px'
                        }}
                    >

                        <Checkbox
                            defaultChecked
                            sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }}
                        />

                        <Typography
                            color={theme.palette.dark.otherlight}
                            variant='caption'>
                            By providing your credit card information, you authorize us to something something.
                        </Typography>

                    </Box>
                </Box>

                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '16px',
                    width: { xs: '100%', md: '400px' }
                }}>


                    <Button
                        sx={{
                            width: '100%'
                        }}
                        color='primary'
                        size='large'
                        variant='text'>
                        Cancel
                    </Button>

                    <Button
                        sx={{
                            width: '100%'
                        }}
                        color='primary'
                        size='large'
                        variant='contained'>
                        Add Payment
                    </Button>

                </Box>

            </Box>
        </>
    )
}

export default SettingsBillingPage

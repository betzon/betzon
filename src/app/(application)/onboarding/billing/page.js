"use client"
import { useTheme } from '@emotion/react'
import { Typography, Box, Button, Link as MUILink, TextField, Checkbox } from '@mui/material'
import React from 'react'
import LockIcon from '@mui/icons-material/Lock';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStripe } from '@fortawesome/free-brands-svg-icons';
import { useRouter } from 'next/navigation';

const BillingInformationPage = () => {

    const theme = useTheme()

    const router = useRouter()

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
                height: 'auto',
                position: 'relative',
                flexDirection: 'column',
                justifyContent: { xs: 'space-between', md: 'center' },
                alignItems: 'center',
                gap: '84px'
            }}
        >

            {

                <Typography
                    sx={{
                        textAlign: 'center'
                    }}>
                    NEW LOGO HERE BC CHAD HATED MINE
                </Typography>

            }

            <Box sx={{
                ...boxStyles,
                alignItems: 'left',
                gap: '36px',
                alignItems: 'left',
                width: { xs: '100%', md: '400px' }
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
                        Add payment information.
                    </Typography>

                    <MUILink color={theme.palette.neutral.main} href="/" sx={{ fontWeight: 700 }}>
                        Skip for now
                    </MUILink>

                    <Typography variant='caption' color={theme.palette.dark.otherlight}>
                        In order to wager users must purchase wager credits. Feel free to input your billing information now or when you are ready to wager!
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
                        By providing your credit card information, you authorize us to charge the monthly subscription feee, until you cancel or inform us otherwise.
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
                    variant='outlined'>
                    Go Back
                </Button>

                <Button
                    sx={{
                        width: '100%'
                    }}
                    onClick={() => router.push('/dashboard')}
                    color='primary'
                    size='large'
                    variant='contained'>
                    CONTINUE
                </Button>

            </Box>

        </Box>
    )
}

export default BillingInformationPage

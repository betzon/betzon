'use client'
import React, { useState } from 'react'
import ToggleSwitchChipBankButton from '@/app/components/buttons/toggle-switch'
import GoBackTitleHeader from '@/app/components/headers/gobacktitle'
import { Box, Button, Divider, Stack, TextField, Typography } from '@mui/material'
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import DrawerComponent from '@/app/components/(modals)'
import { useDispatch, useSelector } from 'react-redux'
import { openModal } from '@/app/redux/actions/modalAction'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const BuyingChipsPage = () => {

    const dispatch = useDispatch()

    const toggle = useSelector((state) => state.modal.toggle);

    const [input, setInput] = useState('');

    const inputHandler = (event) => {

        if (input === '$') {

            setInput('')
        }
        else {
            const numericValue = event.target.value.replace(/\D/g, '');
            let text = '$' + numericValue
            setInput(text)
        }
    }

    const toggleModalHandler = () => {
        dispatch(openModal())
    }



    console.log(toggle)

    return (
        <>
            <GoBackTitleHeader title={'Buy Chips'} />


            <Box sx={{
                height: '94.5%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Box sx={{
                    display: 'flex',
                    width: { xs: '100%', sm: '400px', md: '400px', lg: '400px' },
                    flexDirection: 'column',
                    height: '100%',
                    paddingTop: '24px',
                    paddingBottom: '12px',
                    boxSizing: 'border-box',
                    justifyContent: 'space-between',
                }}>

                    <div></div>

                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            gap: '36px',
                        }}
                    >
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '6px'
                        }}>
                            <ToggleSwitchChipBankButton />
                            <Typography variant='body2'>Convert Cash to Chips.</Typography>
                        </Box>

                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '6px',
                            textAlign: 'center'
                        }}>
                            <Typography variant='body2'>Enter amount of chips you would like to buy.</Typography>
                            <input
                                autoFocus // This will auto-focus the input on page load
                                pattern="\d*" // This helps iOS to open the numeric keypad
                                placeholder='$0'
                                onChange={() => inputHandler(event)}
                                id='buy-chips-input'
                                value={`${input}`} />
                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: '4px'
                            }}>
                                <Typography variant='body2'>$0 USD</Typography>
                                <TrendingFlatIcon />
                                <Typography variant='body2'>0 Chips</Typography>
                            </Box>
                        </Box>

                        <Stack spacing={0}>
                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'space-between'
                            }}>
                                <Typography variant='caption'>Current Chip Balance</Typography>
                                <Typography variant='caption'>25 Chips</Typography>
                            </Box>
                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'space-between'
                            }}>
                                <Typography variant='body1' sx={{ fontWeight: 700 }}>New Chip Balance <br />After Purchase</Typography>
                                <Typography variant='body1' sx={{ fontWeight: 700 }}>25 Chips</Typography>
                            </Box>
                        </Stack>

                        <Stack spacing={2}>
                            <Divider />

                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'space-between'
                            }}>

                                <Box sx={{
                                    display: 'flex',
                                    justifyContent: 'flex-start',
                                    alignItems: 'center',
                                    gap: '8px'
                                }}>
                                    <CreditCardIcon />
                                    <Typography variant='caption' sx={{ fontWeight: 700 }}>VISA xxxx 1234</Typography>
                                </Box>

                                <Button
                                    onClick={toggleModalHandler}
                                    size='small'
                                    variant='contained'
                                    sx={{
                                        pt: 0,
                                        pb: 0,
                                        fontWeight: 600
                                    }}>
                                    Change
                                </Button>

                            </Box>

                            <Divider />
                        </Stack>
                    </Box>

                    <Box sx={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'space-between',
                        gap: '48px'
                    }}>
                        <Button variant='text' sx={{ width: '100%', fontWeight: 700 }}>Cancel</Button>
                        <Button
                            variant='contained'
                            sx={{ width: '100%' }}>
                            Purchase Chips
                        </Button>
                    </Box>

                </Box>
            </Box>

            <DrawerComponent>

                <Box sx={{
                    height: '90%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Box sx={{
                        width: { xs: '100%', sm: '400px', md: '400px', lg: '400px' },
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        gap: '22px'
                    }}>

                        <Box sx={{ width: '100%', textAlign: 'center' }}>
                            <Typography variant='h5'>Payment method</Typography>
                        </Box>

                        <Button
                            variant='outlined'
                            sx={{
                                border: 'solid 1px white',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                width: '100%'
                            }}>
                            Add a payment method
                            <AddCircleOutlineIcon fontSize='small' />
                        </Button>


                        <FormGroup>
                            <FormControlLabel
                                //sx={{ '& .MuiSvgIcon-root': { fontSize: 16 } }}
                                control={<Checkbox defaultChecked />}
                                label="Visa xxxx 1234" />
                            <FormControlLabel control={<Checkbox />} label="Visa xxxx 1234" />
                            <FormControlLabel control={<Checkbox />} label="Apple Pay" />
                        </FormGroup>

                        <Box sx={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'space-between',
                            gap: '16px',
                            alignItems: 'center'
                        }}>
                            <Button sx={{ width: '100%', fontWeight: 700 }} variant='text'>Cancel</Button>
                            <Button sx={{ width: '100%' }} variant='contained'>Continue</Button>
                        </Box>

                    </Box>
                </Box>

            </DrawerComponent>

        </>
    )
}

export default BuyingChipsPage

/*
<Box sx={{
                        background: 'magenta',
                        border: '2px solid pink',
                        p: 2,
                        width: '100%',
                        borderRadius: '16px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'centers'
                    }}>
                        $0
                    </Box>
*/
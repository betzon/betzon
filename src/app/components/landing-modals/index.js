import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import { Box, IconButton, Stack, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@emotion/react';
import CloseIcon from '@mui/icons-material/Close';
import { closeUserModal } from '@/app/redux/actions/modalAction';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';

const AlertModal = () => {

    const router = useRouter()

    const theme = useTheme()

    const dispatch = useDispatch()

    const toggle = useSelector((state) => state.modal.userModal);

    const handleClose = () => {
        //setOpen(false);
        dispatch(closeUserModal())

    };

    const isMediumUp = useMediaQuery(theme.breakpoints.up('sm'));

    const redirectToAnotherSite = () => {
        router.push('/help-center/motobookie-challenge')
        dispatch(closeUserModal())
    };

    React.useEffect(() => {
        if (toggle) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [toggle]);
    return (
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={toggle}
        >
            <Box sx={{
                border: `4px solid ${theme.palette.primary.dark}`,
                background: theme.palette.dark.dark,
                borderRadius: '20px',
                p: '24px',
                width: '90%',
                maxWidth: '600px',
                height: 'fit-content',
                maxHeight: '100vh',
                overflow: 'scroll',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                textAlign:'center',
                alignItems: 'center',
                gap: '24px',
                position: 'relative',
            }}>

                <IconButton
                    onClick={() => handleClose()}
                    sx={{
                        position: 'absolute',
                        right: '12px',
                        top: '12px'
                    }}>
                    <CloseIcon fontSize='medium' />
                </IconButton>
                {
                    isMediumUp ? "" : <div style={{ marginTop: -30 }}></div>
                }
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                }}>
                    <Typography variant={'h5'} sx={{ fontWeight: 700 }}>Sign up and join our Motobookie Contest!</Typography>
                    <Typography variant='body1' sx={{ fontWeight: 500 }}>For a chance to win $1,000!</Typography>
                </Box>
                <Stack direction={isMediumUp ? "row" : "column"} spacing={isMediumUp ? 3 : 1} sx={{
                    width: isMediumUp ? "fit-content" : '100%'
                }}>
                    <Button sx={{ width: isMediumUp ? 'fit-content' : '100%' }} onClick={() => redirectToAnotherSite()} variant='contained'>Learn more</Button>

                </Stack>
            </Box>
        </Backdrop>
    );
}

export default AlertModal

/*
 <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={toggle}
        >
            <Box sx={{
                border: `4px solid ${theme.palette.primary.dark}`,
                background: theme.palette.dark.dark,
                borderRadius: '20px',
                p: '24px',
                width: '90%',
                maxWidth: '800px',
                height: 'fit-content',
                maxHeight: '100vh',
                overflow: 'scroll',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                gap: '48px',
                position: 'relative',
            }}>

                <IconButton
                    onClick={() => handleClose()}
                    sx={{
                        position: 'absolute',
                        right: '12px',
                        top: '12px'
                    }}>
                    <CloseIcon fontSize='medium' />
                </IconButton>
                {
                    isMediumUp ? "" : <div style={{ marginTop: -30 }}></div>
                }
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                }}>
                    <Typography variant={isMediumUp ? 'h3' : 'h5'} sx={{ fontWeight: 700 }}>Motobookie Contest!</Typography>
                    <Typography variant='body1' sx={{ fontWeight: 500 }}>Contest ends Febuary 2024</Typography>
                </Box>

                <Stack spacing={1}>
                    <Typography variant='h5' sx={{ fontWeight: 700 }}>Rules</Typography>
                    <Typography>Sign up and we&apos;ll supercharge your start with 1,000 free chips to wager against other contestants!</Typography>
                    <Typography>Gather as many wins as you can each month.</Typography>
                    <Typography>The top 3 users with the highest win count for each month will walk away with amazing rewards.</Typography>
                </Stack>

                <Stack spacing={1}>
                    <Typography variant='h5' sx={{ fontWeight: 700 }}>What&apos;s at stake?</Typography>
                    <Typography>• 1st Place: Grand prize of $1,000!</Typography>
                    <Typography>• 2nd Place: Grab a cool $750!</Typography>
                    <Typography>• 3rd Place: Secure $250!</Typography>
                </Stack>
                <Stack direction={isMediumUp ? "row" : "column"} spacing={isMediumUp ? 3 : 1} sx={{
                    width: isMediumUp ? "fit-content" : '100%'
                }}>
                    <Button sx={{ width: isMediumUp ? 'fit-content' : '100%' }} onClick={() => redirectToAnotherSite()} variant='contained'>Create an account</Button>
                    <Button onClick={() => redirectToAnotherSiteLogin()} variant='contained'>Login</Button>
                </Stack>
            </Box>
        </Backdrop>
*/
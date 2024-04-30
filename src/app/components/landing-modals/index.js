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
    const videoRef = React.useRef(null);

    const router = useRouter()

    const theme = useTheme()

    const dispatch = useDispatch()

    const toggle = useSelector((state) => state.modal.userModal);

    const [muted, setMuted] = React.useState(true)

    const handleClose = () => {
        //setOpen(false);
        dispatch(closeUserModal())

    };

    const isMediumUp = useMediaQuery(theme.breakpoints.up('sm'));

    const redirectToAnotherSite = () => {
        router.push('/help-center/betzon-challenge')
        dispatch(closeUserModal())
    };

    const redirectToWaitlist = () => {
        router.push('/#waitlist')
        dispatch(closeUserModal())
    };

    const redirectToAnotherSiteLogin = () => {
        dispatch(closeUserModal())
        window.open('https://app.betzon.com', '_blank');
    };

    React.useEffect(() => {
        if (toggle) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [toggle]);

    const videoUrl = "https://betzon-motobookie.s3.us-east-2.amazonaws.com/relaunchCampaign.mp4";


    // React.useEffect(() => {
    //     // Function to handle automatic play under certain conditions
    //     const handleAutoPlay = () => {
    //         if (videoRef.current && toggle) {
    //             videoRef.current.play().catch(err => {
    //                 console.error("Playback failed:", err);
    //                 // Fall back to muted if play with sound fails
    //                 setMuted(true);
    //                 videoRef.current.play().catch(err => {
    //                     console.error("Muted playback also failed:", err);
    //                 });
    //             });
    //         } else if (videoRef.current) {
    //             videoRef.current.pause();
    //         }
    //     };

    //     setTimeout(handleAutoPlay, 2000);


    //     setTimeout(setMuted(false), 2500);
    //     return () => {
    //         clearTimeout(handleAutoPlay);
    //     };
    // }, [toggle]);


    return (
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={toggle}
        >
            <Box sx={{
                border: `4px solid ${theme.palette.primary.dark}`,
                background: theme.palette.dark.main,
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
                textAlign: 'center',
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
                <Stack>
                    <Typography fontWeight={700}>Relaunching Fall 2024</Typography>
                    <Typography variant='h4' sx={{ fontWeight: 700 }}>LIVE <span style={{ color: theme.palette.primary.main }}>GAMING</span></Typography>
                    <Typography variant='h4' sx={{ fontWeight: 700 }}>LIVE <span style={{ color: theme.palette.primary.main }}>WAGERING</span> </Typography>
                </Stack>


                {
                    toggle &&
                    <Box sx={{ width: '100%', position: 'relative', overflow: 'hidden', borderRadius: '12px' }}>
                        <div className="video-container">
                            <video
                                // This is usually required for autoplay to work in most browsers
                                ref={videoRef}
                                //muted={muted}
                                autoPlay
                                muted
                                data-autoplay=''
                                playsInline // Helps with autoplay on iOS devices
                                controls={true} // Hides video controls
                            >
                                <source src={videoUrl} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </Box>
                }

                <Stack direction={isMediumUp ? "row" : "column"} spacing={isMediumUp ? 3 : 1} sx={{
                    width: isMediumUp ? "fit-content" : '100%'
                }}>
                    {
                        /*
<Button sx={{ width: isMediumUp ? 'fit-content' : '100%' }} onClick={() => redirectToAnotherSite()} variant='contained'>Learn more</Button>
                    <Button sx={{ width: isMediumUp ? 'fit-content' : '100%' }} onClick={() => redirectToAnotherSiteLogin()} variant='contained'>Sign up</Button>
                        */
                    }
                    <Button
                        sx={{ width: isMediumUp ? 'fit-content' : '100%' }}
                        onClick={() => {
                            router.push('#waitlist')
                            dispatch(closeUserModal())
                        }}
                        variant='contained'>
                        Join Waitlist</Button>
                </Stack>
            </Box>
        </Backdrop>
    );
}

export default AlertModal
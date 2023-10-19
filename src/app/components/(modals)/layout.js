'use client'
import { Button, SwipeableDrawer } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { styled } from '@mui/system';
import theme from '@/app/styles/theme';

const MySwipeableDrawer = styled(SwipeableDrawer)(({ theme }) => ({
    '& .MuiBackdrop-root': {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
    },
}));

const Puller = styled(Box)(({ theme }) => ({
    width: 40,
    height: 4,
    backgroundColor: theme.palette.dark.otherlight,
    borderRadius: 3,
    position: 'absolute',
    top: 8,
    left: 'calc(50% - 15px)',
}));

const Layout = ({ children }) => {

    const [toggle, setToggle] = useState(false)



    return (
        <>

            <Button onClick={() => setToggle(!toggle)}>Drawer Test</Button>

            <MySwipeableDrawer
                anchor={'bottom'}
                open={toggle}
                onClose={() => setToggle(false)}
                onOpen={() => setToggle(true)}
                PaperProps={{
                    style: {
                        backgroundColor: 'transparent',
                        boxShadow: 'none',
                        borderTop: 0,
                        borderRadius: '8px 8px 0 0',
                        borderTop: `solid 1px ${theme.palette.dark.main}`,
                        borderBottom: '0 !important'
                    },
                }}
            >

                <Puller />
                <Box
                    sx={{
                        padding: '16px',
                        backgroundColor: 'black' // or any other color you want
                    }}>
                    {children}
                </Box>
            </MySwipeableDrawer>

        </>
    )
}

export default Layout
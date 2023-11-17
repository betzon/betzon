'use client'
import { Button, SwipeableDrawer } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { styled } from '@mui/system';
import theme from '@/app/styles/theme';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal, openModal } from '@/app/redux/actions/modalAction';

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

    const dispatch = useDispatch()

    const toggle = useSelector((state) => state.modal.toggle);

    return (

        <MySwipeableDrawer
            anchor={'bottom'}
            open={toggle}
            onClose={() => dispatch(closeModal())}
            onOpen={() => dispatch(openModal())}
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
                    padding: '32px 24px 24px 24px',
                    backgroundColor: 'black' // or any other color you want
                }}>
                {children}
            </Box>

        </MySwipeableDrawer>

    )
}

export default Layout
import React from 'react'
import CardLayout from '../layout'
import { Divider, Typography } from '@mui/material'
import AdItem from './ad-item'

const AdvertisementCard = () => {
    return (
        <CardLayout spacing={2}>
            <Typography variant='body1' sx={{ fontWeight: 700 }}>
                Sponsors
            </Typography>
            <Divider />
            <AdItem />
            <Divider />
            <AdItem />
        </CardLayout>
    )
}

export default AdvertisementCard

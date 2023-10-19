import React from 'react'
import Layout from '../layout'
import { Chip, Typography } from '@mui/material'
import { Box } from '@mui/system'
import WagerTags from '../../tags/wagertags'

const CreateWagerHeader = () => {
    return (
        <Layout>

            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>

                <Typography
                    variant='h6'
                >
                    Wager on a game!
                </Typography>

                <WagerTags title='Wager' />

            </Box>

        </Layout>
    )
}

export default CreateWagerHeader
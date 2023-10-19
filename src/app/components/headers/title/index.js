import React from 'react'
import { IconButton, Box, Typography } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Layout from '../layout';

const TitleHeader = (props) => {
    return (
        <Layout>

            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >

                <Typography
                    variant='h6'
                    sx={{
                        flexGrow: 1,
                        textAlign: 'center'
                    }}>
                    {props.title}
                </Typography>

            </Box>

        </Layout>
    )
}

export default TitleHeader
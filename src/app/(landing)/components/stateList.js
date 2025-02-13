import { Grid, Paper, Typography } from '@mui/material';
import React from 'react';

const StateList = ({ states }) => {
    return (
        <Grid
            container
            spacing={2}
            style={{
                justifyContent: 'center'
            }}>
            {
                states?.map((state, index) => (
                    <Grid
                        item
                        xs={6}
                        md={6}
                        lg={6}
                        key={index}>
                        <Paper sx={{ padding: 2, textAlign: 'center' }}>
                            <Typography
                                variant="body1"
                                sx={{
                                    fontWeight: 900,
                                    textAlign: "center"
                                }}>
                                {state?.toUpperCase()}
                            </Typography>
                        </Paper>
                    </Grid>
                ))
            }
        </Grid>
    );
};

export default StateList;
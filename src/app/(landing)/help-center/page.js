"use client"
import { useTheme } from '@emotion/react';
import { Box, Container, Stack, Typography, useMediaQuery } from '@mui/material'
import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Grid from './component/grid';
import { helpCenterContent } from './content';
import ContactSupport from './component/support';

const StyledTabs = styled((props) =>
    <Tabs
        {...props}
        scrollButtons="auto"
        sx={{
            position: 'absolute',
            bottom: 0,
        }}
        variant="scrollable"
        allowScrollButtonsMobile
        TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }} />)
    (({ theme }) => ({
        '& .MuiTabs-indicator': {
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: 'transparent',

        },
        '& .MuiTabs-indicatorSpan': {
            maxWidth: 40,
            width: '100%',
            backgroundColor: 'white'//theme.palette.primary.main,
        },
    })
    )

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
    ({ theme }) => ({
        textTransform: 'none',
        fontSize: theme.typography.pxToRem(18),
        marginRight: theme.spacing(1),
        '&.Mui-selected': {
            color: '#fff',
            fontWeight: 700,
        },
        '&.Mui-focusVisible': {
            backgroundColor: 'rgba(100, 95, 228, 0.32)',
        },
    }),
);

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Box
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ pt: 3, pb: 3 }}>
                    {children}
                </Box>
            )}
        </Box>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

const HelpCenterPage = () => {

    const theme = useTheme();

    const isMediumUp = useMediaQuery(theme.breakpoints.up('md'));

    const [value, setValue] = useState(1);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Container>
            <Stack
                spacing={isMediumUp ? 8 : 4}
                sx={{
                    position: 'relative',
                    minHeight: '100vh'
                }}>

                <Box style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    //border: `3px solid ${theme.palette.primary.main}`,
                    backgroundColor: theme.palette.primary.main, // Adjust the alpha value for darkness
                    position: 'relative',
                    height: '350px',
                    marginTop: isMediumUp ? '96px' : '72px',
                    borderRadius: '20px'
                }}>
                    <Typography
                        variant={isMediumUp ? 'h2' : 'h3'}
                        sx={{
                            fontWeight: 900
                        }}>
                        HELP CENTER
                    </Typography>
                    <StyledTabs
                        value={value}
                        onChange={handleChange}
                        aria-label="styled tabs example"
                    >
                        <StyledTab label="RULES" />
                        <StyledTab label="CONTACT" />
                    </StyledTabs>
                </Box>

                <Box>
                    <TabPanel value={value} index={0} >
                        <Grid data={helpCenterContent} />
                    </TabPanel>
                    <TabPanel value={value} index={1} >
                        <ContactSupport />
                    </TabPanel>
                </Box>

            </Stack>
        </Container>
    )
}

export default HelpCenterPage
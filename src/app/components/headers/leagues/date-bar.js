import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCalendarDate } from '@/app/redux/actions/leagueBarAction';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Stack, Typography } from '@mui/material';
import { useTheme } from '@emotion/react';

const DateItem = ({ data }) => {

    const theme = useTheme()

    return (
        <Stack
            spacing={-1}>

            <Typography variant='body2' sx={{ fontWeight: 700 }}>{data.day}</Typography>

            <Stack direction='row' spacing={.3}>
                <Typography variant='overline'>{data.month}</Typography>
                <Typography variant='overline'>{data.date}</Typography>
            </Stack>

            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '-6px !important' }}>
                <Box sx={{
                    backgroundColor: data.hasData ? theme.palette.primary.main : 'black',
                    width: '6px',
                    height: '6px',
                    borderRadius: '100px'
                }}></Box>
            </Box>
        </Stack>
    )
}

const DateBarHeader = () => {

    const dateSelected = useSelector((state) => state.leagues.dateSelected);

    const [value, setValue] = React.useState(0);

    const [dates, setDates] = useState([]);

    const dispatch = useDispatch()

    const loadMoreDates = (dateNum = 25, startOffset = 0) => {

        const now = new Date();

        //        const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();

        const calendarDates = [...Array(dateNum)].map((_, i) => {

            if (now.getDate() === new Date(now.getFullYear(), now.getMonth(), now.getDate() - startOffset + i).getDate()) {

                dispatch(setCalendarDate({
                    date: new Date(now.getFullYear(), now.getMonth(), now.getDate() - startOffset + i).toString(),
                    index: i
                }))

            }

            return { date: new Date(now.getFullYear(), now.getMonth(), now.getDate() - startOffset + i) }

        });

        setDates(prevDates => [...calendarDates, ...prevDates]);

    };

    useEffect(() => {
        loadMoreDates();
    }, []);



    const dateClick = (key, e) => {

        const newDates = [...dates]

        dispatch(setCalendarDate({
            date: newDates[key].date.toString(),
            index: key
        }))

    }

    const tabsRef = useRef(null);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    /*
    
    in case Stakeholders want to add previous days tot he calendar component
    
        useEffect(() => {
            const adjustScroll = () => {
                if (tabsRef.current) {
                    const scrollableContainer = tabsRef.current.querySelector('.MuiTabs-scroller');
                    const selectedTabNode = scrollableContainer.querySelector('.Mui-selected');
                    if (selectedTabNode) {
                        scrollableContainer.scrollLeft =
                            selectedTabNode.offsetLeft
                            + (selectedTabNode.clientWidth / 2)
                            - (scrollableContainer.clientWidth / 2);
                    }
                }
            };
    
            // Delay the adjustment slightly to ensure the DOM is ready
            const timer = setTimeout(() => adjustScroll(), 500);
    
            return () => clearTimeout(timer); // Cleanup on unmount
        }, [value]);
    
    */

    useEffect(() => {
        const adjustScroll = () => {
            if (tabsRef.current) {
                const scrollableContainer = tabsRef.current.querySelector('.MuiTabs-scroller');
                const selectedTabNode = scrollableContainer.querySelector('.Mui-selected');
                if (selectedTabNode) {
                    scrollableContainer.scrollLeft =
                        selectedTabNode.offsetLeft
                        + (selectedTabNode.clientWidth / 2)
                        - (scrollableContainer.clientWidth / 2);
                }
            }
        };
        adjustScroll()

    }, [value]);

    return (
        <>
            <Box sx={{
                width: '100%',
            }}>
                <Tabs
                    ref={tabsRef}
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    allowScrollButtonsMobile
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                    sx={{
                        '.MuiTabs-scrollButtons': {
                            width: '24px'
                        },
                        '.MuiTabs-scroller': {
                            scrollBehavior: 'smooth'
                        }
                    }}
                >
                    {
                        dates.map((item, key) => (
                            <Tab
                                key={key}
                                onClick={() => dateClick(key)}
                                label={
                                    <DateItem
                                        data={{
                                            hasData: key % 2 === 0,
                                            date: item.date.getDate(),
                                            month: item.date.toLocaleString('default', { month: 'short' }),
                                            day: item.date.toLocaleString('default', { weekday: 'short' })
                                        }} />} />
                        ))
                    }
                </Tabs>
            </Box>
        </>
    );
};

export default DateBarHeader;
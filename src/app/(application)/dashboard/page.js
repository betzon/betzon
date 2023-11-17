'use client'
import AdvertisementCard from '@/app/components/(card)/advertisement/advertisement-card'
import WagerCardItem from '@/app/components/(card)/wager/item'
import WagerFeed from '@/app/components/(card)/wager/list'
import WagerSectionTitleList from '@/app/components/(card)/wager/section-title-list'
import LeagueHeaders from '@/app/components/headers/leagues'
import DashboardHeader from '@/app/components/headers/main'
import { Box, Container, Divider } from '@mui/material'
import React, { useState, useEffect } from 'react'
import FestivalIcon from '@mui/icons-material/Festival';
import { useSelector, useDispatch } from "react-redux"
import { setCurrentLeague } from '@/app/redux/actions/leagueBarAction'

const DashboardFeed = ({ children }) => {
  return (
    <Container sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '60px',
      marginTop: '24px',
      paddingBottom: '84px',

    }}>
      {children}
    </Container>
  )
}

const Dashboard = () => {

  const leagues = useSelector((state) => state.leagues.league);

  const feed = useSelector((state) => state.leagues.feed);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentLeague(0))
  }, []);

  return (
    <>
      <DashboardHeader title={'BetzOn'} />

      <LeagueHeaders leagues={leagues} />

      <DashboardFeed>

        {
          leagues[0].status ?
            <AdvertisementCard /> : ''
        }

        <WagerSectionTitleList
          title={'My Wagers'}
          link={{
            name: 'See more',
            path: '/'
          }}
          feed={[...feed]}
          grouped={!leagues[0].status} />

      </DashboardFeed>

    </>
  )
}
//<WagerFeed feed={[...wagerFeed]} />
export default Dashboard
import LeagueHeaders from '@/app/components/headers/leagues'
import DashboardHeader from '@/app/components/headers/main'
import React from 'react'

const Dashboard = () => {
  return (
    <>
      <DashboardHeader title={'BetzOn'} />

      <LeagueHeaders />
    </>
  )
}

export default Dashboard
import AdvertisementCard from '@/app/components/(card)/advertisement/advertisement-card'
import WagerCardItem from '@/app/components/(card)/wager/item'
import WagerFeed from '@/app/components/(card)/wager/list'
import WagerSectionTitleList from '@/app/components/(card)/wager/section-title-list'
import LeagueHeaders from '@/app/components/headers/leagues'
import DashboardHeader from '@/app/components/headers/main'
import { Box, Divider } from '@mui/material'
import React from 'react'

const DashboardFeed = ({ children }) => {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '60px',
      marginTop: '24px',
      marginBottom: '48px'
    }}>
      {children}
    </Box>
  )
}

const Dashboard = () => {

  const wagerFeed = [
    {
      wagerOwner: 'bookiebro',
      league: 'nba',
      wagertype: 'Team vs Team',
      chipAmount: 60,
      likes: 60,
      usersAccepted: [
        {
          profileImage: '',
          username: 'zackovando'
        },
        {
          profileImage: '',
          username: 'filmsfromabove'
        },
        {
          profileImage: '',
          username: 'threetwoone123'
        }
      ]
    },
    {
      wagerOwner: 'bookiebro',
      league: 'nba',
      wagertype: 'Team vs Team',
      chipAmount: 60,
      likes: 60,
      usersAccepted: [
        {
          profileImage: '',
          username: 'zackovando'
        },
        {
          profileImage: '',
          username: 'filmsfromabove'
        },
        {
          profileImage: '',
          username: 'threetwoone123'
        }
      ]
    },
    {
      wagerOwner: 'bookiebro',
      league: 'nba',
      wagertype: 'Team vs Team',
      chipAmount: 60,
      likes: 60,
      usersAccepted: [
        {
          profileImage: '',
          username: 'zackovando'
        },
        {
          profileImage: '',
          username: 'filmsfromabove'
        },
        {
          profileImage: '',
          username: 'threetwoone123'
        }
      ]
    },
    {
      wagerOwner: 'bookiebro',
      league: 'nba',
      wagertype: 'Team vs Team',
      chipAmount: 60,
      likes: 60,
      usersAccepted: [
        {
          profileImage: '',
          username: 'zackovando'
        },
        {
          profileImage: '',
          username: 'filmsfromabove'
        },
        {
          profileImage: '',
          username: 'threetwoone123'
        }
      ]
    }, {
      wagerOwner: 'bookiebro',
      league: 'nba',
      wagertype: 'Team vs Team',
      chipAmount: 60,
      likes: 60,
      usersAccepted: [
        {
          profileImage: '',
          username: 'zackovando'
        },
        {
          profileImage: '',
          username: 'filmsfromabove'
        },
        {
          profileImage: '',
          username: 'threetwoone123'
        }
      ]
    },
    {
      wagerOwner: 'bookiebro',
      league: 'nba',
      wagertype: 'Team vs Team',
      chipAmount: 60,
      likes: 60,
      usersAccepted: [
        {
          profileImage: '',
          username: 'zackovando'
        },
        {
          profileImage: '',
          username: 'filmsfromabove'
        },
        {
          profileImage: '',
          username: 'threetwoone123'
        }
      ]
    }, {
      wagerOwner: 'bookiebro',
      league: 'nba',
      wagertype: 'Team vs Team',
      chipAmount: 60,
      likes: 60,
      usersAccepted: [
        {
          profileImage: '',
          username: 'zackovando'
        },
        {
          profileImage: '',
          username: 'filmsfromabove'
        },
        {
          profileImage: '',
          username: 'threetwoone123'
        }
      ]
    },
    {
      wagerOwner: 'bookiebro',
      league: 'nba',
      wagertype: 'Team vs Team',
      chipAmount: 60,
      likes: 60,
      usersAccepted: [
        {
          profileImage: '',
          username: 'zackovando'
        },
        {
          profileImage: '',
          username: 'filmsfromabove'
        },
        {
          profileImage: '',
          username: 'threetwoone123'
        }
      ]
    }
  ]

  return (
    <>
      <DashboardHeader title={'BetzOn'} />
      <LeagueHeaders />
      <DashboardFeed>

        <AdvertisementCard />
        
        <WagerSectionTitleList
          title={'My Wagers'}
          link={{
            name: 'Go Home',
            path: '/'
          }}
          feed={[...wagerFeed]} />

        <WagerSectionTitleList
          title={'My Wagers'}
          link={{
            name: 'Go Home',
            path: '/'
          }}
          feed={[...wagerFeed]} />
      </DashboardFeed>
    </>
  )
}
//<WagerFeed feed={[...wagerFeed]} />
export default Dashboard
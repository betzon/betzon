import MobileBottomNavigation from '@/app/components/navigation/bottom-navigation'
import { useTheme } from '@emotion/react'
import { BottomNavigation, BottomNavigationAction, Box, Button, IconButton, Typography, Divider, Tooltip } from '@mui/material'
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import HandshakeIcon from '@mui/icons-material/Handshake';
import AddIcon from '@mui/icons-material/Add';
import SavingsIcon from '@mui/icons-material/Savings';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import InboxIcon from '@mui/icons-material/Inbox';
import { useSelector } from 'react-redux';
import WagerSectionTitleList from '@/app/components/(card)/wager/section-title-list';
import LeagueHeaders from '@/app/components/headers/leagues';
import FestivalIcon from '@mui/icons-material/Festival';
import WagerFeed from '@/app/components/(card)/wager/list';
import Link from 'next/link';
const FakeMobileNav = () => {
    const theme = useTheme()
    return (
        <Box sx={{
            display: {
                xs: 'inline-block',
                sm: 'inline-block',

            },
            position: 'absolute',
            bottom: 0,
            left: 0,
            boxSizing: 'border-box',
            width: '100%',
        }}>
            <BottomNavigation
                sx={{
                    borderTop: `1px solid ${theme.palette.dark.main}`,
                    position: 'relative',
                    width: '100%'
                }}
                showLabels
                value={'/dashboard'}
            >
                <BottomNavigationAction value='/dashboard' label="Home" icon={<HomeIcon />} />
                <BottomNavigationAction value='/wagers' label="Wagers" icon={<HandshakeIcon />} />
                <BottomNavigationAction value='/create' label="Create" icon={<AddIcon />} />
                <BottomNavigationAction value='/chipbank' label="Bank" icon={<SavingsIcon />} />
                <BottomNavigationAction value='/profile' label="Profile" icon={<PersonIcon />} />
            </BottomNavigation>
        </Box >
    )
}

const FakeDashboardHeader = ({ title }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                //position: 'absolute',
                //top: '0',
                background: 'black',
                padding: '12px'
            }}
        >


            <Box
                sx={{
                    position: 'absolute',
                    left: '12px'
                }}>
                <Tooltip title="You'll need to create an account first!">
                    <span>
                        <IconButton
                        >
                            <SettingsIcon fontSize='small' />
                        </IconButton>
                    </span>
                </Tooltip>
            </Box>


            <Typography
                variant='h6'
                sx={{
                    flexGrow: 1,
                    textAlign: 'center',
                    fontWeight: 700
                }}>
                {title}
            </Typography>

            <Box
                sx={{
                    position: 'absolute',
                    right: '12px'
                }}
            >
                <Tooltip title="You'll need to create an account first!">
                    <span>
                        <IconButton>
                            <NotificationsIcon fontSize='small' />
                        </IconButton>
                    </span>
                </Tooltip>


                <Tooltip title="You'll need to create an account first!">
                    <span>
                        <IconButton>
                            <InboxIcon fontSize='small' />
                        </IconButton>
                    </span>
                </Tooltip>
            </Box>
        </Box>
    )
}


const FakeLeagueHeader = () => {
    const leagues = useSelector((state) => state.leagues.league);
    return (

        <Box
            sx={{
                width: '100%',
                overflow: 'auto',
                top: 0,
                backgroundColor: 'black',
                zIndex: '99',
                padding: '12px 16px',
                position: 'sticky',
                // Hide scrollbar for Chrome, Safari and Opera
                '&::-webkit-scrollbar': {
                    display: 'none'
                },
                // Hide scrollbar for Firefox
                scrollbarWidth: 'none',
                // Hide scrollbar for IE and Edge
                '-ms-overflow-style': 'none'
            }}
        >

            <Box sx={{
                display: 'flex',
                width: 'fit-content',
                gap: '12px',
                paddingRight: '24px',
                paddingLeft: '8px',
            }}>


                <Button
                    sx={{
                        display: 'flex',
                        gap: 1,
                        width: 'fit-content',
                        borderRadius: '100px',
                        paddingTop: '4px',
                        paddingBottom: '4px',
                        height: '36px',
                        width: '144px',
                        opacity: 1
                    }}
                    color='primary'
                    variant='outlined'
                >

                    <FestivalIcon fontSize='small' />

                    <Typography variant='caption1'>
                        {leagues[0].title}
                    </Typography>

                </Button>

                <Divider orientation="vertical" flexItem />

                {
                    leagues.slice(1).map((item, index) => (

                        <Tooltip title="You'll need to create an account first!"
                            key={index}>
                            <span>
                                <Button
                                    sx={{
                                        display: 'flex',
                                        width: 'fit-content',
                                        gap: 1,
                                        borderRadius: '100px',
                                        height: '36px',
                                        minWidth: '96px',
                                        opacity: item.status ? 1 : .3
                                    }}
                                    color='primary'
                                    variant='outlined'
                                >
                                    {item.icon}
                                    <Typography variant='caption1'>
                                        {item.title}
                                    </Typography>
                                </Button>
                            </span>
                        </Tooltip>
                    ))
                }


            </Box>

        </Box>
    )
}

const FakeWagerFeed = () => {

    const theme = useTheme()

    const wagerFeed = [
        [
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
        ],
        [
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
        ]
    ]

    return (
        <Box sx={{
            paddingTop: '24px',
            paddingLeft: '24px',
            paddingRight: '24px',
            boxSizing: 'border-box'
        }}>
            {
                wagerFeed.length != 0 ? <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                    width: '100%',
                    border: true ? `1px solid ${theme.palette.dark.otherlight}` : '',
                    padding: true ? '16px' : '',
                    borderRadius: true ? '12px' : ''
                }}>

                    <Box sx={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <Typography
                            variant='h6'>
                            My Wagers
                        </Typography>

                        <Link href={'/'} color={theme.palette.dark.light} sx={{
                            textDecoration: 'none'
                        }}>
                            <Typography variant='body'>
                                TEsting
                            </Typography>
                        </Link>

                    </Box>

                    {
                        true ? <Divider sx={{ width: '100%' }} /> : ''
                    }

                    <WagerFeed feed={[...wagerFeed]} grouped={true} />

                </Box> : ''
            }
        </Box>
    )
}

const Phone = () => {

    return (
        <Box sx={{
            background: 'white',
            width: '380px',
            height: '700px',
            position: 'relative',
            background: 'black',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column'
        }}>

            <Box sx={{
                overflow: 'scroll',
                // Hide scrollbar for Chrome, Safari and Opera
                '&::-webkit-scrollbar': {
                    display: 'none'
                },
                flexGrow: 1,
                paddingBottom: '84px',
                height: '100%'
            }}>
                <FakeDashboardHeader title="BETZON" />

                <FakeLeagueHeader />

                <FakeWagerFeed />
                <FakeWagerFeed />
            </Box>


            <FakeMobileNav />


        </Box>
    )
}

export default Phone

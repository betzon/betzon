import { SET_CURRENT_LEAGUE, SET_CALENDAR_DATE } from "../types";

export const setCurrentLeague = (index) => {
    return async (dispatch) => {
        // Start the fetch operation
        try {
            // After successful fetch, dispatch the action

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

            dispatch({
                type: SET_CURRENT_LEAGUE,
                payload: {
                    index: index,
                    feed: [...wagerFeed]
                }
            });

        } catch (error) {
            console.error(error);
        }
    };
};

export const setCalendarDate = (date, index) => {
    return {
        type: SET_CALENDAR_DATE,
        payload: {
            date: date,
            index: index
        }
    }
}
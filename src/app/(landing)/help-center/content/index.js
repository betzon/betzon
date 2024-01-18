"use client"
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import PersonIcon from '@mui/icons-material/Person';
import HandshakeIcon from '@mui/icons-material/Handshake';


export const helpCenterContent = [
    {
        title: 'Registration',
        icon: <HowToRegIcon fontSize='large' />,
        items: [
            {
                title: 'Plot Twist! The MotoBookie Challenge Gets Better! More Chances to Play and Win!',
                path: '/motobookie-challenge',
                content: {
                    title: 'Motobookie Challenge',
                    updatedOn: 'Jan 14, 2024',
                    content: [
                        {
                            type: 'paragraph',
                            title: '',
                            content: [
                                "We will now be awarding prizes twice a month to the users with higher numbers of wagers won! Sign up and participate now!"
                            ]
                        },
                        {
                            type: 'paragraphList',
                            title: 'Here are the details:',
                            paragraph: 'The users with the highest number of combined wagers won after these set of races:',
                            list: [
                                "Anaheim 1 + San Francisco",
                                "San Diego + Anaheim 2",
                                "Detroit + Glendale + Arlington"
                            ],
                        },
                        {
                            type: 'paragraphList',
                            title: '',
                            paragraph: 'Win these prizes:',
                            list: [
                                "1st Place: $500",
                                "2nd Place: $400",
                                "3rd Place: $300"
                            ],
                        },
                        {
                            type: 'paragraph',
                            title: '',
                            content: [
                                'Any ties for each place split that tier’s winning equally. These are prizes for each set of races. If you don’t win in the first set of races, you get to start again at the next set of races for prizes of the same value.'
                            ]
                        },
                        {
                            type: 'paragraph',
                            title: 'WAIT!! THERE’S MORE:',
                            content: [
                                "After each set of races above, users will get to start fresh, from scratch, but now with 2000 chips to fantasy-wager with!",
                                "Remember these chips are fantasy chips but are important to compete for the prizes above!",
                                "This means more chances to win and less waiting for prize winners! It’s a win-win for all!",
                                "What are you waiting for? Sign-up or continue participating for your chance at these prizes!",
                                "Get ready to put your money where your mouth is!"
                            ]
                        },
                        {
                            type: 'paragraph',
                            title: '',
                            content: [
                                "Stay tuned as MotoBookie has improved and new features and sports are coming soon!"
                            ]
                        }
                    ]
                }
            },
        ]
    }
]
//&rsquo;

/*
export const helpCenterContent = [
    {
        title: 'Chips & Wager Credits',
        icon: <AttachMoneyIcon fontSize='large' />,
        items: [
            {
                title: 'Buying chips',
                path: '/buying-chips',
                content: {
                    title: 'TEST',
                    updatedOn: 'Dec 12, 2024',
                    content: [
                        {
                            type: 'paragraph',
                            title: 'How ONE',
                            content: [
                                "First, navigate to the menu located in the top left corner of the PrizePicks app. If you are accessing your account on a browser, the menu is in the top right corner. From here, you can select Request Withdrawal.",
                                "You'll receive a One Time Password(OTP) code by email as soon as you request your withdrawal.No further action is needed on your part; we will send you an email to confirm whether the withdrawal was successful or not."
                            ]
                        },
                        {
                            type: 'paragraph',
                            title: 'How ONE',
                            content: [
                                "First, navigate to the menu located in the top left corner of the PrizePicks app. If you are accessing your account on a browser, the menu is in the top right corner. From here, you can select Request Withdrawal.",
                                "You'll receive a One Time Password(OTP) code by email as soon as you request your withdrawal.No further action is needed on your part; we will send you an email to confirm whether the withdrawal was successful or not."
                            ]
                        },
                        {
                            type: 'paragraphList',
                            title: 'How do I withdraw funds?',
                            paragraph: 'First, navigate to the menu located in the top left corner of the PrizePicks app. If you are accessing your account on a browser',
                            list: [
                                "First, navigate to the menu located in the top left corner of the PrizePicks app. If you are accessing your account on a browser, the menu is in the top right corner. From here, you can select Request Withdrawal.",
                                "You'll receive a One Time Password(OTP) code by email as soon as you request your withdrawal.No further action is needed on your part; we will send you an email to confirm whether the withdrawal was successful or not."
                            ]
                        }
                    ]
                }
            },
            {
                title: 'Cashing out chips',
                path: '/cashing-out-chips',
                content: {
                    title: 'TEST',
                    updatedOn: 'Dec 12, 2024',
                    content: [
                        {
                            type: 'paragraph',
                            title: 'How ONE',
                            content: [
                                "First, navigate to the menu located in the top left corner of the PrizePicks app. If you are accessing your account on a browser, the menu is in the top right corner. From here, you can select Request Withdrawal.",
                                "You'll receive a One Time Password(OTP) code by email as soon as you request your withdrawal.No further action is needed on your part; we will send you an email to confirm whether the withdrawal was successful or not."
                            ]
                        },
                        {
                            type: 'paragraph',
                            title: 'How ONE',
                            content: [
                                "First, navigate to the menu located in the top left corner of the PrizePicks app. If you are accessing your account on a browser, the menu is in the top right corner. From here, you can select Request Withdrawal.",
                                "You'll receive a One Time Password(OTP) code by email as soon as you request your withdrawal.No further action is needed on your part; we will send you an email to confirm whether the withdrawal was successful or not."
                            ]
                        },
                        {
                            type: 'paragraphList',
                            title: 'How do I withdraw funds?',
                            paragraph: 'First, navigate to the menu located in the top left corner of the PrizePicks app. If you are accessing your account on a browser',
                            list: [
                                "First, navigate to the menu located in the top left corner of the PrizePicks app. If you are accessing your account on a browser, the menu is in the top right corner. From here, you can select Request Withdrawal.",
                                "You'll receive a One Time Password(OTP) code by email as soon as you request your withdrawal.No further action is needed on your part; we will send you an email to confirm whether the withdrawal was successful or not."
                            ]
                        }
                    ]
                }
            },
            {
                title: 'How wager credits work',
                path: '/wager-credits',
                content: {
                    title: 'TEST',
                    updatedOn: 'Dec 12, 2024',
                    content: [
                        {
                            type: 'paragraph',
                            title: 'How ONE',
                            content: [
                                "First, navigate to the menu located in the top left corner of the PrizePicks app. If you are accessing your account on a browser, the menu is in the top right corner. From here, you can select Request Withdrawal.",
                                "You'll receive a One Time Password(OTP) code by email as soon as you request your withdrawal.No further action is needed on your part; we will send you an email to confirm whether the withdrawal was successful or not."
                            ]
                        },
                        {
                            type: 'paragraph',
                            title: 'How ONE',
                            content: [
                                "First, navigate to the menu located in the top left corner of the PrizePicks app. If you are accessing your account on a browser, the menu is in the top right corner. From here, you can select Request Withdrawal.",
                                "You'll receive a One Time Password(OTP) code by email as soon as you request your withdrawal.No further action is needed on your part; we will send you an email to confirm whether the withdrawal was successful or not."
                            ]
                        },
                        {
                            type: 'paragraphList',
                            title: 'How do I withdraw funds?',
                            paragraph: 'First, navigate to the menu located in the top left corner of the PrizePicks app. If you are accessing your account on a browser',
                            list: [
                                "First, navigate to the menu located in the top left corner of the PrizePicks app. If you are accessing your account on a browser, the menu is in the top right corner. From here, you can select Request Withdrawal.",
                                "You'll receive a One Time Password(OTP) code by email as soon as you request your withdrawal.No further action is needed on your part; we will send you an email to confirm whether the withdrawal was successful or not."
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        title: 'Registration',
        icon: <HowToRegIcon fontSize='large' />,
        items: [
            {
                title: 'Verification',
                path: '/verification',
                content: {
                    title: 'TEST',
                    updatedOn: 'Dec 12, 2024',
                    content: [
                        {
                            type: 'paragraph',
                            title: 'How ONE',
                            content: [
                                "First, navigate to the menu located in the top left corner of the PrizePicks app. If you are accessing your account on a browser, the menu is in the top right corner. From here, you can select Request Withdrawal.",
                                "You'll receive a One Time Password(OTP) code by email as soon as you request your withdrawal.No further action is needed on your part; we will send you an email to confirm whether the withdrawal was successful or not."
                            ]
                        },
                        {
                            type: 'paragraph',
                            title: 'How ONE',
                            content: [
                                "First, navigate to the menu located in the top left corner of the PrizePicks app. If you are accessing your account on a browser, the menu is in the top right corner. From here, you can select Request Withdrawal.",
                                "You'll receive a One Time Password(OTP) code by email as soon as you request your withdrawal.No further action is needed on your part; we will send you an email to confirm whether the withdrawal was successful or not."
                            ]
                        },
                        {
                            type: 'paragraphList',
                            title: 'How do I withdraw funds?',
                            paragraph: 'First, navigate to the menu located in the top left corner of the PrizePicks app. If you are accessing your account on a browser',
                            list: [
                                "First, navigate to the menu located in the top left corner of the PrizePicks app. If you are accessing your account on a browser, the menu is in the top right corner. From here, you can select Request Withdrawal.",
                                "You'll receive a One Time Password(OTP) code by email as soon as you request your withdrawal.No further action is needed on your part; we will send you an email to confirm whether the withdrawal was successful or not."
                            ]
                        }
                    ]
                }
            },
            {
                title: 'Eligibility',
                path: '/eligibility',
                content: {
                    title: 'TEST',
                    updatedOn: 'Dec 12, 2024',
                    content: [
                        {
                            type: 'paragraph',
                            title: 'How ONE',
                            content: [
                                "First, navigate to the menu located in the top left corner of the PrizePicks app. If you are accessing your account on a browser, the menu is in the top right corner. From here, you can select Request Withdrawal.",
                                "You'll receive a One Time Password(OTP) code by email as soon as you request your withdrawal.No further action is needed on your part; we will send you an email to confirm whether the withdrawal was successful or not."
                            ]
                        },
                        {
                            type: 'paragraph',
                            title: 'How ONE',
                            content: [
                                "First, navigate to the menu located in the top left corner of the PrizePicks app. If you are accessing your account on a browser, the menu is in the top right corner. From here, you can select Request Withdrawal.",
                                "You'll receive a One Time Password(OTP) code by email as soon as you request your withdrawal.No further action is needed on your part; we will send you an email to confirm whether the withdrawal was successful or not."
                            ]
                        },
                        {
                            type: 'paragraphList',
                            title: 'How do I withdraw funds?',
                            paragraph: 'First, navigate to the menu located in the top left corner of the PrizePicks app. If you are accessing your account on a browser',
                            list: [
                                "First, navigate to the menu located in the top left corner of the PrizePicks app. If you are accessing your account on a browser, the menu is in the top right corner. From here, you can select Request Withdrawal.",
                                "You'll receive a One Time Password(OTP) code by email as soon as you request your withdrawal.No further action is needed on your part; we will send you an email to confirm whether the withdrawal was successful or not."
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        title: 'Account',
        icon: <PersonIcon fontSize='large' />,
        items: [
            {
                title: 'VPNs',
                path: '/vpns'
            },
            {
                title: 'Responsible Gaming',
                path: '/responsible-gaming',
                content: {
                    title: 'TEST',
                    updatedOn: 'Dec 12, 2024',
                    content: [
                        {
                            type: 'paragraph',
                            title: 'How ONE',
                            content: [
                                "First, navigate to the menu located in the top left corner of the PrizePicks app. If you are accessing your account on a browser, the menu is in the top right corner. From here, you can select Request Withdrawal.",
                                "You'll receive a One Time Password(OTP) code by email as soon as you request your withdrawal.No further action is needed on your part; we will send you an email to confirm whether the withdrawal was successful or not."
                            ]
                        },
                        {
                            type: 'paragraph',
                            title: 'How ONE',
                            content: [
                                "First, navigate to the menu located in the top left corner of the PrizePicks app. If you are accessing your account on a browser, the menu is in the top right corner. From here, you can select Request Withdrawal.",
                                "You'll receive a One Time Password(OTP) code by email as soon as you request your withdrawal.No further action is needed on your part; we will send you an email to confirm whether the withdrawal was successful or not."
                            ]
                        },
                        {
                            type: 'paragraphList',
                            title: 'How do I withdraw funds?',
                            paragraph: 'First, navigate to the menu located in the top left corner of the PrizePicks app. If you are accessing your account on a browser',
                            list: [
                                "First, navigate to the menu located in the top left corner of the PrizePicks app. If you are accessing your account on a browser, the menu is in the top right corner. From here, you can select Request Withdrawal.",
                                "You'll receive a One Time Password(OTP) code by email as soon as you request your withdrawal.No further action is needed on your part; we will send you an email to confirm whether the withdrawal was successful or not."
                            ]
                        }
                    ]
                }
            },
            {
                title: 'Code of Conduct',
                path: '/code-of-conduct',
                content: {
                    title: 'TEST',
                    updatedOn: 'Dec 12, 2024',
                    content: [
                        {
                            type: 'paragraph',
                            title: 'How ONE',
                            content: [
                                "First, navigate to the menu located in the top left corner of the PrizePicks app. If you are accessing your account on a browser, the menu is in the top right corner. From here, you can select Request Withdrawal.",
                                "You'll receive a One Time Password(OTP) code by email as soon as you request your withdrawal.No further action is needed on your part; we will send you an email to confirm whether the withdrawal was successful or not."
                            ]
                        },
                        {
                            type: 'paragraph',
                            title: 'How ONE',
                            content: [
                                "First, navigate to the menu located in the top left corner of the PrizePicks app. If you are accessing your account on a browser, the menu is in the top right corner. From here, you can select Request Withdrawal.",
                                "You'll receive a One Time Password(OTP) code by email as soon as you request your withdrawal.No further action is needed on your part; we will send you an email to confirm whether the withdrawal was successful or not."
                            ]
                        },
                        {
                            type: 'paragraphList',
                            title: 'How do I withdraw funds?',
                            paragraph: 'First, navigate to the menu located in the top left corner of the PrizePicks app. If you are accessing your account on a browser',
                            list: [
                                "First, navigate to the menu located in the top left corner of the PrizePicks app. If you are accessing your account on a browser, the menu is in the top right corner. From here, you can select Request Withdrawal.",
                                "You'll receive a One Time Password(OTP) code by email as soon as you request your withdrawal.No further action is needed on your part; we will send you an email to confirm whether the withdrawal was successful or not."
                            ]
                        }
                    ]
                }
            },
            {
                title: 'Account Issues',
                path: '/account-issues',
                content: {
                    title: 'TEST',
                    updatedOn: 'Dec 12, 2024',
                    content: [
                        {
                            type: 'paragraph',
                            title: 'How ONE',
                            content: [
                                "First, navigate to the menu located in the top left corner of the PrizePicks app. If you are accessing your account on a browser, the menu is in the top right corner. From here, you can select Request Withdrawal.",
                                "You'll receive a One Time Password(OTP) code by email as soon as you request your withdrawal.No further action is needed on your part; we will send you an email to confirm whether the withdrawal was successful or not."
                            ]
                        },
                        {
                            type: 'paragraph',
                            title: 'How ONE',
                            content: [
                                "First, navigate to the menu located in the top left corner of the PrizePicks app. If you are accessing your account on a browser, the menu is in the top right corner. From here, you can select Request Withdrawal.",
                                "You'll receive a One Time Password(OTP) code by email as soon as you request your withdrawal.No further action is needed on your part; we will send you an email to confirm whether the withdrawal was successful or not."
                            ]
                        },
                        {
                            type: 'paragraphList',
                            title: 'How do I withdraw funds?',
                            paragraph: 'First, navigate to the menu located in the top left corner of the PrizePicks app. If you are accessing your account on a browser',
                            list: [
                                "First, navigate to the menu located in the top left corner of the PrizePicks app. If you are accessing your account on a browser, the menu is in the top right corner. From here, you can select Request Withdrawal.",
                                "You'll receive a One Time Password(OTP) code by email as soon as you request your withdrawal.No further action is needed on your part; we will send you an email to confirm whether the withdrawal was successful or not."
                            ]
                        }
                    ]
                }
            },
            {
                title: 'Deactivation',
                path: '/deactivation',
                content: {
                    title: 'TEST',
                    updatedOn: 'Dec 12, 2024',
                    content: [
                        {
                            type: 'paragraph',
                            title: 'How ONE',
                            content: [
                                "First, navigate to the menu located in the top left corner of the PrizePicks app. If you are accessing your account on a browser, the menu is in the top right corner. From here, you can select Request Withdrawal.",
                                "You'll receive a One Time Password(OTP) code by email as soon as you request your withdrawal.No further action is needed on your part; we will send you an email to confirm whether the withdrawal was successful or not."
                            ]
                        },
                        {
                            type: 'paragraph',
                            title: 'How ONE',
                            content: [
                                "First, navigate to the menu located in the top left corner of the PrizePicks app. If you are accessing your account on a browser, the menu is in the top right corner. From here, you can select Request Withdrawal.",
                                "You'll receive a One Time Password(OTP) code by email as soon as you request your withdrawal.No further action is needed on your part; we will send you an email to confirm whether the withdrawal was successful or not."
                            ]
                        },
                        {
                            type: 'paragraphList',
                            title: 'How do I withdraw funds?',
                            paragraph: 'First, navigate to the menu located in the top left corner of the PrizePicks app. If you are accessing your account on a browser',
                            list: [
                                "First, navigate to the menu located in the top left corner of the PrizePicks app. If you are accessing your account on a browser, the menu is in the top right corner. From here, you can select Request Withdrawal.",
                                "You'll receive a One Time Password(OTP) code by email as soon as you request your withdrawal.No further action is needed on your part; we will send you an email to confirm whether the withdrawal was successful or not."
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        title: `Wagers`,
        icon: <HandshakeIcon fontSize='large' />,
        items: [
            {
                title: 'Creating a wager',
                path: '/creating-a-wager',
                content: {
                    title: 'TEST',
                    updatedOn: 'Dec 12, 2024',
                    content: [
                        {
                            type: 'paragraph',
                            title: 'How ONE',
                            content: [
                                "First, navigate to the menu located in the top left corner of the PrizePicks app. If you are accessing your account on a browser, the menu is in the top right corner. From here, you can select Request Withdrawal.",
                                "You'll receive a One Time Password(OTP) code by email as soon as you request your withdrawal.No further action is needed on your part; we will send you an email to confirm whether the withdrawal was successful or not."
                            ]
                        },
                        {
                            type: 'paragraph',
                            title: 'How ONE',
                            content: [
                                "First, navigate to the menu located in the top left corner of the PrizePicks app. If you are accessing your account on a browser, the menu is in the top right corner. From here, you can select Request Withdrawal.",
                                "You'll receive a One Time Password(OTP) code by email as soon as you request your withdrawal.No further action is needed on your part; we will send you an email to confirm whether the withdrawal was successful or not."
                            ]
                        },
                        {
                            type: 'paragraphList',
                            title: 'How do I withdraw funds?',
                            paragraph: 'First, navigate to the menu located in the top left corner of the PrizePicks app. If you are accessing your account on a browser',
                            list: [
                                "First, navigate to the menu located in the top left corner of the PrizePicks app. If you are accessing your account on a browser, the menu is in the top right corner. From here, you can select Request Withdrawal.",
                                "You'll receive a One Time Password(OTP) code by email as soon as you request your withdrawal.No further action is needed on your part; we will send you an email to confirm whether the withdrawal was successful or not."
                            ]
                        }
                    ]
                }
            },
            {
                title: 'Accepting a wager',
                path: '/accepting-a-wager',
                content: {
                    title: 'TEST',
                    updatedOn: 'Dec 12, 2024',
                    content: [
                        {
                            type: 'paragraph',
                            title: 'How ONE',
                            content: [
                                "First, navigate to the menu located in the top left corner of the PrizePicks app. If you are accessing your account on a browser, the menu is in the top right corner. From here, you can select Request Withdrawal.",
                                "You'll receive a One Time Password(OTP) code by email as soon as you request your withdrawal.No further action is needed on your part; we will send you an email to confirm whether the withdrawal was successful or not."
                            ]
                        },
                        {
                            type: 'paragraph',
                            title: 'How ONE',
                            content: [
                                "First, navigate to the menu located in the top left corner of the PrizePicks app. If you are accessing your account on a browser, the menu is in the top right corner. From here, you can select Request Withdrawal.",
                                "You'll receive a One Time Password(OTP) code by email as soon as you request your withdrawal.No further action is needed on your part; we will send you an email to confirm whether the withdrawal was successful or not."
                            ]
                        },
                        {
                            type: 'paragraphList',
                            title: 'How do I withdraw funds?',
                            paragraph: 'First, navigate to the menu located in the top left corner of the PrizePicks app. If you are accessing your account on a browser',
                            list: [
                                "First, navigate to the menu located in the top left corner of the PrizePicks app. If you are accessing your account on a browser, the menu is in the top right corner. From here, you can select Request Withdrawal.",
                                "You'll receive a One Time Password(OTP) code by email as soon as you request your withdrawal.No further action is needed on your part; we will send you an email to confirm whether the withdrawal was successful or not."
                            ]
                        }
                    ]
                }
            },
            {
                title: 'Refunded wagers',
                path: '/refund-wagers',
                content: {
                    title: 'TEST',
                    updatedOn: 'Dec 12, 2024',
                    content: [
                        {
                            type: 'paragraph',
                            title: 'How ONE',
                            content: [
                                "First, navigate to the menu located in the top left corner of the PrizePicks app. If you are accessing your account on a browser, the menu is in the top right corner. From here, you can select Request Withdrawal.",
                                "You'll receive a One Time Password(OTP) code by email as soon as you request your withdrawal.No further action is needed on your part; we will send you an email to confirm whether the withdrawal was successful or not."
                            ]
                        },
                        {
                            type: 'paragraph',
                            title: 'How ONE',
                            content: [
                                "First, navigate to the menu located in the top left corner of the PrizePicks app. If you are accessing your account on a browser, the menu is in the top right corner. From here, you can select Request Withdrawal.",
                                "You'll receive a One Time Password(OTP) code by email as soon as you request your withdrawal.No further action is needed on your part; we will send you an email to confirm whether the withdrawal was successful or not."
                            ]
                        },
                        {
                            type: 'paragraphList',
                            title: 'How do I withdraw funds?',
                            paragraph: 'First, navigate to the menu located in the top left corner of the PrizePicks app. If you are accessing your account on a browser',
                            list: [
                                "First, navigate to the menu located in the top left corner of the PrizePicks app. If you are accessing your account on a browser, the menu is in the top right corner. From here, you can select Request Withdrawal.",
                                "You'll receive a One Time Password(OTP) code by email as soon as you request your withdrawal.No further action is needed on your part; we will send you an email to confirm whether the withdrawal was successful or not."
                            ]
                        }
                    ]
                }
            },
            {
                title: 'Winning/losing a wager',
                path: '/winning-losing-a-wager',
                content: {
                    title: 'TEST',
                    updatedOn: 'Dec 12, 2024',
                    content: [
                        {
                            type: 'paragraph',
                            title: 'How ONE',
                            content: [
                                "First, navigate to the menu located in the top left corner of the PrizePicks app. If you are accessing your account on a browser, the menu is in the top right corner. From here, you can select Request Withdrawal.",
                                "You'll receive a One Time Password(OTP) code by email as soon as you request your withdrawal.No further action is needed on your part; we will send you an email to confirm whether the withdrawal was successful or not."
                            ]
                        },
                        {
                            type: 'paragraphList',
                            title: 'How do I withdraw funds?',
                            paragraph: 'First, navigate to the menu located in the top left corner of the PrizePicks app. If you are accessing your account on a browser',
                            list: [
                                "First, navigate to the menu located in the top left corner of the PrizePicks app. If you are accessing your account on a browser, the menu is in the top right corner. From here, you can select Request Withdrawal.",
                                "You'll receive a One Time Password(OTP) code by email as soon as you request your withdrawal.No further action is needed on your part; we will send you an email to confirm whether the withdrawal was successful or not."
                            ]
                        }
                    ]
                }
            }
        ]
    }
]
*/
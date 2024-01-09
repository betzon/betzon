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
                title: 'Motobookie Challenge!',
                path: '/motobookie-challenge',
                content: {
                    title: 'Motobookie Challenge',
                    updatedOn: 'Jan 2, 2024',
                    content: [
                        {
                            type: 'paragraph',
                            title: 'Social wagering meets fantasy sports this year!',
                            content: [
                                "To start off the season right, we’re kicking off a new contest that runs each month in January and February! ",
                                "There are no subscription fees that will be charged in those two months and you can sign up to participate in all the action for free!"
                            ]
                        },
                        {
                            type: 'paragraphList',
                            title: 'How do I withdraw funds?',
                            paragraph: 'Each player who is currently subscribed will get 1000 fantasy chips automatically deposited into their accounts! This will also be offered to each new person who signs up! You will then be able to engage in wagering against others through the course of the month. These chips cannot be cashed out for real money as they are fantasy chips. However, at the end of the month, the players with the highest number of wagers won will be awarded the following prizes:',
                            list: [
                                "1st Place: $1,000",
                                "2nd Place: $750",
                                "3rd Place: $250"
                            ],
                        },
                        {
                            type: 'paragraph',
                            title: '',
                            content: [
                                'Any ties for each place will cause the pot for their respective tier to be divided equally amongst those who tie for that place. Wager wisely though, each player will only get 1,000 chips allocated to them for the month. The chip count will reset before the first race of February, 2024; at that time, each player gets a fresh set of 1,000 fantasy chips.'
                            ]
                        },
                        {
                            type: 'paragraph',
                            title: 'What about my previous chips?',
                            content: [
                                "If you previously were subscribed, we have a record of your current real chip count. Those will be reset but we have a record and if you wish to cash those out feel free to reach out to support at: support@motobookie.com. Of course, you can choose to keep those in your account so that once we return to the regular wagering in the month of March, those will be reinstated into your account."
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
"use client"

import React from 'react'
import Link from 'next/link'
import { Box, Container, Stack, Typography } from '@mui/material'

const sections = [
    {
        title: '1. Commitment to Child Safety',
        body: [
            'BetzOn maintains a zero-tolerance policy toward any form of child sexual abuse and exploitation (CSAE). We are committed to protecting minors and complying with applicable laws and platform requirements, including Google Play requirements.',
            'Our platform is intended for users 18 years and older only, and we take active steps to prevent access, misuse, or exploitation by minors.',
        ],
    },
    {
        title: '2. Prohibited Content and Conduct',
        intro: 'The following are strictly prohibited on BetzOn:',
        bullets: [
            'Any content involving sexual exploitation or abuse of minors',
            'Grooming behavior, including attempts to build relationships with minors for exploitation',
            'Sharing, requesting, or distributing any CSAE material',
            'Any content that sexualizes individuals under 18',
            'Impersonation of minors for exploitative purposes',
            'Solicitation of minors in any form',
        ],
        outro: 'Violations will result in immediate account suspension or termination and may be reported to law enforcement.',
    },
    {
        title: '3. Age Restrictions and Access Controls',
        bullets: [
            'BetzOn is strictly limited to users aged 18 and older.',
            'Safeguards include age gating, monitoring, and enforcement actions.',
        ],
    },
    {
        title: '4. Detection and Moderation',
        body: [
            'We use automated systems and manual review processes to detect suspicious activity. CSAE-related activity is prioritized for immediate review.',
        ],
    },
    {
        title: '5. Reporting and Escalation',
        body: [
            'Users can report violations through in-app tools or by email at safety@betzon.com.',
        ],
    },
    {
        title: '6. Law Enforcement Cooperation',
        body: [
            'BetzOn cooperates with authorities and may report cases to the National Center for Missing & Exploited Children (NCMEC).',
        ],
    },
    {
        title: '7. User Education',
        body: [
            'We promote safe platform use through guidelines and education.',
        ],
    },
    {
        title: '8. Enforcement and Penalties',
        body: [
            'Violations may result in content removal, account suspension, permanent bans, or legal action.',
        ],
    },
    {
        title: '9. Policy Updates',
        body: [
            'This policy may be updated as needed to reflect legal, safety, or platform changes.',
        ],
    },
    {
        title: '10. Contact',
        body: [
            'BetzOn Safety Team',
        ],
    },
]

const ChildSafetyPolicyPage = () => {
    return (
        <Box
            sx={{
                minHeight: '100vh',
                py: { xs: 8, md: 12 },
                px: 2,
            }}
        >
            <Container maxWidth="md">
                <Stack spacing={4}>
                    <Box
                        sx={{
                            p: { xs: 4, sm: 6 },
                            borderRadius: 4,
                            border: '1px solid white',
                            backgroundColor: 'transparent',
                            color: 'white',
                            '& .MuiTypography-root': { color: 'white' },
                            '& a': { color: 'white', textDecoration: 'underline' },
                        }}
                    >
                        <Stack spacing={3}>
                            <Box>
                                <Typography variant="h3" component="h1" sx={{ fontWeight: 700, mb: 2 }}>
                                    Child Safety &amp; CSAE Prevention Policy
                                </Typography>
                                <Typography variant="body2">
                                    Effective Date: 04.01.2026
                                </Typography>
                                <Typography variant="body2">
                                    Last Updated: 04.01.2026
                                </Typography>
                            </Box>

                            <Typography variant="body1">
                                This page summarizes BetzOn&apos;s child safety standards and CSAE prevention commitments for users, platforms, and regulators.
                            </Typography>

                            {sections.map((section) => (
                                <Stack key={section.title} spacing={1.5}>
                                    <Typography variant="h5" sx={{ fontWeight: 700 }}>
                                        {section.title}
                                    </Typography>

                                    {section.intro ? (
                                        <Typography variant="body1">
                                            {section.intro}
                                        </Typography>
                                    ) : null}

                                    {section.body?.map((paragraph) => (
                                        <Typography
                                            key={paragraph}
                                            variant="body1"
                                        >
                                            {paragraph}
                                        </Typography>
                                    ))}

                                    {section.bullets ? (
                                        <Box component="ul" sx={{ pl: 3, my: 0 }}>
                                            {section.bullets.map((item) => (
                                                <Box component="li" key={item} sx={{ mb: 1 }}>
                                                    <Typography variant="body1">
                                                        {item}
                                                    </Typography>
                                                </Box>
                                            ))}
                                        </Box>
                                    ) : null}

                                    {section.outro ? (
                                        <Typography variant="body1">
                                            {section.outro}
                                        </Typography>
                                    ) : null}

                                    {section.title === '10. Contact' ? (
                                        <Stack spacing={1}>
                                            <Typography variant="body1">
                                                Email:{' '}
                                                <Link href="mailto:info@betzon.com">
                                                    info@betzon.com
                                                </Link>
                                            </Typography>
                                            <Typography variant="body1">
                                                Report violations:{' '}
                                                <Link href="mailto:safety@betzon.com">
                                                    safety@betzon.com
                                                </Link>
                                            </Typography>
                                        </Stack>
                                    ) : null}
                                </Stack>
                            ))}
                        </Stack>
                    </Box>
                </Stack>
            </Container>
        </Box>
    )
}

export default ChildSafetyPolicyPage

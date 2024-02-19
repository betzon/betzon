"use client"
import { Box, IconButton, Stack, Typography } from '@mui/material'
import React from 'react'
import { helpCenterContent } from '../content';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useTheme } from '@emotion/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

function findPathIndex(helpCenterContent, pathId) {
    for (let i = 0; i < helpCenterContent.length; i++) {
        const section = helpCenterContent[i];
        for (let j = 0; j < section.items.length; j++) {
            const item = section.items[j];
            if (item.path === `/${pathId}`) {
                return { sectionIndex: i, itemIndex: j };
            }
        }
    }
    return { sectionIndex: -1, itemIndex: -1 }; // Path not found
}

const HelpCenterSubPage = ({ params }) => {

    const theme = useTheme()

    const router = useRouter()

    const indexes = findPathIndex(helpCenterContent, params.id);

    if (indexes.sectionIndex === -1 || indexes.sectionIndex === -1) {
        return (
            <Box>
                ERROR
            </Box>
        )

    }
    else {

        const content = helpCenterContent[indexes.sectionIndex].items[indexes.itemIndex].content

        const detectContentType = (contentStructure) => {

            let results = [];

            contentStructure.content.forEach((key) => {

                switch (key.type) {
                    case 'paragraph':
                        results.push(
                            <Stack spacing={1}>
                                <Typography variant='h5' sx={{ fontWeight: 700 }}>{key.title}</Typography>
                                {
                                    key.content.map((item, key) => (
                                        <Typography variant='body2' key={key}>{item}</Typography>
                                    ))
                                }
                            </Stack>
                        )
                        break;

                    case 'paragraphList':
                        results.push(
                            <Stack spacing={1}>
                                <Typography variant='h5' sx={{ fontWeight: 700 }}>{key.title}</Typography>
                                <Typography variant='body2'>{key.paragraph}</Typography>
                                <ul style={{
                                    marginLeft: 0,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '12px'
                                }}>
                                    {
                                        key.list.map((item, key) => (
                                            <li>
                                                <Typography variant='body2'>
                                                    {item}
                                                </Typography>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </Stack>
                        )
                        break;

                    default:
                        break;
                }
            });
            return results;
        }

        const list = detectContentType(content)

        return (
            <Box sx={{
                minHeight: '100vh',
                paddingTop: '100px',
                boxSizing: 'border-box',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Box sx={{
                    border: `2px solid ${theme.palette.dark.otherlight}`,
                    boxSizing: 'border-box',
                    padding: '24px',
                    borderRadius: '12px',
                    marginBottom: '72px',
                    background: theme.palette.dark.dark,
                }}>
                    <Stack spacing={6}>
                        <Stack spacing={1.5}>
                            <IconButton sx={{ width: 'fit-content' }} onClick={() => router.push('/help-center')}>
                                <ArrowBackIcon fontSize='large' />
                            </IconButton>
                            <Typography variant='h3' sx={{ fontWeight: 700 }}>{content.title}</Typography>
                            <Typography variant='body1' sx={{ color: theme.palette.dark.otherlight }}>Updated on: {content.updatedOn}</Typography>
                        </Stack>
                        {
                            list.map((item) => (
                                item
                            ))
                        }


                        <Stack spacing={1.5}>
                            <Typography variant='h5' sx={{ fontWeight: 700 }}>Any Questions?</Typography>
                            <Typography variant='body1' >Feel free to reach out to our supprot team at <a style={{ color: theme.palette.primary.main, fontWeight: 700 }} href='mailto:info@betzon.com?subject=Need%20help'>info@betzon.com</a></Typography>
                        </Stack>
                    </Stack>
                </Box>
            </Box>
        )
    }
}

export default HelpCenterSubPage
/*
 <Stack spacing={2} direction="row">
                                <IconButton sx={{ width: 'fit-content' }} onClick={() => router.push('/help-center')}>
                                    <ArrowBackIcon fontSize='large' />
                                </IconButton>
                                <Typography variant='h3' sx={{ fontWeight: 700 }}>{content.title}</Typography>
                            </Stack>
*/

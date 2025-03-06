'use client'
import { Typography, Box, Stack, IconButton } from '@mui/material'
import React from 'react'
import Carousel from 'react-material-ui-carousel'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import theme from '@/app/styles/theme';
import Image from 'next/image';

const ItemUIBox = ({ src }) => {
    return (
        <Box
            sx={{
                height: { xs: 250, sm: 350, md: 400, lg: 500, xl: 500 },
                width: { xs: 250, sm: 350, md: 400, lg: 500, xl: 500 },
                position: 'relative',
                bgcolor: theme.palette.dark.dark,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                borderRadius: 1,
                border: `2px solid ${theme.palette.dark.dark}`, // Correct way to add a thick orange border
            }}
        >
            <Image
                src={src}
                style={{ objectFit: 'cover' }}
                layout="fill" // Ensures image takes full width and height
                objectFit="cover" // Ensures image fills parent while maintaining aspect ratio
                alt="Item"
                priority
                placeholder="blur"
            />
        </Box>
    );
};

const Item = ({ data }) => {
    return (
        <Stack
            spacing={2}
            sx={{
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <ItemUIBox src={data?.src} />
            <Stack>
                <Typography variant='h4'>{data?.name}</Typography>
                <Typography variant='body1' sx={{ fontWeight: 900 }}>{data?.description}</Typography>
            </Stack>
        </Stack>
    )
}

const HowToCarousel = ({ data, showButton = false, interval = 7000 }) => {
    return (
        <Box sx={{
            width: { xs: "100%", sm: 500, md: 500, lg: 650, xl: 750 },
            minHeight: { xs: 500, sm: 500, md: 500, lg: 650, xl: 750 }
        }}>
            <Carousel
                interval={interval}
                activeIndicatorIconButtonProps={{
                    style: {
                        color: theme.palette.neutral.main
                    }
                }}
                indicatorIconButtonProps={{
                    style: {
                        color: theme.palette.primary.main      // 3
                    }
                }}
                NavButton={({ onClick, className, style, next, prev }) => {
                    // Other logic
                    return (
                        showButton
                        &&
                        <IconButton onClick={onClick} className={className} style={style}>
                            {next && <KeyboardArrowRightIcon fontSize="large" style={style} />}
                            {prev && <KeyboardArrowLeftIcon fontSize="large" style={style} />}
                        </IconButton>
                    )
                }
                }
            >
                {
                    data?.map((item, i) => <Item key={i} data={item} />)
                }
            </Carousel >
        </Box >
    )
}

export default HowToCarousel

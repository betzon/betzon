import { Box, IconButton, Typography } from '@mui/material'
import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const LikesComponents = ({ liked, likes, toggleLiked }) => {

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '-2px'
        }}>
            <IconButton onClick={toggleLiked}>
                {
                    liked ? < FavoriteIcon /> : <FavoriteBorderIcon />
                }
            </IconButton>
            <Typography variant='caption' sx={{ fontWeight: 700 }}>{likes}</Typography>
        </Box>
    )
}

export default LikesComponents

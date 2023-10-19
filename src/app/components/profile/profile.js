"use client"
import { Avatar } from '@mui/material'
import React, { useState, useEffect } from 'react'

const Profile = (props) => {



    return (
        <Avatar
            alt={props.alt}
            src={props.profileURL}
            sx={{
                width: props.size,
                height: props.size
            }} />
    )
}

export default Profile
"use client"// Because we're inside a server component
import React from 'react'
import { useSelector, useDispatch } from "react-redux"
//import { increment, decrement } from "../../redux/slices/test"
import { Box, Button, Typography } from '@mui/material'
import { increment, decrement, incrementByAmount } from '@/app/redux/actions/testAction'
import TitleHeader from '@/app/components/headers/title'
import MyWagersList from '@/app/components/(card)/wager/my-wagers/my-wagers-list'

const WagerDetails = () => {

  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <Box sx={{
      height: '100vh',
      boxSizing: 'border-box'
    }}>
      <TitleHeader title={"Wagers"} />
      <MyWagersList />
    </Box>
  )
}

export default WagerDetails
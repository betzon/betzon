"use client"// Because we're inside a server component
import React from 'react'
import { useSelector, useDispatch } from "react-redux"
//import { increment, decrement } from "../../redux/slices/test"
import { Button, Typography } from '@mui/material'
import { increment, decrement, incrementByAmount } from '@/app/redux/actions/testAction'

const WagerDetails = () => {

  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      WagerDetails
      <div>
        <Typography>Counter: {counter}</Typography>
        <Button onClick={() => dispatch(increment())}>Increment</Button>
        <Button onClick={() => dispatch(incrementByAmount(25))}>Increment</Button>
      </div>
    </div>
  )
}

export default WagerDetails
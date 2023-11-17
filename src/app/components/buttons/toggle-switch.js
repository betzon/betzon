'use client'
import { Typography } from '@mui/material'
import React, { useState } from 'react'

const ToggleSwitchChipBankButton = () => {

    const [toggle, setToggle] = useState(false)

    const toggleHandler = () => {
        setToggle(!toggle)
    }

    return (
        <button id='toggle-switch-wrapper' onClick={toggleHandler}>

            <div id='toggle-switch-button' className={toggle ? 'toggle-left' : 'toggle-right'}>
                <Typography color='white' sx={{ fontWeight: 700 }}>{toggle ? 'Quickbuy' : 'Cage'}</Typography>
            </div>

            <div className='toggle-switch-item'>
                <Typography sx={{ fontWeight: 700, opacity: .5 }}>One</Typography>
            </div>

            <div className='toggle-switch-item'>
                <Typography sx={{ fontWeight: 700, opacity: .5 }}>Two</Typography>
            </div>

        </button>
    )
}
/*
<button>
{toggle ? 'Quickbuy' : 'Cage'}
</button>
*/
export default ToggleSwitchChipBankButton

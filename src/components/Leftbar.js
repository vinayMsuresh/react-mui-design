import React from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
export default function Leftbar() {
  return (
    <div>
        <Avatar
            alt="Remy Sharp"
            src="logo512.png"
            className='mx-20'
            sx={{width: '50%', height: '50%' }}
        />
        <div className='px-32 my-12'>
            <Button sx={{display:'block',color:'white'}}>Home</Button>
            <Button sx={{display:'block',color:'white'}}>Account</Button>
            <Button sx={{display:'block',color:'white'}}>Settings</Button>
            <Button sx={{display:'block',color:'white'}}>Explore</Button>
           
        </div>
    </div>
  )
}

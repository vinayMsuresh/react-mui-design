import React from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
export default function Leftbar() {
  return (
    <div>
        <Avatar
            alt="Remy Sharp"
            src="logo512.png"
            sx={{marginLeft:'22%', width: '50%', height: '50%' }}
        />
        <div style={{paddingLeft:'28%', marginTop:'10%'}}>
            <Button  sx={{display:'block', color:'white'}}>Home</Button>
            <Button  sx={{display:'block', color:'white'}}>Account</Button>
            <Button  sx={{display:'block', color:'white'}}>Settings</Button>
            <Button  sx={{display:'block', color:'white'}}>Explore</Button>
        </div>
    </div>
  )
}

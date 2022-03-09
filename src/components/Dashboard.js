import React from 'react';
import Header from './Header';
import Box from '@mui/material/Box';
import Main from './Main';
import Grid from '@mui/material/Grid';
import Leftbar from './Leftbar';
import Rightbar from './Rightbar';
const Dashboard = () => {
    return (
        <div className='body'>
            <Header />
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} sx={{marginTop: 1,padding:3}}>
                    <Grid item md={3} sx={{border:1, marginLeft:3.5}}>
                        <Leftbar />
                    </Grid>
                    <Grid item md={5.5} sx={{border:1, marginLeft:1, padding:2}}>
                        <Main/>
                    </Grid>
                    <Grid item md={3} sx={{border:1, marginLeft:1, padding:2}}>
                        <Rightbar/>
                    </Grid>
      
                </Grid>
            </Box>
        </div>
    );
};

export default Dashboard;
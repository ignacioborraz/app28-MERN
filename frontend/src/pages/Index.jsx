import React from 'react'
import {Grid,Typography} from '@mui/material'

import '../styles/styles.css'

export default function Index() {

    return (
        <Grid container sx={{
            flexGrow: '1',
            backgroundColor: 'rgb(2,0,3)'}}>
            <Grid item xs={0} sm={4} md={6} className='backGroundIndex' />
            <Grid item xs={12} sm={8} md={6} sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgb(224,224,224)'}}>
                <Typography variant='h3' sx={{
                    padding: '15px',
                    backgroundColor: 'rgb(105,24,152)',
                    color: 'rgb(224,224,224)',
                    fontFamily: 'Paytone One'}}>rosarioJobs</Typography>
            </Grid>
        </Grid>
    )

}

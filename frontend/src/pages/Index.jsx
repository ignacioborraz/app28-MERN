import React from 'react'
import {Grid,Typography} from '@mui/material'

import '../styles/styles.css'

export default function Index() {

    return (
        <Grid container sx={{
            flexGrow: '1',
            backgroundColor: 'rgb(105,24,152)'}}>
            <Grid item xs={0} sm={4} md={6} className='backGroundStyle bgIndex' />
            <Grid item xs={12} sm={8} md={6} sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgb(224,224,224)'}}>
                <Typography variant='h3' className='responsiveH3' sx={{
                    width: '60%',
                    marginBottom: '20px',
                    padding: '15px',
                    backgroundColor: 'rgb(105,24,152)',
                    color: 'rgb(224,224,224)',
                    fontFamily: 'Paytone One',
                    textAlign: 'center'}}>rosarioJobs</Typography>
                <Typography variant='h6' className='responsiveH6' sx={{
                    width: '60%',
                    padding: '15px',
                    backgroundColor: 'rgb(2,0,3)',
                    color: 'rgb(224,224,224)',
                    fontFamily: 'Paytone One',
                    textAlign: 'center'}}>jobs all over the world!</Typography>
            </Grid>
        </Grid>
    )

}

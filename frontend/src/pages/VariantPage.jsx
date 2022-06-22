import React from 'react'
import {Link as LinkRouter} from 'react-router-dom'
import {Box,Typography} from '@mui/material'

export default function VariantPage({text}) {

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexGrow: '1',
            backgroundColor: 'rgb(2,0,3)'}}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '20px',
                backgroundColor: 'rgb(224,224,224)'}}>
                <Typography variant='h2' sx={{
                    color: 'rgb(105,24,152)'
                    }}>ROSARIO JOBS</Typography>
                <Typography variant='h4' sx={{
                    color: 'rgb(105,24,152)'
                    }}>{text}</Typography>
                <LinkRouter to={'/'} className='linksPrincipales'>go back to HOME</LinkRouter>
            </Box>
        </Box>
    )
    
}
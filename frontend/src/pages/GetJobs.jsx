import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link as LinkRouter} from 'react-router-dom'

import {Box,Typography} from '@mui/material'

export default function GetJobs() {

    const [companies,setCompanies] = useState([])

    let apiUrl = 'http://localhost:8000/'

    useEffect( () => {
        axios.get(apiUrl+'apiJobs/company')
        //.then(res=> console.log(res))
        .then(res => setCompanies(res.data.response))
    },[])

    return (
        <Box sx={{
            flexGrow: '1',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'flex-start',
            backgroundColor: 'rgb(224,224,224)'}}>
            {companies.map(everyCompany => (
                <Box key={everyCompany._id} sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: '15px',}}>
                    <Typography variant='h4' className='responsiveH4' sx={{
                        width: '280px',
                        padding: '15px',
                        backgroundColor: 'rgb(105,24,152)',
                        color: 'rgb(224,224,224)',
                        fontFamily: 'Paytone One',
                        textAlign: 'center'}}>
                        {everyCompany.nameCompany}</Typography>
                    <img src={everyCompany.logoCompany} alt={everyCompany.nameCompany} className="list" />
                    <LinkRouter to={`/detailCompany/${everyCompany._id}`}>
                        <Typography variant='h6' className='responsiveH6' sx={{
                            width: '280px',
                            padding: '15px',
                            backgroundColor: 'rgb(2,0,3)',
                            '&:hover': {bgcolor: 'rgb(105,24,152)'},
                            color: 'rgb(224,224,224)',
                            fontFamily: 'Paytone One',
                            textAlign: 'center'}}>
                            +info</Typography>
                    </LinkRouter>
                </Box>
            ))}
        </Box>
    )

}
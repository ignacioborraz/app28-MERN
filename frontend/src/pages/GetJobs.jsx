import React, {useEffect, useState} from 'react'
//import axios from 'axios'
import {Link as LinkRouter} from 'react-router-dom'

import {Box,Typography} from '@mui/material'

import {useDispatch,useSelector} from 'react-redux'
import jobActions from '../redux/actions/jobActions'

export default function GetJobs() {

    //const [jobs,setJobs] = useState([])

    const dispatch = useDispatch()

    //let apiUrl = 'http://localhost:8000/'

    useEffect( () => {
        //axios.get(apiUrl+'apiJobs/job')
        //.then(res=> console.log(res))
        //.then(res => setJobs(res.data.response))
        dispatch(jobActions.getJobs())
        // eslint-disable-next-line
    },[])

    //useSelector(store => store.enQueReductor.queEstado)
    const jobs = useSelector(store => store.jobReducer.jobs)

    //const [filter,setFilter] = useState([])
    //setFilter(jobs.filter...)
    //EL SPRINT EXIGE EL FILTRO CON REDUX, PERO LO QUE ESTAN EN LINEAS 29/30 DEBERIA FUNCIONAR

    return (
        <Box sx={{
            flexGrow: '1',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'flex-start',
            backgroundColor: 'rgb(224,224,224)'}}>
            {jobs.map(everyJob => (
                <Box key={everyJob._id} sx={{
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
                        {everyJob.nameJob}</Typography>
                    <img src={everyJob.photoJob} alt={everyJob.nameJob} className="list" />
                    <LinkRouter to={`/detailJob/${everyJob._id}`}>
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
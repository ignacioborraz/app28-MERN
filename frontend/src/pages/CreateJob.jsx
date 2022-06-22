import React, {useRef,useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

import AddAPhotoIcon from '@mui/icons-material/AddAPhoto'
import Box from '@mui/material/Box'
import CategoryIcon from '@mui/icons-material/Category'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import WorkIcon from '@mui/icons-material/Work'


export default function CreateJob() {

    const nameJob = useRef()
    const photoJob = useRef()
    const salaryJob = useRef()
    const detailJob = useRef()
    const [selectedCompany,setSelectedCompany] = useState("")
    const [companies,setCompanies] = useState([])
    const navigate = useNavigate()

    let apiUrl = 'http://localhost:8000/'

    useEffect( () => {
        axios.get(apiUrl+'apiJobs/company')
        //.then(res=> console.log(res))
        .then(res => setCompanies(res.data.response))
    },[])

    const handleCreation = (event) => {
        event.preventDefault()
        if (nameJob && photoJob && salaryJob && detailJob && selectedCompany) {
            axios.post(apiUrl+'apiJobs/job',{
                nameJob: nameJob.current.value,
                detailJob: detailJob.current.value,
                photoJob: photoJob.current.value,
                salaryJob: salaryJob.current.value,
                company: selectedCompany})
            .then(res => navigate("/createdJob",{replace:true}))
        }
    }

    return (
        <Grid container sx={{
            flexGrow: '1',
            backgroundColor: 'rgb(105,24,152)'}}>
            <Grid item xs={0} sm={4} md={6} className='backGroundStyle bgJob' />
            <Grid item xs={12} sm={8} md={6} sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgb(224,224,224)'}}>
                <Typography variant='h4' className='responsiveH4' sx={{
                    width: '60%',
                    minWidth: '280px',
                    marginBottom: '20px',
                    padding: '15px',
                    backgroundColor: 'rgb(105,24,152)',
                    color: 'rgb(224,224,224)',
                    fontFamily: 'Paytone One',
                    textAlign: 'center'}}>
                    Create a new Job!</Typography>
                <form onSubmit={handleCreation} className='newForm'>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                        backgroundColor: 'rgb(2,0,3)',
                        color: 'rgb(224,224,224)',
                        paddingTop: '5px'}}>
                        <label htmlFor="nameJob">
                            <WorkIcon sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '40px',
                                height: '40px',
                                backgroundColor: 'rgb(2,0,3)',
                                color: 'rgb(224,224,224)',
                                padding: '10px'}}/>
                        </label>
                        <input type='text' name='nameJob' id='nameJob' placeholder='Job' className='inputForm' ref={nameJob} required />
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                        backgroundColor: 'rgb(2,0,3)',
                        color: 'rgb(224,224,224)'}}>
                        <label htmlFor="detailJob">
                            <CategoryIcon sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '40px',
                                height: '40px',
                                backgroundColor: 'rgb(2,0,3)',
                                color: 'rgb(224,224,224)',
                                padding: '10px'}}/>
                        </label>
                        <input type='text' name='detailJob' id='detailJob' placeholder='Detail' className='inputForm' ref={detailJob} required />
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                        backgroundColor: 'rgb(2,0,3)',
                        color: 'rgb(224,224,224)'}}>
                        <label htmlFor="photoJob">
                            <AddAPhotoIcon sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '40px',
                                height: '40px',
                                backgroundColor: 'rgb(2,0,3)',
                                color: 'rgb(224,224,224)',
                                padding: '10px'}}/>
                        </label>
                        <input type='text' name='photoJob' id='photoJob' placeholder='Photo' className='inputForm' ref={photoJob} required />
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                        backgroundColor: 'rgb(2,0,3)',
                        color: 'rgb(224,224,224)'}}>
                        <label htmlFor="salaryJob">
                            <CategoryIcon sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '40px',
                                height: '40px',
                                backgroundColor: 'rgb(2,0,3)',
                                color: 'rgb(224,224,224)',
                                padding: '10px'}}/>
                        </label>
                        <input type='text' name='salaryJob' id='salaryJob' placeholder='Salary (USD)' className='inputForm' ref={salaryJob} required />
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                        backgroundColor: 'rgb(2,0,3)',
                        color: 'rgb(224,224,224)',
                        marginBottom: '20px',
                        paddingBottom: '5px'}}>
                        <label htmlFor="company">
                            <WorkIcon sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '40px',
                                height: '40px',
                                backgroundColor: 'rgb(2,0,3)',
                                color: 'rgb(224,224,224)',
                                padding: '10px'}}/>
                        </label>
                        <select defaultValue="" name='company' id='company' placeholder='Company' className='inputForm' onChange={event=> setSelectedCompany(event.target.value)} required>
                            <option disabled value="">select</option>
                            {companies.map(everyCompany => <option key={everyCompany._id} value={everyCompany._id}>{everyCompany.nameCompany}</option>)}
                        </select>
                    </Box>
                    <input type="submit" className='buttonForm' required value='create!' />
                </form>
            </Grid>
        </Grid>
    )

}
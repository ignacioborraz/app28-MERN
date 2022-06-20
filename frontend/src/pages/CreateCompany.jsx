import React, {useRef} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

import AddAPhotoIcon from '@mui/icons-material/AddAPhoto'
import Box from '@mui/material/Box'
import CategoryIcon from '@mui/icons-material/Category'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import WorkIcon from '@mui/icons-material/Work'


export default function CreateCompany() {

    const nameCompany = useRef()
    const logoCompany = useRef()
    const detailCompany = useRef()
    const navigate = useNavigate()

    let apiUrl = 'http://localhost:8000/'

    const handleCreation = (event) => {
        event.preventDefault()
        axios.post(apiUrl+'apiJobs/company',{
            nameCompany: nameCompany.current.value,
            logoCompany: logoCompany.current.value,
            detailCompany: detailCompany.current.value})
        .then(res => navigate("/createdCompany",{replace:true}))
    }

    return (
        <Grid container sx={{
            flexGrow: '1',
            backgroundColor: 'rgb(105,24,152)'}}>
            <Grid item xs={0} sm={4} md={6} className='backGroundStyle bgCompany' />
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
                    Create a new Company!</Typography>
                <form onSubmit={handleCreation} className='newForm'>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                        backgroundColor: 'rgb(2,0,3)',
                        color: 'rgb(224,224,224)'}}>
                        <label htmlFor="nameCompany">
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
                        <input type='text' name='nameCompany' id='nameCompany' placeholder='Name' className='inputForm' ref={nameCompany} required />
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                        backgroundColor: 'rgb(2,0,3)',
                        color: 'rgb(224,224,224)'}}>
                        <label htmlFor="detailCompany">
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
                        <input type='text' name='detailCompany' id='detailCompany' placeholder='Detail' className='inputForm' ref={detailCompany} required />
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                        backgroundColor: 'rgb(2,0,3)',
                        color: 'rgb(224,224,224)'}}>
                        <label htmlFor="logoCompany">
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
                        <input type='text' name='logoCompany' id='logoCompany' placeholder='Logo' className='inputForm' ref={logoCompany} required />
                    </Box>
                    <input type="submit" className='buttonForm' required value='create!' />
                </form>
            </Grid>
        </Grid>
    )

}
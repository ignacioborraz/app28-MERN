import React, {useRef} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

import AddAPhotoIcon from '@mui/icons-material/AddAPhoto'
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
        <Grid container>
            <Grid item xs={0} sm={3} md={9}>
                <div className='newJob-color' />
            </Grid>
            <Grid item xs={12} sm={9} md={6}>
                <Typography variant="h4" sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    fontFamily: 'Macondo',
                    padding: '10px',
                    margin: '10px',
                    marginTop: '90px',
                    color: 'white',
                    width: '80%',
                    minWidth: '280px',
                    backgroundColor: 'rgba(0, 105, 192, 0.8)',
                    borderRadius: '50px'}}>
                    Create a new Company!
                </Typography>
                <form onSubmit={handleCreation}>
                    <Grid sx={{
                        display: 'flex',
                        width: '80%',
                        minWidth: '280px',
                        backgroundColor: 'rgb(0, 105, 192)',
                        border: '5px solid rgb(0, 105, 192)',
                        borderRadius: '50px'}}>
                        <label htmlFor="nameCompany">
                            <WorkIcon sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '40px',
                                height: '40px',
                                color: 'white',
                                backgroundColor: 'rgb(0, 105, 192)',
                                border: '0 solid rgb(0, 105, 192)',
                                borderRadius: '50px 0 0 50px',
                                padding: '10px'}}/>
                        </label>
                        <input type='text' name='nameCompany' id='nameCompany' placeholder='Name' className='myInput' ref={nameCompany} required />
                    </Grid>
                    <Grid sx={{display: 'flex', width: '80%', minWidth: '280px'}}>
                        <Grid sx={{
                            display: 'flex',
                            width: '50%',
                            minWidth: '140px',
                            backgroundColor: 'rgb(0, 105, 192)',
                            border: '5px solid rgb(0, 105, 192)',
                            borderRadius: '50px',
                            marginTop: '5px'}}>
                            <label htmlFor="detailCompany">
                                <CategoryIcon sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '40px',
                                    height: '40px',
                                    color: 'white',
                                    backgroundColor: 'rgb(0, 105, 192)',
                                    border: '0 solid rgb(0, 105, 192)',
                                    borderRadius: '50px 0 0 50px',
                                    padding: '10px'}}/>
                            </label>
                            <input type='text' name='detailCompany' id='detailCompany' placeholder='Detail' className='myInput' ref={detailCompany} required />
                        </Grid>
                    </Grid>
                    <Grid sx={{
                        display: 'flex',
                        width: '80%',
                        minWidth: '280px',
                        backgroundColor: 'rgb(0, 105, 192)',
                        border: '5px solid rgb(0, 105, 192)',
                        borderRadius: '50px',
                        marginTop: '5px'}}>
                        <label htmlFor="logoCompany">
                            <AddAPhotoIcon sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '40px',
                                height: '40px',
                                color: 'white',
                                backgroundColor: 'rgb(0, 105, 192)',
                                border: '0 solid rgb(0, 105, 192)',
                                borderRadius: '50px 0 0 50px',
                                padding: '10px'}}/>
                        </label>
                        <input type='text' name='logoCompany' id='logoCompany' placeholder='Logo' className='myInput' ref={logoCompany} required />
                    </Grid>
                    <Grid sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '80%',
                        minWidth: '280px',
                        height: '50px',
                        borderRadius: '50px',
                        marginTop: '20px'}}>
                        <input type="submit" value='make it real!' className='myButton' required />
                    </Grid>
                </form>
            </Grid>
        </Grid>
    )

}
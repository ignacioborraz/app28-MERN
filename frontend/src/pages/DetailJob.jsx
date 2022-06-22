import React, {useEffect,useState} from 'react'
import axios from 'axios'
import {useParams,useNavigate} from 'react-router-dom'

import {Box,Typography} from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'

export default function DetailJob() {

    const {id} = useParams()
    const [job,setJob] = useState({}) //va a contener los datos del trabajo a editar
    const [reload,setReload] = useState(false) //va a contener el booleano que recargará la renderización
    const [openEdit,setOpenEdit] = useState(false) //va a contener el booleano que abrirá las opciones de edición
    const [property,setProperty] =  useState("") //va a contener la propiedad a editar
    const [newProperty,setNewProperty] = useState("") //va a contener el valor de la nueva propiedad
    const [companies,setCompanies] = useState([])
    const navigate = useNavigate()

    let apiUrl = 'http://localhost:8000/'

    useEffect( () => {
        axios.get(apiUrl+'apiJobs/job/'+id)
        //.then(res=> console.log(res))
        .then(res => setJob(res.data.response))
    },[reload]) //cada vez que reload cambie, se van a recargar los datos renderizados

    useEffect( () => {
        axios.get(apiUrl+'apiJobs/company')
        //.then(res=> console.log(res))
        .then(res => setCompanies(res.data.response))
    },[reload])

    function toOpenEdit(event) { //funcion que despliega/oculta las opciones de edicion
        setOpenEdit(!openEdit)
    }

    async function toEdit() { //función que edita el objeto
        if (property && newProperty) {
            let editData = {}
            editData[property] = newProperty
            console.log(editData)
            await axios.put(apiUrl+'apiJobs/job/'+id,{...editData})//.then(res=>console.log(res))
            setReload(!reload)
            setOpenEdit(!openEdit)
            setProperty("")
            setNewProperty("")
        }
    }

    async function toDelete() { //función que elimina el objeto
        await axios.delete(apiUrl+'apiJobs/job/'+id)
            .then(navigate("/getJobs",{replace:true}))
    }

    console.log(job.company);

    return (
        <Box sx={{
            flexGrow: '1',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgb(224,224,224)'}}>
            <Box key={job._id} sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '15px',}}>
                <Typography variant='h4' className='responsiveH4' sx={{
                    width: {xs: '300px', sm: '300px', md: '100%'},
                    padding: '10px',
                    backgroundColor: 'rgb(105,24,152)',
                    color: 'rgb(224,224,224)',
                    fontFamily: 'Paytone One',
                    textAlign: 'center'}}>
                    {job.nameJob}</Typography>
                <Box sx={{
                    display: 'flex',
                    flexDirection: {xs: 'column', sm: 'column', md: 'row'},
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'white'}}>
                    <img src={job.photoJob} alt={job.nameJob} className="list" />
                    <Box>
                        <Typography variant='h6' className='responsiveH6' sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '300px',
                            padding: '10px',
                            paddingTop: {xs: '0px', sm: '0px', md: '10px'},
                            backgroundColor: 'white',
                            color: 'rgb(2,0,3)',
                            fontWeight: '800',
                            textAlign: 'center'}}>
                            {job.company?.nameCompany}</Typography>
                        <Typography variant='h6' className='responsiveH6' sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '300px',
                            padding: '10px',
                            paddingTop: {xs: '0px', sm: '0px', md: '10px'},
                            backgroundColor: 'white',
                            color: 'rgb(2,0,3)',
                            textAlign: 'center'}}>
                            {job.detailJob}</Typography>
                            <Typography variant='h6' className='responsiveH6' sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '300px',
                            padding: '10px',
                            paddingTop: {xs: '0px', sm: '0px', md: '10px'},
                            backgroundColor: 'white',
                            color: 'rgb(105,24,152)',
                            fontWeight: '800',
                            textAlign: 'center'}}>
                            USD {job.salaryJob}</Typography>
                    </Box>
                </Box>
                <Box sx={{width: '100%'}}>
                    <Box sx={{display: 'flex', width: '100%'}}>
                        <Typography variant='h6' onClick={toOpenEdit} className='responsiveH6' sx={{
                            width: '50%',
                            padding: '10px',
                            backgroundColor: 'rgba(2,0,3,0.5)',
                            '&:hover': {bgcolor: 'rgb(105,24,152)'},
                            color: 'rgb(224,224,224)',
                            fontFamily: 'Paytone One',
                            textAlign: 'center'}}>
                            edit</Typography>
                        <Typography variant='h6' onClick={toDelete} className='responsiveH6' sx={{
                            width: '50%',
                            padding: '10px',
                            backgroundColor: 'rgb(2,0,3)',
                            '&:hover': {bgcolor: 'rgb(105,24,152)'},
                            color: 'rgb(224,224,224)',
                            fontFamily: 'Paytone One',
                            textAlign: 'center'}}>
                            delete</Typography>
                    </Box>
                    {openEdit ? <Box sx={{
                        width: '100%',
                        padding: '10px',
                        display: 'flex',
                        flexDirection: {xs: 'column', sm: 'column', md: 'row'},
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'white'}}>
                        <select defaultValue="" name="selectedData" onChange={event=> setProperty(event.target.value)} className="selectList selectResponsive" >
                            <option disabled value="">select</option>
                            {Object.keys(job).map((key,value) => ((key!=="__v" && key!=="_id") && <option key={value} value={key}>{key}</option>))}
                        </select>
                        <Box sx={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'}}>
                            {(property==="company") ?
                                <select defaultValue="" name='company' id='company' placeholder='Company' className='inputForm selectList' onChange={e => setNewProperty(e.target.value)} required>
                                    <option disabled value="">select</option>
                                    {companies.map(everyCompany => <option key={everyCompany._id} value={everyCompany._id}>{everyCompany.nameCompany}</option>)}
                                </select> :
                                <input name={property} id={property} type='text' placeholder={job[property]} className='inputForm selectList' onKeyUp={e => setNewProperty(e.target.value)} />}
                            <Box sx={{height: '40px', width: '40px', margin: 0, padding: 0}} onClick={toEdit}>
                                <EditIcon sx={{height: '40px', width: '40px', padding: '5px', backgroundColor: 'rgb(224,224,224)'}}/>
                            </Box>
                        </Box>
                    </Box> : <></>}
                </Box>
            </Box>
        </Box>
    )

}
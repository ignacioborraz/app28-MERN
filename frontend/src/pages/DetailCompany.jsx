import React, {useEffect,useState,useRef} from 'react'
import axios from 'axios'
import {Link as LinkRouter,useParams} from 'react-router-dom'

import {Box,Typography} from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'

export default function DetailCompany() {

    const {id} = useParams()
    const [company,setCompany] = useState([]) //va a contener los datos de la compania a editar
    const [reload,setReload] = useState(false) //va a contener el booleano que recargará la renderización
    const [property,setProperty] =  useState("") //va a contener la propiedad a editar
    const [openEdit,setOpenEdit] = useState(false) //va a contener el booleano que abrirá las opciones de edición
    const [edit,setEdit] = useState(false) //va a contener el booleano que permitirá editar la propiedad
    const newProperty = useRef()

    let apiUrl = 'http://localhost:8000/'

    useEffect( () => {
        axios.get(apiUrl+'apiJobs/company/'+id)
        //.then(res=> console.log(res))
        .then(res => setCompany(res.data.response))
    },[reload]) //cada vez que reload cambie, se van a recargar los datos renderizados

    function toOpenEdit(event) {
        setOpenEdit(!openEdit)
    }

    async function toEdit() {
        let editData = {}
        editData[property] = newProperty.current.value
        console.log(editData)
        axios.put(apiUrl+'apiJobs/company/'+id,{...editData}).then(res=>console.log(res))
        setReload(!reload)
    }

    function toChangeInput(event) {
        setEdit(!edit)
    }

    return (
        <Box sx={{
            flexGrow: '1',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgb(224,224,224)'}}>
            <Box key={company._id} sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '15px',}}>
                <Typography variant='h4' className='responsiveH4' sx={{
                    width: '100%',
                    padding: '10px',
                    backgroundColor: 'rgb(105,24,152)',
                    color: 'rgb(224,224,224)',
                    fontFamily: 'Paytone One',
                    textAlign: 'center'}}>
                    {company.nameCompany}</Typography>
                <Box sx={{
                    display: 'flex',
                    flexDirection: {xs: 'column', sm: 'column', md: 'row'},
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'white'}}>
                    <img src={company.logoCompany} alt={company.nameCompany} className="list" />
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
                        {company.detailCompany}</Typography>
                </Box>
                <Box sx={{width: '100%'}}>
                    <Typography variant='h6' onClick={toOpenEdit} className='responsiveH6' sx={{
                        padding: '10px',
                        backgroundColor: 'rgb(2,0,3)',
                        '&:hover': {bgcolor: 'rgb(105,24,152)'},
                        color: 'rgb(224,224,224)',
                        fontFamily: 'Paytone One',
                        textAlign: 'center'}}>
                        edit</Typography>
                    {openEdit ? <Box sx={{
                        width: '100%',
                        padding: '10px',
                        display: 'flex',
                        flexDirection: {xs: 'column', sm: 'column', md: 'row'},
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'white'}}>
                        <select name="selectedData" onChange={event=> setProperty(event.target.value)} className="selectList">
                            <option>SELECT</option>
                            {Object.keys(company).map((key,value) => ((key!=="__v" && key!=="_id") && <option key={value} value={key}>{key}</option>))}
                        </select>
                        <input name={property} id={property} type='text' placeholder={company[property]} className='inputForm' ref={newProperty} />
                        <div onClick={toEdit}>
                            <EditIcon />
                        </div>
                    </Box> : <></>}
                </Box>
            </Box>
        </Box>
    )

}
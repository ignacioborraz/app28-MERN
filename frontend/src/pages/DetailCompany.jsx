import React, {useEffect,useState} from 'react'
import {useParams,useNavigate} from 'react-router-dom'

import {Box,Typography} from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'

import {useDispatch,useSelector} from 'react-redux'
import companyActions from '../redux/actions/companyActions'

export default function DetailCompany() {

    const {id} = useParams()
    const [reload,setReload] = useState(false) //va a contener el booleano que recargará la renderización
    const [openEdit,setOpenEdit] = useState(false) //va a contener el booleano que abrirá las opciones de edición
    const [property,setProperty] =  useState("") //va a contener la propiedad a editar
    const [newProperty,setNewProperty] = useState("") //va a contener el valor de la nueva propiedad
    const navigate = useNavigate()

    const dispatch = useDispatch() //este metodo sirve para despachar acciones al store

    useEffect( () => {
        dispatch(companyActions.getOneCompany(id))
    },[reload])

    const company = useSelector(store => store.companyReducer.oneCompany) //defino una variable con los datos del store

    function toOpenEdit(event) { //funcion que despliega/oculta las opciones de edicion
        setOpenEdit(!openEdit)
    }

    async function toEdit() { //función que edita el objeto
        if (property && newProperty) {
            let editData = {}
            editData[property] = newProperty
            console.log(editData)
            await dispatch(companyActions.putCompany(id,{...editData}))
            setReload(!reload)
            setOpenEdit(!openEdit)
            setProperty("")
            setNewProperty("")
        }
    }

    async function toDelete() { //función que elimina el objeto
        await dispatch(companyActions.deleteCompany(id))
            .then(navigate("/getCompanies",{replace:true}))
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
                    width: {xs: '300px', sm: '300px', md: '100%'},
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
                            {Object.keys(company).map((key,value) => ((key!=="__v" && key!=="_id") && <option key={value} value={key}>{key}</option>))}
                        </select>
                        <Box sx={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'}}>
                            <input name={property} id={property} type='text' placeholder={company[property]} className='inputForm selectList' onKeyUp={e => setNewProperty(e.target.value)} />
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
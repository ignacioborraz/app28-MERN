import {useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import {Box, Typography} from '@mui/material'

export default function PaginaDetalle() {
    
    const {id} = useParams()
    const [apiData,setApiData] = useState([])
    let apiUrl = 'http://localhost:8000/'
    
    useEffect( () => {
        axios.get(apiUrl+'apiJobs/job/'+id) //hago el llamado a la api (conviene generar un controlador de filtro)
            //.then(response => console.log(response.data.response)) //consoleo para ver como llega la respuesta
            .then(response => setApiData(...response.data.response)) //luego, con la respuesta 
    }, []) //no es necesario un parámetro


    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            flexGrow: 1,
            backgroundColor: 'blueviolet',
            color: 'white'
        }}>
            <Typography variant='h2' sx={{backgroundColor: 'white', color: 'blueviolet', textAlign: 'center'}}>{apiData.nameJob}</Typography>
            <img src={apiData.photoJob} alt={apiData._id} className="cadaJob" />
            <Typography variant='h4' sx={{backgroundColor: 'white', color: 'blueviolet', textAlign: 'center'}}>U$D{apiData.salaryJob}</Typography>
            <Typography variant='h6' sx={{backgroundColor: 'white', color: 'blueviolet', textAlign: 'center'}}>{apiData.detailJob}</Typography>
        </Box>
    )
}


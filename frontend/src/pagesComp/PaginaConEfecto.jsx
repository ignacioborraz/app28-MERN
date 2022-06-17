import {useEffect,useState} from 'react'
import {Link as LinkRouter} from 'react-router-dom'
import axios from 'axios'
import {Box, Typography} from '@mui/material'

export default function PaginaConEfecto() {
    
    const [apiData,setApiData] = useState([])
    const [search,setSearch] = useState("")
    let apiUrl = 'http://localhost:8000/'
    
    useEffect( () => {
        axios.get(apiUrl+'apiJobs/job') //hago el llamado a la api (conviene generar un controlador de filtro)
            //.then(response => console.log(response.data.response) //consoleo para ver como llega la respuesta
            .then(response => //luego, con la respuesta
                setApiData(response.data.response.filter(everyJob => //seteo ApiData con el filtro
                    everyJob.nameJob.toLowerCase().startsWith(search.toLowerCase().trim()) //comparo
                ))
            )
    }, [search]) //search en este caso actua como paramétro para re-renderizar el filtro

    return (
        <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            flexGrow: 1,
            backgroundColor: 'blueviolet',
            color: 'white'
        }}>
            <input type="text" onKeyUp={event => setSearch(event.target.value)} />
        {apiData.map(cadaElemento => (
            <LinkRouter to={`/ourJob/${cadaElemento._id}`} key={cadaElemento._id}>
                <Box  sx={{
                    width: '220px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    paddingBottom: '10px',
                    marginBottom: '10px',
                    marginTop: '10px',
                    backgroundColor: 'white',
                }}>
                    <Typography variant='h6' sx={{color: 'blueviolet', textAlign: 'center'}}>{cadaElemento.nameJob}</Typography>
                    <img src={cadaElemento.photoJob} alt={cadaElemento._id} className="cadaJob" />
                    <Typography variant='h6' sx={{color: 'blueviolet', textAlign: 'center'}}>U$D{cadaElemento.salaryJob}</Typography>
                </Box>
            </LinkRouter>
        ))}
        </Box>
    )
}

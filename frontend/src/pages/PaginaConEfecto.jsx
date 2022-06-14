import {useEffect,useState} from 'react'
import {Link as LinkRouter} from 'react-router-dom'
import axios from 'axios'
import {Box, Typography} from '@mui/material'

export default function PaginaConEfecto() {
    
    const [apiData,setApiData] = useState([])
    const [search,setSearch] = useState("")
    let apiUrl = 'http://mrwines.herokuapp.com/api/wines'    
    
    useEffect( () => {
        axios.get(apiUrl) //hago el llamado a la api
            //.then(response => console.log(response.data.response.wines.filter(everyWine => everyWine.nameWine.toLowerCase().startsWith(search.toLowerCase().trim()))))
            .then(response => 
                setApiData(response.data.response.wines.filter(everyWine =>
                    everyWine.nameWine.toLowerCase().startsWith(search.toLowerCase().trim())
                ))
            )
    }, [search])

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
            <LinkRouter to={`/parametro/deVinos/tintos/${cadaElemento._id}`} key={cadaElemento._id}>
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
                    <Typography variant='h6' sx={{color: 'blueviolet'}}>{cadaElemento.nameWine}</Typography>
                    <img src={cadaElemento.photo} alt={cadaElemento._id} className="cadaVino" />
                </Box>
            </LinkRouter>
        ))}
        </Box>
    )
}

import { Typography } from '@mui/material'
import React from 'react'
import {Link as LinkDeIgna} from 'react-router-dom'

export default function Index() {
    return (
        <div className='body'>
            <h1>ESTA ES LA PAGINA PRINCIPAL</h1>
            <LinkDeIgna to={'/funcional'}>
                <Typography variant='h4' sx={{
                    fontSize: '20px', color: 'white', padding: '10px', backgroundColor: 'blue', '&:hover': {bgcolor: 'rgba(196, 165, 126, 0.7)'}
                }}>ver componentes funcionales</Typography>
            </LinkDeIgna>
            <LinkDeIgna to={'/clase'} className='linksPrincipales'>ver componentes de clase</LinkDeIgna> 
            <LinkDeIgna to={'/conEfecto'} className='linksPrincipales'>ver componente que usa un hook de efecto para consumir una API</LinkDeIgna>
            <LinkDeIgna to={'/cities'} className='linksPrincipales'>LINK HACIA CIUDADES (VACIA)</LinkDeIgna>
        </div>
    )
}

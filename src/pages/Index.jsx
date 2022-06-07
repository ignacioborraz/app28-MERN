import React from 'react'
import {Link as LinkRouter} from 'react-router-dom'

export default function Index() {
    return (
        <div className='body'>
            <h1>ESTA ES LA PAGINA PRINCIPAL</h1>
            <LinkRouter to={'/funcional'} className='linksPrincipales'>ver componentes funcionales</LinkRouter>
            <LinkRouter to={'/deClase'} className='linksPrincipales'>ver componentes de clase</LinkRouter>
            <LinkRouter to={'/conEfecto'} className='linksPrincipales'>ver componente que usa un hook de efecto para consumir una API</LinkRouter>
        </div>
    )
}

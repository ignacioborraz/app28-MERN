import React from 'react'
import {Link as LinkRouter} from 'react-router-dom'
import '../styles/styles.css'

function Cfuncional() {

    let nombreComponente = "componente funcional"

    return (
        <div className='body'>
            <h3>este es un {nombreComponente}</h3>
            <LinkRouter to='/conEfecto'>hacia un componente con datos de la API</LinkRouter>
        </div>
    )
}

export default Cfuncional
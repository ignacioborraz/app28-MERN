import React from 'react'
import {useParams} from 'react-router-dom'

export default function Detalle() {
    
    const {id} = useParams()

    return (
        <div className='body'>
            <h3>ACÁ TENEMOS QUE TRAER TODA LA INFO DE DETALLE</h3>
            <p>DEL PRODUCTO CUYO ID ES: {id}</p>
        </div>
    )
}


import React from 'react'
import '../styles/styles.css'

function CfuncionalConProps(props) {

    let nombreComponente = "componente funcional con props"
    let nombres = props.nombres

    return (
        <div className='body'>
            <h3>este es un {nombreComponente}</h3>
            {nombres.map(cadaNombre=><p>{cadaNombre}</p>)}
        </div>
    )
}

export default CfuncionalConProps
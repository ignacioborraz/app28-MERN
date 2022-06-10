import React from 'react'
import '../styles/styles.css'

// props = {
//     nombres: [...]
// }

function CfuncionalConProps({nombres, apellidos}) {

    let nombreComponente = "componente funcional con props"
    //? let nombres = props.nombres
    //? let { nombres, apellidos } = props;

    return (
        <div className='body'>
            <h3>este es un {nombreComponente}</h3>
            <div>
                {nombres.map((cadaNombre, index) => <p key={index}>{cadaNombre}</p>)}
            </div>
            <div>
                {apellidos.map((cadaNombre, index)=> <p key={index}>{cadaNombre}</p>)}
            </div>
        </div>
    )
}

export default CfuncionalConProps
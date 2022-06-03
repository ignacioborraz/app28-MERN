import React , {useState} from 'react'
import '../styles/styles.css'

function CfuncionalConEstado() {

    let nombreComponente = "componente funcional con estado"
    let parecidoCon = "es una función de JS"
    const [mostrarParecido,setMostrarParecido] = useState(false)

    const mostrar = ()=> {
        setMostrarParecido(!mostrarParecido)
    }

    return (
        <div className='body'>
            <h3>este es un {nombreComponente}</h3>
            <button onClick={mostrar}>{mostrarParecido ? 'ocultar detalles' : 'ver detalles'}</button>
            {mostrarParecido ? <p>{parecidoCon}</p> : <></>}
        </div>
    )
}

export default CfuncionalConEstado
import React , {useState} from 'react'

function CompFuncional() {

    let nombreComponente = "componente funcional"
    let parecidoCon = "es una función de JS"
    const [mostrarParecido,setMostrarParecido] = useState(false)

    const mostrar = ()=> {
        setMostrarParecido(!mostrarParecido)
    }

    return (
        <div>
            <h3>este es un {nombreComponente}</h3>
            <button onClick={mostrar}>{mostrarParecido ? 'ocultar detalles' : 'ver detalles'}</button>
            {mostrarParecido ? <p>{parecidoCon}</p> : <></>}
        </div>
    )
}

export default CompFuncional
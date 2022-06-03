import React, { useState } from 'react'
import '../styles/styles.css'

function CfuncionalConEstado() {
    const [mostrarParecido, setMostrarParecido] = useState(false)
    const [string, setString] = useState('Holis')
    const [object, setObject] = useState({})

    let nombreComponente = "componente funcional con estado"
    let parecidoCon = "es una función de JS"

    console.log(mostrarParecido);
    // function pruebaUseState() {


    //     return [hola, setHola]
    // }

    // const [hola, setHola] = pruebaUseState();
    // console.log(parecidoCon)

    const mostrar = () => {
        setMostrarParecido(!mostrarParecido)
        // setString('Chau chau chau')
        // setObject({
        //     nombre: mostrarParecido
        // })

        // console.log(mostrarParecido);
        // console.log(object)
        // console.log(string)
        // parecidoCon = 'holis';
        // console.log(parecidoCon)
    }

    return (
        <div className='body'>
            <h3>este es un {nombreComponente}</h3>
            <button onClick={mostrar}>{mostrarParecido ? 'ocultar detalles' : 'ver detalles'}</button>
            {mostrarParecido ? <p>{parecidoCon}</p> : <></>}
            {!mostrarParecido && <p>Estoy oculto</p>}
        </div>
    )
}

export default CfuncionalConEstado
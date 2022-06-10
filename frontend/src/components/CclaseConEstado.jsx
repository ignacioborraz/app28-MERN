import React from 'react'
import '../styles/styles.css'

class CclaseConEstado extends React.Component {

    constructor() {
        super()
        this.state = {
            nombreComponente: "componente de clase con estado",
            parecidoCon: "es una clase de JS, que simplemente es una función para crear objetos",
            mostrarParecido: false
        }
    }

    mostrar = ()=> {
        this.setState({
            mostrarParecido: !this.state.mostrarParecido
        })
    }
    
    render() {
        return (
            <div className='body clase'>
                <h3>este es un {this.state.nombreComponente}</h3>
                <button onClick={this.mostrar}>
                    {this.state.mostrarParecido ? 'ocultar detalles' : 'ver detalles'}
                </button>
                {this.state.mostrarParecido ? <p>{this.state.parecidoCon}</p> : <></>}
            </div>

        )
    }
}

export default CclaseConEstado
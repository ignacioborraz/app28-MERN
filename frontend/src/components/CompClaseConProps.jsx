import React from 'react'

class CompClaseConProps extends React.Component {
    constructor() {
        super()
        this.state = {
            nombreComponente: "componente de clase",
            parecidoCon: "una clase de JS, que simplemente es una función para crear objetos",
            mostrarParecido: true
        }
    }
    mostrar() {
        this.mostrarParecido = !this.mostrarParecido
    }
    render() {
        return (
            <div>
                <h3>este es un {this.nombreComponente}</h3>
                <button onClick={this.mostrar()}>{this.mostrarParecido ? 'ver detalles' : 'ocultar detalles'}</button>
                {this.mostrarParecido ? <p>{this.parecidoCon}</p> : <></>}
            </div>

        )
    }
}

export default CompClaseConProps
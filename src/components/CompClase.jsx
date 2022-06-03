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
        this.setState({
            mostrarParecido: !this.state.mostrarParecido
        })
    }
    render() {
        return (
            <div>
                <h3>este es un {this.state.nombreComponente}</h3>
                <button onClick={this.mostrar()}>{this.state.mostrarParecido ? 'ver detalles' : 'ocultar detalles'}</button>
                {this.state.mostrarParecido ? <p>{this.state.parecidoCon}</p> : <></>}
            </div>

        )
    }
}

export default CompClaseConProps
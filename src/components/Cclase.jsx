import React from 'react'
import '../styles/styles.css'

class Cclase extends React.Component {

    constructor() {
        super()
        this.state = {
            nombreComponente: "componente de clase"
        }
    }
    
    render() {
        return (
            <div className='body'>
                <h3>este es un {this.state.nombreComponente}</h3>
            </div>

        )
    }
}

export default Cclase
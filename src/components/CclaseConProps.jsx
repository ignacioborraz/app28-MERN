import React from 'react'
import '../styles/styles.css'

class CclaseConProps extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            nombreComponente: "componente de clase con props",
            nombres: props.nombres
        }
    }
    
    render() {
        return (
            <div className='body clase'>
                <h3>este es un {this.state.nombres}</h3>
                {this.state.nombres.map(cadaNombre=><p>{cadaNombre}</p>)}
            </div>

        )
    }
}

export default CclaseConProps
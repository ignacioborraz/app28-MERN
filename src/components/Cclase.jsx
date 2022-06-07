import React from 'react'
import '../styles/styles.css'

import {Link as LinkRouter} from "react-router-dom"

class Cclase extends React.Component {

    constructor() {
        super()
        this.state = {
            nombreComponente: "componente de clase"
        }
    }
    
    render() {
        return (
            <div className='body clase'>
                <h3>este es un {this.state.nombreComponente}</h3>
                <button href='./Cfuncional'>hacia un componente funcional</button>
            </div>

        )
    }
}

export default Cclase









{/* <LinkRouter to='/funcional'>hacia un componente funcional</LinkRouter> */}
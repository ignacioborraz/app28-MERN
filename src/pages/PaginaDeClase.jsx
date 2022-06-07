import React, {Component} from 'react'

import Cclase from '../components/Cclase'
import CclaseConProps from '../components/CclaseConProps'
import CclaseConEstado from '../components/CclaseConEstado'

export default class PaginaDeClase extends Component {

    constructor(props) {
        super(props)
        this.state = {
            array2: props.array2
        }
    }
    render() {
      return (
        <>
          <Cclase />
          <CclaseConProps nombres={this.state.array2}/>
          <CclaseConEstado />
        </>
      )
    }
    
}

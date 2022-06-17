import React, {Component} from 'react'

import Cclase from '../components/Cclase'
import CclaseConProps from '../components/CclaseConProps'
import CclaseConEstado from '../components/CclaseConEstado'

export default class PaginaDeClase extends Component {

    constructor() {
        super()
        this.state = {
            array2: ['omar','eze','elias','marco']
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

import React from 'react'

import Cfuncional from '../components/Cfuncional'
import CfuncionalConProps from '../components/CfuncionalConProps'
import CfuncionalConEstado from '../components/CfuncionalConEstado'

export default function PaginaFuncional({array1,array3}) {

    return (
        <>
            <Cfuncional />
            <CfuncionalConProps apellidos={array3}  nombres={array1} />
            <CfuncionalConEstado />
        </>
    )
    
}

import './styles/App.css'

import {Route,Routes} from 'react-router-dom'

import Index from './pages/Index'
import PaginaFuncional from './pages/PaginaFuncional'
import PaginaDeClase from './pages/PaginaDeClase'
import PaginaConEfecto from './pages/PaginaConEfecto'
import PaginaDetalle from './pages/PaginaDetalle'
import Error from './pages/PaginaError'

import NavBar from './components/NavBar'
import Footer from './components/Footer'

export default function App() {

    let array1 = ['dolores','luciana','mayra','lau','guada','sofi']
    
    let array3 = ['borraz', 'rodriguez','zaccaro']

    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/index" element={<Index />} />
                <Route path="/home" element={<Index />} />
                <Route path="/funcional" element={<PaginaFuncional array1={array1} array3={array3} />} />
                <Route path="/clase" element={<PaginaDeClase />} />
                <Route path="/conEfecto" element={<PaginaConEfecto />} />
                <Route path="/parametro/deVinos/tintos/:idVinosDeMiAplicacion" element={<PaginaDetalle />} />
                <Route path="/*" element={<Error />} />
            </Routes>
            <Footer />
        </>
    )
}
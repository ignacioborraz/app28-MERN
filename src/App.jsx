import './styles/App.css'

import {Route,Routes} from 'react-router-dom'

import Index from './pages/Index'
import PaginaFuncional from './pages/PaginaFuncional'
import PaginaDeClase from './pages/PaginaDeClase'
import PaginaConEfecto from './pages/PaginaConEfecto'

import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Detalle from './components/Detalle'

export default function App() {

    let array1 = ['dolores','luciana','mayra','lau','guada','sofi']
    let array2 = ['omar','eze','elias','marco']
    let array3 = ['borraz', 'rodriguez','zaccaro']

    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/funcional" element={<PaginaFuncional array1={array1} array3={array3} />} />
                <Route path="/deClase" element={<PaginaDeClase array2={array2} />} />
                <Route path="/conEfecto" element={<PaginaConEfecto />} />
                <Route path="/parametro/:id" element={<Detalle />} />
            </Routes>
            <Footer />
        </>
    )
}


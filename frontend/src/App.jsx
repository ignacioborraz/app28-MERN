import {Route,Routes} from 'react-router-dom'

import Index from './pages/Index'
import VariantPage from './pages/VariantPage'
import CreateCompany from './pages/CreateCompany'
import GetCompanies from './pages/GetCompanies'
import DetailCompany from './pages/DetailCompany'
import EditCompany from './pages/EditCompany'

import NavBar from './components/NavBar'
import Footer from './components/Footer'


export default function App() {

    //let array1 = ['dolores','luciana','mayra','lau','guada','sofi']
    //let array3 = ['borraz', 'rodriguez','zaccaro']

    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/createCompany" element={<CreateCompany />} />
                <Route path="/createdCompany" element={<VariantPage text={"JOB CREATED!"} />} />
                <Route path="/getCompanies" element={<GetCompanies />} />
                <Route path="/detailCompany" element={<DetailCompany />} />
                <Route path="/editCompany" element={<EditCompany />} />
                <Route path="/*" element={<VariantPage text={"NOT FOUND"} />} />
                {/* <Route path="/funcional" element={<PaginaFuncional array1={array1} array3={array3} />} /> */}
                {/* <Route path="/clase" element={<PaginaDeClase />} /> */}
                {/* <Route path="/conEfecto" element={<PaginaConEfecto />} /> */}
                {/* <Route path="/ourJob/:id" element={<PaginaDetalle />} /> */}
            </Routes>
            <Footer />
        </>
    )
}
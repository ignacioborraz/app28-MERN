import {Route,Routes} from 'react-router-dom'

import Index from './pages/Index'
import VariantPage from './pages/VariantPage'
import CreateCompany from './pages/CreateCompany'
import GetCompanies from './pages/GetCompanies'
import DetailCompany from './pages/DetailCompany'
import CreateJob from './pages/CreateJob'
import GetJobs from './pages/GetJobs'
import DetailJob from './pages/DetailJob'

import NavBar from './components/NavBar'
import Footer from './components/Footer'


export default function App() {

    return (
        <div className='index'>
            <NavBar />
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/createCompany" element={<CreateCompany />} />
                <Route path="/createdCompany" element={<VariantPage text={"COMPANY CREATED!"} />} />
                <Route path="/getCompanies" element={<GetCompanies />} />
                <Route path="/detailCompany/:id" element={<DetailCompany />} />
                <Route path="/createJob" element={<CreateJob />} />
                <Route path="/createdJob" element={<VariantPage text={"JOB CREATED!"} />} />
                <Route path="/getJobs" element={<GetJobs />} />
                <Route path="/detailJob/:id" element={<DetailJob />} />
                <Route path="/*" element={<VariantPage text={"NOT FOUND"} />} />
                {/* <Route path="/funcional" element={<PaginaFuncional array1={array1} array3={array3} />} /> */}
                {/* <Route path="/clase" element={<PaginaDeClase />} /> */}
                {/* <Route path="/conEfecto" element={<PaginaConEfecto />} /> */}
                {/* <Route path="/ourJob/:id" element={<PaginaDetalle />} /> */}
            </Routes>
            <Footer />
        </div>
    )
}
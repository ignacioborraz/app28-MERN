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

import './styles/styles.css'

export default function App() {

    let options = {
        company: {
            title: 'Create a new Company!',
            bgImage:'bgCompany',
            data: [
                {id: 'nameCompany', placeholder: 'Name'},
                {id: 'logoCompany', placeholder: 'Logo'},
                {id: 'detailCompany', placeholder: 'Detail'},
            ]
        },
        job: {
            title: 'Create a new Job!',
            bgImage:'bgJob',
            data: [
                {id: 'nameJob', placeholder: 'Name'},
                {id: 'photoJob', placeholder: 'Logo'},
                {id: 'detailJob', placeholder: 'Detail'},
                {id: 'salaryJob', placeholder: 'Salary'},
                {id: 'company', placeholder: 'Company'},
            ]
        }
    }    

    return (
        <div className='index'>
            <NavBar />
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/createCompany" element={<CreateCompany options={options.company}/>} />
                <Route path="/createdCompany" element={<VariantPage text={"COMPANY CREATED!"} back={{to: "getCompanies",text: "show companies"}}/>} />
                <Route path="/getCompanies" element={<GetCompanies />} />
                <Route path="/detailCompany/:id" element={<DetailCompany bgImage="bgDetailCompany" />} />
                <Route path="/createJob" element={<CreateJob options={options.job}/>} />
                <Route path="/createdJob" element={<VariantPage text={"JOB CREATED!"} back={{to: "getJobs",text: "show jobs"}}/>} />
                <Route path="/getJobs" element={<GetJobs />} />
                <Route path="/detailJob/:id" element={<DetailJob bgImage="bgDetailJob" />} />
                <Route path="/*" element={<VariantPage text={"NOT FOUND"}  back={{to: "",text: "back to home"}}/>} />
                {/* <Route path="/funcional" element={<PaginaFuncional array1={array1} array3={array3} />} /> */}
                {/* <Route path="/clase" element={<PaginaDeClase />} /> */}
                {/* <Route path="/conEfecto" element={<PaginaConEfecto />} /> */}
                {/* <Route path="/ourJob/:id" element={<PaginaDetalle />} /> */}
            </Routes>
            <Footer />
        </div>
    )
}
import {useEffect} from 'react'
import {Route,Routes} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'

import Index from './pages/Index'
import VariantPage from './pages/VariantPage'
import CreateCompany from './pages/CreateCompany'
import GetCompanies from './pages/GetCompanies'
import DetailCompany from './pages/DetailCompany'
import CreateJob from './pages/CreateJob'
import GetJobs from './pages/GetJobs'
import DetailJob from './pages/DetailJob'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'

import NavBar from './components/NavBar'
import Footer from './components/Footer'
import MySnackBar from './components/MySnackBar'

import options from './media/options'

import './styles/styles.css'

import userActions from './redux/actions/userActions'

export default function App() {

    const user = useSelector(store => store.userReducer.user)
    console.log(user)
    const dispatch = useDispatch()

    useEffect(() => {
        if(localStorage.getItem('token')!== null) {
            const token = localStorage.getItem("token")
            //console.log(token)
            dispatch(userActions.verifyToken(token))
        }
    },[])

    return (
        <div className='index'>
            <NavBar />
            <Routes>
                <Route path="/" element={<Index />} />
                {user && <>
                    {user.user.role==='admin' ? <>
                        <Route path="/createCompany" element={<CreateCompany options={options.company}/>} />
                        <Route path="/createdCompany" element={<VariantPage text={"COMPANY CREATED!"} back={{to: "getCompanies",text: "show companies"}}/>} />
                    </> : user.user.role==='owner' ? <>
                        <Route path="/createJob" element={<CreateJob options={options.job}/>} />
                        <Route path="/createdJob" element={<VariantPage text={"JOB CREATED!"} back={{to: "getJobs",text: "show jobs"}}/>} />
                    </> : <></>}
                </>}
                <Route path="/getCompanies" element={<GetCompanies />} />
                <Route path="/detailCompany/:id" element={<DetailCompany bgImage="bgDetailCompany" />} />
                <Route path="/getJobs" element={<GetJobs />} />
                <Route path="/detailJob/:id" element={<DetailJob bgImage="bgDetailJob" />} />
                <Route path="/signUp" element={<SignUp options={options.signUp}/>} />
                <Route path="/createdUser" element={<VariantPage text={"USER CREATED!"} back={{to: "signIn",text: "please SIGN IN!"}}/>} />
                <Route path="/signIn" element={<SignIn options={options.signIn}/>} />
                <Route path="/signInUser" element={<VariantPage text={"WELCOME!"} back={{to: "",text: "back to home"}}/>} />
                <Route path="/*" element={<VariantPage text={"NOT FOUND"}  back={{to: "",text: "back to home"}}/>} />
            </Routes>
            <MySnackBar />
            <Footer />
        </div>
    )
}
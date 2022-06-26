import axios from 'axios'
import apiUrl from '../../url'


const companyActions = {

    createCompany: (nameCompany,logoCompany,detailCompany) => {
        return async(dispatch,getState) => {
            try {
                await axios.post(apiUrl+'apiJobs/company',{nameCompany,logoCompany,detailCompany})    
            } catch(error) {
                console.log(error)
            }            
        }
    },

    getCompanies: () => {
        return async(dispatch, getState) => {
            try {
                const res = await axios.get(apiUrl+`apiJobs/company`)
                dispatch({type:'GET_COMPANIES', payload:res.data.response})
            } catch(error) {
                console.log(error)
            }
        }
    },

    getOneCompany: (id) => {
        return async(dispatch, getState) => {
            try {
                const res = await axios.get(apiUrl+`apiJobs/company/${id}`)
                dispatch({type:'GET_ONE_COMPANY', payload:res.data.response})
            } catch(error) {
                console.log(error)
            }
        }
    },

    putCompany: (id,data) => {
        return async(dispatch, getState) => {
            try {
                await axios.put(apiUrl+`apiJobs/company/${id}`,data)
            } catch(error) {
                console.log(error)
            }
        }
    },

    deleteCompany: (id) => {
        return async(dispatch, getState) => {
            try {
                await axios.delete(apiUrl+`apiJobs/company/${id}`)
            } catch(error) {
                console.log(error)
            }
        }
    }

/*
    filterCities: (input) => {
        return (dispatch,getState)=>{
            dispatch({type:'FIL_CITIES', payload:input})
        }
    }
*/
}

export default companyActions
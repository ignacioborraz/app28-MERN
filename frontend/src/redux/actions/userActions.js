import axios from 'axios'
import apiUrl from '../../url'

const userActions = {

    signUp: (data) => {
        return async(dispatch,getState) => {
            try {
                const res = await axios.post(apiUrl+'apiJobs/auth/signUp',data)
                //console.log(res)
                dispatch({type: 'MESSAGE',
                    payload: {
                        view: true,
                        message: res.data.message,
                        success: res.data.success
                    }
                })
                return res
            } catch(error) {
                console.log(error)
            }
        }
    },

    signIn: (data) => {
        console.log(data)
        return async(dispatch, getState) => {
            try {
                const res = await axios.post(apiUrl+'apiJobs/auth/signIn',data)
                //console.log(res)
                if (res.data.success) {
                    dispatch({type: 'USER', payload: res.data.response})
                } else {
                    dispatch({type: 'MESSAGE',
                        payload: {
                            view: true,
                            message: res.data.message,
                            success: res.data.success
                        }
                    })
                }
                return res
            } catch(error) {
                console.log(error)
            }
        }
    }

}

export default userActions
import {useEffect} from 'react'
import jwt_decode from 'jwt-decode'
import {useDispatch} from 'react-redux'
import {IconButton} from '@mui/material'
import GoogleIcon from '@mui/icons-material/Google'
import userActions from '../redux/actions/userActions'

export default function GoogleSignIn() {
    
    const dispatch = useDispatch()

    async function handleCallbackResponse(response) {
        //console.log(response.credential)
        let userObject = jwt_decode(response.credential)
        //console.log(userObject)
        dispatch(userActions.signIn({
            nameUser: userObject.given_name,
            lastNameUser: userObject.family_name, 
            photoUser: userObject.picture, 
            mail: userObject.email, 
            password: userObject.jti, 
            role: 'user', 
            from: 'google'
        }))
    }

    useEffect(() => {
        /* global google */
        google.accounts.id.initialize({
            client_id: '802279233493-ovinlm8d08qmg3o5jfo2tr3p03v2n4q5.apps.googleusercontent.com',
            callback: handleCallbackResponse
        });

        google.accounts.id.renderButton(
            document.getElementById('buttonDiv'),
            { theme: "outline", size: "medium" }
        )
    })

    return (
        <div>
            <div id='buttonDiv'>
{/*                 <IconButton sx={{bgcolor: 'rgb(165, 126, 196)', color: 'white', height: '40px', '&:hover': {bgcolor: 'rgba(0, 0, 0, 0.5)'}}}>
                    <GoogleIcon />
                </IconButton> */}
            </div>
        </div>
    )
}


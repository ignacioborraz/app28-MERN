import React from 'react';
import GoogleLogin from 'react-google-login';
// or
// import { GoogleLogin } from 'react-google-login';


const responseGoogle = (response) => {
    console.log(response);
}

export default function GoogleSignUp() {

    return (
        <GoogleLogin
            clientId="802279233493-ovinlm8d08qmg3o5jfo2tr3p03v2n4q5.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
        />
    );
}



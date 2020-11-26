import React from 'react'
import './Login.css'
import firebase from 'firebase';
import {auth, provider} from '../fire';
import {Button} from '@material-ui/core';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';

function Login() {

    const [state, dispatch] = useStateValue()

    const signIn = () => {
        auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);
        auth
            .signInWithPopup(provider)
            .then((result) => {
                console.log(result.user.displayName)
                localStorage.setItem('isSignedIn',true)
            })
            .catch((error) => {
                console.log(error.message);
            })
    }

    return (
        <div className='login'>
            <h1>Login page</h1>
            <Button onClick={signIn}>Sign in with Google</Button>
        </div>
    )
}

export default Login

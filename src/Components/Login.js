import React from 'react'
import './Login.css'
import {auth, provider} from '../fire';
import {Button} from '@material-ui/core';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';

function Login() {

    const [state, dispatch] = useStateValue()

    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .then((result) => {
                console.log(result);
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })
            })
            .catch((error) => {
                console.log(error.message);
            })
    }

    const signOut = () => {
        auth
            .signOut()
            .then((result) => {
                console.log(result);
                dispatch({
                    type: actionTypes.SET_USER,
                    user: null,
                })
            })
            .catch((error) => {
                console.log(error.message);
            })
    }

    return (
        <div claasName='login'>
            <h1>LOGIN page</h1>
            <Button onClick={signIn}>Sign in with Google</Button>
            <Button onClick={signOut}>Sign out</Button>
        </div>
    )
}

export default Login

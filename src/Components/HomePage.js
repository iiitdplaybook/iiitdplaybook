import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import fire from './../fire';
import {auth, provider} from './../fire';
import {Button} from '@material-ui/core';

function HomePage() {

    const[user, setUser] = useState(null);

    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .then((result) => {
                console.log(result);
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
            })
            .catch((error) => {
                console.log(error.message);
            })
    }

    return (
        <div>
            {/* <p>Hello Pabi Kun</p> */}
            <Router>
                {!user ?  (
                    <div className='signIn'>
                        <h1>LOGIN page</h1>
                        <Button onClick={signIn}>Sign in with Google</Button>
                        <Button onClick={signOut}>Sign out</Button>
                    </div>
                ) : (
                    <p>Hello Pabi Kun</p>
                )} 
            </Router>
        </div>

    )
}

export default HomePage

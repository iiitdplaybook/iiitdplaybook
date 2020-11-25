import React from 'react'
import './Navbar.css'
import {auth} from '../fire';
import {Button} from '@material-ui/core';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';
import {Link} from 'react-router-dom'

function Navbar() {

    const [state, dispatch] = useStateValue()

    const signOut = () => {
        auth
            .signOut()
            .then((result) => {
                console.log(result);
                dispatch({
                    type: actionTypes.SET_USER,
                    user: null,
                    isSignedIn: false,
                    userName: "null",
                })
            })
            .catch((error) => {
                console.log(error.message);
            })
    }

    return (
        <div className='navbar'>
            {/* <Button onClick={signOut}>Sign out</Button> */}
            <div className='navbar__left'>
                <h3>Student Playbook</h3>
            </div>
            <div className='navbar__right'>
                <Link to="/friends">
                    <Button>Supplies</Button>
                </Link>
                <Button>Tools</Button>
                <h4>UserName</h4>
            </div>
        </div>
    )
}

export default Navbar

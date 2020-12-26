import firebase from 'firebase';
import firestore from 'firebase/firestore';
import fire from '../../fire.js';
import React from 'react';
import Navbar from "../Navbar";


export default function TestimoniesForm(){
    return(
        <div>
            <Navbar loggedIn={true} colorStatus={true}/>
            <form>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                />
                <input
                    type="text"
                    name="testimonies"
                    placeholder="testimonies"
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
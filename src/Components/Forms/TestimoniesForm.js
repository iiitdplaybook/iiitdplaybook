import firebase from 'firebase';
import React from 'react';
import Navbar from "../Navbar";

const state = {
    "UserAvatar": "https://www.gstatic.com/stadia/gamers/avatars/xxhdpi/avatar_53.png",
    "Name":"Rahul Singh",
    "Text":"",
    "isApproved":false
};


export default function TestimoniesForm(){

    function updateTestimonies(event){
        state.Testimonies = event.target.value
        console.log(`updated testies ${state.Testimonies}`)
    }
    function submitForm(event){
        event.preventDefault();
        const db = firebase.firestore();
        console.log("Sending to Firebase");
        db.collection("Testimonies").add(state);
    }


    
    return(
        <div>
            <Navbar loggedIn={true} colorStatus={true}/>
            <form onSubmit={submitForm}>
                <input
                    type="text"
                    name="testimonies"
                    placeholder="testimonies"
                    // onChange={updateTestimonies}
                />
                <button
                type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
}
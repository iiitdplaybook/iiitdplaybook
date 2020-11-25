import './App.css';
import React, {useEffect, useState} from 'react'
import Navbar from './Components/Navbar';
import HomePage from './Components/HomePage';
import Footer from './Components/Footer';
import TalkingToFriendsSeniors from './Components/TalkingToFriendsSeniors'
import Login from './Components/Login';
import firebase from 'firebase';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function App() {

  // const [state,dispatch] = useStateValue()
  const [currentUser, setUser] = useState()

  // useEffect(() => {
   
  //   })
  
  firebase.auth().onAuthStateChanged(function(user) {
    setUser(user)
    console.log('kjsjk' + currentUser?.displayName)
  })

  return (
    <div className="app">
      {/* <img src="login_bg.jpeg" alt='Random Image'/> */}
      <Router>
        {/* {!currentUser? 
          (
            <Login/>
            ) : ( */}
            <div>
              <Navbar/>
              <Switch>
                <Route path='/friends'>
                  <TalkingToFriendsSeniors/>
                </Route>
                <Route path='/'>
                  <div className='app__body'>
                    <HomePage/>
                  </div>
                </Route>
              </Switch>
              <Footer/>
            </div>
        {/* )}  */}
      </Router>
    </div>
  );
}

export default App;

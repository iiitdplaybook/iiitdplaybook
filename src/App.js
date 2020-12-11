/** @format */

import "./App.css";
import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import HomePage from "./Components/HomePage";
import Footer from "./Components/Footer";
import Testimonials from "./Components/Testimonials";
import TalkingToFriendsSeniors from "./Components/TalkingToFriendsSeniors";
import Supplies from "./Components/Supplies/Supplies";
import Login from "./Components/Login";
import firebase from "firebase";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import Explore from "./Components/Explore";

import TimeManagement from "./Components/TimeManagement/TimeManagement";
import Tools from "./Components/Tools/Tools";
// import Nostalgia from "./Components/Nostalgia";
import Cards from './Components/ExploreCards/ExploreCards';

import Nostalgia from "./Components/Nostalgia";
// import Supplies from "./Components/Supplies/Supplies";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
          isSignedIn: true,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
          isSignedIn: false,
        });
      }
    });
  }, []);

  return (
    <div className="app">
      {/* <img src="login_bg.jpeg" alt='Random Image'/> */}
      <Router>
        {!localStorage.getItem("isSignedIn") ? (
          <Login />
        ) : (
          <div>
            <Navbar />
            <Switch>
              <Route path="/explore" component={Explore} />
              <Route path="/supplies" component={Supplies} />
              <Route path="/nostalgia" component={Nostalgia} />
              <Route path="/friends" component={TalkingToFriendsSeniors} />
              {/* <Route path="/test_cards" component={Cards} /> */}
              <Route path="/test" component={Testimonials} />
              <Route path="/timemanagement" component={TimeManagement}/>
              <Route path="/tools" component={Tools}/>
              <Route path="/">
                <div className="app__body">
                  <HomePage />
                </div>
              </Route>
            </Switch>
            <Footer />
          </div>
        )}
      </Router>
    </div>
  );
}

export default App;

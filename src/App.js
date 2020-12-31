/** @format */

import "./App.css";
import React, { useEffect, useState } from "react";
// import Navbar from "./Components/Navbar";
import HomePage from "./Components/HomePage";
import TestimoniesForm from "./Components/Forms/TestimoniesForm";
import Footer from "./Components/Footer";
import Testimonials from "./Components/Testimonials";
import TalkingToFriendsSeniors from "./Components/TalkingToFriendsSeniors";
import Supplies from "./Components/Supplies/Supplies";
import Login from "./Components/Login";
import firebase from "firebase";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import Explore from "./Components/Explore";
import ComingSoonTools from "./Components/ComingSoon/ComingSoonTools";
// import ComingSoonSupplies from "./Components/ComingSoon/ComingSoonSupplies";
import TimeManagement from "./Components/TimeManagement/TimeManagement";
import Tools from "./Components/Tools/Tools";
// import Nostalgia from "./Components/Nostalgia";
// import Cards from './Components/ExploreCards/ExploreCards';
import Resources from "./Components/CollegeResources/resources";
import Nostalgia from "./Components/Nostalgia";
import LoadingScreen from "./Components/loading";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
// import Supplies from "./Components/Supplies/Supplies";
import {isMobile} from 'react-device-detect';
import ScrollToTop from './Components/ScrollToTop'

function App() {
  const [{}, dispatch] = useStateValue();
  const [loading, setLoading] = useState(true)
    
  useEffect(() => {
    setTimeout(() => setLoading(false), 4000)
  }, [])

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
          isSignedIn: true,
          userName: authUser.displayName,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
          isSignedIn: false,
          userName: "",
        });
      }
    });
  }, []);

  const themeMain = createMuiTheme({
    palette: {
      primary: {
        main: '#fff',
      },
    },
  });

  function ifisMobile(){
    if(isMobile) {
      console.log(`isMobile: ${isMobile}`)
      return(
      <div className='popup'>
        <p>Hello bish, you using phone so get the fuck off. Use laptop</p>
      </div>
    )}
    else return null
  }
  // React.useEffect(()=>{
  //   ifisMobile
  // })

  return (
    <>
    <ThemeProvider theme={themeMain}>
    {loading === false ? (
    <div className="app">
      {/* <img src="login_bg.jpeg" alt='Random Image'/> */}
      {/* {console.log(`isMobile: ${isMobile}`)} */}
      {ifisMobile()}
      <div class="popup">
        <div class="modal_content">
          <span class="close">&times;</span>
          <p>I'm A Pop Up!!!</p>
        </div>
      </div>
      {/* {isMobile?<div></div>} */}
      <Router>
        <ScrollToTop/>
        {!localStorage.getItem("isSignedIn") ? (
          <Switch>
            <Route path="/supplies">
              {/* <Navbar loggedIn={false}/> */}
              <Supplies/>
              <Footer />
            </Route>
            <Route path="/nostalgia">
              {/* <Navbar loggedIn={false} colorStatus={false}/> */}
              <Nostalgia/>
              <Footer />
            </Route>
            <Route path="/" component={Login} />
          </Switch>
        ) : (
          <div>
            {/* <Navbar loggedIn={true}/> */}
            <Switch>
              <Route path="/explore" component={Explore} />
              <Route path="/supplies" component={Supplies} />
              <Route path="/nostalgia" component={Nostalgia} />
              <Route path="/friends" component={TalkingToFriendsSeniors} />
              <Route path="/test" component={Testimonials} />
              <Route path="/timemanagement" component={TimeManagement}/>
              <Route path="/tools" component={Tools}/>
              <Route path="/ComingSoonTools" component={ComingSoonTools}/>
              <Route path="/resources" component={Resources}/>
              <Route path="/contribute/testimonies" component={TestimoniesForm} />
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
    ) : (
      <LoadingScreen />
    )}
    </ThemeProvider>
    </>
  );
}

export default App;

/** @format */

import "./App.css";
import React, { useEffect, useState } from "react";
// import Navbar from "./Components/Navbar";
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
import ComingSoonTools from "./Components/ComingSoon/ComingSoonTools";
// import ComingSoonSupplies from "./Components/ComingSoon/ComingSoonSupplies";
import TimeManagement from "./Components/TimeManagement/TimeManagement";
import Tools from "./Components/Tools/Tools";
// import Nostalgia from "./Components/Nostalgia";
// import Cards from './Components/ExploreCards/ExploreCards';

import Nostalgia from "./Components/Nostalgia";
import LoadingScreen from "./Components/loading";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
// import Supplies from "./Components/Supplies/Supplies";

function App() {
  const [{}, dispatch] = useStateValue();
  const [loading, setLoading] = useState(true)
    
  useEffect(() => {
    setTimeout(() => setLoading(false), 6000)
  }, [])

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

  const themeMain = createMuiTheme({
    palette: {
      primary: {
        main: '#fff',
      },
    },
  });

  return (
    <>
    <ThemeProvider theme={themeMain}>
    {loading === false ? (
    <div className="app">
      {/* <img src="login_bg.jpeg" alt='Random Image'/> */}
      <Router>
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

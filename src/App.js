/** @format */

import "./App.css";
import React, { useEffect, useState } from "react";
import HomePage from "./Components/HomePage";
import TestimoniesForm from "./Components/Forms/TestimoniesForm";
import Footer from "./Components/Footer/Footer";
import Testimonials from "./Components/Testimonies/Testimonials";
import TalkingToFriendsSeniors from "./Components/TalkingToFriendsSeniors";
import Supplies from "./Components/Supplies/Supplies";
import Login from "./Components/Login/Login";
import firebase from "firebase";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import Explore from "./Components/Explore/Explore";
import ComingSoonTools from "./Components/ComingSoon/ComingSoonTools";
import TimeManagement from "./Components/TimeManagement/TimeManagement";
import Tools from "./Components/Tools/Tools";
import Resources from "./Components/CollegeResources/resources";
import Nostalgia from "./Components/Nostalgia";
import LoadingScreen from "./Components/loading";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { isMobile } from "react-device-detect";
import ScrollToTop from "./Components/ScrollToTop";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [{}, dispatch] = useStateValue();
  const [loading, setLoading] = useState(true);

  toast.configure();
  const notify = () =>
    toast.info("Sign in with IIITD mail to access", {
      draggablePercent: 30,
    });

  function showError() {
    toast.error("Sign in with IIITD mail to access");
  }

  useEffect(() => {
    setTimeout(() => setLoading(false), 4000);
  }, []);

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
        main: "#fff",
      },
    },
  });

  function ifisMobile() {
    if (isMobile) {
      return (
        <div className="popup">
          <p>Hello, you are using phone so get off. Use laptop</p>
        </div>
      );
    } else return null;
  }

  return (
    <>
      <ThemeProvider theme={themeMain}>
        {loading === false ? (
          <div className="app">
            {ifisMobile()}
            <div className="popup">
              <div className="modal_content">
                <span className="close">&times;</span>
                <p>I'm A Pop Up!!!</p>
              </div>
            </div>
            <Router>
              <ScrollToTop />
              {!localStorage.getItem("isSignedIn") ? (
                <div>
                  <Switch>
                    {/* <Route path="/supplies" component={Supplies} /> */}
                    <Route path="/supplies">
                      <Supplies />
                      <Footer />
                    </Route>
                    <Route path="/nostalgia">
                      <Nostalgia />
                      <Footer />
                    </Route>
                    <Route path="/explore">
                      <Explore />
                      <Footer />
                    </Route>
                    <Route path="/contribute/testimonies">
                      <TestimoniesForm />
                      <Footer />
                    </Route>
                    <Route path="/homepage">
                      <div className="app__body">
                        <HomePage />
                        <Footer />
                      </div>
                    </Route>
                    <Route path="/">
                      <Login />
                    </Route>
                  </Switch>
                </div>
              ) : (
                <div>
                  <Switch>
                    <Route path="/explore" component={Explore} />
                    <Route path="/supplies" component={Supplies} />
                    <Route path="/nostalgia" component={Nostalgia} />
                    <Route
                      path="/friends"
                      component={TalkingToFriendsSeniors}
                    />
                    <Route path="/test" component={Testimonials} />
                    <Route path="/timemanagement" component={TimeManagement} />
                    <Route path="/tools" component={Tools} />
                    <Route
                      path="/ComingSoonTools"
                      component={ComingSoonTools}
                    />
                    <Route path="/resources" component={Resources} />
                    <Route
                      path="/contribute/testimonies"
                      component={TestimoniesForm}
                    />
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

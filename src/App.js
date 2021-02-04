/** @format */

import './App.css';
import React, { Suspense, useEffect, useState } from 'react';
import HomePage from './Components/HomePage';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login';

import firebase from 'firebase';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useStateValue } from './StateProvider';

import LoadingScreen from './Components/loading';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { isMobile } from 'react-device-detect';
import ScrollToTop from './Components/ScrollToTop';
import Spinner from './Components/loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [{}, dispatch] = useStateValue();
  const [loading, setLoading] = useState(true);

  const TestimoniesForm = React.lazy(() =>
    import('./Components/Forms/TestimoniesForm')
  );
  const Testimonials = React.lazy(() =>
    import('./Components/Testimonies/Testimonials')
  );
  const TalkingToFriendsSeniors = React.lazy(() =>
    import('./Components/TalkingToFriendsSeniors')
  );
  const Supplies = React.lazy(() => import('./Components/Supplies/Supplies'));
  const Explore = React.lazy(() => import('./Components/Explore/Explore'));
  const ComingSoonTools = React.lazy(() =>
    import('./Components/ComingSoon/ComingSoonTools')
  );
  const TimeManagement = React.lazy(() =>
    import('./Components/TimeManagement/TimeManagement')
  );
  const Tools = React.lazy(() =>
    import('./Components/CollegeResources/resources')
  );
  const Resources = React.lazy(() =>
    import('./Components/CollegeResources/resources')
  );
  const Nostalgia = React.lazy(() => import('./Components/Nostalgia'));

  toast.configure();
  const notify = () =>
    toast.info('Sign in with IIITD mail to access', {
      draggablePercent: 30,
    });

  function showError() {
    toast.error('Sign in with IIITD mail to access');
  }

  useEffect(() => {
    setTimeout(() => setLoading(false), 4000);
  }, []);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser,
          isSignedIn: true,
          userName: authUser.displayName,
        });
      } else {
        dispatch({
          type: 'SET_USER',
          user: null,
          isSignedIn: false,
          userName: '',
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
              {!localStorage.getItem('isSignedIn') ? (
                <div>
                  <Switch>
                    {/* <Route path="/supplies" component={Supplies} /> */}
                    <Route path="/supplies">
                      <Suspense fallback={<Spinner />}>
                        <Supplies />
                        <Footer />
                      </Suspense>
                    </Route>
                    <Route path="/nostalgia">
                      <Suspense fallback={<Spinner />}>
                        <Nostalgia />
                        <Footer />
                      </Suspense>
                    </Route>
                    <Route path="/explore">
                      <Suspense fallback={<Spinner />}>
                        <Explore />
                        <Footer />
                      </Suspense>
                    </Route>
                    <Route path="/contribute/testimonies">
                      <Suspense fallback={<Spinner />}>
                        <TestimoniesForm />
                        <Footer />
                      </Suspense>
                    </Route>
                    <Route path="/homepage">
                      <Suspense fallback={<Spinner />}>
                        <div className="app__body">
                          <HomePage />
                          <Footer />
                        </div>
                      </Suspense>
                    </Route>
                    <Route path="/">
                      <Suspense fallback={<Spinner />}>
                        <Login />
                      </Suspense>
                    </Route>
                  </Switch>
                </div>
              ) : (
                <div>
                  <Switch>
                    <Route path="/explore">
                      <Suspense fallback={<Spinner />}>
                        <Explore />
                      </Suspense>
                    </Route>
                    <Route path="/supplies">
                      <Suspense fallback={<Spinner />}>
                        <Supplies />
                      </Suspense>
                    </Route>
                    <Route path="/nostalgia">
                      <Suspense fallback={<Spinner />}>
                        <Nostalgia />
                      </Suspense>
                    </Route>
                    <Route path="/friends">
                      <Suspense fallback={<Spinner />}>
                        <TalkingToFriendsSeniors />
                      </Suspense>
                    </Route>
                    <Route path="/test">
                      <Suspense fallback={<Spinner />}>
                        <Testimonials />
                      </Suspense>
                    </Route>
                    <Route path="/timemanagement">
                      <Suspense fallback={<Spinner />}>
                        <TimeManagement />
                      </Suspense>
                    </Route>
                    <Route path="/tools">
                      <Suspense fallback={<Spinner />}>
                        <Tools />
                      </Suspense>
                    </Route>
                    <Route path="/ComingSoonTools">
                      <Suspense fallback={<Spinner />}>
                        <ComingSoonTools />
                      </Suspense>
                    </Route>
                    <Route path="/resources">
                      <Suspense fallback={<Spinner />}>
                        <Resources />
                      </Suspense>
                    </Route>
                    <Route path="/contribute/testimonies">
                      <Suspense fallback={<Spinner />}>
                        <TestimoniesForm />
                      </Suspense>
                    </Route>
                    <Route path="/">
                      <Suspense fallback={<Spinner />}>
                        <div className="app__body">
                          <HomePage />
                        </div>
                      </Suspense>
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

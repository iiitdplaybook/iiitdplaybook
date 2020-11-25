import './App.css';
import Navbar from './Components/Navbar';
import HomePage from './Components/HomePage';
import Footer from './Components/Footer';
<<<<<<< Updated upstream
=======
import Testimonials from './Components/Testimonials';
import TalkingToFriendsSeniors from './Components/TalkingToFriendsSeniors'
import Login from './Components/Login';
import firebase from 'firebase';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';
>>>>>>> Stashed changes


function App() {
  return (
<<<<<<< Updated upstream
    <div className="App">
      <Navbar/>
      <HomePage/>
      <Footer/>
=======
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
                <Route path='/test'>
                  <Testimonials/>
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
>>>>>>> Stashed changes
    </div>
  );
}

export default App;

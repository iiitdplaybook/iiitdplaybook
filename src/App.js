import './App.css';
import React from 'react'
import Navbar from './Components/Navbar';
import HomePage from './Components/HomePage';
import Footer from './Components/Footer';
import Login from './Components/Login';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { useStateValue } from './StateProvider';

function App() {

  const [{user}, dispatch] = useStateValue()

  return (
    <div className="app">
      <Router>
        {!user? 
          (
            <Login/>
            ) : (
            <div>
              <Navbar/>
              <Switch>
                <Route path='/'>
                  <div className='app__body'>
                    <HomePage/>
                  </div>
                </Route>
              </Switch>
              <Footer/>
            </div>
        )} 
      </Router>
    </div>
  );
}

export default App;

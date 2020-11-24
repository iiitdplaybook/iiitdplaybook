import './App.css';
import {useState} from 'react'
import Navbar from './Components/Navbar';
import HomePage from './Components/HomePage';
import Footer from './Components/Footer';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {auth, provider} from './fire';
import {Button} from '@material-ui/core';


function App() {

  const[user, setUser] = useState(null);

    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .then((result) => {
                console.log(result);
                console.log(result.additionalUserInfo.profile.name)
                setUser(result.additionalUserInfo.profile.name)
            })
            .catch((error) => {
                console.log(error.message);
            })
    }

    const signOut = () => {
        auth
            .signOut()
            .then((result) => {
                console.log(result);
                setUser(null)
            })
            .catch((error) => {
                console.log(error.message);
            })
    }

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/'>
            {!user? 
              (
                <div className='signIn'>
                    <h1>LOGIN page</h1>
                    <Button onClick={signIn}>Sign in with Google</Button>
                    <Button onClick={signOut}>Sign out</Button>
                </div>
                ) : (
                <div>
                  <Navbar/>
                  <HomePage userName={user}/>
                  <Footer/>
                </div>
              )} 
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

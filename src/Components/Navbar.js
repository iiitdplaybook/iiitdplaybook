/** @format */

import React from "react";
import "./Navbar.css";
import { auth } from "../fire";
import { Avatar, Button } from "@material-ui/core";
import { useStateValue } from "../StateProvider";
import { Link } from "react-router-dom";
import logoWhite from "../Assets/SVG/Asset1.svg";
import logoColored from "../Assets/SVG/Asset2.svg";
import exploreLogo from "../Assets/explore_logo.svg";
import Supplies from "./Supplies/Supplies";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
// Icons
import ExploreIcon from '@material-ui/icons/GridOn';
import SuppliesIcon from '@material-ui/icons/LocalGroceryStore';
import ToolsIcon from '@material-ui/icons/Build';
import FiberNewIcon from '@material-ui/icons/FiberNew';


import playbook_logo from '../Assets/playbook_logo_black.svg';
import { white, black } from "@material-ui/core/colors";
// import playbook_logo from '../Assets/playbook_logo_blue.svg';

//fonts

function Navbar({loggedIn, colorStatus}) {
  const [{ user }] = useStateValue();

  const signOut = () => {
    auth
      .signOut()
      .then((result) => {
        console.log(result);
        localStorage.removeItem("isSignedIn");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  
  const themeWhite = createMuiTheme({
    palette: {
      primary: {
        main: '#fff',
      },
    },
  });

  const themeBlack = createMuiTheme({
    palette: {
      primary: {
        main: '#141414',
      },
    },
  });

  return (
    <div className="navbar">
      <div className="navbar__left">
      <Link to="/" style={{ textDecoration: "none" }}>
      {colorStatus? (<img id="logo" src={logoColored} alt="Student Playbook"/>) : (<img id="logo" src={logoWhite} alt="Student Playbook"/>)}
        </Link>
      </div>
      <div className="navbar__right">
      
      <ThemeProvider theme={colorStatus? (themeBlack) : (themeWhite)}>
        <Button  id='btn'  
          component={Link} 
          color='primary'
          to={"/explore"}
          // startIcon={<ExploreIcon style={{ padding: "10%" }}/>}
          >
          Explore
        </Button>
        <Button  id='btn' 
          component={Link} 
          color='primary'
          to={"/ComingSoonTools"}
          // startIcon={<ToolsIcon style={{ padding: "10%" }}/>}
          >
          Tools
        </Button>
        <Button  id='btn' 
          component={Link} 
          color='primary'
          to={"/contribute/testimonies"}>
          Contribute
        </Button>
        <Button  id='btn' 
          component={Link} 
          color='primary'
          to={"/supplies"} 
          // startIcon={<SuppliesIcon />}
          endIcon = {<FiberNewIcon style={{ color:'primary', padding: "2%", transform: "scale(1.3)" }}/>}>
          Supplies
        </Button>
        
        {loggedIn? (<Button onClick={signOut} color='primary'>Sign out</Button>) : (<Button component={Link} color='primary' to={'/'}>Sign in</Button>)}
        <Avatar id='pic' src={user?.photoURL} alt="User" />
        {/* <p>{user?.name}</p> */}
        </ThemeProvider>
      </div>
      {/* <div className="navbar__right">
        <Button id='btn' component={Link} to={"/explore"}>
        <img id="navIcon" src={exploreLogo}></img>
        Explore
        </Button>
        <Button id='btn'component={Link} to={"/supplies"}>
          Supplies
        </Button>
        <Button id='btn' component={Link} to={"/friends"}>
          Tools
        </Button>

        <Button onClick={signOut}>Sign out</Button>
        <Avatar id='pic' src={user?.photoURL} alt="User" />
      </div> */}
    </div>
  );
}

export default Navbar;

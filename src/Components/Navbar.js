/** @format */

import React from "react";
import "./Navbar.css";
import { auth } from "../fire";
import { Avatar, Button } from "@material-ui/core";
import { useStateValue } from "../StateProvider";
import { Link } from "react-router-dom";
import Sticky from 'react-sticky-el';
import logoWhite from "../Assets/SVG/Asset1.svg";
import logoColored from "../Assets/SVG/Asset2.svg";
import exploreLogo from "../Assets/explore_logo.svg";
import Supplies from "./Supplies/Supplies";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
// Icons
import Icon from '@material-ui/core/Icon';
import ExploreIcon from '@material-ui/icons/GridOn';
import SuppliesIcon from '@material-ui/icons/LocalGroceryStore';
import ToolsIcon from '@material-ui/icons/Build';
import ContributeIcon from '@material-ui/icons/Group';
import FiberNewIcon from '@material-ui/icons/NewReleases';


import playbook_logo from '../Assets/playbook_logo_black.svg';
import { white, black } from "@material-ui/core/colors";
// import playbook_logo from '../Assets/playbook_logo_blue.svg';

//fonts

function Navbar({loggedIn, colorStatus, stickyCond}) {
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
    <>
    {stickyCond? (
    <Sticky>
    <div className="navbar" style={{backgroundImage: 'linear-gradient(to top, rgba(0,0,0,0), rgba(0,0,0,.5))'}}>
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
          startIcon={<ExploreIcon style={{ color:'primary', padding: "10%" }}/>}
          >
          <div className='removeText'>Explore</div>
        </Button>
        <Button  id='btn' 
          component={Link} 
          color='primary'
          to={"/ComingSoonTools"}
          startIcon={<ToolsIcon style={{  color:'primary', padding: "10%" }}/>}
          >
          <div className='removeText'>Tools</div>
        </Button>
        <Button  id='btn' 
          component={Link} 
          color='primary'
          to={"/contribute/testimonies"}
          startIcon={<ContributeIcon style={{ color:'primary', padding: "10%" }}/>}>
          <div className='removeText'>Contribute</div>
        </Button>
        <Button  id='btn' 
          component={Link} 
          color='primary'
          to={"/supplies"} 
          // startIcon={<SuppliesIcon />}
          startIcon = {<FiberNewIcon style={{ color:'primary', padding: "2%", transform: "scale(1.3)" }}/>}>
          <div className='removeText'>Supplies</div>
        </Button>
        
        {loggedIn? (<Button onClick={signOut} color='primary'>Sign out</Button>) : (<Button component={Link} color='primary' to={'/'}>Sign in</Button>)}
        <Icon
        component={Link}
        to={"/supplies"}>
          <Avatar id='pic' src={user?.photoURL} alt="User" />
        </Icon>
        {/* <Avatar id='pic' src={user?.photoURL} alt="User" /> */}
        
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
    </Sticky>
    ) : (
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
          startIcon={<ExploreIcon style={{ color:'primary', padding: "10%" }}/>}
          >
          <div className='removeText'>Explore</div>
        </Button>
        <Button  id='btn' 
          component={Link} 
          color='primary'
          to={"/ComingSoonTools"}
          startIcon={<ToolsIcon style={{  color:'primary', padding: "10%" }}/>}
          >
          Tools
        </Button>
        <Button  id='btn' 
          component={Link} 
          color='primary'
          to={"/contribute/testimonies"}
          startIcon={<ContributeIcon style={{ color:'primary', padding: "10%" }}/>}>
          Contribute
        </Button>
        <Button  id='btn' 
          component={Link} 
          color='primary'
          to={"/supplies"} 
          // startIcon={<SuppliesIcon />}
          startIcon = {<FiberNewIcon style={{ color:'primary', padding: "2%", transform: "scale(1.3)" }}/>}>
          Supplies
        </Button>
        
        {loggedIn? (<Button onClick={signOut} color='primary'>Sign out</Button>) : (<Button component={Link} color='primary' to={'/'}>Sign in</Button>)}
        <Icon
        component={Link}
        to={"/supplies"}>
          <Avatar id='pic' src={user?.photoURL} alt="User" />
        </Icon>
        {/* <Avatar id='pic' src={user?.photoURL} alt="User"/> */}
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
    )}
    </>
  );
}

export default Navbar;

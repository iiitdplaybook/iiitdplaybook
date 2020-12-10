/** @format */

import React from "react";
import "./Navbar.css";
import { auth } from "../fire";
import { Avatar, Button } from "@material-ui/core";
import { useStateValue } from "../StateProvider";
import { Link } from "react-router-dom";
import logo from "../Assets/Logo.png";
import exploreLogo from "../Assets/explore_logo.svg";

// Icons
import ExploreIcon from '@material-ui/icons/GridOn';
import SuppliesIcon from '@material-ui/icons/LocalGroceryStore';
import ToolsIcon from '@material-ui/icons/Build';
import FiberNewIcon from '@material-ui/icons/FiberNew';


import playbook_logo from '../Assets/playbook_logo_black.svg';
import { blue } from "@material-ui/core/colors";
// import playbook_logo from '../Assets/playbook_logo_blue.svg';

//fonts

function Navbar() {
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


  return (
    <div className="navbar">
      <div className="navbar__left">
      <Link to="/" style={{ textDecoration: "none" }}>
        <img id="logo" src={logo} alt="Student Playbook"/>
        </Link>
      </div>
      <div className="navbar__right">
        <Button 
          component={Link} 
          to={"/explore"}
          startIcon={<ExploreIcon />}>
          Explore
        </Button>
        <Button 
          component={Link} 
          to={"/tools"}
          startIcon={<ToolsIcon />}>
          Tools
        </Button>
        <Button 
          component={Link} 
          to={"/friends"} 
          startIcon={<SuppliesIcon />}
          endIcon = {<FiberNewIcon style={{ color: "black", padding: "2%" }}/>}>
          Supplies
        </Button>
        <Button onClick={signOut}>Sign out</Button>
        <Avatar id='pic' src={user?.photoURL} alt="User" />
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

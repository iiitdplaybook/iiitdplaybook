/** @format */

import React from "react";
import "./Navbar.css";
import { auth } from "../fire";
import { Avatar, Button } from "@material-ui/core";
import { useStateValue } from "../StateProvider";
import { Link } from "react-router-dom";

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
        <Link to="/">
          <img src={playbook_logo} alt="Student Playbook Logo" />
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
          endIcon = {<FiberNewIcon style={{ color: blue[500] }}/>}>
          Supplies
        </Button>
        <Button onClick={signOut}>Sign out</Button>
        <Avatar src={user?.photoURL} alt="User" />
      </div>
    </div>
  );
}

export default Navbar;

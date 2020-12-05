/** @format */

import React from "react";
import "./Navbar.css";
import { auth } from "../fire";
import { Avatar, Button } from "@material-ui/core";
import { useStateValue } from "../StateProvider";
import { Link } from "react-router-dom";
import logo from "../Assets/Logo.png";

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
        <img id="logo" src={logo} />
        </Link>
      </div>
      <div className="navbar__right">
        <Button id='btn' component={Link} to={"/explore"}>
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
      </div>
    </div>
  );
}

export default Navbar;

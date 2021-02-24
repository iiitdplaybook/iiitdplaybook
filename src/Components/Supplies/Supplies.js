/** @format */

import "./Supplies.css";
import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import itemsList from "./itemsSupplies";
import Navbar from "../Navbar";

function Supplies() {
  const [clickedButton, setClickedButton] = useState(1);
  const useStyles = makeStyles({
    root: {
      background: "#fff",
      borderRadius: "5px",
      width: 250,
      marginLeft: 10,
    },
    media: {
      height: 250,
    },
  });

  const buttonStyles = makeStyles({
    root: {
      background: "linear-gradient(90deg,#1EB0F6 6.32%, #2BD4DF 100%)",
      // boxShadow: "0px 10px 20px -2px rgba(37, 197, 233, 0.25)",
      borderRadius: "15px",
      border: "none",
      color: "white",
    },
    notRoot: {
      borderRadius: "15px",
      background: "#f0f0f0",
      border: "none",
    },
  });
  const buttonClass = buttonStyles();
  const classes = useStyles();

  const itemCards = itemsList();

  const changeS = (s) => {
    setClickedButton(s);
  };

  return (
    <div className="supplies">
      <Navbar
        loggedIn={localStorage.getItem("isSignedIn")}
        colorStatus={true}
      />
      <h2
        className="supplies_heading"
        style={{ textAlign: "center", margin: "4%" }}
      >
        A collection of things that students use in college
      </h2>

      <div className="supplies__button">
        <Button
          onClick={() => changeS(1)}
          variant={clickedButton === 1 ? "contatined" : "outlined"}
          className={
            clickedButton === 1 ? buttonClass.root : buttonClass.notRoot
          }
        >
          All
        </Button>
        <Button
          onClick={() => changeS(2)}
          variant={clickedButton === 2 ? "contatined" : "outlined"}
          className={
            clickedButton === 2 ? buttonClass.root : buttonClass.notRoot
          }
        >
          Stationary
        </Button>
        <Button
          onClick={() => changeS(3)}
          variant={clickedButton === 3 ? "contatined" : "outlined"}
          className={
            clickedButton === 3 ? buttonClass.root : buttonClass.notRoot
          }
        >
          Design
        </Button>
        <Button
          onClick={() => changeS(4)}
          variant={clickedButton === 4 ? "contatined" : "outlined"}
          className={
            clickedButton === 4 ? buttonClass.root : buttonClass.notRoot
          }
        >
          Books
        </Button>
        <Button
          onClick={() => changeS(5)}
          variant={clickedButton === 5 ? "contatined" : "outlined"}
          className={
            clickedButton === 5 ? buttonClass.root : buttonClass.notRoot
          }
        >
          Laptops
        </Button>
        <Button
          onClick={() => changeS(6)}
          variant={clickedButton === 6 ? "contatined" : "outlined"}
          className={
            clickedButton === 6 ? buttonClass.root : buttonClass.notRoot
          }
        >
          Tech Accessories
        </Button>
        <Button
          onClick={() => changeS(7)}
          variant={clickedButton === 7 ? "contatined" : "outlined"}
          className={
            clickedButton === 7 ? buttonClass.root : buttonClass.notRoot
          }
        >
          Room Decor
        </Button>
        <Button
          onClick={() => changeS(8)}
          variant={clickedButton === 8 ? "contatined" : "outlined"}
          className={
            clickedButton === 8 ? buttonClass.root : buttonClass.notRoot
          }
        >
          Others
        </Button>
      </div>
      <div className="explore__body">
        {clickedButton === 1 ? (
          <div className="cardsDiv_supply">{itemCards["allCards"]}</div>
        ) : clickedButton === 2 ? (
          <div className="cardsDiv_supply">{itemCards["stationaryCards"]}</div>
        ) : clickedButton === 3 ? (
          <div className="cardsDiv_supply">{itemCards["designCards"]}</div>
        ) : clickedButton === 4 ? (
          <div className="cardsDiv_supply">{itemCards["booksCards"]}</div>
        ) : clickedButton === 5 ? (
          <div className="cardsDiv_supply">{itemCards["laptopsCards"]}</div>
        ) : clickedButton === 6 ? (
          <div className="cardsDiv_supply">{itemCards["techotherCards"]}</div>
        ) : clickedButton === 7 ? (
          <div className="cardsDiv_supply">{itemCards["roomCards"]}</div>
        ) : (
          <div className="cardsDiv_supply">{itemCards["otherCards"]}</div>
        )}
      </div>
    </div>
  );
}

export default Supplies;

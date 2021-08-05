/** @format */

import "./HMU.css";
import firebase from "firebase";
import React, { useState, useEffect } from "react";
import { Button, makeStyles } from "@material-ui/core";
import Navbar from "../Navbar/Navbar";
import HMUCardGrid from "./HMUCardGrid";
import zIndex from "@material-ui/core/styles/zIndex";

function HMU() {
  const [clickedButton, setClickedButton] = useState(0);
  const [hitmeups, setHitmeups] = useState([]);
  const categories = [
    "All",
    "Career",
    "Design",
    "CS Guidance",
    "Research",
    "Mock Interviews",
  ];

  const getHitmeups = async () => {
    const allHMURef = firebase.database().ref("HitMeUp");
    await allHMURef.once("value", (snapshot) => {
      let items = [];
      snapshot.forEach((child) => {
        const dict = {};
        dict.name = child.val().name;
        dict.category = child.val().category;
        dict.image = child.val().imageURL;
        dict.linkedin = child.val().linkedin;
        dict.contact = child.val().contact;
        dict.expertise = child.val().expertise;
        dict.batch = child.val().batch;
        dict.key = child.key;
        items.push(dict);
      });
      setHitmeups(items);
    });
    return hitmeups;
  };

  useEffect(() => {
    getHitmeups();
  }, []);

  const getHitmeupsByCategory = (category) =>
    hitmeups.filter((item) => {
      return item.category ? item.category.includes(category) : false;
    });

  const buttonStyles = makeStyles({
    root: {
      background: "linear-gradient(90deg,#1EB0F6 6.32%, #2BD4DF 100%)",
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

  return (
    <div className="supplies">
      <Navbar
        loggedIn={localStorage.getItem("isSignedIn")}
        colorStatus={true}
      />
      <h1 className="main_heading">Hit Me Up!</h1>
      <h2 className="sub_heading">
        Looking for some career advice? Or a resume review? Or want to hear
        someone's journey? Just hit them up!
      </h2>

      <div className="supplies__button">
        {categories.map((category, id) => (
          <Button
            onClick={() => setClickedButton(id)}
            variant={clickedButton === id ? "contained" : "outlined"}
            className={
              clickedButton === id ? buttonClass.root : buttonClass.notRoot
            }
          >
            {category}
          </Button>
        ))}
      </div>
      <div className="explore__body">
        <a
          href="https://forms.gle/tZZYSwM7dnV7fhRA8"
          target="_blank"
          class="float"
        >
          <i class="fa fa-plus my-float"> Want to join?</i>
        </a>
        {clickedButton === 0 ? (
          <div className="cardsDiv_supply">
            <HMUCardGrid itemList={hitmeups} />
          </div>
        ) : (
          <div className="cardsDiv_supply">
            <HMUCardGrid
              itemList={getHitmeupsByCategory(
                categories[clickedButton].split(" ")[0]
              )}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default HMU;

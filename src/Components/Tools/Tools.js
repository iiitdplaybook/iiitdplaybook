import "./Tools.css";
import React, { useState } from "react";
import { Button, GridList, GridListTile } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import itemsList from "../Utils/items";
import Navbar from "../Navbar/Navbar";

export default function Tools() {
  const [clickedButton, setClickedButton] = useState(1);

  const useStyles = makeStyles({
    root: {
      height: 280,
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
  const gridClass = useStyles();

  const changeS = (s) => {
    setClickedButton(s);
  };

  const itemCards = itemsList();

  return (
    <div className="tools">
      <Navbar loggedIn={true} colorStatus={true} />
      <h1 className="main_heading">Tools</h1>
      <h2 className="sub_heading">
        Tools to make your college life easier and productive
      </h2>
      <div className="tools__button">
        <Button
          onClick={() => changeS(1)}
          variant={clickedButton === 1 ? "contatined" : "outlined"}
          className={
            clickedButton === 1 ? buttonClass.root : buttonClass.notRoot
          }
        >
          Timetable
        </Button>
        <Button
          onClick={() => changeS(2)}
          variant={clickedButton === 2 ? "contatined" : "outlined"}
          className={
            clickedButton === 2 ? buttonClass.root : buttonClass.notRoot
          }
        >
          Elective reviews
        </Button>
        <Button
          onClick={() => changeS(3)}
          variant={clickedButton === 3 ? "contatined" : "outlined"}
          className={
            clickedButton === 3 ? buttonClass.root : buttonClass.notRoot
          }
        >
          Credits Calc.
        </Button>
      </div>

      <div className="tools__body">
        {clickedButton === 1 ? (
          <div className="embedContainer">
            <p>Creators - Sandeep Kumar Singh</p>
            <iframe class="docEmbed" src="https://timetable.cf/"></iframe>
          </div>
        ) : clickedButton === 2 ? (
          <div className="embedContainer">
            <p>Creators - Sahil Yadav and Abhishek Goyal</p>
            <a href="https://docs.google.com/document/d/1v8EJcxPvXgtNYNFtnUjrvdiP3F5UZMM3vqw7HcDsN7A/edit">
              <iframe
                class="docEmbed"
                src="https://docs.google.com/document/d/e/2PACX-1vQXQ0Vc6hvTp7UM8ZGL3tQZZOIv3L8rickxVwfpSINkOglsZ7vw0VhNmbLB6CfHFcPb3cZJpz9KkoUH/pub?embedded=true"
              ></iframe>
            </a>
          </div>
        ) : (
          <div className="embedContainer">
            <p>Creators - Kshitij Agrawal</p>
            <a href="https://docs.google.com/spreadsheets/d/1aMWCxWWUuGYMMMbub6ah_Y8oGt6N3azj4lUSEag2XsQ/edit?usp=sharing">
              <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRsEI0yaF_ijoMDUss80GQycrcVO9gXQezURxXLWGIZeJ1zs3kQD5-HL3qjECGN-SLRNcTZ4CvZVg1p/pubhtml?widget=true&amp;headers=false"></iframe>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

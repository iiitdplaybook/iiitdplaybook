import "./Tools.css";
import React, { useState } from "react";
import { Button, GridList, GridListTile } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import itemsList from "../Utils/items";
import Navbar from "../Navbar/Navbar";
import Alumnimap from "./Alumnimap";

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

  const airtableStyles = makeStyles({
    root: {
      background: "transparent",
      border: "1px solid #ccc",
    },
  });
  const airtableClass = airtableStyles();

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
        <Button
          onClick={() => changeS(4)}
          variant={clickedButton === 4 ? "contatined" : "outlined"}
          className={
            clickedButton === 4 ? buttonClass.root : buttonClass.notRoot
          }
        >
          Course directory
        </Button>
        <Button
          onClick={() => changeS(5)}
          variant={clickedButton === 5 ? "contatined" : "outlined"}
          className={
            clickedButton === 5 ? buttonClass.root : buttonClass.notRoot
          }
        >
          Alumni map
        </Button>
        <Button
          onClick={() => changeS(6)}
          variant={clickedButton === 6 ? "contatined" : "outlined"}
          className={
            clickedButton === 6 ? buttonClass.root : buttonClass.notRoot
          }
        >
          Referrals
        </Button>
      </div>

      <div className="tools__body">
        {clickedButton === 1 ? (
          <div className="embedContainer">
            <iframe class="docEmbed" src="https://timetables.cf/"></iframe>
            <p>Creators - Sandeep Kumar Singh</p>
          </div>
        ) : clickedButton === 2 ? (
          <div className="embedContainer">
            <iframe
              class="docEmbed"
              src="https://v1.embednotion.com/embed/345b9519715b4debbe06b018f6dbddde"
            ></iframe>

            {/* <a href="https://docs.google.com/document/d/1v8EJcxPvXgtNYNFtnUjrvdiP3F5UZMM3vqw7HcDsN7A/edit">
              <iframe
                class="docEmbed"
                src="https://docs.google.com/document/d/e/2PACX-1vQXQ0Vc6hvTp7UM8ZGL3tQZZOIv3L8rickxVwfpSINkOglsZ7vw0VhNmbLB6CfHFcPb3cZJpz9KkoUH/pub?embedded=true"
              ></iframe> */}
            {/* </a> */}
            <p>Creators - Sahil Yadav</p>
          </div>
        ) : clickedButton === 3 ? (
          <div className="embedContainer">
            <p>
              <i>('Make a copy' of the excel file to edit)</i>
            </p>
            {/* <a
              target="_blank"
              href="https://docs.google.com/spreadsheets/d/1aMWCxWWUuGYMMMbub6ah_Y8oGt6N3azj4lUSEag2XsQ/edit?usp=sharing"
            > */}
            <iframe
              class="docEmbed"
              src="https://docs.google.com/spreadsheets/d/1aMWCxWWUuGYMMMbub6ah_Y8oGt6N3azj4lUSEag2XsQ/edit#gid=1436858936"
            ></iframe>
            {/* <img
                class="docEmbed"
                src="https://cdn.statically.io/gh/iiitdplaybook/iiitdplaybook/e0e24ee4/src/Assets/tools/collegecredits.png"
              ></img> */}
            {/* </a> */}
            <p>Creators - Playbook</p>
          </div>
        ) : clickedButton === 4 ? (
          <div className="embedContainer">
            <iframe
              class="docEmbed"
              src="http://techtree.iiitd.edu.in/"
            ></iframe>
            <p>Creators - Bhavya Chopra and Ruhma Mehek Khan</p>
          </div>
        ) : clickedButton === 5 ? (
          <div className="embedContainer">
            Hello
            {/* <Alumnimap /> */}
            <p>Creators - Playbook</p>
          </div>
        ) : (
          <div className="embedContainer">
            <iframe
              class="airtableClass docEmed"
              src="https://airtable.com/embed/shr8jbLprRXRV1omD?backgroundColor=yellow&layout=card&viewControls=on"
              frameBorder="0"
              onmousewheel=""
              width="100%"
              height="533"
            ></iframe>
            <p>Creators - Playbook</p>
          </div>
        )}
      </div>
    </div>
  );
}

/** @format */

import "./Explore.css";
import React, { useState } from "react";
import {
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ExploreCards from "./ExploreCards/ExploreCards"
import imageTimeManagement from "../Assets/SVG_for_cards/teamwork.svg";

function Explore() {
    const [clickedButton, setClickedButton] = useState(1);

    const useStyles = makeStyles({
        root: {
            width: 200,
            marginLeft: 50,
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

    // const classes = useStyles();

    var exploreCardsInfo1 = {
        "gradientColor_1":"#2FB8FF",
        "gradientColor_2":"#95E8DC",
        "title":"\nTime Management",
        "n_testimonies":6,
        "reading_time":3,
        "image":imageTimeManagement,
    };

    var exploreCardsInfo2 = {
        "gradientColor_1":"#2FB8FF",
        "gradientColor_2":"#95E8DC",
        "title":"Not Time Management",
        "n_testimonies":6,
        "reading_time":3,
        "image":imageTimeManagement,
    };

    var exploreCardsInfo3 = {
        "gradientColor_1":"#2FB8FF",
        "gradientColor_2":"#95E8DC",
        "title":"\n\nHello",
        "n_testimonies":6,
        "reading_time":3,
        "image":imageTimeManagement,
    };

    const items = [];
    const items2 = [];
    const items3 = [];

    for (let index = 0; index < 3; index++) {
        items.push(
            ExploreCards(exploreCardsInfo1)
        );
    }
    for (let index = 0; index < 2; index++) {
        items2.push(
            ExploreCards(exploreCardsInfo2)
        );
    }
    for (let index = 0; index < 4; index++) {
        items3.push(
            ExploreCards(exploreCardsInfo3)
        );
    }
    

    const classes = useStyles();

    const changeS = (s) => {
        setClickedButton(s);
    };

    return (
        <div className="explore">
            <div className="explore__button">
                <Button
                    onClick={() => changeS(1)}
                    variant={clickedButton === 1 ? "contatined" : "outlined"}
                    className={
                        clickedButton === 1
                            ? buttonClass.root
                            : buttonClass.notRoot
                    }
                >
                    All
                </Button>
                <Button
                    onClick={() => changeS(2)}
                    variant={clickedButton === 2 ? "contatined" : "outlined"}
                    className={
                        clickedButton === 2
                            ? buttonClass.root
                            : buttonClass.notRoot
                    }
                >
                    Recommended
                </Button>
                <Button
                    onClick={() => changeS(3)}
                    variant={clickedButton === 3 ? "contatined" : "outlined"}
                    className={
                        clickedButton === 3
                            ? buttonClass.root
                            : buttonClass.notRoot
                    }
                >
                    Favourites
                </Button>
            </div>

            <div className="explore__body">
                {clickedButton === 1 ? (

                    <div className="cardsDiv">
                        {items}
                    </div>
                ) : clickedButton === 2 ? (
                    <div className="cardsDiv">
                        {items2}
                    </div>
                ) : (
                    <div className="cardsDiv">
                        {items3}
                    </div>
                )}
                
            </div>
        </div>
    )
}

//   return (
//     <div className="explore">
//       <div className="explore__buttons">
//         <Button>Favourites</Button>
//         <Button>Recommended</Button>
//         <Button>All</Button>
//       </div>
//       <div className="explore__cards">{items}</div>
//     </div>
//   );

export default Explore

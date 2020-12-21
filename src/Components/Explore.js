/** @format */
import "./Explore.css";
import React, { useState } from "react";
import {
  Button,
  GridList,
  GridListTile,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import itemsList from "./items"
import Navbar from "./Navbar";

function Explore() {
    const [clickedButton, setClickedButton] = useState(1);

    const useStyles = makeStyles({
        root:{
            height:280
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
        <div className="explore">
            <Navbar loggedIn={true} colorStatus={true}/>
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
                        {itemCards["allCards"]}
                    </div>
                    
                ) : clickedButton === 2 ? (
                    <div className="cardsDiv">
                        {itemCards["recommendedCards"]}
                    </div>
                ) : (
                    <div className="cardsDiv">
                        {itemCards["favCards"]}
                    </div>
                )}
                
            </div>
        </div>
    )
}

export default Explore

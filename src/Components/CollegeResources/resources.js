/** @format */

import "../Supplies/Supplies.css";
import "./resources.css";
import React, { useState } from "react";
import {Button, Card, } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import itemsList from "./itemsResources"
import Navbar from "../Navbar";

function Resources() {
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
            <Navbar loggedIn={true} colorStatus={true}/>
            <h2 style={{textAlign: 'center', margin: '4%'}}>A collection of resources that students use in college</h2>

            <div className="supplies__button">
                
                <Button
                    onClick={() => changeS(1)}
                    variant={clickedButton === 1 ? "contatined" : "outlined"}
                    className={
                        clickedButton === 1
                            ? buttonClass.root
                            : buttonClass.notRoot
                    }
                >
                    Chrome Extensions
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
                    Coding
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
                    Networking
                </Button>
                <Button
                    onClick={() => changeS(4)}
                    variant={clickedButton === 4 ? "contatined" : "outlined"}
                    className={
                        clickedButton === 4
                            ? buttonClass.root
                            : buttonClass.notRoot
                    }
                >
                    Design
                </Button>
            </div>
            <div className="explore__body">
                {clickedButton === 1 ? (
                    <div className="resourceBox">
                    <h3>Personalisation</h3><br/>
                        <div className="resourceBox_Inner">
                            <div className="cardsDiv_resources3">
                            {itemCards["chromeCards_pers"]}
                            </div>
                        </div>
                        <br/><br/>
                        <h3>The cool ones</h3><br/>
                        <div className="resourceBox_Inner">
                            <div className="cardsDiv_resources3">
                                {itemCards["chromeCards_cool"]}
                            </div>
                        </div>
                        <br/><br/>
                        <h3>Academics</h3><br/>
                        <div className="resourceBox_Inner">
                            <div className="cardsDiv_resources3">
                                {itemCards["chromeCards_acad"]}
                            </div>
                        </div>
                    </div>
                ) : clickedButton === 2 ? (
                    <div className="resourceBox">
                        <h3>Platforms to use</h3><br/>
                        <div className="resourceBox_Inner">
                        <div className="cardsDiv_resources3">    
                            {itemCards["codingCards"]}
                        </div>
                        </div>
                        <br/><br/>
                        <h3>Youtubers to follow</h3><br/>
                        <div className="resourceBox_Inner">
                        <div className="cardsDiv_resources2">    
                            {itemCards["codingCards_YT"]}
                        </div>
                        </div>
                    </div>
                ) : clickedButton === 3 ? (
                    <div className="cardsDiv_resources">
                        {itemCards["networkingCards"]}
                    </div>
                ) : (
                    <div className="cardsDiv_resources">
                        {itemCards["designCards"]}
                    </div>
                )
            }
            </div>
        </div>
    );
}

export default Resources;
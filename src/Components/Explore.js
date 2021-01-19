/** @format */

import "./Explore.css";
import React, { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  Typography,
  CardActionArea,
  CardMedia,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import pabitra from "../Assets/pabitra.jpeg";

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
            boxShadow: "0px 10px 20px -2px rgba(37, 197, 233, 0.25)",
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

    const items = [];
    for (let index = 0; index < 5; index++) {
        items.push(
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={pabitra}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Pabitra
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        );
    }

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
                    <p>Pabitra</p>
                ) : clickedButton === 2 ? (
                    <p>Yashwin</p>
                ) : (
                    <p>Kshitij</p>
                )}
                {items}
            </div>
        </div>
    );
  }

export default Explore;

/** @format */

import "./Supplies.css";
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
import wazzup from "../../Assets/wazzup.jpg";

function Supplies() {
    const [clickedButton, setClickedButton] = useState(1);
    const useStyles = makeStyles({
        root: {
            background: "linear-gradient(90deg,#1EB0F6 6.32%, #2BD4DF 100%)",
            borderRadius: "5px",
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
    const classes = useStyles();

    const items = [];
    for (let index = 0; index < 5; index++) {
        items.push(
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={wazzup}
                        title="Pabitra"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Supply {index}
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
        <div className="supplies">
            <div>
            {/* <iframe width="120px" height="240px" scrolling="no" frameBorder="no" title="calc" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=notapplicab0b-21&language=en_IN&marketplace=amazon&region=IN&placement=B011UK5DGY&asins=B011UK5DGY&linkId=3c1b2d86d77530607fa261a6f35f411a&show_border=true&link_opens_in_new_window=true"></iframe> */}
            </div>
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
                    Stationary
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
                    Laptops
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
                    Computer Accessories
                </Button>
                <Button
                    onClick={() => changeS(5)}
                    variant={clickedButton === 5 ? "contatined" : "outlined"}
                    className={
                        clickedButton === 5
                            ? buttonClass.root
                            : buttonClass.notRoot
                    }
                >
                    Room Decor
                </Button>
                <Button
                    onClick={() => changeS(6)}
                    variant={clickedButton === 6 ? "contatined" : "outlined"}
                    className={
                        clickedButton === 6
                            ? buttonClass.root
                            : buttonClass.notRoot
                    }
                >
                    Others
                </Button>
            </div>
            <div className="explore__body">
                {clickedButton === 1 ? (
                    <div className="cardsDiv">
                        {items}
                    </div>
                    
                ) : clickedButton === 2 ? (
                    <div className="cardsDiv">
                        {items}
                    </div>
                ) : (
                    <div className="cardsDiv">
                        {items}
                    </div>
                )}
                
            </div>
        </div>
    );
  }

export default Supplies;
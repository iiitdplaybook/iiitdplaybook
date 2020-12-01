/** @format */

import "./Explore.css";
import React from "react";
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
  const useStyles = makeStyles({
    root: {
      width: 200,
      marginLeft: 50,
    },
    media: {
      height: 250,
    },
  });

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

  return (
    <div className="explore">
      <div className="explore__buttons">
        <Button>Favourites</Button>
        <Button>Recommended</Button>
        <Button>All</Button>
      </div>
      <div className="explore__cards">{items}</div>
    </div>
  );
}

export default Explore;

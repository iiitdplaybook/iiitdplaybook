import React, { useState, useEffect } from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  Button,
  Typography,
  CardMedia,
  Tooltip,
  Link,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import firebase from "firebase";
import "./HMU.css";

function HMUCard({ item, uid }) {
  const cardHeight = 280;
  const cardWidth = cardHeight * (2.5 / 3);
  const color1 = "#fff";
  const color2 = "#fafafa";

  const useStyles = makeStyles({
    root: {
      display: "inline-block",
      maxWidth: cardWidth,
      minWidth: cardWidth,
      maxHeight: cardHeight,
      background: `linear-gradient(45deg, ${color1}, ${color2})`,
      borderRadius: 10,
    },
    link: {
      width: "100%",
      height: "100%",
    },
    actionArea: {
      width: cardWidth,
      height: cardHeight,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    media: {
      height: "100%",
      position: "absolute",
    },
    content: {
      display: "flex",
      flexDirection: "column",
      alignItems: "left",
      zIndex: "1",
      position: "absolute",
      bottom: "0px",
      color: "#ffffff",
    },
    title: {
      fontSize: 15,
      fontWeight: "bold",
      color: "#ffffff",
      margin: "1%",
    },
    info: {
      fontSize: 13,
      margin: "1%",
      color: "#ffffff",
      width: "100%",
    },
    button: {
      color: "#fff",
      border: "1px solid #fff",
      fontSize: "11px",
      margin: "5px",
      marginLeft: "10px",
      padding: "8px !important",
      minWidth: "30px !important",
      maxHeight: "30px !important",
      float: "right",
      position: "relative",
      top: 3,
      right: 5,
      zIndex: "2",
      "&:hover": {
        backgroundColor: "#23a6d5",
        color: "white",
      },
    },
    active: {
      color: "#FFF",
      background: "#48C854",
      border: "1px solid #fff",
    },
    disabled: {
      color: "grey",
      background: "#eee",
      border: "1px solid #C8C8C8",
    },
  });
  const classes = useStyles();

  const handleClick = () => {};

  return (
    <Card
      className={classes.root}
      style={{
        background: `linear-gradient(45deg, ${color1}, ${color2})`,
      }}
    >
      <CardActionArea className={classes.actionArea}>
        <div className="contactContainer">
          <Tooltip title="LinkedIn">
            <Button
              size="small"
              className={classes.button}
              target="_blank"
              href={item.linkedin}
            >
              <i class="fa fa-linkedin fa-lg" aria-hidden="true"></i>
            </Button>
          </Tooltip>
          <Tooltip title="Calendly">
            <Button
              size="small"
              className={classes.button}
              target="_blank"
              href={item.contact}
            >
              <i class="fa fa-calendar fa-lg" aria-hidden="true"></i>
            </Button>
          </Tooltip>
        </div>
        <a
          className={classes.link}
          href={item.contact}
          target="_blank"
          style={{ margin: "0%", opacity: "1" }}
        >
          <CardMedia
            className={classes.media}
            component="img"
            src={item.image}
            title={item.name}
          />
          <div className="gradLayer"></div>
          <CardContent className={classes.content}>
            <Typography
              className={classes.title}
              style={{ whiteSpace: "pre-line" }}
            >
              {item.name}
            </Typography>
            <Typography className={classes.info} color="textSecondary">
              {item.batch}
              &nbsp;
            </Typography>
            <Typography className={classes.info} color="textSecondary">
              <i class="fa fa-briefcase" aria-hidden="true"></i>
              &nbsp;
              {item.expertise}
            </Typography>
            <Typography className={classes.info} color="textSecondary">
              <i class="fa fa-comments"></i>
              &nbsp;
              {item.category.join(", ")}
            </Typography>
          </CardContent>
        </a>
      </CardActionArea>
    </Card>
  );
}

export default HMUCard;

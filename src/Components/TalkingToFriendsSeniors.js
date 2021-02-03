/** @format */

import React, { useState } from "react";
import firebase from "firebase";
import { useStateValue } from "../StateProvider";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import AppBar from "@material-ui/core/AppBar";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import HorizontalScroll from "react-scroll-horizontal";
import { Slide, Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import ShareButton from "react-web-share-button";
import webShare from "react-web-share-api";
import { Button } from "@material-ui/core";
import ReactCardFlip from "react-card-flip";
import Switch from "react-switch";
import { render } from "react-dom";
import { motion, useAnimation } from "framer-motion";
import { useScroll } from "react-use-gesture";
import "./TalkingToFriendsSeniors.css";

const facebook = "https://cdn.statically.io/gh/PabitraBansal/StudentPlaybook/6d20d536/src/Assets/facebook.jpg";
const instagram = "https://cdn.statically.io/gh/PabitraBansal/StudentPlaybook/6d20d536/src/Assets/instagram.jpg";
const telegram = "https://cdn.statically.io/gh/PabitraBansal/StudentPlaybook/6d20d536/src/Assets/telegram.png";
const yashwin = "https://cdn.statically.io/gh/PabitraBansal/StudentPlaybook/6d20d536/src/Assets/yashwin.png";
const kshitij = "https://cdn.statically.io/gh/PabitraBansal/StudentPlaybook/6d20d536/src/Assets/kshitij.jpg";
const pabitra = "https://cdn.statically.io/gh/PabitraBansal/StudentPlaybook/6d20d536/src/Assets/pabitra.jpeg";
const rahul = "https://cdn.statically.io/gh/PabitraBansal/StudentPlaybook/6d20d536/src/Assets/rahul.png";

function TalkingToFriendsSeniors(props) {
  const { children, value, index, ...other } = props;
  const [{ user, isSignedIn, userName }] = useStateValue();

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={5}>
          <Typography align="center">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TalkingToFriendsSeniors.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

const properties = {
  autoplay: true,
  arrows: false,
};

const style = {
  textAlign: "center",
};

const share = () => {
  if (navigator.share) {
    navigator
      .share({
        title: "friendship text",
        text: "Friendship is the new ____zone",
        url: "",
      })
      .then(() => console.log("Successful share"))
      .catch((error) => console.log("Error sharing", error));
  } else {
  }
};

const clamp = (value, clampAt) => {
  if (value > 0) {
    return value > 30 ? 30 : value;
  } else {
    return value < -30 ? -30 : value;
  }
};

const howToApproach = [
  { pic: kshitij, text: "Mail them" },
  { pic: pabitra, text: "Tell them about yourself" },
  { pic: rahul, text: "Message them on Whatsapp, Instagram, ..." },
  { pic: yashwin, text: "Play games with them during induction" },
  { pic: kshitij, text: "Go clubbing with them" },
  { pic: pabitra, text: "Go to freshers interview" },
  { pic: rahul, text: "Take part in events" },
  { pic: yashwin, text: "Collaborate on projects" },
];

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const controls = useAnimation();
  const bind = useScroll((event) => {
    controls.start({
      scrollbarWidth: "2px",
      transform: `perspective(500px) rotateY(${
        event.scrolling ? clamp(event.delta[0]) : 0
      }deg)`,
    });
  });

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div>
      <div align="center">
        <Switch
          onChange={handleClick}
          checked={isFlipped}
          offColor="#2e9e4c"
          onColor="#2e9e4c"
          checkedIcon={false}
          uncheckedIcon={false}
        />
      </div>
      <div className="mainDiv">
        <ReactCardFlip
          className="mainCard"
          isFlipped={isFlipped}
          flipDirection="horizontal"
        >
          {/* First component of ReactCardFlip is frontpage */}
          <Card className="frontpage">
            <Card className="socialMediaCard" variant="outlined">
              <CardContent>
                <div>
                  <Fade {...properties}>
                    <div style={style} className="each-fade">
                      <div>{/* <img src={whatsapp} alt="whatsapp" /> */}</div>
                    </div>
                    <div style={style} className="each-fade">
                      <div>
                        <img src={facebook} alt="facebook" />
                      </div>
                    </div>
                    <div style={style} className="each-fade">
                      <div>
                        <img src={instagram} alt="instagram" />
                      </div>
                    </div>
                    <div style={style} className="each-fade">
                      <div>
                        <img src={telegram} alt="telegram" />
                      </div>
                    </div>
                  </Fade>
                </div>
              </CardContent>
            </Card>
            <Card className="shareTextCard" variant="outlined">
              <CardContent>
                <Typography className="textCard" variant="h4" align="center">
                  "Friendship is the new ____zone"
                </Typography>
                <Button onClick={share}>Share</Button>
              </CardContent>
            </Card>
          </Card>
          {/* Second component of ReactCardFlip is backpage */}
          <Card className="backPage">
            <div align="center">
              {/* <img src={wazzup} alt="wazzup" /> */}
              <h1>College khulne ke baad bataayenge 🙂</h1>
            </div>
          </Card>
        </ReactCardFlip>
      </div>
      <h2 className="heading_text">How to approach seniors?</h2>
      <div className="container" {...bind()}>
        {howToApproach.map((src) => (
          <motion.div
            key={src}
            variants={variants}
            className="card"
            style={{
              backgroundImage: `url(${src.pic})`,
            }}
            animate={controls}
          >
            {/* <img
					src={src.pic}
					alt={src.text}
				/> */}
            <h3 className="card_text">{src.text}</h3>
          </motion.div>
        ))}
      </div>
      <h2 className="heading_text">What to talk about?</h2>
    </div>
  );
}

/** @format */

import React, {useState} from "react";
import firebase from "firebase";
import { useStateValue } from "../StateProvider";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import AppBar from "@material-ui/core/AppBar";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import HorizontalScroll from "react-scroll-horizontal";
import { Slide, Fade } from "react-slideshow-image";
import whatsapp from "../Assets/whatsapp.png";
import facebook from "../Assets/facebook.jpg";
import instagram from "../Assets/instagram.jpg";
import telegram from "../Assets/telegram.png";
import wazzup from "../Assets/wazzup.jpg";
import online from "../Assets/online.PNG";
import offline from "../Assets/offline.PNG";
import "react-slideshow-image/dist/styles.css";
import ShareButton from "react-web-share-button";
import webShare from "react-web-share-api";
import { Button } from "@material-ui/core";
import ReactCardFlip from 'react-card-flip';
import Switch from "react-switch";

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
    console.log("Web Share API is not supported in your browser.");
  }
};

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
      setIsFlipped(!isFlipped);
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
        <div align='center'>
            <Switch 
                onChange={handleClick} 
                checked={isFlipped}
                offColor='#2e9e4c'
                onColor='#2e9e4c'
                checkedIcon={false}
                uncheckedIcon={false}
                />
        </div>
        <div className='mainDiv'>
            <ReactCardFlip className="mainCard" isFlipped={isFlipped} flipDirection="horizontal">
                {/* First component of ReactCardFlip is frontpage */}
                <Card className='frontpage'>
                    <Card className="socialMediaCard" variant="outlined">
                    <CardContent>
                      {/* <Paper position="static">
                            <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" centered>
                                <Tab label="Whatsapp" {...a11yProps(0)} />
                                <Tab label="Instagram" {...a11yProps(1)} />
                                <Tab label="Facebook" {...a11yProps(2)} />
                                <Tab label="Telegram" {...a11yProps(3)} />
                                <Tab label="Pata Nahi" {...a11yProps(4)} />
                            </Tabs>
                        </Paper>
                        <TalkingToFriendsSeniors value={value} index={0}>
                            Whatsapp
                        </TalkingToFriendsSeniors>
                        <TalkingToFriendsSeniors value={value} index={1}>
                            Instagram
                        </TalkingToFriendsSeniors>
                        <TalkingToFriendsSeniors value={value} index={2}>
                            Facebook
                        </TalkingToFriendsSeniors>
                        <TalkingToFriendsSeniors value={value} index={3}>
                            Telegram
                        </TalkingToFriendsSeniors>
                        <TalkingToFriendsSeniors value={value} index={4}>
                            Pata Nahi
                        </TalkingToFriendsSeniors>  */}
                        <div>
                            <Fade {...properties}>
                                <div style={style} className="each-fade">
                                <div>
                                    <img src={whatsapp} alt="whatsapp" />
                                </div>
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
                <Card className='backPage'>
                    <div align='center'>
                        <img src={wazzup} alt="wazzup" />
                        <h1>College khulne ke baad bataayenge 🙂</h1>
                    </div>
                </Card>
            </ReactCardFlip>
        </div>
    </div>
  );
}

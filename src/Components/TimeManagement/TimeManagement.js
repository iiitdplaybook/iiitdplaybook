import React from "react";
import { useState } from "react";
import Navbar from "../Navbar";
import "./TimeManagement.css";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import itemsList from "../items";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import PropTypes from "prop-types";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import ReactCardFlip from "react-card-flip";

import { useStateValue } from "../../StateProvider";
import TinderCard from "../CardSwipe/CardSwipe";

const dog = 'https://cdn.statically.io/gh/PabitraBansal/StudentPlaybook/6d20d536/src/Assets/cardPics/dogFire.png';
const tear = 'https://cdn.statically.io/gh/PabitraBansal/StudentPlaybook/6d20d536/src/Assets/cardPics/tearSmile.png';
const plag = 'https://cdn.statically.io/gh/PabitraBansal/StudentPlaybook/6d20d536/src/Assets/cardPics/plag.png';
const dark = 'https://cdn.statically.io/gh/PabitraBansal/StudentPlaybook/6d20d536/src/Assets/cardPics/darkSide.png';

var isFav = false;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: 240,
    alignSelf: "start",
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    minWidth: "fit-content",
  },
}));

export default function TimeManagement() {
  const [{ user, isSignedIn, userName }] = useStateValue();
  const [clickedButton, setClickedButton] = useState(1);
  const [isFlipped, setIsFlipped] = useState(false);
  const [value, setValue] = React.useState(0);
  const classes = useStyles();

  const handleClick = () => {
    setIsFlipped(!isFlipped);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const buttonStyles = makeStyles({
    root: {
      background: "linear-gradient(90deg,#1EB0F6 6.32%, #2BD4DF 100%)",
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

  const cardStyles = makeStyles({
    root: {
      marginTop: "2%",
      minWidth: 275,
      backgroundColor: "#C4C4C4",
      borderRadius: "10px",
    },
    bullet: {
      display: "inline-block",
      margin: "0 1%",
      fontFamily: "Poppins",
    },
    title: {
      fontSize: 20,
      fontWeight: 800,
      fontFamily: "Poppins",
      textAlign: "center",
    },
  });

  const buttonClass = buttonStyles();
  const gridClass = useStyles();
  const cardClass = cardStyles();

  const changeS = (s) => {
    setClickedButton(s);
  };

  const itemCards = itemsList();

  const cardsImage = [
    tear,
    dog,
    dark,
    plag,
    "https://image.freepik.com/free-vector/deadline-concept-business-man-sinking-sand-watch_48369-18371.jpg",
  ];

  return (
    <div className="timeManagement">
      <Navbar loggedIn={true} colorStatus={true} />

      <ReactCardFlip
        className="mainCard"
        isFlipped={isFlipped}
        flipDirection="horizontal"
      >
        <Card className="frontpage">
          <div
            className="mainDiv"
            style={{ visibility: !isFlipped ? "visible" : "hidden" }}
          >
            <div id="cardsBox">
              <h2
                style={{ textAlign: "center", margin: "2%", marginTop: "5%" }}
              >
                This is where the "fun" begins{" "}
              </h2>
              <h4
                style={{ textAlign: "center", margin: "0%", fontWeight: "500" }}
              >
                Here's the deck of cards that IIITD has in store for YOU <br />
                <i>(Flick left/right to see other cards)</i>{" "}
              </h4>
              <TinderCard />
            </div>

            <div id="cardsBox2">
              <h2
                style={{ textAlign: "center", margin: "2%", marginTop: "0%" }}
              >
                But don't worry, we have a special card to reverse your
                situation!{" "}
              </h2>
              <h2
                style={{ textAlign: "center", margin: "2%", marginTop: "0%" }}
              >
                It's your turn {userName.split(" ")[0]}
              </h2>
              <h2 className="textCard">&#x25BE;Play your card&#x25BE;</h2>
              <h4
                style={{ textAlign: "center", margin: "0%", fontWeight: "500" }}
              >
                <i>(Click on the card below)</i>{" "}
              </h4>
              <Button
                className="reverseButton"
                id="unoReverse"
                variant="contained"
                onClick={handleClick}
              >
                <img
                  src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5ef95353-9f74-45ba-a400-5494417ca165/ddmcdqs-ecd2b865-fa25-4550-adf0-f5962af5484f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNWVmOTUzNTMtOWY3NC00NWJhLWE0MDAtNTQ5NDQxN2NhMTY1XC9kZG1jZHFzLWVjZDJiODY1LWZhMjUtNDU1MC1hZGYwLWY1OTYyYWY1NDg0Zi5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.JASe6g-Qonkdhm7GQ5H-qEyH-bM7sh6lPp60apDiUUo"
                  height="300px"
                ></img>
              </Button>
            </div>
          </div>
        </Card>
        <Card className="backpage">
          <div className="timeManagement__back">
            <div className="timeManagement__back__heading">
              <h1 style={{ zIndex: "50" }}>
                GUIDE TO BECOMING A PRODUCTIVITY NINJA
              </h1>
              <img
                src="https://cdn.dribbble.com/users/1175431/screenshots/5483835/2018-10-30__1_.gif"
                height="10%"
                style={{ position: "absolute", zIndex: "0", marginTop: "-2%" }}
              ></img>
            </div>

            <div
              className="timeManagement__back__content"
              style={{ zIndex: "50" }}
            >
              <h2 style={{ margin: "1%" }}>
                CCORE (Capture, Clarify, Organize, Reflect, Engage)
              </h2>

              <div className={classes.root}>
                <Tabs
                  orientation="vertical"
                  variant="scrollable"
                  value={value}
                  onChange={handleChange}
                  aria-label="Vertical tabs example"
                  className={classes.tabs}
                >
                  <Tab label="Capture" {...a11yProps(0)} />
                  <Tab label="Clarify" {...a11yProps(1)} />
                  <Tab label="Organize" {...a11yProps(2)} />
                  <Tab label="Reflect" {...a11yProps(3)} />
                  <Tab label="Engage" {...a11yProps(4)} />
                </Tabs>
                <TabPanel
                  value={value}
                  index={0}
                  style={{ marginTop: "-15px" }}
                >
                  <h3>Capture</h3>
                  <br />
                  <ul>
                    <li>
                      Your mind is for generating ideas, not storing them. When
                      you use your brain as a to-do list, you start feeling
                      overwhelmed, stressed or less productive.
                    </li>
                    <li>
                      You need a system to off-load your thoughts/tasks, so just
                      simply write it down.
                    </li>
                    <li>Tools - Notepad, Voice Recorder, Email Inboxes</li>
                    <li>Apps - Things (App store), Notion, OneNote</li>
                  </ul>
                  <br />
                  Note - Use a centralised system and use it for everything.
                  Don’t keep switching applications. Capture EVERY. SINGLE.
                  THING. 100%.
                </TabPanel>
                <TabPanel
                  value={value}
                  index={1}
                  style={{ marginTop: "-15px" }}
                >
                  <h3>Clarify</h3>
                  <br />
                  <ul>
                    <li>
                      Procrastination comes from not clearly defining your next
                      steps.
                    </li>
                    <li>Not your generic to-do list -&gt; define clearly.</li>
                    <li>Convert to-do lists into action words</li>
                  </ul>
                </TabPanel>
                <TabPanel
                  value={value}
                  index={2}
                  style={{ marginTop: "-15px" }}
                >
                  <h3>Organize</h3>
                  <br />
                  <p>You'll need:</p>
                  <ul>
                    <li>A calendar</li>
                    <li>A reminder list for projects.</li>
                    <li>Storage or files for project support materials.</li>
                    <li>
                      Reminder lists for your deferred and project next actions.
                    </li>
                    <li>
                      A reminder list for those actions you are waiting for from
                      others.
                    </li>
                    <li>
                      A someday/maybe list for items to consider acting on in
                      the future.
                    </li>
                  </ul>
                </TabPanel>
                <TabPanel
                  value={value}
                  index={3}
                  style={{ marginTop: "-15px" }}
                >
                  <h3>Reflect</h3>
                  <br />
                  <ul>
                    <li>
                      Cultivate the habit of doing a monthly/weekly review
                    </li>
                    <li>
                      It's where you afford yourself the opportunity to review
                      the "whole picture" of your integrated life (both personal
                      and work),
                      <br />
                      your commitments made, and things for future
                      consideration.
                    </li>
                  </ul>
                </TabPanel>
                <TabPanel
                  value={value}
                  index={4}
                  style={{ marginTop: "-15px" }}
                >
                  <h3>Engage</h3>
                  <br />
                  <p>Browse through the list in front of you, choose and...</p>
                  <img
                    src="https://www.vectorkhazana.com/assets/images/products/Nike-Just-Do-It.jpg"
                    style={{ width: "40%", height: "40%", marginLeft: "30%" }}
                  />
                </TabPanel>
              </div>
            </div>

            <div className="timeManagement__back__content">
              <Card
                className={cardClass.root}
                style={{ backgroundColor: "black", color: "white" }}
              >
                <CardContent>
                  <Typography className={cardClass.title}>
                    Tackle Small Tasks First
                  </Typography>
                  <br />
                  <Typography className={cardClass.bullet}>
                    <ul>
                      <li>Less than 2 mins task? Do it now!</li>
                      <li>
                        Prioritize your list by what can be done in a few
                        minutes and what will take longer to complete.
                      </li>
                    </ul>
                  </Typography>
                  <br />
                  <br />
                  <Typography className={cardClass.title}>
                    Only Do One Thing at a Time
                  </Typography>
                  <br />
                  <Typography className={cardClass.bullet}>
                    <ul>
                      <li>
                        This may be a hard habit to break, but it’s worth it.
                      </li>
                      <li>
                        Turn off any devices that you can. And no matter what,
                        don’t switch to another task until the one before it is
                        complete.
                      </li>
                    </ul>
                  </Typography>
                </CardContent>
              </Card>
            </div>

            <div
              className="timeManagement__back__content"
              style={{ marginTop: "0%" }}
            >
              <h2>The Eisenhower Decision Matrix</h2>
              <h6 style={{ fontWeight: "500" }}>
                <i>(Hover for more information)</i>
              </h6>
              <img
                className="matrix_image_col"
                src="https://cdn.discordapp.com/attachments/782980728207310849/793886812040462376/Capture7.PNG"
              />
              <img
                className="matrix_image_row"
                src="https://cdn.discordapp.com/attachments/782980728207310849/793890179508469770/Capture6.PNG"
              />
              <div className="grid-wrapper">
                <div className="grid-row">
                  <div className="square-wrapper">
                    <div className="square green">
                      <div className="mainText">
                        <h2>Do</h2>
                        <p>Do it now</p>
                      </div>
                      <div className="hiddenText">
                        <br />
                        <ul>
                          <li>Tasks that are both urgent and important.</li>
                          <li>
                            These tasks typically consist of crises, problems,
                            or deadlines.
                          </li>
                          <li>
                            These tasks are important for your life and career
                            and need to be done today or tomorrow at the latest.
                          </li>
                          <li>
                            You could use a timer to help you concentrate while
                            trying to get as much of them done as possible.
                          </li>
                          <li>
                            They’re tasks that require our immediate attention
                            and also work towards fulfilling our long-term goals
                            and missions in life.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="square-wrapper">
                    <div className="square blue">
                      <div className="mainText">
                        <h2>Decide</h2>
                        <p>Schedule a time to do it</p>
                      </div>
                      <div className="hiddenText">
                        <br />
                        <ul>
                          <li>
                            Tasks that don’t have a pressing deadline, but
                            nonetheless help you achieve your important
                            personal, school, and work goals as well as help you
                            fulfill your overall mission as a person.
                          </li>
                          <li>
                            These tasks are typically centered around
                            strengthening relationships, planning for the
                            future, and improving yourself.
                          </li>
                          <li>
                            You should list tasks you need to put in your
                            calendar here.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid-row">
                  <div className="square-wrapper">
                    <div className="square red">
                      <div className="mainText">
                        <h2>Delegate</h2>
                        <p>Who can do it for you?</p>
                      </div>
                      <div className="hiddenText">
                        <br />
                        <ul>
                          <li>
                            Tasks that require our attention now (urgent), but
                            don’t help us achieve our goals or fulfill our
                            mission (not important).
                          </li>
                          <li>
                            Most of these tasks are interruptions from other
                            people and often involve helping them meet their own
                            goals and fulfill their own priorities.
                          </li>
                          <li>
                            Keep track of delegated tasks by e-mail, telephone
                            or within a meeting to check back on their progress
                            later.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="square-wrapper">
                    <div className="square grey">
                      <div className="mainText">
                        <h2>Delete</h2>
                        <p>Eliminate it</p>
                      </div>
                      <div className="hiddenText">
                        <br />
                        <ul>
                          <li>
                            Tasks that aren’t urgent and aren’t important.
                          </li>
                          <li>
                            These activities aren’t pressing nor do they help
                            you achieve long-term goals or fulfill your mission
                            as a man.
                          </li>
                          <li>They’re primarily distractions.</li>
                          <li>
                            Discover and stop bad habits, like surfing the
                            internet without a reason or gaming too long, these
                            give you an excuse for not being able to deal with
                            important tasks
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="timeManagement__back__content">
              <h2 className="textCard" style={{ marginTop: "0%" }}>
                &#x25D6;Special Tips&#x25D7;
              </h2>
              <Card className={cardClass.root} id="inboxCard">
                <CardContent>
                  <Typography className={cardClass.title}>
                    Reach Inbox Zero
                  </Typography>
                  <br />
                  <Typography className={cardClass.bullet}>
                    &#x25CF; Divide inbox into tabs: Primary, Social, Promotions
                    <br />
                    &#x25CF; Add label: Google Classroom, Coding,
                    Internship/Placement, Project, Urgent, etc.(your choice)
                    <br />
                    &#x25CF; Do this on the VERY FIRST day! You won't be able to
                    come back to this situation (@Freshers you have a chance!)
                    <img
                      className="memeImage"
                      src="https://memegenerator.net/img/instances/47021039.jpg"
                    ></img>
                    <br />
                    &#x25CF; Add a mail tracker
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="button_div">
            <Button
              className="reverseButton"
              variant="contained"
              onClick={handleClick}
            >
              I don't belong here
            </Button>
          </div>
        </Card>
      </ReactCardFlip>
    </div>
  );
}

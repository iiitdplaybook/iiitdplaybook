import React from "react";
import {useState} from "react";
import Navbar from '../Navbar'
import './TimeManagement.css'
import {
    Button,
    GridList,
    GridListTile,
  } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import itemsList from "../items"
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import ReactCardFlip from 'react-card-flip';
import Switch from "react-switch";

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
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      display: 'flex',
      height: 240,
      alignSelf: "start",
    },
    tabs: {
      borderRight: `1px solid ${theme.palette.divider}`,
    },
  }));

export default function TimeManagement() {
    // const [isFavText, setIsFavText] = useState("Add to Favourites");

    // function toggleFav(){
    //     isFav = isFav?false:true;
    //     var text = isFav?"Remove from Favs":"Add to Favs";
    //     setIsFavText(text);
    // }
    const [clickedButton, setClickedButton] = useState(1);
    const [isFlipped, setIsFlipped] = useState(false);
    const [value, setValue] = React.useState(0);
    const classes = useStyles();

    // const useStyles = makeStyles({
    //     root:{
    //         height:280
    //     },
    // });

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
      };

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

    const cardStyles = makeStyles({
        root: {
            marginTop: '2%',
            minWidth: 275,
            backgroundColor: '#C4C4C4',
            borderRadius: '10px',
          },
          bullet: {
            display: 'inline-block',
            margin: '0 1%',
            fontFamily: 'Poppins', 
          },
          title: {
            fontSize: 20,
            fontWeight: 800,
            fontFamily: 'Poppins',
            textAlign: 'center',
          },
    })

    const buttonClass = buttonStyles();
    const gridClass = useStyles();
    const cardClass = cardStyles();

    const changeS = (s) => {
        setClickedButton(s);
    };

    const itemCards = itemsList();

    return(
        <div className='timeManagement'>
            {/* <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                <Button onClick={toggleFav} style={{ marginLeft: "auto" }} >{isFavText}</Button>
            </div> */}
            <Navbar loggedIn={true} colorStatus={true}/>
            
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

            <div className='timeManagement__back'>
                <div className='timeManagement__back__heading'>
                    <h1>GUIDE TO BECOMING A PRODUCTIVITY NINJA</h1>
                </div>

                {/* <div className='timeManagement__back__testimonies'>
                    <div className='timeManagement__back__testimonies__buttons'>
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

                    <div className='timeManagement__back__testimonies__text'>
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
                </div> */}

                <div className='timeManagement__back__content'>
                    <h2>CCORE (Capture, Clarify, Organize, Reflect, Engage)</h2>

                    <div className={classes.root}>
                        <Tabs
                            orientation="vertical"
                            variant="scrollable"
                            // indicatorColor="#000"
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
                        <TabPanel value={value} index={0}>
                            <h3>Capture</h3>
                            <ul>
                                <li>Your mind is for generating ideas, not storing them. When you use your brain as a to-do list, you start feeling overwhelmed, stressed or less productive. 
                                <br/>You need a system to off-load your thoughts/tasks, so just simply write it down.</li>
                                <li>Apps - Things (App store), Notion</li>
                            </ul>
                            <br></br>
                            Note - Use a centralised system and use it for everything. Don’t keep switching applications. Capture EVERY. SINGLE. THING. 100%.
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <h3>Clarify</h3>
                            <ul>
                                <li>Procrastination comes from not clearly defining your next steps.</li>
                                <li>Not your generic to-do list -`&gt;` define clearly. (photo about before after, phone list screenshot)</li>
                                <li>Convert to-do lists into action words</li>
                            </ul>
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            <h3>Organize</h3>
                            <ul>
                                <li>Google chrome, create folder, helps a ton. “Design” “Job” “college” etc.</li>
                                <li>Evernote/Notion</li>
                            </ul>
                        </TabPanel>
                        <TabPanel value={value} index={3}>
                            <h3>Reflect</h3>
                            <ul>
                                <li>Montly/Weekly reviews</li>
                            </ul>
                        </TabPanel>
                        <TabPanel value={value} index={4}>
                            <h3>Engage</h3>
                            <ul>
                            <li>Now actually DO IT :)</li>
                            <li>Browse through the list in front of you, choose and just do it.</li>
                            </ul>
                        </TabPanel>
                    </div>
                </div>

                <div className='timeManagement__back__content'> 
                    <Card className={cardClass.root}>
                        <CardContent>
                            <Typography className={cardClass.title}>
                                Tackle Small Tasks First
                            </Typography>
                            <br/>
                            <Typography  className={cardClass.bullet}>
                                - Less than 2 mins task? Do it now!
                                <br/>
                                - Prioritize your list by what can be done in a few minutes and what will take longer to complete.
                                <br/>
                            </Typography>
                            <br/><br/>
                            <Typography className={cardClass.title}>
                                Only Do One Thing at a Time
                            </Typography>
                            <br/>
                            <Typography  className={cardClass.bullet}>
                                - Turn off any devices that you can. And no matter what, don’t switch to another task until the one before it is complete.
                                <br/>
                                - This may be a hard habit to break, but it’s worth it.
                                <br/>
                            </Typography>
                        </CardContent>
                    </Card>
                </div>

                <div className='timeManagement__back__content'> 
                    <h2>The Eisenhower Decision Matrix</h2>

                    <div className="grid-wrapper">
                        <div className="grid-row">
                            <div className="square-wrapper">
                                <div className="square green">
                                    <div className='mainText'> 
                                        <h2>Do</h2>
                                        <p>Do it now</p>
                                    </div>
                                    <div className='hiddenText'>
                                        <br/>
                                        <ul>
                                            <li>Quadrant 1 tasks are both urgent and important.</li>
                                            <li>They’re tasks that require our immediate attention and also work towards fulfilling our long-term goals and missions in life.</li>
                                            <li>Quadrant 1 tasks typically consist of crises, problems, or deadlines.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="square-wrapper">
                                <div className="square blue">
                                    <div className='mainText'>
                                        <h2>Decide</h2>
                                        <p>Schedule a time to do it</p>
                                    </div>
                                    <div className='hiddenText'>
                                        <br/>
                                        <ul>
                                            <li>Quadrant 2 tasks are the activities that don’t have a pressing deadline, but nonetheless help you achieve your important personal, school, and work goals as well as help you fulfill your overall mission as a person.</li>
                                            <li>Q2 tasks are typically centered around strengthening relationships, planning for the future, and improving yourself.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid-row">
                            <div className="square-wrapper">
                                <div className="square red">
                                    <div className='mainText'>
                                        <h2>Delegate</h2>
                                        <p>Who can do it for you?</p>
                                    </div>
                                    <div className='hiddenText'>
                                        <br/>
                                        <ul>
                                            <li>Quadrant 3 tasks are activities that require our attention now (urgent), but don’t help us achieve our goals or fulfill our mission (not important).</li>
                                            <li>Most Q3 tasks are interruptions from other people and often involve helping them meet their own goals and fulfill their own priorities.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="square-wrapper">
                                <div className="square grey">
                                    <div className='mainText'>
                                        <h2>Delete</h2>
                                        <p>Eliminate it</p>
                                    </div>
                                    <div className='hiddenText'>
                                        <br/>
                                        <ul>
                                            <li>Quadrant 4 activities aren’t urgent and aren’t important.</li>
                                            <li>They’re what I like to call “dicking around” activities. Q4 activities aren’t pressing nor do they help you achieve long-term goals or fulfill your mission as a man.</li>
                                            <li>They’re primarily distractions.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='timeManagement__back__content'>
                    <h2>Special Tips</h2>
                    <Card className={cardClass.root}>
                        <CardContent>
                            <Typography className={cardClass.title}>
                                Reach Inbox Zero
                            </Typography>
                            <br/>
                            <Typography  className={cardClass.bullet}>
                                - Divide inbox into tabs: Primary, Social, Promotions
                                <br/>
                                - Add label: Google Classroom, Coding, Internship/Placement, Project, Urgent, etc.(your choice)
                                <br/>
                                - Do this on the VERY FIRST day! You won't be able to come back to this situation
                                <br/>
                                - Add a mail tracker
                            </Typography>
                        </CardContent>
                    </Card>
                </div>             
            </div>
        </div>        
    );
}

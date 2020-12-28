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
  import Typography from '@material-ui/core/Typography';

var isFav = false;


export default function TimeManagement() {
    // const [isFavText, setIsFavText] = useState("Add to Favourites");

    // function toggleFav(){
    //     isFav = isFav?false:true;
    //     var text = isFav?"Remove from Favs":"Add to Favs";
    //     setIsFavText(text);
    // }
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
            <div className='timeManagement__front'>
            </div>
            <div className='timeManagement__back'>
                <div className='timeManagement__back__heading'>
                    <h1>GUIDE TO BECOMING A PRODUCTIVITY NINJA</h1>
                </div>

                <div className='timeManagement__back__testimonies'>
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
                </div>

                <div className='timeManagement__back__content'> 
                    <h2>GENERIC CONTENT</h2>
                </div>

                <div className='timeManagement__back__content'> 
                    <h2>GENERIC CONTENT</h2>
                </div>

                <div className='timeManagement__back__content'> 
                    <h2>GENERIC CONTENT</h2>
                </div>

                <div className='timeManagement__back__content'>
                    <h2>Special Tips</h2>
                    <Card className={cardClass.root}>
                        <CardContent>
                            <Typography className={cardClass.title}>
                                Reach Inbox Zero
                            </Typography>
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

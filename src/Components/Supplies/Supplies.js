/** @format */

import "./Supplies.css";
import React, { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  Typography,
  CardActionArea,
  CardActions,
  CardMedia,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Iframe from 'react-iframe'
import ProductCard from 'react-ui-cards'
import itemsList from "./itemsSupplies"
import Navbar from "../Navbar";


// function showLink(){
//     let body = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ac&ref=tf_til&ad_type=product_link&tracking_id=dharamshala-21&marketplace=amazon&region=IN&placement=B00TIK8956&asins=B00TIK8956&linkId=828142b5d41469575d79b2f5dd5886b1&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff"></iframe>'
//     return (
//         <div>
//             <div  dangerouslySetInnerHTML={{__html: body}} />
//         </div>
//     )
// }
// function render() {
//     let style = {
//       width: '160px',
//       height: '600px'
//     };
//     return (
//         <iframe
//         title="Amazon Connected Home"
//         style={style}
//         marginWidth="0"
//         marginHeight="0"
//         scrolling="no"
//         frameBorder="0"
//         //src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=notapplicab0b-21&language=en_IN&marketplace=amazon&region=IN&placement=B01GO1633Q&asins=B01GO1633Q&linkId=0cebf7cafed9a4ba45db73eec780c696&show_border=true&link_opens_in_new_window=true"
//         src="https://www.youtube.com"
//       />
//     )
// }

function Supplies() {
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

    // const items = [];
    const itemCards = itemsList();

    // for (let index = 0; index < 5; index++) {
    //     items.push(
    //         <Card className={classes.root}>
    //             <CardActionArea>
    //                 <CardMedia
    //                     className={classes.media}
    //                     image={wazzup}
    //                     title="Pabitra"
    //                 />
    //                 <CardContent>
    //                     <Typography gutterBottom variant="h6" component="h2">
    //                     Rechargeable LED Touch Desk Lamp {index}
    //                     </Typography>
    //                 </CardContent>
    //             </CardActionArea>
    //         </Card>
    //     );
    // }

    const changeS = (s) => {
        setClickedButton(s);
    };


    // const body = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ac&ref=tf_til&ad_type=product_link&tracking_id=dharamshala-21&marketplace=amazon&region=IN&placement=B00TIK8956&asins=B00TIK8956&linkId=828142b5d41469575d79b2f5dd5886b1&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff"></iframe>'

    return (
        <div className="supplies">
            <Navbar loggedIn={localStorage.getItem("isSignedIn")} colorStatus={true}/>
            {/* {!localStorage.getItem("isSignedIn") ? (<Navbar loggedIn={true} colorStatus={true}/>) : ()} */}
            <h2 className='supplies_heading' style={{textAlign: 'center', margin: '4%'}}>A collection of things that students use in college</h2>

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
                    Tech Accessories
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
                    <div className="cardsDiv_supply">
                        {itemCards["allCards"]}
                    </div>
                    
                ) : clickedButton === 2 ? (
                    <div className="cardsDiv_supply">
                        {itemCards["stationaryCards"]}
                    </div>
                ) : clickedButton === 3 ? (
                    <div className="cardsDiv_supply">
                        {itemCards["laptopsCards"]}
                    </div>
                ) : clickedButton === 4 ? (
                    <div className="cardsDiv_supply">
                        {itemCards["techotherCards"]}
                    </div>
                ) : clickedButton === 5 ? (
                    <div className="cardsDiv_supply">
                        {itemCards["roomCards"]}
                    </div>
                ) : (
                    <div className="cardsDiv_supply">
                        {itemCards["otherCards"]}
                    </div>
                )}
                
            </div>
        </div>
    );
  }

export default Supplies;
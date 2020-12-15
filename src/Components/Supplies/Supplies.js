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
import wazzup from "../../Assets/wazzup.jpg";
import Iframe from 'react-iframe'
import ProductCard from 'react-ui-cards'

function showLink(){
    let body = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ac&ref=tf_til&ad_type=product_link&tracking_id=dharamshala-21&marketplace=amazon&region=IN&placement=B00TIK8956&asins=B00TIK8956&linkId=828142b5d41469575d79b2f5dd5886b1&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff"></iframe>'
    return (
        <div>
            <div  dangerouslySetInnerHTML={{__html: body}} />
        </div>
    )
}
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

    

    const link = 'ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=notapplicab0b-21&language=en_IN&marketplace=amazon&region=IN&placement=B01GO1633Q&asins=B01GO1633Q&linkId=b053773a9f449ccb0bd6ce782eab85e8&show_border=true&link_opens_in_new_window=true'

    // const body = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ac&ref=tf_til&ad_type=product_link&tracking_id=dharamshala-21&marketplace=amazon&region=IN&placement=B00TIK8956&asins=B00TIK8956&linkId=828142b5d41469575d79b2f5dd5886b1&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff"></iframe>'

    return (
        <div className="supplies">
            <div>
            <iframe style={{width:'120px', height:'240px'}} src={link}></iframe>

            {/* <div  dangerouslySetInnerHTML={{__html: body}} /> */}

            {showLink()}

            {/* {render()} */}
            
            {/* <iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=notapplicab0b-21&language=en_IN&marketplace=amazon&region=IN&placement=B01GO1633Q&asins=B01GO1633Q&linkId=18a7ba9c2948584604c002167a004aeb&show_border=true&link_opens_in_new_window=true"></iframe> */}

            {/* <Iframe url="https://www.amazon.com/dp/B01MT11067/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B01MT11067&linkCode=as2&tag=shopmymom-20&linkId=dca6bea807c87f5af5c63cde8e88998b"
                width="450px"
                height="450px"
                id="myId"
                className="myClassname"
                display="initial"
                position="relative"/> */}
            
            {/* <Iframe url='ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=notapplicab0b-21&language=en_IN&marketplace=amazon&region=IN&placement=B01GO1633Q&asins=B01GO1633Q&linkId=b053773a9f449ccb0bd6ce782eab85e8&show_border=true&link_opens_in_new_window=true'

                width="450px"
                height="450px"
                id="myId"
                className="myClassname"
                display="initial"
                position="relative"/> */}

                
            {/* <ProductCard
            photos={wazzup}
            url="https://amzn.to/3g6eOtE"
            price='-1000'
            productName='rahul'
            description='piece of shit'
            >
            </ProductCard> */}
            
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
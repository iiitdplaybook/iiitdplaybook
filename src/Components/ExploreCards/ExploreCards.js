import React from 'react';
import {Card, CardActionArea, CardActions, CardContent, Button, Typography, CardMedia} from '@material-ui/core';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import image_svg from "../../Assets/SVG_for_cards/teamwork.svg";
import "./ExploreCards.css";
import Tilt from 'react-parallax-tilt';

function ExploreCards(exploreCardInfo){
    const cardHeight = 280
    const cardWidth = cardHeight*(2.4/3);

    var gradientColor_1;
    var gradientColor_2;
    var title;
    var n_testimonies;
    var reading_time;
    var image;
    var pathLink;
    var opacity;

    if (exploreCardInfo["title"]){
        gradientColor_1 = exploreCardInfo["gradientColor_1"];
        gradientColor_2 = exploreCardInfo["gradientColor_2"];
        title = exploreCardInfo["title"];
        n_testimonies = exploreCardInfo["n_testimonies"];
        reading_time = exploreCardInfo["reading_time"];
        image = exploreCardInfo["image"];
        pathLink = exploreCardInfo["pathLink"];
        opacity = exploreCardInfo["opacity"];

    }
    else{
        gradientColor_1 = "#e66465";
        gradientColor_2 = "#9198e5";
        title = "No Title";
        n_testimonies = "N.A.";
        reading_time = "N.A.";
        image = image_svg;
        pathLink = "explore";
        opacity = "1";
    }

    const useStyles = makeStyles({
        root: {
            maxWidth:cardWidth,
            minWidth:cardWidth,
            maxHeight:cardHeight,
            // minHeight:cardHeight,
            background:`linear-gradient(45deg, ${gradientColor_1}, ${gradientColor_2})`,
            borderRadius:10,
            opacity: `${opacity}`,
            // marginBottom: "10%",
            
        },
        actionArea:{
            width: cardWidth,
            height: cardHeight,
        },
        link:{
            margin:"0%",
        },
        media: {
            maxWidth:cardWidth,
            minHeight:120,
            margin: '10%',
            marginBottom: '0%',            
        },
        title: {
            fontSize: 20,
            fontFamily: 'Poppins',
            fontWeight:"bold",
            textAlign: "center",
            color: "#ffffff",
        },
        info:{
            fontSize: 12,
            textAlign: "center",
            margin: "5%",
            color: "#e6e6e6"
        },
    });
    const classes = useStyles();
    return(
        <Tilt>
            <Card className={classes.root}>
                <Link className={classes.link} to={`/${pathLink}`}>
                <CardActionArea className={classes.actionArea}>
                
                    <CardMedia
                        className={classes.media}
                        image={image}
                        title={title}
                    />
                    
                    <CardContent>
                        <Typography className={classes.title} style={{whiteSpace: 'pre-line'}}>
                            {title}
                        </Typography>
                        <Typography className={classes.info} color="textSecondary">
                            {n_testimonies} Testimonies | {reading_time} min
                        </Typography>
                    </CardContent>
                </CardActionArea>
                </Link>
            </Card>
        </Tilt>
       
    );
}

export default ExploreCards;
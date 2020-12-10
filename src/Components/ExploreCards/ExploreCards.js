import React from 'react';
import {Card, CardActionArea, CardActions, CardContent, Button, Typography, CardMedia} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import image_svg from "../../Assets/SVG_for_cards/teamwork.svg";

function ExploreCards(exploreCardInfo){
    const cardHeight = 280
    const cardWidth = cardHeight*(2.1/3);

    var gradientColor_1;
    var gradientColor_2;
    var title;
    var n_testimonies;
    var reading_time;
    var image;

    if (exploreCardInfo["title"]){
        gradientColor_1 = exploreCardInfo["gradientColor_1"];
        gradientColor_2 = exploreCardInfo["gradientColor_2"];
        title = exploreCardInfo["title"];
        n_testimonies = exploreCardInfo["n_testimonies"];
        reading_time = exploreCardInfo["reading_time"];
        image = exploreCardInfo["image"];

    }
    else{
        gradientColor_1 = "#e66465";
        gradientColor_2 = "#9198e5";
        title = "No Title";
        n_testimonies = "N.A.";
        reading_time = "N.A.";
        image = image_svg;
    }

    const useStyles = makeStyles({
        root: {
            maxWidth:cardWidth,
            minWidth:cardWidth,
            maxHeight:cardHeight,
            minHeight:cardHeight,
            background:`linear-gradient(45deg, ${gradientColor_1}, ${gradientColor_2})`,
            borderRadius:10,
            margin:"3%",
        },
        actionArea:{
            
        },
        media: {
            maxWidth:cardWidth,
            minHeight:100,
            margin: '10%',
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
        },
    });
    const classes = useStyles();
    return(
       <Card className={classes.root}>
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
       </Card>
    );
}

export default ExploreCards;
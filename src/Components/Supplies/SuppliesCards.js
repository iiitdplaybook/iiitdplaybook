import React from 'react';
import {Card, CardActionArea, CardActions, CardContent, Button, Typography, CardMedia} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const image_svg = "https://cdn.statically.io/gh/PabitraBansal/StudentPlaybook/6d20d536/src/Assets/SVG_for_cards/teamwork.svg";

function SuppliesCards(supplyCardInfo){
    const cardHeight = 280
    const cardWidth = cardHeight*(2.5/3);

    var gradientColor_1;
    var gradientColor_2;
    var title;
    var description;
    var image;
    var pathLink;

    if (supplyCardInfo["title"]){
        gradientColor_1 = supplyCardInfo["gradientColor_1"];
        gradientColor_2 = supplyCardInfo["gradientColor_2"];
        title = supplyCardInfo["title"];
        description = supplyCardInfo["description"];
        image = supplyCardInfo["image"];
        pathLink = supplyCardInfo["pathLink"];

    }
    else{
        gradientColor_1 = "#e66465";
        gradientColor_2 = "#9198e5";
        title = "No Title";
        description = "N.A";
        image = image_svg;
        pathLink = "explore";
    }

    const useStyles = makeStyles({
        root: {
            maxWidth:cardWidth,
            minWidth:cardWidth,
            maxHeight:cardHeight,
            background:`linear-gradient(45deg, ${gradientColor_1}, ${gradientColor_2})`,
            borderRadius:10,
            
        },
        actionArea:{
            width: cardWidth,
            height: cardHeight,
        },
        a:{
            margin:"0%",
        },
        media: {
            maxWidth:cardWidth,
            minHeight:150,
            margin: '10%',
            marginBottom: '2%',
        },
        title: {
            fontSize: 15,
            fontFamily: 'Poppins',
            fontWeight:"bold",
            textAlign: "center",
            color: "#141414",
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
                <a href={pathLink} target="_blank" style={{margin: '0%'}}>
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
                            {description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                </a>
            </Card>
       
    );
}

export default SuppliesCards;
import React from 'react';
import {Card, CardActionArea, CardActions, CardContent, Button, Typography, CardMedia} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const image_svg = "https://cdn.statically.io/gh/PabitraBansal/StudentPlaybook/6d20d536/src/Assets/SVG_for_cards/teamwork.svg";

function SuppliesCards(supplyCardInfo){
    const cardHeight = 280
    const cardWidth = cardHeight*(3/2);

    var gradientColor_1;
    var gradientColor_2;
    var channelName;
    var title;
    var description;
    var link;
    var image;
    var pathLink;

    if (supplyCardInfo["channelName"]){
        gradientColor_1 = supplyCardInfo["gradientColor_1"];
        gradientColor_2 = supplyCardInfo["gradientColor_2"];
        channelName = supplyCardInfo["channelName"];
        title = supplyCardInfo["title"];
        description = supplyCardInfo["description"];
        link = supplyCardInfo["link"];
        image = supplyCardInfo["image"];
        pathLink = supplyCardInfo["pathLink"];

    }
    else{
        gradientColor_1 = "#e66465";
        gradientColor_2 = "#9198e5";
        channelName = "No Name";
        title = "No Title";
        description = "N.A";
        link = "explore;"
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
            minWidth: cardWidth/2.5,
            width: 'fit-content',
            height: cardHeight,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        },
        a:{
            margin:"0%",
        },
        media: {
            minWidth:cardWidth/3,
            maxWidth:cardWidth/3,
            minHeight: cardHeight/3,
            borderRadius: '10px',
            margin: '5%',
            
        },
        channelName: {
            fontSize: 16,
            fontFamily: 'Poppins',
            fontWeight:"bold",
            textAlign: "center",
            color: "#141414",
        },
        title: {
            fontSize: 14,
            fontFamily: 'Poppins',
            fontWeight: 550,
            textAlign: "left",
            color: "#141414",
            padding: '2%',
        },
        info:{
            fontSize: 12,
            textAlign: "center",
            marginTop: "5%",
        },
        cardContainer:{
            height: cardHeight,
            width: cardWidth,
            display: "flex",
            flexDirection: "row",
        },
        contentContainer:{
            display: "flex",
            flexDirection: "column",
            justifyContent: 'center',
            width:'50%',
            overflowY: 'scroll',
            '&::-webkit-scrollbar': {
                display: 'none',
              }
            },
    });
    const classes = useStyles();

    var playList = [] 
    for (let index=0; index<title.length;index++)
    {
        playList.push(
            <div id="linkCard" style={{borderBottom: '1px solid #E6E6E6'}}> 
                <a  href={link[index]} target="_blank" style={{margin: '0%'}}>
                    <Typography className={classes.title} style={{whiteSpace: 'pre-line'}}>
                        {title[index]}
                    </Typography>
                </a>
            </div>
        )
    }

    return(
        <Card className={classes.root}>
            <div className={classes.cardContainer}>
                <a href={pathLink} target="_blank" style={{margin: '0%'}}>
                    <CardActionArea className={classes.actionArea}>
                        <Typography className={classes.channelName} style={{whiteSpace: 'pre-line'}}>
                            {channelName}
                        </Typography>
                        <CardMedia
                            className={classes.media}
                            image={image}
                            title={channelName}
                        />
                    </CardActionArea>
                </a>
                <CardContent className={classes.contentContainer}>
                    {playList}
                </CardContent>
                </div>
        </Card>
    );
}

export default SuppliesCards;
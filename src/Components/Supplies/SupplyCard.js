import React from 'react';
import {Card, CardActionArea, CardActions, CardContent, Button, Typography, CardMedia} from '@material-ui/core';
import { Link } from 'react-router-dom';
import times from "lodash/times";
import { makeStyles } from '@material-ui/core/styles';
import image_svg from "../../Assets/SVG_for_cards/teamwork.svg";

function SuppliesCards({supplyCardList}){
    const cardHeight = 280
    const cardWidth = cardHeight*(2.5/3);

    var gradientColor_1 = [];
    var gradientColor_2 = [];
    var title = [];
    var description = [];
    var image = [];
    var pathLink = [];

    const color1 = "#fff";
    const color2 = "#fafafa";

    supplyCardList.forEach(element => {
        if (element.Title){
            // gradientColor_1.push(element["gradientColor_1"]);
            // gradientColor_2.push(element["gradientColor_2"]);
            gradientColor_1.push(color1);
            gradientColor_2.push(color2);
            title.push(element.Title);
            description.push(element.Desc);
            image.push(element.Image);
            pathLink.push(element.Path);
    
        }
        else{
            gradientColor_1.push(color1);
            gradientColor_2.push(color2);
            title.push("No Title");
            description.push("N.A");
            image.push(image_svg);
            pathLink.push("explore");
        }
    });

    const useStyles = makeStyles({
        root: {
            maxWidth:cardWidth,
            minWidth:cardWidth,
            maxHeight:cardHeight,
            // minHeight:cardHeight,
            // background:`linear-gradient(45deg, ${gradientColor_1}, ${gradientColor_2})`,
            borderRadius:10,
            // marginBottom: "10%",
            
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
            // maxHeight:100,
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
                    times(supplyCardList.length, String).map((id) => (
                        <Card className={classes.root} style={{background: `linear-gradient(45deg, ${gradientColor_1[id]}, ${gradientColor_2[id]})`}}>
                            <a href={pathLink[id]} target="_blank" style={{margin: '0%'}}>
                            {/* <Link className={classes.link} href={pathLink} > */}
                            <CardActionArea className={classes.actionArea}>
                                <CardMedia
                                    className={classes.media}
                                    image={image[id]}
                                    title={title[id]}
                                />
                                <CardContent>
                                    <Typography className={classes.title} style={{whiteSpace: 'pre-line'}}>
                                        {title[id]}
                                    </Typography>
                                    <Typography className={classes.info} color="textSecondary">
                                        {description[id]}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            </a>
                            {/* </Link> */}
                        </Card>
                    ))
    );
}

export default SuppliesCards;
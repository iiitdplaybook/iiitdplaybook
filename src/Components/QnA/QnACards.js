import React, { useState, useEffect } from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  Button,
  Typography,
  CardMedia,
  Tooltip,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

function QnACard({ item}) {
  const cardHeight = 280;
  const cardWidth = cardHeight * (2.5 / 3);

//   const color1 = '#fff';
//   const color2 = '#fafafa';

  const color1 = '#9F4EAD'; //purple
  const color2 = '#EEB86D'; //yellow

  const color3 = '#2FB8FF'; //sea blue
  const color4 = '#95E8DC'; //sea green

  const color5 = '#9F7FE5'; //purple
  const color6 = '#5497E3'; //blue

  const color7 = '#236FDC'; //dark blue
  const color8 = '#4BBEFF'; //light blue

  const color9 = '#4A90F3'; //blue
  const color10 = '#7EF29D'; //green

  const color11 = '#412FAF'; //dark blue
  const color12 = '#50C1E8'; //light blue

  const color13 = '#181C33'; //blackish
  const color14 = '#4F4181'; //blackish purple

  const color15 = '#2587A6'; //dark turquoise
  const color16 = '#6FF7E8'; //light turquoise

  const color17 = '#F57F36'; //light yellow
  const color18 = '#FFD78A'; //dark yellow

  const color19 = '#BD5D94'; //pink
  const color20 = '#17086E'; //dark blue

  const color21 = '#5C0DB1'; //dark purple
  const color22 = '#DBCCFF'; //light purple

  const useStyles = makeStyles({
    root: {
      display: 'inline-block',
      maxWidth: cardWidth,
      minWidth: cardWidth,
      maxHeight: cardHeight,
      background: `linear-gradient(45deg, ${color1}, ${color2})`,
      borderRadius: 10,
    },
    actionArea: {
      width: cardWidth,
      height: cardHeight,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    media: {
      maxWidth: 120,
      maxHeight: 120,
      border: 'none',
      display: 'block',
      margin: '0 auto',
      objectFit: 'contain',
      paddingTop: '30px',
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 15,
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#141414',
    },
    info: {
      fontSize: 12,
      textAlign: 'center',
      margin: '5%',
    },
    button: {
      color: '#23a6d5',
      border: '1px solid #23a6d5',
      fontSize: '11px',
      margin: '5px',
      marginLeft: '10px',
      marginBottom: '10px',
      padding: '5px 7px !important',
      minWidth: '30px !important',
      maxHeight: '30px !important',
      float: 'right',
      position: 'absolute',
      top: 3,
      right: 3,
      zIndex: '2',
      '&:hover': {
        backgroundColor: '#248fb6',
        color: 'white',
      },
    },
    active: {
      color: '#FFF',
      background: '#48C854',
      border: '1px solid #fff',
    },
    disabled: {
      color: 'grey',
      background: '#eee',
      border: '1px solid #C8C8C8',
    },
  });
  const classes = useStyles();

  return (
    <Card
      className={classes.root}
      style={{
        background: `linear-gradient(45deg, ${color1}, ${color2})`,
      }}
    >
      <CardActionArea className={classes.actionArea}>
        <a href={item.pathLink} target='_blank' style={{ margin: '0%', opacity: '1' }}>
          <CardMedia
            className={classes.media}
            component='img'
            src={item.image}
            title={item.title}
          />
          <CardContent className={classes.content}>
            <Typography
              className={classes.title}
              style={{ whiteSpace: 'pre-line' }}
            >
              {item.title}
            </Typography>
            <Typography className={classes.info} color='textSecondary'>
              { item.title === 'Crocin Pain Relief Tablet' ? 'Bought by everyone' : boughtByNumber === 1 ? 'Bought by ' + boughtByNumber + ' student' : 'Bought by ' + boughtByNumber + ' students' }
            </Typography>
          </CardContent>
        </a>
      </CardActionArea>
    </Card>
  );
}

export default QnACard;
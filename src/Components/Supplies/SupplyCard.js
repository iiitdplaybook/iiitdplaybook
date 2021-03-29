import React, { useState, useEffect } from 'react';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Button,
  Typography,
  CardMedia,
  Tooltip,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import firebase from 'firebase';
import './Supplies.css';
import { LiveTvOutlined } from '@material-ui/icons';

function SupplyCard({ item, uid }) {
  const cardHeight = 280;
  const cardWidth = cardHeight * (2.5 / 3);

  const [clicked, setClicked] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [boughtByNumber, setBoughtByNumber] = useState(0);

  const color1 = '#fff';
  const color2 = '#fafafa';

  const initialiseData = () => {
    if (item.title) {
      setBoughtByNumber(item.boughtBy.length);
      setClicked(item.boughtBy.includes(uid));
      setDisabled(uid === '');
    }
  };

  useEffect(() => {
    initialiseData();
  }, [item.boughtBy]);

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
      // fontFamily: 'Poppins',
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

  const handleClick = () => {
    const clickState = !clicked;
    setClicked(clickState);

    if (clickState) addUserItem();
    else deleteUserItem();
  };

  const deleteUserItem = async () => {
    const ind = item.boughtBy.indexOf(uid);
    setBoughtByNumber(boughtByNumber - 1);
    item.boughtBy.splice(ind, 1);

    const userItemRef = firebase
      .database()
      .ref('Supplies/' + item.key + '/boughtBy');
    userItemRef.child(ind).remove();
  };

  const addUserItem = async () => {
    const userItemRef = firebase.database().ref('Supplies/' + item.key);
    setBoughtByNumber(boughtByNumber + 1);
    item.boughtBy.push(uid);

    userItemRef.set({
      boughtBy: [...item.boughtBy],
      description: item.description,
      image: item.image,
      pathLink: item.pathLink,
      title: item.title,
      category: item.category,
    });
  };

  return (
    <Card
      className={classes.root}
      style={{
        background: `linear-gradient(45deg, ${color1}, ${color2})`,
      }}
    >
      <CardActionArea className={classes.actionArea}>
        <Tooltip title="I've bought this">
          {disabled ? (
            <Button
              size='small'
              className={`${classes.button} ${classes.disabled}`}
              disabled
            >
              +1
            </Button>
          ) : (
            <Button
              size='small'
              className={
                clicked ? `${classes.button} ${classes.active}` : classes.button
              }
              onClick={handleClick}
            >
              +1
            </Button>
          )}
        </Tooltip>
        <a href={item.pathLink} target='_blank' style={{ margin: '0%' }}>
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
              {'Bought by ' + boughtByNumber + ' students'}
            </Typography>
          </CardContent>
        </a>
      </CardActionArea>
    </Card>
  );
}

export default SupplyCard;

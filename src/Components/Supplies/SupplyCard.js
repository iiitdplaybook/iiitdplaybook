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
      // minHeight:cardHeight,
      // background:`linear-gradient(45deg, ${gradientColor_1}, ${gradientColor_2})`,
      borderRadius: 10,
      // marginBottom: "10%",
    },
    actionArea: {
      width: cardWidth,
      height: cardHeight,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    a: {
      margin: '0%',
    },
    media: {
      maxWidth: 120,
      maxHeight: 120,
      // minHeight: 100,
      // maxHeight:100,
      // height: 0,
      margin: '10%',
      marginBottom: '2%',
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 15,
      fontFamily: 'Poppins',
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#141414',
      // borderBottom: '1px solid',
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
      position: 'absolute',
      top: 3,
      right: 3,
    },
    activeButton: {
      color: '#FFF',
      background: '#48C854',
      fontSize: '11px',
      margin: '5px',
      marginLeft: '10px',
      marginBottom: '10px',
      padding: '5px 7px !important',
      minWidth: '30px !important',
      maxHeight: '30px !important',
      position: 'absolute',
      top: 3,
      right: 3,
    },
    disabledButton: {
      color: 'grey',
      background: '#eee',
      border: '1px solid #C8C8C8',
      fontSize: '11px',
      margin: '5px',
      marginLeft: '10px',
      marginBottom: '10px',
      padding: '5px 7px !important',
      minWidth: '30px !important',
      maxHeight: '30px !important',
      position: 'absolute',
      top: 3,
      right: 3,
    },
  });
  const classes = useStyles();

  const handleClick = () => {
    if (!disabled) {
      const clickState = !clicked;
      setClicked(clickState);

      if (clickState) addUserItem();
      else deleteUserItem();
    }
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
        <div className={classes.container}>
          <CardMedia
            className={classes.media}
            component='img'
            src={item.image}
            title={item.title}
          />
          <Tooltip title="I've bought this">
            {disabled ? (
              <Button size='small' className={classes.disabledButton} disabled>
                +1
              </Button>
            ) : (
              <Button
                size='small'
                className={clicked ? classes.activeButton : classes.button}
                onClick={handleClick}
              >
                +1
              </Button>
            )}
          </Tooltip>
        </div>
        <CardContent className={classes.content}>
          <a href={item.pathLink} target='_blank' style={{ margin: '0%' }}>
            <Typography
              className={classes.title}
              style={{ whiteSpace: 'pre-line' }}
            >
              {item.title}
            </Typography>
          </a>
          <Typography className={classes.info} color='textSecondary'>
            {'Bought by ' + boughtByNumber + ' students'}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default SupplyCard;

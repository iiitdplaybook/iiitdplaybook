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
import { Link } from 'react-router-dom';
import times from 'lodash/times';
import { makeStyles } from '@material-ui/core/styles';
import image_svg from '../../Assets/SVG_for_cards/teamwork.svg';
import { grey } from '@material-ui/core/colors';
import firebase from 'firebase';

function SupplyCard({ supplyCardList, user, category }) {
  const cardHeight = 280;
  const cardWidth = cardHeight * (2.5 / 3);
  const imgWidth = cardWidth - 30;

  const [boughtByNumber, setBoughtByNumber] = useState([]);
  const bbn = [];

  const color1 = '#fff';
  const color2 = '#fafafa';

  const initialiseData = () => {
    supplyCardList.forEach((element) => {
      if (element.title) {
        bbn.push(element.boughtBy.length); 
      }
    });
    setBoughtByNumber(bbn);
  };

  useEffect(() => {
    initialiseData();
    setBoughtByNumber(bbn);
  }, [supplyCardList]);


  const useStyles = makeStyles({
    root: {
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
    container: {
      // width: '90%',
      // display: 'flex',
      // justifyContent: 'space-between',
    },
  });
  const classes = useStyles();

  const userBoughtItem = (id) => {

    addUserItem(supplyCardList[id], user.uid, id);
    bbn[id]++;
    setBoughtByNumber(bbn);
  };

  const addUserItem = async (item, uid, id) => {
    const itemListRef = firebase
      .database()
      .ref('Supplies/' + category + '/' + id);

    // itemListRef.on('value', (snapshot) => {
    //   const data = snapshot.val();
    //   console.log(data.boughtBy);
    // });
    itemListRef.set({
      boughtBy: [...item.boughtBy, uid],
      description: item.description,
      gradientColor_1: color1,
      gradientColor_2: color2,
      image: item.image,
      pathLink: item.pathLink,
      title: item.title,
    });
  };

  return supplyCardList.map((item, id) => {
    return (
      <Card
        className={classes.root}
        style={{
          background: `linear-gradient(45deg, ${color1}, ${color2})`,
        }}
      >
        {/* <Link className={classes.link} href={pathLink} > */}
        <CardActionArea className={classes.actionArea}>
          <div className={classes.container}>
            <CardMedia
              className={classes.media}
              component='img'
              src={item.image}
              title={item.title}
            />
            <Tooltip title="I've bought this">
              <Button
                size='small'
                className={classes.button}
                onClick={() => userBoughtItem(id)}
              >
                +1
              </Button>
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
              {'Bought by ' + boughtByNumber[id] + ' students'}
            </Typography>
          </CardContent>
        </CardActionArea>
        {/* </Link> */}
      </Card>
    );
  });
}

export default SupplyCard;

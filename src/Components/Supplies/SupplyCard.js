import React from 'react';
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

function SupplyCard({ supplyCardList }) {
  const cardHeight = 280;
  const cardWidth = cardHeight * (2.5 / 3);
  const imgWidth = cardWidth - 30;

  var gradientColor_1 = [];
  var gradientColor_2 = [];
  var title = [];
  var description = [];
  var image = [];
  var pathLink = [];

  const color1 = '#fff';
  const color2 = '#fafafa';

  supplyCardList.forEach((element) => {
    if (element.Title) {
      // gradientColor_1.push(element["gradientColor_1"]);
      // gradientColor_2.push(element["gradientColor_2"]);
      gradientColor_1.push(color1);
      gradientColor_2.push(color2);
      title.push(element.Title);
      description.push(element.Desc);
      image.push(element.Image);
      pathLink.push(element.Path);
    } else {
      gradientColor_1.push(color1);
      gradientColor_2.push(color2);
      title.push('No Title');
      description.push('N.A');
      image.push(image_svg);
      pathLink.push('explore');
    }
  });

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
  return times(supplyCardList.length, String).map((id) => {
    return (
      <Card
        className={classes.root}
        style={{
          background: `linear-gradient(45deg, ${gradientColor_1[id]}, ${gradientColor_2[id]})`,
        }}
      >
        {/* <Link className={classes.link} href={pathLink} > */}
        <CardActionArea className={classes.actionArea}>
          <div className={classes.container}>
            <CardMedia
              className={classes.media}
              component='img'
              src={image[id]}
              title={title[id]}
            />
            <Tooltip title="I've bought this">
              <Button size='small' className={classes.button}>
                +1
              </Button>
            </Tooltip>
          </div>
          <CardContent className={classes.content}>
            <a href={pathLink[id]} target='_blank' style={{ margin: '0%' }}>
              <Typography
                className={classes.title}
                style={{ whiteSpace: 'pre-line' }}
              >
                {title[id]}
              </Typography>
            </a>
            <Typography className={classes.info} color='textSecondary'>
              {description[id]}
            </Typography>
          </CardContent>
        </CardActionArea>
        {/* </Link> */}
      </Card>
    );
  });
}

export default SupplyCard;

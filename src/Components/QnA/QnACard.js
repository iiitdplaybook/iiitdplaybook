import React, { useState } from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
  CardMedia,
  Link,
} from '@material-ui/core';
import { GoVerified } from 'react-icons/go';
import { IconContext } from 'react-icons';

import { makeStyles } from '@material-ui/core/styles';
import { truncate } from 'lodash';
import './QnA.css';

function QnACard({ card, colors }) {
  const cardHeight = 250;
  const cardWidth = cardHeight * (2.5 / 3);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const useStyles = makeStyles({
    root: {
      display: 'inline-block',
      maxWidth: cardWidth,
      minWidth: cardWidth,
      maxHeight: cardHeight,
      background: `linear-gradient(45deg, ${colors[0]}, ${colors[1]})`,
      borderRadius: 10,
    },
    actionArea: {
      width: cardWidth,
      height: cardHeight,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    question: {
      fontSize: '20px',
      color: '#fff',
      fontWeight: '900',
      textAlign: 'center',
      fontFamily: '"Poppins", "sans-serif"',
    },
    subheading: {
      fontFamily: 'Poppins, sans-serif !important',
      fontWeight: '700',
      color: '#222',
      alignSelf: 'baseline !important',
    },
    cardImg: {
      marginTop: '10px',
      maxWidth: '100%',
      maxHeight: '100%',
      width: '180px',
      height: 'auto',
    },
    dialog: {
      fontFamily: 'Poppins, sans-serif !important',
      margin: '0 auto',
    },
    dialogText: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    title: {
      fontFamily: 'Poppins, sans-serif !important',
      fontWeight: '700 !important',
      textAlign: 'center',
      color: '#000',
    },
    subtitle: {
      fontFamily: 'Poppins, sans-serif !important',
      fontSize: '11px',
      textAlign: 'center',
      color: '#3FADA8',
    },
    divider: {
      padding: '5px',
      maxWidth: '350px',
    },
    answer: {
      fontFamily: 'Poppins, sans-serif !important',
      width: '500px',
      position: 'relative',
      background: '#fff',
      boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.1)',
      borderRadius: '10px',
      padding: '10px',
      margin: '10px 0',
      color: '#000',
      fontSize: '12px',
      transition: 'all 0.2s ease-in-out',
      '&:hover': {
        textDecoration: 'none !important',
        background: '#eeeeee',
      },
      ['@media (max-width:600px)']: {
        width: 'auto',
      },
    },
    link: {
      textDecoration: 'none',
      color: '#000',
      opacity: '1',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      '&:hover': {
        textDecoration: 'none',
      },
      ['@media (max-width:600px)']: {
        flexDirection: 'column',
      },
    },
    invisible: {
      visibility: 'hidden !important',
    },
    answerImage: {
      display: 'block',
      objectFit: 'cover',
      maxWidth: '100%',
      maxHeight: '95px',
      width: '-webkit-fill-available',
      height: 'auto',
      marginRight: '5px',
    },
    verified: {
      position: 'absolute',
      top: '10px',
      right: '10px',
    },
    subscribe: {
      textAlign: 'center',
      margin: '10px 0',
    },
  });
  const classes = useStyles();

  return (
    <>
      <Card className={classes.root} onClick={handleClickOpen}>
        <CardActionArea className={classes.actionArea}>
          <CardMedia
            src={
              'https://dummyimage.com/150x100/' +
              colors[0].substring(1) +
              '/' +
              colors[1].substring(1) +
              '.png&text=placeholder'
            }
            component='img'
            className={classes.cardImg}
          />
          <CardContent className={classes.content}>
            <Typography
              className={classes.question}
              style={{ whiteSpace: 'pre-line' }}
            >
              {card.question}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Dialog
        open={open}
        onClose={handleClose}
        className={classes.dialog}
        aria-labelledby='alert-dialog-title'
        maxWidth={false}
      >
        <DialogTitle>
          <h3 className={classes.title}>{card.question}</h3>
          <IconContext.Provider value={{ color: '#3FADA8' }}>
            <div className={classes.subtitle}>
              <GoVerified style={{ marginRight: '5px' }} />
              Verified by IIITDians
            </div>
          </IconContext.Provider>
        </DialogTitle>
        <DialogContent className={classes.dialogContent} dividers={false}>
          <DialogContentText className={classes.dialogText}>
            {card.answers.map((ans, id) => (
              <div className={classes.answer}>
                <Link
                  key={id}
                  href={ans.link}
                  target='_blank'
                  className={classes.link}
                >
                  <img src={ans.image} className={classes.answerImage} />
                  <div className={classes.divider}>
                    <div className={classes.body}>
                      <h4
                        style={{
                          color: '#FF5F5F',
                          fontSize: '13px',
                          fontWeight: '600',
                        }}
                      >
                        {ans.heading}
                      </h4>
                      <p>
                        {ans.description}
                        <br />
                      </p>
                    </div>
                    <div>
                      <IconContext.Provider value={{ color: '#3FADA8' }}>
                        <div
                          className={
                            ans.verified === 'True'
                              ? classes.verified
                              : classes.invisible
                          }
                        >
                          <GoVerified />
                        </div>
                      </IconContext.Provider>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
            <img
              className={classes.subscribe}
              src='https://dummyimage.com/400x200/eee/000.png&text=subscribe+card'
            />
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default QnACard;

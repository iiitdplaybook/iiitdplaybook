import React, { useState } from 'react';
import { GoChevronRight, GoChevronLeft } from 'react-icons/go';
import { IconContext } from 'react-icons';
import Internships from './Internships';
import { makeStyles } from '@material-ui/core/styles';

{
  /* <Card
      alignment='left'
      colors={['#236FDC', ' #43AEDA']}
      image={metadata['preparation'].image}
      redirect={{
        linkType: 'link',
        link: 'https://iiitdplaybook.web.app/homepage',
      }}
      title={'Research with Professors'}
    />
    <Card
      alignment='right'
      image={metadata['preparation'].image}
      redirect={{
        linkType: 'component',
        componentName: 'resume',
      }}
      setActive={callback}
      title={'Get started with internship preparation'}
    /> */
}

const Card = ({
  alignment,
  colors = ['#04ABB0', '#03CCAC'],
  image,
  redirect,
  setActive,
  title,
}) => {
  const cardWidth = '320px';
  const cardHeight = '200px';
  const [redirectLink, setRedirectLink] = useState(null);

  const useStyles = makeStyles({
    root: {
      display: 'inline-block',
      background: `linear-gradient(90deg, ${colors[0]} -14.7%, ${colors[1]} 110.01%)`,
      borderRadius: 10,
      width: cardWidth,
      height: cardHeight,
      color: '#FFF',
      cursor: 'pointer',
    },
    link: {
      display: 'flex',
      flexDirection: alignment === 'right' ? 'row-reverse' : 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '100%',
      maxHeight: cardHeight,
      width: '90%',
      margin: '0 auto',
    },
    image: {
      maxWidth: '120px',
      maxHeight: '120px',
      margin: '0 8px',
      transform: alignment === 'right' ? 'rotateY(0deg)' : 'rotateY(180deg)',
    },
    text: {
      color: '#FFF !important',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      height: '80%',
      alignItems: alignment === 'right' ? 'flex-start' : 'flex-end',
    },
    title: {
      fontSize: '20px',
      fontWeight: '900',
      minHeight: '90px',
      textAlign: alignment === 'right' ? 'left' : 'right',
    },
    knowMore: {
      fontSize: '12px',
      display: 'flex',
      flexDirection: alignment === 'right' ? 'row-reverse' : 'row',
      alignItems: 'center',
    },
  });

  const classes = useStyles();

  const handleClick = (e) => {
    if (redirect.linkType === 'component') {
      e.preventDefault();
      // fields.push();
      setRedirectLink('#');
      setActive(redirect.componentName);
    } else {
      setRedirectLink(redirect.link);
    }
  };

  return (
    <div className={classes.root}>
      <a
        href={redirectLink}
        className={classes.link}
        onClick={(e) => handleClick(e)}
      >
        <img src={image} className={classes.image} />
        <div className={classes.text}>
          <h4 className={classes.title}>{title}</h4>
          <div className={classes.knowMore}>
            <IconContext.Provider value={{ color: '#FFF' }}>
              <div>
                {alignment === 'left' ? <GoChevronLeft /> : <GoChevronRight />}
              </div>
            </IconContext.Provider>
            <p style={{ marginBottom: '3px' }}>Know More</p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Card;

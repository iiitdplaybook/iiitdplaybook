import React from 'react';
import Creators from './Creators';
import './Footer.css';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import TeamMembers from './Team';

function Footer() {
  return (
    <div id='footer'>
      <div className='upper'>
        {localStorage.getItem('isSignedIn') ? (
          <>
            <p>
              Want to contribute? It can as small as 2 lines or big as 2 pages.
              Your contribution matters
            </p>

            <Button
              className='button2'
              component={Link}
              to={'/contribute/testimonies'}
            >
              <span className='span2'>YES! I'd like to contribute</span>
            </Button>
          </>
        ) : (
          <></>
        )}
        <p>Support Us</p>
        <div className='supportUsButtons'>
          <Button
            id='supportBtn'
            target='_blank'
            href='https://www.buymeacoffee.com/iiitdplaybook'
          >
            <img
              className='buymeacoffeelogo'
              src={
                'https://bmc-dev.s3.us-east-2.amazonaws.com/assets/icons/bmc_icon_black.png'
              }
            />{' '}
            Buy me a coffee
          </Button>
        </div>
        <div className='creators'>
          <Creators />
        </div>
        <div className='team'>
          <TeamMembers />
        </div>
      </div>
      <div className='lower'>
        <p>IIITD Student Playbook &copy; 2021</p>
      </div>
    </div>
  );
}

export default Footer;

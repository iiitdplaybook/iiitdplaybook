import React, { useEffect } from 'react';
import Creators from './Creators';
import './Footer.css';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import TeamMembers from './Team';

function Footer({ page }) {
  let signedIn = true;

  useEffect(() => {
    signedIn = localStorage.getItem('isSignedIn');
  });

  return (
    <div id={page === 'login' ? 'footer-login' : 'footer'}>
      <div className='upper'>
        <div className='divider'>
          <div className='support-us'>
            <div>
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
                Support Us
              </Button>
            </div>
          </div>
          <div className='contribute'>
            <Button
              className='button2'
              component={Link}
              to={'/contribute/testimonies'}
            >
              <span className='span2'>Contribute</span>
            </Button>
          </div>
        </div>
        <div className='creators'>
          <Creators />
        </div>
        <div className='team'>
          <TeamMembers />
        </div>
      </div>
      <div className={page === 'login' ? 'lower-login' : 'lower'}>
        <p>IIITD Student Playbook &copy; 2021</p>
      </div>
    </div>
  );
}

export default Footer;

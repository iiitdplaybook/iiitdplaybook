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
                className='footerBtn'
                target='_blank'
                href='https://www.buymeacoffee.com/iiitdplaybook'
              >
                <img
                  className='buymeacoffeelogo'
                  src={
                    'https://bmc-dev.s3.us-east-2.amazonaws.com/assets/icons/bmc_icon_black.png'
                  }
                />
                Support Us
              </Button>
            </div>
          </div>
          <div className='contribute'>
            <Button
              className='footerBtn'
              // className='button2'
              component={Link}
              to={'/contribute/testimonies'}
            >
              <img
                className='buymeacoffeelogo'
                src={
                  'https://www.flaticon.com/svg/vstatic/svg/2057/2057748.svg?token=exp=1618041325~hmac=3ddd900cabe3b6220bb3ef682e1a15bb'
                }
              />
              Contribute
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
        IIITD Student Playbook &copy; 2021
      </div>
    </div>
  );
}

export default Footer;

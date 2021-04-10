import React, { useEffect } from 'react';
import Creators from './Creators';
import './Footer.css';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import TeamMembers from './Team';

function Footer({ page }) {
  let signedIn = true;
  let copyColor = '#fff';

  useEffect(() => {
    signedIn = !(page === 'login');
    if (page == 'login') copyColor = '#051e36';
  });

  return (
    <div id={signedIn ? 'footer-login' : 'footer'}>
      <div className='upper'>
        <div className={signedIn ? 'divider' : 'invisible'}>
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
              <img className='buymeacoffeelogo' src={contributeIcon} />
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
      <div className='lower' style={{ color: `${copyColor}` }}>
        IIITD Student Playbook &copy; 2021
      </div>
    </div>
  );
}

export default Footer;

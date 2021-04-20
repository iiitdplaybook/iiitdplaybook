import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Internships.css';

function Internships() {
  return (
    <div className='internship_page'>
      <Navbar loggedIn={true} colorStatus={false} stickyCond={true} />
      <div className='navigation'>
        <h1 className='nav_heading'>One stop guide for your internships</h1>
        <div className='nav_divider'>
          <div className='nav_button_container'>
            <button className='nav_button'>Introduction</button>
            <button className='nav_button'>Getting Started</button>
            <button className='nav_button'>Interview Tips</button>
            <button className='nav_button'>Build Your Resume</button>
            <button className='nav_button'>Internship Experience</button>
          </div>
          <div className='nav_illustration'>
            <img src={''} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Internships;

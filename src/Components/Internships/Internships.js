import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './Internships.css';
import { metadata } from './Metadata';
import { FiChevronsDown } from 'react-icons/fi';
import { IconContext } from 'react-icons';
import Card from './Card';

function Internships() {
  const [active, setActive] = useState('introduction');
  const callback = (value) => {
    setActive(value);
  };

  return (
    <div className='internship_page'>
      <Navbar loggedIn={true} colorStatus={false} stickyCond={true} />
      <div className='navigation'>
        <h1 className='nav_heading'>One stop guide for your internships</h1>
        <div className='nav_divider'>
          <div className='nav_button_container'>
            {Object.keys(metadata).map((key) => {
              const page = metadata[key];
              const cls = active === key ? 'nav_button active' : 'nav_button';
              return (
                <button className={cls} onClick={() => setActive(key)}>
                  {page.title}
                </button>
              );
            })}
          </div>
          <div className='nav_illustration'>
            <img src={metadata[active].image} />
          </div>
        </div>
        <div className='scroll_arrow bounce'>
          <IconContext.Provider value={{ color: '#FFF' }}>
            <div>
              <FiChevronsDown />
            </div>
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
}

export default Internships;

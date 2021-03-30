/** @format */

import './Supplies.css';
import firebase from 'firebase';
import React, { useState, useEffect } from 'react';
import { Button, makeStyles } from '@material-ui/core';
import Navbar from '../Navbar/Navbar';
import SupplyCardGrid from './SupplyCardGrid';
import zIndex from '@material-ui/core/styles/zIndex';

function Supplies() {
  const [clickedButton, setClickedButton] = useState(0);
  const [supplies, setSupplies] = useState([]);
  const categories = [
    'All',
    'Stationery',
    'Design',
    'Books',
    'Laptops',
    'Tech Accessories',
    'Room Decor',
    'Other',
  ];

  const getSupplies = async () => {
    const allSuppliesRef = firebase.database().ref('Supplies');
    await allSuppliesRef.once('value', (snapshot) => {
      let items = [];
      snapshot.forEach((child) => {
        const dict = {};
        dict.title = child.val().title;
        dict.description = child.val().description;
        dict.image = child.val().image;
        dict.pathLink = child.val().pathLink;
        dict.boughtBy = child.val().boughtBy;
        dict.category = child.val().category;
        dict.key = child.key;
        items.push(dict);
      });
      setSupplies(items);
    });
    return supplies;
  };

  useEffect(() => {
    getSupplies();
  }, []);

  const getSuppliesByCategory = (category) =>
    supplies.filter((supply) => {
      return supply.category ? supply.category.includes(category) : false;
    });

  const buttonStyles = makeStyles({
    root: {
      background: 'linear-gradient(90deg,#1EB0F6 6.32%, #2BD4DF 100%)',
      borderRadius: '15px',
      border: 'none',
      color: 'white',
    },
    notRoot: {
      borderRadius: '15px',
      background: '#f0f0f0',
      border: 'none',
    },
  });

  const buttonClass = buttonStyles();

  return (
    <div className='supplies'>
      <Navbar
        loggedIn={localStorage.getItem('isSignedIn')}
        colorStatus={true}
      />
      <h1 className='main_heading'>Supplies</h1>
      <h2 className='sub_heading'>Common college supplies used by students</h2>

      <div className='supplies__button'>
        {categories.map((category, id) => (
          <Button
            onClick={() => setClickedButton(id)}
            variant={clickedButton === id ? 'contained' : 'outlined'}
            className={
              clickedButton === id ? buttonClass.root : buttonClass.notRoot
            }
          >
            {category}
          </Button>
        ))}
      </div>
      <div className='explore__body'>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfwv9CsW6ISTb4kPCjHRJ72S7UnqvEQtJZWI11YNrTvlkfmVg/viewform"  target='_blank' class="float">
          <i class="fa fa-plus my-float"> Add a product</i>
        </a>
        {clickedButton === 0 ? (
          <div className='cardsDiv_supply'>
            <SupplyCardGrid itemList={supplies} />
          </div>
          
        ) : (
          <div className='cardsDiv_supply'>
            <SupplyCardGrid
              itemList={getSuppliesByCategory(
                categories[clickedButton].split(' ')[0]
              )}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Supplies;

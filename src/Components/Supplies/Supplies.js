/** @format */

import './Supplies.css';
import firebase from 'firebase';
import React, { useState, useEffect } from 'react';
import { Button, makeStyles } from '@material-ui/core';
import Navbar from '../Navbar/Navbar';
import SupplyCard from './SupplyCard';

function Supplies() {
  const [clickedButton, setClickedButton] = useState(1);
  const [allCards, setAll] = useState([]);
  const [stationeryCards, setStationery] = useState([]);
  const [designCards, setDesign] = useState([]);
  const [booksCards, setBook] = useState([]);
  const [laptopsCards, setLaptop] = useState([]);
  const [techCards, setTech] = useState([]);
  const [roomCards, setRoom] = useState([]);
  const [otherCards, setOther] = useState([]);

  const getSupplies = async () => {
    const tempAll = [];
    const tempStationary = [];
    const tempDesign = [];
    const tempBook = [];
    const tempLaptop = [];
    const tempTech = [];
    const tempRoom = [];
    const tempOther = [];

    const allCardsRef = firebase.database().ref('Supplies/AllCards');
    // const snapshot = await allCardsRef.once('value');
    // setAll(Object.values(snapshot.val()));
    await allCardsRef.once('value', (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        // console.log(Object.values(childSnapshot.val()));
        const dict = {};
        dict.title = childSnapshot.val().title;
        dict.description = childSnapshot.val().description;
        dict.image = childSnapshot.val().image;
        dict.pathLink = childSnapshot.val().pathLink;
        dict.boughtBy = childSnapshot.val().boughtBy;
        tempAll.push(dict);
      });
    });
    setAll(tempAll);
    console.log(allCards);

    const stationaryRef = firebase.database().ref('Supplies/Stationary');
    await stationaryRef.once('value', (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        const dict = {};
        dict.title = childSnapshot.val().title;
        dict.description = childSnapshot.val().description;
        dict.image = childSnapshot.val().image;
        dict.pathLink = childSnapshot.val().pathLink;
        dict.boughtBy = childSnapshot.val().boughtBy;
        tempStationary.push(dict);
      });
    });
    setStationery(tempStationary);

    const designRef = firebase.database().ref('Supplies/Design');
    await designRef.once('value', (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        const dict = {};
        dict.title = childSnapshot.val().title;
        dict.description = childSnapshot.val().description;
        dict.image = childSnapshot.val().image;
        dict.pathLink = childSnapshot.val().pathLink;
        dict.boughtBy = childSnapshot.val().boughtBy;
        tempDesign.push(dict);
      });
    });
    setDesign(tempDesign);

    const laptopRef = firebase.database().ref('Supplies/Laptops');
    await laptopRef.once('value', (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        const dict = {};
        dict.title = childSnapshot.val().title;
        dict.description = childSnapshot.val().description;
        dict.image = childSnapshot.val().image;
        dict.pathLink = childSnapshot.val().pathLink;
        dict.boughtBy = childSnapshot.val().boughtBy;
        tempLaptop.push(dict);
      });
    });
    setLaptop(tempLaptop);

    const bookRef = firebase.database().ref('Supplies/Books');
    await bookRef.once('value', (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        const dict = {};
        dict.title = childSnapshot.val().title;
        dict.description = childSnapshot.val().description;
        dict.image = childSnapshot.val().image;
        dict.pathLink = childSnapshot.val().pathLink;
        dict.boughtBy = childSnapshot.val().boughtBy;
        tempBook.push(dict);
      });
    });
    setBook(tempBook);

    const roomRef = firebase.database().ref('Supplies/Room');
    await roomRef.once('value', (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        const dict = {};
        dict.title = childSnapshot.val().title;
        dict.description = childSnapshot.val().description;
        dict.image = childSnapshot.val().image;
        dict.pathLink = childSnapshot.val().pathLink;
        dict.boughtBy = childSnapshot.val().boughtBy;
        tempRoom.push(dict);
      });
    });
    setRoom(tempRoom);

    const techotherRef = firebase.database().ref('Supplies/Tech');
    await techotherRef.once('value', (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        const dict = {};
        dict.title = childSnapshot.val().title;
        dict.description = childSnapshot.val().description;
        dict.image = childSnapshot.val().image;
        dict.pathLink = childSnapshot.val().pathLink;
        dict.boughtBy = childSnapshot.val().boughtBy;
        tempTech.push(dict);
      });
    });
    setTech(tempTech);

    const otherRef = firebase.database().ref('Supplies/Other');
    await otherRef.once('value', (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        const dict = {};
        dict.title = childSnapshot.val().title;
        dict.description = childSnapshot.val().description;
        dict.image = childSnapshot.val().image;
        dict.pathLink = childSnapshot.val().pathLink;
        dict.boughtBy = childSnapshot.val().boughtBy;
        tempOther.push(dict);
      });
    });
    setOther(tempOther);
  };

  useEffect(() => {
    getSupplies();
    return () => {};
  }, []);

  const user = firebase.auth().currentUser;
  // const uid;

  // if (user != null) {
  //   uid = user.uid;
  // }

  const buttonStyles = makeStyles({
    root: {
      background: 'linear-gradient(90deg,#1EB0F6 6.32%, #2BD4DF 100%)',
      // boxShadow: "0px 10px 20px -2px rgba(37, 197, 233, 0.25)",
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

  const changeS = (s) => {
    setClickedButton(s);
  };

  return (
    <div className='supplies'>
      <Navbar
        loggedIn={localStorage.getItem('isSignedIn')}
        colorStatus={true}
      />
      <h2
        className='supplies_heading'
        style={{ textAlign: 'center', margin: '4%' }}
      >
        A collection of things that students use in college
      </h2>

      <div className='supplies__button'>
        <Button
          onClick={() => changeS(1)}
          variant={clickedButton === 1 ? 'contained' : 'outlined'}
          className={
            clickedButton === 1 ? buttonClass.root : buttonClass.notRoot
          }
        >
          All
        </Button>
        <Button
          onClick={() => changeS(2)}
          variant={clickedButton === 2 ? 'contained' : 'outlined'}
          className={
            clickedButton === 2 ? buttonClass.root : buttonClass.notRoot
          }
        >
          Stationery
        </Button>
        <Button
          onClick={() => changeS(3)}
          variant={clickedButton === 3 ? 'contained' : 'outlined'}
          className={
            clickedButton === 3 ? buttonClass.root : buttonClass.notRoot
          }
        >
          Design
        </Button>
        <Button
          onClick={() => changeS(4)}
          variant={clickedButton === 4 ? 'contained' : 'outlined'}
          className={
            clickedButton === 4 ? buttonClass.root : buttonClass.notRoot
          }
        >
          Books
        </Button>
        <Button
          onClick={() => changeS(5)}
          variant={clickedButton === 5 ? 'contained' : 'outlined'}
          className={
            clickedButton === 5 ? buttonClass.root : buttonClass.notRoot
          }
        >
          Laptops
        </Button>
        <Button
          onClick={() => changeS(6)}
          variant={clickedButton === 6 ? 'contained' : 'outlined'}
          className={
            clickedButton === 6 ? buttonClass.root : buttonClass.notRoot
          }
        >
          Tech Accessories
        </Button>
        <Button
          onClick={() => changeS(7)}
          variant={clickedButton === 7 ? 'contained' : 'outlined'}
          className={
            clickedButton === 7 ? buttonClass.root : buttonClass.notRoot
          }
        >
          Room Decor
        </Button>
        <Button
          onClick={() => changeS(8)}
          variant={clickedButton === 8 ? 'contained' : 'outlined'}
          className={
            clickedButton === 8 ? buttonClass.root : buttonClass.notRoot
          }
        >
          Others
        </Button>
      </div>
      <div className='explore__body'>
        {clickedButton === 1 ? (
          <div className='cardsDiv_supply'>
            {console.log(allCards)}
            <SupplyCard
              supplyCardList={allCards}
              user={user}
              category='AllCards'
            />
          </div>
        ) : clickedButton === 2 ? (
          <div className='cardsDiv_supply'>
            <SupplyCard
              supplyCardList={stationeryCards}
              user={user}
              category='Stationary'
            />
          </div>
        ) : clickedButton === 3 ? (
          <div className='cardsDiv_supply'>
            <SupplyCard
              supplyCardList={designCards}
              user={user}
              category='Design'
            />
          </div>
        ) : clickedButton === 4 ? (
          <div className='cardsDiv_supply'>
            <SupplyCard
              supplyCardList={booksCards}
              user={user}
              category='Books'
            />
          </div>
        ) : clickedButton === 5 ? (
          <div className='cardsDiv_supply'>
            <SupplyCard
              supplyCardList={laptopsCards}
              user={user}
              category='Laptops'
            />
          </div>
        ) : clickedButton === 6 ? (
          <div className='cardsDiv_supply'>
            <SupplyCard
              supplyCardList={techCards}
              user={user}
              category='Tech'
            />
          </div>
        ) : clickedButton === 7 ? (
          <div className='cardsDiv_supply'>
            <SupplyCard
              supplyCardList={roomCards}
              user={user}
              category='Room'
            />
          </div>
        ) : (
          <div className='cardsDiv_supply'>
            <SupplyCard
              supplyCardList={otherCards}
              user={user}
              category='Other'
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Supplies;

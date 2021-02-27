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
  const [stationaryCards, setStationary] = useState([]);
  const [designCards, setDesign] = useState([]);
  const [booksCards, setBook] = useState([]);
  const [laptopsCards, setLaptop] = useState([]);
  const [techotherCards, setTech] = useState([]);
  const [roomCards, setRoom] = useState([]);
  const [otherCards, setOther] = useState([]);

  const getSupplies = async () => {

    var tempAll = [];
    var tempStationary = [];
    var tempDesign = [];
    var tempBook = [];
    var tempLaptop = [];
    var tempTech = [];
    var tempRoom = [];
    var tempOther = [];
   
    var allCardsRef = firebase
      .database()
      .ref('Supplies/AllCards');
    await allCardsRef.once('value', (snapshot) => {
      snapshot.forEach((childSnapshot) => {
          var title= childSnapshot.val().title;
          var desc = childSnapshot.val().description;
          var image = childSnapshot.val().image;
          var path = childSnapshot.val().pathLink;
          var dict = {};
          dict.Title = title;
          dict.Desc = desc;
          dict.Image = image;
          dict.Path = path;
          tempAll.push(dict);
      });
    });
    setAll(tempAll);

    var stationaryRef = firebase
      .database()
      .ref('Supplies/Stationary');
    await stationaryRef.once('value', (snapshot) => {
      snapshot.forEach((childSnapshot) => {
          var title= childSnapshot.val().title;
          var desc = childSnapshot.val().description;
          var image = childSnapshot.val().image;
          var path = childSnapshot.val().pathLink;
          var dict = {};
          dict.Title = title;
          dict.Desc = desc;
          dict.Image = image;
          dict.Path = path;
          tempStationary.push(dict);
      });
    });
    setStationary(tempStationary);

    var designRef = firebase
      .database()
      .ref('Supplies/Design');
    await designRef.once('value', (snapshot) => {
      snapshot.forEach((childSnapshot) => {
          var title= childSnapshot.val().title;
          var desc = childSnapshot.val().description;
          var image = childSnapshot.val().image;
          var path = childSnapshot.val().pathLink;
          var dict = {};
          dict.Title = title;
          dict.Desc = desc;
          dict.Image = image;
          dict.Path = path;
          tempDesign.push(dict);
      });
    });
    setDesign(tempDesign);

    var laptopRef = firebase
      .database()
      .ref('Supplies/Laptops');
    await laptopRef.once('value', (snapshot) => {
      snapshot.forEach((childSnapshot) => {
          var title= childSnapshot.val().title;
          var desc = childSnapshot.val().description;
          var image = childSnapshot.val().image;
          var path = childSnapshot.val().pathLink;
          var dict = {};
          dict.Title = title;
          dict.Desc = desc;
          dict.Image = image;
          dict.Path = path;
          tempLaptop.push(dict);
      });
    });
    setLaptop(tempLaptop);

    var bookRef = firebase
      .database()
      .ref('Supplies/Books');
    await bookRef.once('value', (snapshot) => {
      snapshot.forEach((childSnapshot) => {
          var title= childSnapshot.val().title;
          var desc = childSnapshot.val().description;
          var image = childSnapshot.val().image;
          var path = childSnapshot.val().pathLink;
          var dict = {};
          dict.Title = title;
          dict.Desc = desc;
          dict.Image = image;
          dict.Path = path;
          tempBook.push(dict);
      });
    });
    setBook(tempBook);

    var roomRef = firebase
      .database()
      .ref('Supplies/Room');
    await roomRef.once('value', (snapshot) => {
      snapshot.forEach((childSnapshot) => {
          var title= childSnapshot.val().title;
          var desc = childSnapshot.val().description;
          var image = childSnapshot.val().image;
          var path = childSnapshot.val().pathLink;
          var dict = {};
          dict.Title = title;
          dict.Desc = desc;
          dict.Image = image;
          dict.Path = path;
          tempRoom.push(dict);
      });
    });
    setRoom(tempRoom);

    var techotherRef = firebase
      .database()
      .ref('Supplies/Tech');
    await techotherRef.once('value', (snapshot) => {
      snapshot.forEach((childSnapshot) => {
          var title= childSnapshot.val().title;
          var desc = childSnapshot.val().description;
          var image = childSnapshot.val().image;
          var path = childSnapshot.val().pathLink;
          var dict = {};
          dict.Title = title;
          dict.Desc = desc;
          dict.Image = image;
          dict.Path = path;
          tempTech.push(dict);
      });
    });
    setTech(tempTech);

    var otherRef = firebase
      .database()
      .ref('Supplies/Other');
    await otherRef.once('value', (snapshot) => {
      snapshot.forEach((childSnapshot) => {
          var title= childSnapshot.val().title;
          var desc = childSnapshot.val().description;
          var image = childSnapshot.val().image;
          var path = childSnapshot.val().pathLink;
          var dict = {};
          dict.Title = title;
          dict.Desc = desc;
          dict.Image = image;
          dict.Path = path;
          tempOther.push(dict);
      });
    });
    setOther(tempOther);

  };

  useEffect(() => {
    getSupplies();
    return () => {};
  }, [])

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
    <div className="supplies">
      <Navbar
        loggedIn={localStorage.getItem("isSignedIn")}
        colorStatus={true}
      />
      <h2
        className="supplies_heading"
        style={{ textAlign: "center", margin: "4%" }}
      >
        A collection of things that students use in college
      </h2>

      <div className="supplies__button">
        <Button
          onClick={() => changeS(1)}
          variant={clickedButton === 1 ? "contatined" : "outlined"}
          className={
            clickedButton === 1 ? buttonClass.root : buttonClass.notRoot
          }
        >
          All
        </Button>
        <Button
          onClick={() => changeS(2)}
          variant={clickedButton === 2 ? "contatined" : "outlined"}
          className={
            clickedButton === 2 ? buttonClass.root : buttonClass.notRoot
          }
        >
          Stationary
        </Button>
        <Button
          onClick={() => changeS(3)}
          variant={clickedButton === 3 ? "contatined" : "outlined"}
          className={
            clickedButton === 3 ? buttonClass.root : buttonClass.notRoot
          }
        >
          Design
        </Button>
        <Button
          onClick={() => changeS(4)}
          variant={clickedButton === 4 ? "contatined" : "outlined"}
          className={
            clickedButton === 4 ? buttonClass.root : buttonClass.notRoot
          }
        >
          Books
        </Button>
        <Button
          onClick={() => changeS(5)}
          variant={clickedButton === 5 ? "contatined" : "outlined"}
          className={
            clickedButton === 5 ? buttonClass.root : buttonClass.notRoot
          }
        >
          Laptops
        </Button>
        <Button
          onClick={() => changeS(6)}
          variant={clickedButton === 6 ? "contatined" : "outlined"}
          className={
            clickedButton === 6 ? buttonClass.root : buttonClass.notRoot
          }
        >
          Tech Accessories
        </Button>
        <Button
          onClick={() => changeS(7)}
          variant={clickedButton === 7 ? "contatined" : "outlined"}
          className={
            clickedButton === 7 ? buttonClass.root : buttonClass.notRoot
          }
        >
          Room Decor
        </Button>
        <Button
          onClick={() => changeS(8)}
          variant={clickedButton === 8 ? "contatined" : "outlined"}
          className={
            clickedButton === 8 ? buttonClass.root : buttonClass.notRoot
          }
        >
          Others
        </Button>
      </div>
      <div className="explore__body">
        {clickedButton === 1 ? (
          <div className="cardsDiv_supply"><SupplyCard supplyCardList={allCards} /></div>
        ) : clickedButton === 2 ? (
          <div className="cardsDiv_supply"><SupplyCard supplyCardList={stationaryCards} /></div>
        ) : clickedButton === 3 ? (
          <div className="cardsDiv_supply"><SupplyCard supplyCardList={designCards} /></div>
        ) : clickedButton === 4 ? (
          <div className="cardsDiv_supply"><SupplyCard supplyCardList={booksCards} /></div>
        ) : clickedButton === 5 ? (
          <div className="cardsDiv_supply"><SupplyCard supplyCardList={laptopsCards} /></div>
        ) : clickedButton === 6 ? (
          <div className="cardsDiv_supply"><SupplyCard supplyCardList={techotherCards} /></div>
        ) : clickedButton === 7 ? (
          <div className="cardsDiv_supply"><SupplyCard supplyCardList={roomCards} /></div>
        ) : (
          <div className="cardsDiv_supply"><SupplyCard supplyCardList={otherCards} /></div>
        )}
      </div>
    </div>
  );
 
 
}

export default Supplies;

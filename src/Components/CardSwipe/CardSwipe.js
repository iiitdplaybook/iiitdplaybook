import React, { useState, useMemo } from 'react'
// import TinderCard from '../react-tinder-card/index'
import TinderCard from 'react-tinder-card'
import dog from '../../Assets/cardPics/dogFire.png';
import tear from '../../Assets/cardPics/tearSmile.png';
import plag from '../../Assets/cardPics/plag.png';
import dark from '../../Assets/cardPics/darkSide.png';
import './CardSwipe.css';

const db = [
  {
    name: 'Tear',
    url: tear
  },
  {
    name: 'Dog',
    url: dog
  },
  {
    name: 'Dark',
    url: dark
  },
  {
    name: 'Plag',
    url: plag
  },
  {
    name: 'Deadlines',
    url: 'https://image.freepik.com/free-vector/deadline-concept-business-man-sinking-sand-watch_48369-18371.jpg'
  }
]

let alreadyRemoved = []
let charactersState = db // This fixes issues with updating characters state forcing it to use the current state and not the state that was active when the card was created.

function Advanced () {
  const [characters, setCharacters] = useState(db)
  const [lastDirection, setLastDirection] = useState()

  let childRefs = useMemo(() => Array(db.length).fill(0).map(i => React.createRef()), [])

  const swiped = (direction, nameToDelete) => {
    // console.log('removing: ' + nameToDelete)
    setLastDirection(direction)
    alreadyRemoved.push(nameToDelete)
  }

  // const restackDeck = () => {
  //   console.log('removed')
  //   charactersState = db
  //   alreadyRemoved = []
  //   setCharacters(charactersState)
  //   // childRefs = useMemo(() => Array(db.length).fill(0).map(i => React.createRef()), [])

  // }

  const outOfFrame = (name) => {
    // console.log(name + ' left the screen!')
    charactersState = charactersState.filter(character => character.name !== name)
    setCharacters(charactersState)
  }

  const swipe = (dir) => {
    const cardsLeft = characters.filter(person => !alreadyRemoved.includes(person.name))
    if (cardsLeft.length) {
      const toBeRemoved = cardsLeft[cardsLeft.length - 1].name // Find the card object to be removed
      const index = db.map(person => person.name).indexOf(toBeRemoved) // Find the index of which to make the reference to
      alreadyRemoved.push(toBeRemoved) // Make sure the next card gets removed next time if this card do not have time to exit the screen
      childRefs[index].current.swipe(dir) // Swipe the card!
    }
  }

  return (
    <div>
      <link href='https://fonts.googleapis.com/css?family=Damion&display=swap' rel='stylesheet' />
      <link href='https://fonts.googleapis.com/css?family=Alatsi&display=swap' rel='stylesheet' />
      <div className='cardContainer'>
        {characters.map((character, index) =>
          <TinderCard ref={childRefs[index]} className='swipe' key={character.name} onSwipe={(dir) => swiped(dir, character.name)} onCardLeftScreen={() => outOfFrame(character.name)}>
            <div style={{ backgroundImage: 'url(' + character.url + ')' }} className='card'>
            {/* {alreadyRemoved.length == 5 ? (restackDeck()):(console.log('card left')) } */}
            </div>
          </TinderCard>
        )}
      </div>
      {/* <div className='buttons'>
        <button onClick={() => swipe('left')}>Swipe left!</button>
        <button onClick={() => swipe('right')}>Swipe right!</button>
      </div> */}
      {/* {lastDirection ? <h2 key={lastDirection} className='infoText'>You swiped {lastDirection}</h2> : <h2 className='infoText'>Swipe a card or press a button to get started!</h2>} */}
    </div>
  )
}

export default Advanced
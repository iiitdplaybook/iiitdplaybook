import React, {useState, useEffect} from "react";
import { useStateValue } from "../StateProvider";
import "./Nostalgia.css";
import Stars from "./stars";


function Nostalgia() {
  const [{ user, isSignedIn, userName }] = useStateValue();

  useEffect(() => { window.scrollTo(0, 0); console.log("aer"); }, []) 

  return (
    <div id="nostalgiaCont">
        <div id="stars_container">
        <Stars/>
        </div>

        <h1 className='heading_text'>Down the memory lane</h1>
        <h5 className='heading_desc'>Remember the time when...</h5>

        <div className='section'>
            <h2>01. The Early Days</h2>
        </div>
        <div className='section'>
            <h2>02. The 11:59 Struggle</h2>
        </div>
        <div className='section'>
            <h2>03. The Delhi <strike>Safar</strike> Suffer</h2>
        </div>
        <div className='section'>
            <h2>04. Wind Point</h2>
        </div>
        <div className='section'>
            <h2>05. BCR</h2>
        </div>
        <div className='section'>
            <h2>06. Goa Trip</h2>
        </div>
        <div className='section'>
            <h2>07. Ravi's Tapri</h2>
        </div>
        <div className='section'>
            <h2>08. Exam Season Blues</h2>
        </div>
        <div className='section'>
            <h2>09. 3AM Maggi</h2>
        </div>
        <div className='section'>
            <h2>10. Fest</h2>
        </div>
    </div>
  )
}

export default Nostalgia
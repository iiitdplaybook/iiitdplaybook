import React, {useState} from "react";
import { useStateValue } from "../StateProvider";
import "./Nostalgia.css";

function Nostalgia() {
  const [{ user, isSignedIn, userName }] = useStateValue();

  return (
    <div>
        <h1 className='heading_text'>Offline College Memories...</h1>
        <div className='section1'>
            <h2>01. The Early Days</h2>
        </div>
        <div className='section2'>
            <h2>02. The 11:59 Struggle</h2>
        </div>
        <div className='section3'>
            <h2>03. The Delhi <strike>Safar</strike> Suffer</h2>
        </div>
        <div className='section4'>
            <h2>04. Wind Point</h2>
        </div>
        <div className='section5'>
            <h2>05. BCR</h2>
        </div>
        <div className='section6'>
            <h2>06. Goa Trip</h2>
        </div>
        <div className='section7'>
            <h2>07. Ravi's Tapri</h2>
        </div>
        <div className='section8'>
            <h2>08. Exam Season Blues</h2>
        </div>
        <div className='section9'>
            <h2>09. 3AM Maggi</h2>
        </div>
        <div className='section10'>
            <h2>10. Fest</h2>
        </div>
    </div>
  )
}

export default Nostalgia
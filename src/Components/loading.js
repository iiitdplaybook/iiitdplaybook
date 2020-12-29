/** @format */

import React from "react";
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import blob from '../Assets/blob.json';
import beat from '../Assets/beat.json';

function Loading() {

  return (
    <div className="loader_wrapper" style={{background: 'white', height:'100vh', width:'100vw', overflow:'hidden', display: 'flex', justifyContent: 'center', alignItems:'center', flexDirection: 'column'}}>
            <p style={{color: '#141414', fontSize: '1.5em'}}>Loading...</p>
            <p style={{color: '#141414', fontStyle: 'italic', marginTop: '2%'}}>Open in laptop for best experience</p>
            <Player
                autoplay
                loop
                src={beat}
                style={{ height: '300px', width: '300px', zIndex: '1' }}
              >
            </Player>
    
    </div>
  );
}

export default Loading;

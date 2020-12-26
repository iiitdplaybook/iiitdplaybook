import { Button } from "@material-ui/core";
import React from "react";
import {useState} from "react";
import Navbar from '../Navbar'

var isFav = false;


export default function TimeManagement() {
    // const [isFavText, setIsFavText] = useState("Add to Favourites");

    // function toggleFav(){
    //     isFav = isFav?false:true;
    //     var text = isFav?"Remove from Favs":"Add to Favs";
    //     setIsFavText(text);
    // }

    return(
        <div className='timeManagement'>
            {/* <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                <Button onClick={toggleFav} style={{ marginLeft: "auto" }} >{isFavText}</Button>
            </div> */}
            <Navbar loggedIn={true} colorStatus={true}/>
            <div className='timeManagement__front'>
            </div>
            <div className='timeManagement__back'>
            </div>
        </div>
        
    );
}


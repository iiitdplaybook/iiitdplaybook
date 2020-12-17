import { Button } from "@material-ui/core";
import React from "react";
import {useState} from "react";

var isFav = false;


export default function TimeManagement() {
    const [isFavText, setIsFavText] = useState("Add to Favourites");

    function toggleFav(){
        isFav = isFav?false:true;
        var text = isFav?"Remove from Favs":"Add to Favs";
        setIsFavText(text);
    }
    return(
        <div>
            <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                <Button onClick={toggleFav} style={{ marginLeft: "auto" }} >{isFavText}</Button>
            </div>
        </div>
        
    );
}


import React from "react";
import "./ComingSoonTools.css"
import Navbar from "../Navbar";

function ComingSoonTools(){
    const description = "Tools to make your college life easier and productive";
    return(
        <div className="div">
            <Navbar loggedIn={true} colorStatus={true}/>
            <h1 className="comingSoon">Coming Soon</h1>
            <p className="description">{description}</p>
        </div>
    );
}

export default ComingSoonTools;
import React from "react";
import "./CommingSoonTools.css"
function CommingSoonTools(){
    const description = "Tools to make your college life easier and productive";
    return(
        <div className="div">
            <h1 className="commingSoon">Comming Soon</h1>
            <p className="description">{description}</p>
        </div>
    );
}

export default CommingSoonTools;
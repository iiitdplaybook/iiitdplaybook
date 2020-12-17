import React from "react";
import "./ComingSoonTools.css"
function ComingSoonTools(){
    const description = "Tools to make your college life easier and productive";
    return(
        <div className="div">
            <h1 className="comingSoon">Coming Soon</h1>
            <p className="description">{description}</p>
        </div>
    );
}

export default ComingSoonTools;
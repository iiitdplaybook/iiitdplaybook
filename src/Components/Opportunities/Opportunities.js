import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Opportunities.css";

const Opportunities = () => {
    return (
        <div>
            <Navbar
                loggedIn={localStorage.getItem("isSignedIn")}
                colorStatus={true}
            />
            <h1 className="main_heading">Opportunities</h1>
            <div className="introduction">
                <div className="ip_vs_btp">
                    <div className="card">
                        <div className="note">
                            <ul>
                                <li>GSOC</li>
                                <li>Microsoft Engage</li>
                                <li>Outreachy</li>
                                <li>RGSOC</li>
                                <li>Codess</li>
                                <li>Amazon WiT</li>
                                <li>Google STEP intern</li>
                            </ul>
                        </div>
                    </div>
                    <div className="card">
                        <div className="note">
                            <ul>
                                <li>HackHarvard</li>
                                <li>HackMIT</li>
                                <li>ACM ICPC</li>
                                <li>Microsoft Research Fellowship</li>
                                <li>Harvard US Initiative</li>
                                <li>Major League Hacking</li>
                                <li>Devfolio</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="introduction">
                <div className="card">
                    <b>Google Summer of code</b>
                    <div className="tagContainter">
                        <div className="tag">Coding</div>
                        <div className="tag">Development</div>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default Opportunities;

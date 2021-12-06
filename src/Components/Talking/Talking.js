import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Talking.css";

const Talking = () => {
    return (
        <div>
            <Navbar
                loggedIn={localStorage.getItem("isSignedIn")}
                colorStatus={true}
            />
            <h1 className="main_heading">Talking to Batchmates and Seniors</h1>
            <div className="introduction">
                <div className="ip_vs_btp">
                    <div className="card">
                        <div className="note">
                            <h3> How to approach?</h3>
                            <ul>
                                <li>
                                    Mail them, talk to them wherever you find
                                    them on campus
                                </li>
                                <li>Tell them about yourself</li>
                                <li>Message on Instagram/Whatsapp/Anywhere</li>
                                <li>Play mafia with them during induction</li>
                                <li>Clubbing with them</li>
                                <li>Go to the freshers interview, open up </li>
                                <li>Take part in events</li>
                                <li>Collaborate on projects</li>
                            </ul>
                        </div>
                    </div>
                    <div className="card">
                        <div className="note">
                            <h3> What to talk about?</h3>
                            <ul>
                                <li>Ask advice about how to get projects</li>
                                <li>
                                    Their suggestions about your own current
                                    subjects
                                </li>
                                <li>How to prepare for internships</li>
                                <li>How to manage studies and clubs</li>
                                <li>Movie and TV show suggestions</li>
                                <li>Good places to visit nearby or in Delhi</li>
                                <li>
                                    Help if stuck somewhere in deadlines or
                                    anything else
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Talking;

import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Clubs.css";

const Clubs = () => {
    return (
        <div>
            <Navbar
                loggedIn={localStorage.getItem("isSignedIn")}
                colorStatus={true}
            />
            <h1 className="main_heading">Clubs</h1>
            <div className="introduction">
                <h1 className="heading">Why join clubs?</h1>
                <div className="card">
                    <ol>
                        <li>Allows one to explore a lot</li>
                        <li>Get to know seniors, batchmates, juniors</li>
                        <li>
                            Make more friends with the same hobbies and
                            interests as your own
                        </li>
                        <li>
                            Visit other colleges in Delhi and outside Delhi as
                            well (sometimes even abroad)
                        </li>
                        <li>
                            Learn important skills like leadership, sportsman
                            spirit, teamwork, hard work, determination
                        </li>
                        <li>Grow skill set apart from academics</li>
                    </ol>
                </div>
                <h1 className="heading">How many clubs to join?</h1>
                <div className="card">
                    <ol>
                        <li>Join at least one club</li>
                        <li>
                            Try not to have more than one heavy and one light
                            club
                        </li>
                        <li>Do not overburden yourself with club activities</li>
                    </ol>
                </div>
                <h1 className="heading">
                    How to manage club responsibilities?
                </h1>
                <div className="card">
                    <ol>
                        <li>
                            Distribute time to spend on club activities well
                        </li>
                        <li>Don't prioritize club activities over studies</li>
                    </ol>
                </div>
                <h1 className="heading">What clubs to join?</h1>
                <div className="card">
                    <ol>
                        <li>Whatever interests you</li>
                        <li>Whatever you feel you are good at</li>
                        <li>Something you want to learn</li>
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default Clubs;

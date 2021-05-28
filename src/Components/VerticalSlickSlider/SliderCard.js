import React from "react";
import "./SliderCard.css";

export default function Card({ cardsData }) {
    return (
        <div className="slider-card">
            <div className="slider-info">
                <div className="slider-img-info">
                    <img src={cardsData.Profile_Pic} className="slider-image" />
                    <div className="slider-title">
                        <h2 className="title"> {cardsData.Name}</h2>
                        <p className="occ">{cardsData.Designation}</p>
                        <p className="org"> {cardsData.Organisation}</p>
                    </div>
                </div>
                <a
                    className="fa fa-linkedin fa-lg slider-icon"
                    href={cardsData.LinkedIN}
                    target="_blank"
                ></a>
            </div>
            <div className="slider-tips"> {cardsData.Tips} </div>
        </div>
    );
}

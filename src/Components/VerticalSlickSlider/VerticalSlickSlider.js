import React, { Component } from "react";
import Card from "./SliderCard";

export default function VerticalSlickSlider({ properties }) {
    // Settings for slider
    const settings = {
        adaptiveHeight: false,
        arrows: false,
        autoplay: true,
        centerMode: true,
        centerPadding: "30px",
        cssEase: "ease-in-out",
        dots: false,
        pauseOnHover: true,
        slidePerRow: 1,
        slidesScroll: window.innerWidth > 600 ? 3 : 4,
        slidesToShow: window.innerWidth > 600 ? 3 : 4,
        vertical: true,
    };

    let c1 = 0,
        c2 = 0;
    if (properties.length % 3 == 1) {
        c1 = (properties.length + 1) / 3;
        c2 = 2 * c1;
    } else if (properties.length % 3 == 2) {
        c1 = (properties.length + 2) / 3;
        c2 = c1 + Math.floor(properties.length / 3);
    } else {
        c1 = properties.length / 3;
        c2 = 2 * c1;
    }
    return (
        <div>
            {window.innerWidth > 600 ? (
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-around",
                        flexWrap: "nowrap",
                    }}
                >
                    <div style={{ width: "27vw" }}>
                        <div>
                            {console.log(properties.slice(0, c1))}
                            {properties.slice(0, c1).map((element) => (
                                <>
                                    <Card cardsData={element} />
                                    <div style={{ height: "120px" }}></div>
                                </>
                            ))}
                        </div>
                    </div>
                    <div style={{ width: "27vw" }}>
                        <div>
                            {console.log(properties.slice(c1, c2))}
                            {properties.slice(c1, c2).map((element) => (
                                <>
                                    <div style={{ height: "120px" }}></div>
                                    <Card cardsData={element} />
                                </>
                            ))}
                        </div>
                    </div>
                    <div style={{ width: "27vw" }}>
                        <div>
                            {console.log(properties.slice(c2))}
                            {properties.slice(c2).map((element) => (
                                <>
                                    <Card cardsData={element} />
                                    <div style={{ height: "120px" }}></div>
                                </>
                            ))}
                        </div>
                    </div>
                </div>
            ) : (
                <div>
                    {properties.map((element) => (
                        <Card cardsData={element} />
                    ))}
                </div>
            )}
        </div>
    );
}

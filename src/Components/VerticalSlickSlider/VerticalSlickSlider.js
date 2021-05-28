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
                            {properties
                                .slice(0, Math.floor(properties.length / 3))
                                .map((id, index) => (
                                    <>
                                        <Card
                                            cardsData={properties[index]}
                                            key={id}
                                        />
                                        <div style={{ height: "120px" }}></div>
                                    </>
                                ))}
                        </div>
                    </div>
                    <div style={{ width: "27vw" }}>
                        <div>
                            {properties
                                .slice(
                                    Math.floor(properties.length / 3),
                                    2 * Math.floor(properties.length / 3)
                                )
                                .map((id, index) => (
                                    <>
                                        <div style={{ height: "120px" }}></div>
                                        <Card
                                            cardsData={
                                                properties.slice(
                                                    Math.floor(
                                                        properties.length / 3
                                                    ),
                                                    2 *
                                                        Math.floor(
                                                            properties.length /
                                                                3
                                                        )
                                                )[index]
                                            }
                                            key={id}
                                        />
                                    </>
                                ))}
                        </div>
                    </div>
                    <div style={{ width: "27vw" }}>
                        <div>
                            {properties
                                .slice(2 * Math.floor(properties.length / 3))
                                .map((id, index) => (
                                    <>
                                        <Card
                                            cardsData={
                                                properties.slice(
                                                    2 *
                                                        Math.floor(
                                                            properties.length /
                                                                3
                                                        )
                                                )[index]
                                            }
                                            key={id}
                                        />
                                        <div style={{ height: "120px" }}></div>
                                    </>
                                ))}
                        </div>
                    </div>
                </div>
            ) : (
                <div>
                    {properties.map((id, index) => (
                        <Card cardsData={properties[index]} key={id} />
                    ))}
                </div>
            )}
        </div>
    );
}

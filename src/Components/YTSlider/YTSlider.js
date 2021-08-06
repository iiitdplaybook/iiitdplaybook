import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "./YTSlider.css";
import times from "lodash/times";

export default function AutoPlay({ portraits }) {
    const Box = styled.div`
        // padding: ${(props) => props.scale * 20}px;
        padding: 10px;
        vertical-align: middle;
        font-family: Poppins;
        //height: 250px;
        //width: 560px;
        margin: 20px;
    `;

    const Review = styled.div`
        // width: ${(props) => props.scale * 440}px;
        width: 320px;
        // display: flex;
        // padding: ${(props) => props.scale * 35}px;
        padding: 17px;
        // min-height: 35vh;
        height: 180px;
        border-color: linear-gradient(90deg, #1eb0f6 6.32%, #2bd4df 100%);
        overflow: hidden;
        background: #ffffff;
        box-shadow: 0px 6px 25px 2px rgba(4, 171, 176, 0.25);
        border-radius: 16px;
    `;

    const slidesNum =
        window.innerWidth < 600
            ? Math.min(1, portraits.length)
            : Math.min(3, portraits.length);

    const slidesScroll =
        window.innerWidth < 600
            ? Math.min(1, portraits.length)
            : Math.min(3, portraits.length);

    // let width = (window.innerWidth > 0) ? window.innerWidth : screen.width;

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: slidesNum,
        slidesToScroll: slidesScroll,
        autoplay: true,
        autoplaySpeed: 1500,
        cssEase: "ease-in-out",
        pauseOnHover: true,
        arrows: true,
        centerMode: true,
        centerPadding: "30px",
    };

    const scale = 0.5;

    return (
        <div style={{ margin: "4.5%", marginBottom: "8em" }}>
            {/* <h2>Auto Play</h2> */}
            <Slider {...settings}>
                {times(portraits.length, String).map((id, index) => (
                    // testimonies_data[id].isApproved?
                    <div key={index}>
                        {/* {console.log('size', window.innerWidth)} */}
                        <Box key={`marquee-example-review-${id}`} scale={scale}>
                            <Review>
                                <iframe
                                    width="320"
                                    height="180"
                                    src={portraits[id].source}
                                    title="YouTube video player"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen
                                ></iframe>
                            </Review>
                        </Box>
                    </div>
                    // :null
                ))}
            </Slider>
        </div>
    );
}

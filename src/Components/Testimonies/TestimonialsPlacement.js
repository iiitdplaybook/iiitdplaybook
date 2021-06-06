import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "./TestimonialsPlacement.css";
import times from "lodash/times";

export default function AutoPlay({ portraits }) {
    // const Height = styled.div`
    //     position: relative;
    //     width: 100%;
    //     // min-height: ${(props) =>
    //         props.height ? props.height + "px" : "auto"};
    //     height: 200px;
    //     // height: 100em;
    // `;

    // const Box = styled.div`
    //     // padding: ${(props) => props.scale * 20}px;
    //     padding: 10px;
    //     // padding: 0.5em;
    //     vertical-align: middle;
    //     // height: 250px;
    //     // height: 22em;
    // `;

    // const Review = styled.div`
    //     // width: ${(props) => props.scale * 440}px;
    //     width: 15vw;
    //     // display: flex;
    //     // padding: ${(props) => props.scale * 35}px;
    //     padding: 17px;
    //     // min-height: 35vh;
    //     height: 350px;
    //     border-color: linear-gradient(90deg, #1eb0f6 6.32%, #2bd4df 100%);
    //     overflow-y: scroll;
    //     overscroll-behavior: contain;
    //     background: #ffffff;
    //     box-shadow: 0px 2px 10px -2px rgba(4, 171, 176, 0.3);
    //     border-radius: 16px;

    //     //width
    //     ::-webkit-scrollbar {
    //         width: 6px;
    //     }

    //     // Track
    //     ::-webkit-scrollbar-track {
    //         background: #f1f1f1;
    //     }

    //     // Handle
    //     ::-webkit-scrollbar-thumb {
    //         background: #888;
    //     }

    //     // Handle on hover
    //     ::-webkit-scrollbar-thumb:hover {
    //         background: #555;
    //     }
    // `;

    // const Avatar = styled.div`
    //     border-radius: 50%;
    //     // width: ${(props) => props.scale * 35}px;
    //     // height: ${(props) => props.scale * 35}px;
    //     // width: 36px;
    //     // height: 36px;
    //     width: 2em;
    //     height: 2em;
    //     overflow: hidden;
    //     flex-shrink: 0;
    //     // background: red;
    //     // margin-right: ${(props) => props.scale * 6}px;
    //     margin-right: 3px;
    //     img {
    //         width: 100%;
    //     }
    // `;

    // const Content = styled.div`
    //     p {
    //         // margin-top: 40px;
    //         margin-top: 3.5em;
    //         color: #382f70;
    //         font-family: Poppins, sans-serif;
    //         // font-size: ${(props) => props.scale * 21}px !important;
    //         // line-height: ${(props) => props.scale * 32}px;
    //         font-size: 12px;
    //         line-height: 166%;
    //         font-weight: 100;
    //         text-align: left;
    //     }
    // `;

    // const Name = styled.div`
    //     p {
    //         margin: 6px;
    //         // margin: 0.5em;
    //         // margin-left: -12px;
    //         color: red;
    //         // background: black;
    //         font-family: Poppins, sans-serif;
    //         // font-size: ${(props) => props.scale * 22}px !important;
    //         // line-height: ${(props) => props.scale * 14}px;
    //         font-size: 1em;
    //         // line-height: 2em;
    //         font-weight: 100;
    //         text-align: left;
    //     }
    // `;

    const slidesNum =
        window.innerWidth < 600
            ? Math.min(1, portraits.length)
            : Math.min(4, portraits.length);

    const slidesScroll =
        window.innerWidth < 600
            ? Math.min(1, portraits.length)
            : Math.min(1, portraits.length);

    // let width = (window.innerWidth > 0) ? window.innerWidth : screen.width;

    const settings = {
        dots: window.innerWidth > 600 ? true : false,
        infinite: true,
        slidesToShow: slidesNum,
        slidesToScroll: slidesScroll,
        autoplay: true,
        autoplaySpeed: 1500,
        cssEase: "ease-in-out",
        pauseOnHover: true,
        arrows: window.innerWidth > 600 ? true : false,
        centerMode: true,
        centerPadding: "30px",
        adaptiveHeight: true,
    };

    // const scale = 0.5;

    return (
        // <div style={{ margin: "5%" }}>
        //     {/* <h2>Auto Play</h2> */}
        //     <Slider {...settings}>
        //         {times(portraits.length, String).map((id, index) => (
        //             // testimonies_data[id].isApproved?
        //             <div key={index}>
        //                 {/* {console.log('size', window.innerWidth)} */}
        //                 <Box key={`marquee-example-review-${id}`} scale={scale}>
        //                     <Review scale={scale}>
        //                         <div id="containerHeader">
        //                             <Avatar scale={scale}>
        //                                 <img
        //                                     src={portraits[id].UserAvatar}
        //                                     alt=""
        //                                 />
        //                             </Avatar>
        //                             <Name scale={scale}>
        //                                 <p>{portraits[id].Name}</p>
        //                             </Name>
        //                         </div>
        //                         <Content scale={scale}>
        //                             <p>{portraits[id].Text}</p>
        //                         </Content>
        //                     </Review>
        //                 </Box>
        //             </div>
        //             // :null
        //         ))}
        //     </Slider>
        // </div>

        <div style={{ margin: "5%" }}>
            {/* <h2>Auto Play</h2> */}
            <Slider {...settings}>
                {times(portraits.length, String).map((id, index) => (
                    // testimonies_data[id].isApproved?
                    <div key={index}>
                        {/* {console.log('size', window.innerWidth)} */}
                        <div className="box">
                            <div className="review">
                                <div id="containerHeader">
                                    <div className="avatar">
                                        <img
                                            src={portraits[id].UserAvatar}
                                            alt=""
                                        />
                                    </div>
                                    <div className="name">
                                        <p>{portraits[id].Name}</p>
                                    </div>
                                </div>
                                <div className="content">
                                    <p>{portraits[id].Text}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    // :null
                ))}
            </Slider>
        </div>
    );
}

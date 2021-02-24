import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "./Testimonials.css";
import times from "lodash/times";

export default function AutoPlay({ portraits }) {
  const Height = styled.div`
    position: relative;
    width: 100%;
    min-height: ${(props) => (props.height ? props.height + "px" : "auto")};
  `;

  const Box = styled.div`
    padding: ${(props) => props.scale * 20}px;
    vertical-align: middle;
  `;

  const Review = styled.div`
    width: ${(props) => props.scale * 375}px;
    // display: flex;
    padding: ${(props) => props.scale * 25}px;
    background: #fff;
    border-radius: 4px;
    min-height: 35vh;
    border-color: linear-gradient(90deg, #1eb0f6 6.32%, #2bd4df 100%);
    box-shadow: 0 7px 20px 0 rgba(0, 0, 0, 0.12);
    overflow: hidden;
  `;

  const Avatar = styled.div`
    border-radius: 50%;
    width: ${(props) => props.scale * 35}px;
    height: ${(props) => props.scale * 35}px;
    overflow: hidden;
    flex-shrink: 0;
    // background: red;
    margin-right: ${(props) => props.scale * 6}px;
    img {
      width: 100%;
    }
  `;

  const Content = styled.div`
    p {
      margin: 8px;
      color: #382f70;
      font-family: Poppins, sans-serif;
      font-size: ${(props) => props.scale * 21}px !important;
      line-height: ${(props) => props.scale * 32}px;
      font-weight: 100;
      text-align: left;
    }
  `;

  const Name = styled.div`
    p {
      margin: 6px;
      // margin-left: -12px;
      color: red;
      // background: black;
      font-family: Poppins, sans-serif;
      font-size: ${(props) => props.scale * 22}px !important;
      line-height: ${(props) => props.scale * 14}px;
      font-weight: 100;
      text-align: left;
    }
  `;

  const slidesNum =
    window.innerWidth < 600
      ? Math.min(1, portraits.length)
      : Math.min(5, portraits.length);

  const slidesScroll =
    window.innerWidth < 600
      ? Math.min(1, portraits.length)
      : Math.min(5, portraits.length);

  // var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: slidesNum,
    slidesToScroll: slidesScroll,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "ease-in-out",
    pauseOnHover: true,
  };

  const scale = 0.5;

  return (
    <div style={{ margin: "5%" }}>
      {/* <h2>Auto Play</h2> */}
      <Slider {...settings}>
        {times(portraits.length, String).map((id) => (
          // testimonies_data[id].isApproved?
          <div>
            {console.log("size", window.innerWidth)}
            <Box key={`marquee-example-review-${id}`} scale={scale}>
              <Review scale={scale}>
                <div id="containerHeader">
                  <Avatar scale={scale}>
                    <img src={portraits[id].UserAvatar} alt="" />
                  </Avatar>
                  <Name scale={scale}>
                    <p>{portraits[id].Name}</p>
                  </Name>
                </div>
                <Content scale={scale}>
                  <p>{portraits[id].Text}</p>
                </Content>
              </Review>
            </Box>
          </div>
          // :null
        ))}
      </Slider>
    </div>
  );
}

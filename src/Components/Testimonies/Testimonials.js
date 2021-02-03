/** @format */

import React, { useEffect, useState } from "react";
import Marquee from "react-marquee-slider";
import styled from "styled-components";
import times from "lodash/times";
import "./Testimonials.css";
import FullWidth from "./../FullWidth";
// Firebase
import firebase from "firebase";

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
  width: ${(props) => props.scale * 325}px;
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
  width: ${(props) => props.scale * 30}px;
  height: ${(props) => props.scale * 30}px;
  overflow: hidden;
  flex-shrink: 0;
  // background: red;
  margin-right: ${(props) => props.scale * 10}px;
  img {
    width: 100%;
  }
`;

const Content = styled.div`
  p {
    margin: 10px;
    color: #382f70;
    font-family: Poppins, sans-serif;
    font-size: ${(props) => props.scale * 15}px !important;
    line-height: ${(props) => props.scale * 22}px;
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
    font-size: ${(props) => props.scale * 18}px !important;
    line-height: ${(props) => props.scale * 14}px;
    font-weight: 100;
    text-align: left;
  }
`;

// const portraits = [
//   "https://randomuser.me/api/portraits/women/68.jpg",
//   "https://randomuser.me/api/portraits/men/75.jpg",
//   "https://randomuser.me/api/portraits/lego/3.jpg",
//   "https://randomuser.me/api/portraits/women/89.jpg",
//   "https://randomuser.me/api/portraits/men/26.jpg",
// ];

const Reviews = ({
  portraits,
  vel,
  scaleFactor,
  size,
  onStartPerformance,
  onEndPerformance,
}) => {
  const [key, setKey] = useState();

  useEffect(() => {
    setKey();
  }, [size, setKey]);

  let scale = 0.5 * scaleFactor;

  if (size && size.width > 800) {
    scale = 0.65;
  }

  if (size && size.width > 1100) {
    scale = 0.8;
  }

  if (size && size.width > 1400) {
    scale = 1;
  }
  return (
    <FullWidth>
      <Height height={235}>
        <Marquee
          key={key}
          velocity={vel}
          minScale={0.7}
          onInit={onStartPerformance}
          onFinish={onEndPerformance}
        >
          {times(portraits.length, String).map((id) => (
            // testimonies_data[id].isApproved?
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
            // :null
          ))}
        </Marquee>
      </Height>
    </FullWidth>
  );
};

// will end in a loop without React.memo
export default React.memo(Reviews);

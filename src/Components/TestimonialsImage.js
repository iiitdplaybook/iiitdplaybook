/** @format */

import React, { useEffect, useState } from "react";
import Marquee from "react-marquee-slider";
import styled from "styled-components";
import times from "lodash/times";

import FullWidth from "./FullWidth";

const Height = styled.div`
  position: relative;
  width: 100%;
  height: ${(props) => (props.height ? props.height + "px" : "auto")};
`;

const Box = styled.div`
  padding: ${(props) => props.scale * 20}px;
  vertical-align: middle;
`;

const Review = styled.div`
  width: ${(props) => props.scale * 325}px;
  // display: flex;
  padding: ${(props) => props.scale * 5}px;
  background: #fff;
  border-radius: 4px;
  height: 30vh;
  border-color: linear-gradient(90deg, #1EB0F6 6.32%, #2BD4DF 100%);
  box-shadow: 0 7px 20px 0 rgba(0, 0, 0, 0.12);
  overflow: hidden;
`;

const Avatar = styled.div`
  border-radius: 4px;
  width: 100%;
  // height: ${(props) => props.scale * 40}px;
  overflow: hidden;
  min-height: 80%;
  max-height: 80%;
  // background: red;
  img{
    // min-height: 100%;
    min-width: 135%;
    margin-left: -10%;
  }
`;

// const Content = styled.div`
//   p {
//     margin: 10px;
//     color: #382f70;
//     font-family: Poppins, sans-serif;
//     font-size: ${(props) => props.scale * 15}px !important;
//     line-height: ${(props) => props.scale * 22}px;
//     font-weight: 100;
//     text-align: left;
//   }
// `;

const Name = styled.div`
  p {
    margin: 16px;
    color: red;
    font-family: Poppins, sans-serif;
    font-size: ${(props) => props.scale * 20}px !important;
    line-height: ${(props) => props.scale * 14}px;
    font-weight: 100;
    text-align: center;
  }
`;


// const portraits = [
//   "https://randomuser.me/api/portraits/women/68.jpg",
//   "https://randomuser.me/api/portraits/men/75.jpg",
//   "https://randomuser.me/api/portraits/lego/3.jpg",
//   "https://randomuser.me/api/portraits/women/89.jpg",
//   "https://randomuser.me/api/portraits/men/26.jpg",
// ];

const Reviews = ({ portraits, vel, scaleFactor, size, onStartPerformance, onEndPerformance, direc}) => {
  const [key, setKey] = useState();

  useEffect(() => {
    setKey();
  }, [size, setKey]);

  let scale = 0.5*scaleFactor;

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
      <Height height={300}>
        <Marquee
          key={key}
          velocity={vel}
          minScale={0.7}
          onInit={onStartPerformance}
          onFinish={onEndPerformance}
        >
          {times(portraits.length, String).map((id) => (
            <Box key={`marquee-example-review-${id}`} scale={scale}>
              <Review scale={scale}>
                <Avatar scale={scale}>
                  <img src={portraits[id].pic} alt="" />
                </Avatar>
                <Name scale={scale}>
                  <p>{portraits[id].name}</p>
                </Name>
              </Review>
            </Box>
          ))}
        </Marquee>
      </Height>
    </FullWidth>
  );
};

// will end in a loop without React.memo
export default React.memo(Reviews);

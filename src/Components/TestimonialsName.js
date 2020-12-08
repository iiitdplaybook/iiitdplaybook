/** @format */

import React, { useEffect, useState } from "react";
import Marquee from "react-marquee-slider";
import styled from "styled-components";
import times from "lodash/times";

import FullWidth from "./FullWidth";

const Height = styled.div`
  position: relative;
  width: 100%;
`;

const Box = styled.div`
  padding: ${(props) => props.scale * 40}px;
`;

const Review = styled.div`
  width: ${(props) => props.scale * 225}px;
  display: flex;
  padding: ${(props) => props.scale * 20}px;
  background: #fff;
  // background: rgba(255,255,255,.2);
  // backdrop-filter: blur(100px);
  border-radius: 65px;
  border-color: linear-gradient(90deg, #1EB0F6 6.32%, #2BD4DF 100%);
  box-shadow: 0 7px 20px 0 rgba(0, 0, 0, 0.12);
`;

const Avatar = styled.div`
  border-radius: 50%;
  width: ${(props) => props.scale * 58}px;
  height: ${(props) => props.scale * 58}px;
  overflow: hidden;
  flex-shrink: 0;
  margin-right: ${(props) => props.scale * 15}px;
  img {
    max-width: 100%;
  }
`;

const Content = styled.div`
  p {
    margin: 8px;
    color: #382f70;
    font-family: Poppins, sans-serif;
    font-size: ${(props) => props.scale * 28}px;
    line-height: ${(props) => props.scale * 24}px;
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

const Reviews = ({ portraits, vel, scaleFactor, size, onStartPerformance, onEndPerformance }) => {
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
      <Height height={200}>
        <Marquee
          key={key}
          velocity={vel/2}
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
                <Content scale={scale}>
                  <p>{portraits[id].text}</p>
                </Content>
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

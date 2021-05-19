import React, { Component } from 'react';
import Slider from 'react-slick';
import TextCard from '../TextCard/TextCard';
import times from 'lodash/times';
import Card from './card';

export default function VerticalSlickSlider ({properties}) {
    // Settings for slider
    const settings = {
        adaptiveHeight: false,
        arrows: false,
        autoplay:true,
        centerMode: true,
        centerPadding: '30px',
        cssEase: 'ease-in-out',
        dots:false,
        pauseOnHover:true,
        slidePerRow:1,
        slidesScroll: (window.innerWidth>600) ? 3:4,
        slidesToShow:(window.innerWidth>600) ? 3:4,
        vertical:true,
    }

    return (
        <div>
            {(window.innerWidth>600) ? (
                <div style={{display:'flex',justifyContent: 'space-around',flexWrap: 'nowrap'}}>
                    <div style={{width:'27vw'}}>
                    <Slider {...settings} {...{autoplaySpeed:1000}}>
                        {properties.slice(0,Math.floor(properties.length/3)).map((id,index)=>(
                            <>
                            <Card cardsData={properties[index]} key={id}/>
                            <div style={{height:'120px'}}></div>
                            </>
                        ))}
                    </Slider>
                    </div>
                    <div style={{width:'27vw'}}>
                    <Slider {...settings} {...{autoplaySpeed:2000}}>
                        {properties.slice(Math.floor(properties.length/3),2*Math.floor(properties.length/3)).map((id,index)=>(
                            <>
                            <div style={{height:'120px'}}></div>
                            <Card cardsData={properties.slice(Math.floor(properties.length/3),2*Math.floor(properties.length/3))[index]} key={id}/>
                            </>
                        ))}
                    </Slider>
                    </div>
                    <div style={{width:'27vw'}}>
                    <Slider {...settings} {...{autoplaySpeed:3000}}>
                        {properties.slice(2*Math.floor(properties.length/3)).map((id,index)=>(
                            <>
                            <Card cardsData={properties.slice(2*Math.floor(properties.length/3))[index]} key={id}/>
                            <div style={{height:'120px'}}></div>
                            </>
                        ))}
                    </Slider>
                    </div>
                </div>
            ):(
                <Slider {...settings} {...{autoplaySpeed:1000}} >
                {properties.map((id,index) => (
                    <Card cardsData={properties[index]} key={id}/>
                ))}
            </Slider>
            )}
        </div>
    );
}
// import React from "react";
import imageTimeManagement from "../Assets/SVG_for_cards/timeManagement.svg";
import imageNostalgia from "../Assets/SVG_for_cards/nostalgia.svg";
import imageOnlinesem from "../Assets/SVG_for_cards/onlineSem.svg";
import imagePlacements from "../Assets/SVG_for_cards/placements.svg";
import imageClubs from "../Assets/SVG_for_cards/clubs.svg";
import imageProfproject from "../Assets/SVG_for_cards/teamwork.svg";
import imageResources from "../Assets/SVG_for_cards/resources2.svg";
import imageQuery from "../Assets/SVG_for_cards/query.svg";
import imageNetwork from "../Assets/SVG_for_cards/network.svg";

import ExploreCards from "./ExploreCards/ExploreCards"

function items(){

    // bottom left - color1
    // top right - color2

    const color1 = "#9F4EAD"; //purple
    const color2 = "#EEB86D"; //yellow

    const color3 = "#2FB8FF"; //sea blue
    const color4 = "#95E8DC"; //sea green

    const color5 = "#9F7FE5"; //purple
    const color6 = "#5497E3"; //blue
    
    const color7 = "#236FDC"; //dark blue
    const color8 = "#4BBEFF"; //light blue

    const color9 = "#4A90F3"; //blue
    const color10 = "#7EF29D"; //green

    const color11 = "#412FAF"; //dark blue
    const color12 = "#50C1E8"; //light blue

    const color13 = "#181C33"; //blackish
    const color14 = "#4F4181"; //blackish purple

    const color15 = "#2587A6"; //dark turquoise
    const color16 = "#6FF7E8"; //light turquoise

    const color17 = "#F57F36"; //light yellow
    const color18 = "#FFD78A"; //dark yellow

    const color19 = "#BD5D94"; //pink
    const color20 = "#17086E"; //dark blue

    const color21 = "#5C0DB1"; //dark purple
    const color22 = "#DBCCFF"; //light purple

    const opac = .3;
    
    const itemslist = {
        "allCards":[],
        "recommendedCards":[],
        "favCards":[]
    };

    const allCards = [{
        "gradientColor_1":color1,
        "gradientColor_2":color2,
        "title":"\nNostalgia",
        "n_testimonies":6,
        "reading_time":10,
        "image":imageNostalgia,
        "pathLink":"nostalgia",
        "opacity":1,
    },{
        "gradientColor_1":color3,
        "gradientColor_2":color4,
        "title":"Time Management",
        "n_testimonies":6,
        "reading_time":3,
        "image":imageTimeManagement,
        "pathLink":"timemanagement",
        "opacity":1,
    },{
        "gradientColor_1":color5,
        "gradientColor_2":color6,
        "title":"\nOnline Sem Tips",
        "n_testimonies":6,
        "reading_time":3,
        "image":imageOnlinesem,
        "pathLink":"explore",
        "opacity":opac,
    }, {
        "gradientColor_1":color7,
        "gradientColor_2":color8,
        "title":"\nPlacements",
        "n_testimonies":6,
        "reading_time":3,
        "image":imagePlacements,
        "pathLink":"explore",
        "opacity":opac,
    }, {
        "gradientColor_1":color9,
        "gradientColor_2":color10,
        "title":"\nClubs",
        "n_testimonies":6,
        "reading_time":3,
        "image":imageClubs,
        "pathLink":"explore",
        "opacity":opac,
    }, {
        "gradientColor_1":color11,
        "gradientColor_2":color12,
        "title":"Projects With Professors",
        "n_testimonies":6,
        "reading_time":3,
        "image":imageProfproject,
        "pathLink":"explore",
        "opacity":opac,
    }, {
        "gradientColor_1":color13,
        "gradientColor_2":color14,
        "title":"Resources for college",
        "n_testimonies":6,
        "reading_time":3,
        "image":imageResources,
        "pathLink":"resources",
        "opacity":1,
    }, {
        "gradientColor_1":color17,
        "gradientColor_2":color18,
        "title":"Resolving \nQueries",
        "n_testimonies":6,
        "reading_time":3,
        "image":imageQuery,
        "pathLink":"explore",
        "opacity":opac,
    }, {
        "gradientColor_1":color15,
        "gradientColor_2":color16,
        "title":"\nNetworking",
        "n_testimonies":6,
        "reading_time":3,
        "image":imageNetwork,
        "pathLink":"explore",
        "opacity":opac,
    }, {
        "gradientColor_1":color19,
        "gradientColor_2":color20,
        "title":"\nEntertainment",
        "n_testimonies":6,
        "reading_time":3,
        "image":imageTimeManagement,
        "pathLink":"explore",
        "opacity":opac,
    }, {
        "gradientColor_1":color21,
        "gradientColor_2":color22,
        "title":"Talking to Friends or Seniors",
        "n_testimonies":6,
        "reading_time":3,
        "image":imageTimeManagement,
        "pathLink":"explore",
        "opacity":opac,
    }];

    const recommendedCards = [{
        "gradientColor_1":color1,
        "gradientColor_2":color2,
        "title":"\nNostalgia",
        "n_testimonies":6,
        "reading_time":3,
        "image":imageNostalgia,
        "pathLink":"nostalgia",
        "opacity":1,
    },{
        "gradientColor_1":color3,
        "gradientColor_2":color4,
        "title":"Time Management",
        "n_testimonies":6,
        "reading_time":3,
        "image":imageTimeManagement,
        "pathLink":"timemanagement",
        "opacity":1,
    },{
        "gradientColor_1":color13,
        "gradientColor_2":color14,
        "title":"Resources for college",
        "n_testimonies":6,
        "reading_time":3,
        "image":imageResources,
        "pathLink":"resources",
        "opacity":1,
    }];

    const favCards = [{
        "gradientColor_1":color1,
        "gradientColor_2":color2,
        "title":"\nNostalgia",
        "n_testimonies":6,
        "reading_time":3,
        "image":imageNostalgia,
        "pathLink":"nostalgia",
        "opacity":1,
    }];

    for (let index = 0; index < allCards.length; index++) {
        itemslist["allCards"].push(
            ExploreCards(allCards[index])
        );
    }
    for (let index=0; index<favCards.length;index++){
        itemslist["favCards"].push(
            ExploreCards(favCards[index])
        );
    }
    for (let index=0; index<recommendedCards.length;index++){
        itemslist["recommendedCards"].push(
            ExploreCards(recommendedCards[index])
        );
    }

    return(
        itemslist
    );
}

export default items

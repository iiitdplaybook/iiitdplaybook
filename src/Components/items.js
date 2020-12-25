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

    const color1 = "#9F4EAD";
    const color2 = "#EEB86D";

    const color3 = "#2FB8FF";
    const color4 = "#95E8DC";

    const color5 = "#9F7FE5";
    const color6 = "#5497E3";
    
    const color7 = "#236FDC";
    const color8 = "#4BBEFF";

    
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
    },{
        "gradientColor_1":color3,
        "gradientColor_2":color4,
        "title":"Time Management",
        "n_testimonies":6,
        "reading_time":3,
        "image":imageTimeManagement,
        "pathLink":"explore",
    },{
        "gradientColor_1":color5,
        "gradientColor_2":color6,
        "title":"\nOnline Sem Tips",
        "n_testimonies":6,
        "reading_time":3,
        "image":imageOnlinesem,
        "pathLink":"explore",
    }, {
        "gradientColor_1":color7,
        "gradientColor_2":color8,
        "title":"\nPlacements",
        "n_testimonies":6,
        "reading_time":3,
        "image":imagePlacements,
        "pathLink":"explore",
    }, {
        "gradientColor_1":color7,
        "gradientColor_2":color8,
        "title":"\nClubs",
        "n_testimonies":6,
        "reading_time":3,
        "image":imageClubs,
        "pathLink":"explore",
    }, {
        "gradientColor_1":color7,
        "gradientColor_2":color8,
        "title":"Projects With Professors",
        "n_testimonies":6,
        "reading_time":3,
        "image":imageProfproject,
        "pathLink":"explore",
    }, {
        "gradientColor_1":color7,
        "gradientColor_2":color8,
        "title":"Good College Resources",
        "n_testimonies":6,
        "reading_time":3,
        "image":imageResources,
        "pathLink":"explore",
    }, {
        "gradientColor_1":color7,
        "gradientColor_2":color8,
        "title":"\nResolving Queries",
        "n_testimonies":6,
        "reading_time":3,
        "image":imageQuery,
        "pathLink":"explore",
    }, {
        "gradientColor_1":color7,
        "gradientColor_2":color8,
        "title":"\nNetworking",
        "n_testimonies":6,
        "reading_time":3,
        "image":imageNetwork,
        "pathLink":"explore",
    }, {
        "gradientColor_1":color7,
        "gradientColor_2":color8,
        "title":"\nEnterntainment",
        "n_testimonies":6,
        "reading_time":3,
        "image":imageTimeManagement,
        "pathLink":"explore",
    }];

    const recommendedCards = [{
        "gradientColor_1":color1,
        "gradientColor_2":color2,
        "title":"\nNostalgia",
        "n_testimonies":6,
        "reading_time":3,
        "image":imageTimeManagement,
        "pathLink":"nostalgia",
    }];

    const favCards = [{
        "gradientColor_1":color1,
        "gradientColor_2":color2,
        "title":"\nNostalgia",
        "n_testimonies":6,
        "reading_time":3,
        "image":imageTimeManagement,
        "pathLink":"nostalgia",
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
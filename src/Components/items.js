// import React from "react";
import imageTimeManagement from "../Assets/SVG_for_cards/teamwork.svg";
import ExploreCards from "./ExploreCards/ExploreCards"

function items(){
    
    const itemslist = {
        "allCards":[],
        "recommendedCards":[],
        "favCards":[]
    };

    const allCards = [{
        "gradientColor_1":"#9F4EAD",
        "gradientColor_2":"#EEB86D",
        "title":"\nNostalgia",
        "n_testimonies":6,
        "reading_time":3,
        "image":imageTimeManagement,
        "pathLink":"nostalgia",
    },{
        "gradientColor_1":"#2FB8FF",
        "gradientColor_2":"#95E8DC",
        "title":"Time Management",
        "n_testimonies":6,
        "reading_time":3,
        "image":imageTimeManagement,
        "pathLink":"explore",
    },{
        "gradientColor_1":"#9F7FE5",
        "gradientColor_2":"#5497E3",
        "title":"\nOnline Sem Tips",
        "n_testimonies":6,
        "reading_time":3,
        "image":imageTimeManagement,
        "pathLink":"explore",
    }, {
        "gradientColor_1":"#236FDC",
        "gradientColor_2":"#4BBEFF",
        "title":"\nPlacements",
        "n_testimonies":6,
        "reading_time":3,
        "image":imageTimeManagement,
        "pathLink":"explore",
    }, {
        "gradientColor_1":"#236FDC",
        "gradientColor_2":"#4BBEFF",
        "title":"\nClubs",
        "n_testimonies":6,
        "reading_time":3,
        "image":imageTimeManagement,
        "pathLink":"explore",
    }, {
        "gradientColor_1":"#236FDC",
        "gradientColor_2":"#4BBEFF",
        "title":"Projects With Professors",
        "n_testimonies":6,
        "reading_time":3,
        "image":imageTimeManagement,
        "pathLink":"explore",
    }, {
        "gradientColor_1":"#236FDC",
        "gradientColor_2":"#4BBEFF",
        "title":"Good College Resources",
        "n_testimonies":6,
        "reading_time":3,
        "image":imageTimeManagement,
        "pathLink":"explore",
    }, {
        "gradientColor_1":"#236FDC",
        "gradientColor_2":"#4BBEFF",
        "title":"Resolving Queries",
        "n_testimonies":6,
        "reading_time":3,
        "image":imageTimeManagement,
        "pathLink":"explore",
    }, {
        "gradientColor_1":"#236FDC",
        "gradientColor_2":"#4BBEFF",
        "title":"\nNetworking",
        "n_testimonies":6,
        "reading_time":3,
        "image":imageTimeManagement,
        "pathLink":"explore",
    }, {
        "gradientColor_1":"#236FDC",
        "gradientColor_2":"#4BBEFF",
        "title":"\nTimepass",
        "n_testimonies":6,
        "reading_time":3,
        "image":imageTimeManagement,
        "pathLink":"explore",
    }];

    const recommendedCards = [{
        "gradientColor_1":"#9F4EAD",
        "gradientColor_2":"#EEB86D",
        "title":"\nNostalgia",
        "n_testimonies":6,
        "reading_time":3,
        "image":imageTimeManagement,
        "pathLink":"nostalgia",
    }];

    const favCards = [{
        "gradientColor_1":"#9F4EAD",
        "gradientColor_2":"#EEB86D",
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
// import React from "react";
import addItem from "../../Assets/SVG_for_cards/addItem.svg";
import ResourceCards from "./resourceCards"
import ResourceCards_Mix from "./resourceCards2"
import ResourceCards_Small from "./resourceCards3"
import ExploreCards from "../ExploreCards/ExploreCards"

function items(){

    const color1 = "#fff";
    const color2 = "#fafafa";
    
    const itemslist = {
        "chromeCards_pers":[],
        "chromeCards_acad":[],
        "chromeCards_cool":[],
        "codingCards":[],
        "codingCards_YT":[],
        "networkingCards":[],
        "designCards":[],
        "otherCards":[]
    };

    const chromeCards_pers = [{
        "gradientColor_1":color1,
        "gradientColor_2":color2,
        "title":"Momentum",
        "description": "Motivate yourself everytime you browse",
        "image":"https://lh3.googleusercontent.com/8aCEKfSlr6Ytgq0TCzt7mlnAeo9qNos8VYyWEaXh3OBm9prFlTgCATha0mAzmvd0VluuxSltQl0U-CJ0U-YkJyRXVg=w128-h128-e365-rj-sc0x00ffffff",
        "pathLink":"https://chrome.google.com/webstore/detail/momentum/laookkfknpbbblfpciffpaejjkokdgca?hl=en",
    }, {
        "gradientColor_1":color1,
        "gradientColor_2":color2,
        "title":"Dark Reader",
        "description": "Convert any website to dark mode",
        "image":"https://lh3.googleusercontent.com/XckGUdCyM2j40QXiyrEyFZAO6XMBSBPr67OEWV3jSgWipq4e9DFE-XLA7aAJ4JQatAGIwXSVw_Or_7M_ne0PirpZQg=w128-h128-e365-rj-sc0x00ffffff",
        "pathLink":"https://chrome.google.com/webstore/detail/dark-reader/eimadpbcbfnmbkopoojfekhnkhdbieeh?hl=en",
    }, {
        "gradientColor_1":color1,
        "gradientColor_2":color2,
        "title":"Design Tips",
        "description": "Get trending articles about design",
        "image":"https://lh3.googleusercontent.com/cNaP6bUftOYtzZ9jwQfoNAPoC2CvB5qq-cdtaTX5Hd7ztnqq0JofOMrnaoRb-XZtTqOZEVXmdm-72PxCZ67ocRDQvA=w128-h128-e365-rj-sc0x00ffffff",
        "pathLink":"https://chrome.google.com/webstore/detail/productdesigntips/jfkbdlhcdoooljpkfjfllhlgeejhabbb?hl=en",
    }, {
        "gradientColor_1":color1,
        "gradientColor_2":color2,
        "title":"Luxor ",
        "description": "Bought by 10 students",
        "image":"https://images-na.ssl-images-amazon.com/images/I/51HMBe9-5RL.jpg",
        "pathLink":"https://amzn.to/2Vvsm8m",
    }, {
        "gradientColor_1":color1,
        "gradientColor_2":color2,
        "title":"Visualize value",
        "description": "Minimalistic valuable content",
        "image":"https://lh3.googleusercontent.com/CPw74EtQycIqpckaM7FZsiIVJvy_gkB4Dw0eg2zSElRuV5Zn5hi6IoGbSltrklTnB8Fmtlcmow=w128-h128-e365-rj-sc0x00ffffff",
        "pathLink":"https://chrome.google.com/webstore/detail/visualize-value/ejblinjidfhnpkjbphoendgjjnhmfoee",
    }];

    const chromeCards_acad = [{
        "gradientColor_1":color1,
        "gradientColor_2":color2,
        "title":"Zotero",
        "description": "Get reference format of any research paper",
        "image":"https://lh3.googleusercontent.com/guA2wpxQkD_QSBXAP-AZTwbhzXkioLbKPv5-5qT8Ixdf2TjXBASKQODEfommzYh1fnXibcJg-PI2o-WgUbORRHA0=w128-h128-e365-rj-sc0x00ffffff",
        "pathLink":"https://chrome.google.com/webstore/detail/zotero-connector/ekhagklcjbdpajgpjgmbionohlpdbjgc?hl=en",
    }, {
        "gradientColor_1":color1,
        "gradientColor_2":color2,
        "title":"Grammarly",
        "description": "To check you're atisundar englis",
        "image":"https://lh3.googleusercontent.com/fgIyyEUt5FrH1Vd8K0psbk4fni3WVxgpXazIw_SiHvQYfG7_TqI4XcyZVnVtHudFAu71dTWBlMJ1dTJCj6JOAU1n2g=w128-h128-e365-rj-sc0x00ffffff",
        "pathLink":"https://chrome.google.com/webstore/detail/grammarly-for-chrome/kbfnbcaeplbcioakkpcpgfkobkghlhen?hl=en",
    }, {
        "gradientColor_1":color1,
        "gradientColor_2":color2,
        "title":"Design Tips",
        "description": "Get trending articles about design",
        "image":"https://lh3.googleusercontent.com/cNaP6bUftOYtzZ9jwQfoNAPoC2CvB5qq-cdtaTX5Hd7ztnqq0JofOMrnaoRb-XZtTqOZEVXmdm-72PxCZ67ocRDQvA=w128-h128-e365-rj-sc0x00ffffff",
        "pathLink":"https://chrome.google.com/webstore/detail/productdesigntips/jfkbdlhcdoooljpkfjfllhlgeejhabbb?hl=en",
    }, {
        "gradientColor_1":color1,
        "gradientColor_2":color2,
        "title":"Classmate ",
        "description": "Bought by almost everyone",
        "image":"https://images-na.ssl-images-amazon.com/images/I/71WZfAOB9gL._SL1100_.jpg",
        "pathLink":"https://amzn.to/3g6FCKj",
    }];

    
    const chromeCards_cool = [{
        "gradientColor_1":color1,
        "gradientColor_2":color2,
        "title":"Session buddy",
        "description": "Save your 1000+ tabs for later",
        "image":"https://lh3.googleusercontent.com/gzdoa9Uydnuw3G_YKBh0Ua8oFMItgG1NmIDUYKi5W-G4V6A5ACkG_5ffBf1dmUXgOVFKwnShADh0-GLYhHlyXnGQ=w128-h128-e365-rj-sc0x00ffffff",
        "pathLink":"https://chrome.google.com/webstore/detail/session-buddy/edacconmaakjimmfgnblocblbcdcpbko?hl=en",
    }, {
        "gradientColor_1":color1,
        "gradientColor_2":color2,
        "title":"Volume master",
        "description": "Control the volume of a tab",
        "image":"https://lh3.googleusercontent.com/KVGRNfHgQNl3RtCAnq4bTHM23198SfyCES7LnrxnSp21B5xQ2WKRLpIMxaPSYYH0Xp99auk5OQQ6QHjpOL3OvqUi=w128-h128-e365-rj-sc0x00ffffff",
        "pathLink":"https://chrome.google.com/webstore/detail/volume-master/jghecgabfgfdldnmbfkhmffcabddioke?hl=en",
    }, {
        "gradientColor_1":color1,
        "gradientColor_2":color2,
        "title":"Instapaper",
        "description": "Save anything to read later, anywhere",
        "image":"https://lh3.googleusercontent.com/IrEEzh3gjTtGATjxqDQb2CC6f7RiC0D5IpJn9V7OK0Gl07UrwPUq80NaCRCzqReiHc-oMwvDCIJKUz1Q8sWtQbIR=w128-h128-e365-rj-sc0x00ffffff",
        "pathLink":"https://chrome.google.com/webstore/detail/instapaper/ldjkgaaoikpmhmkelcgkgacicjfbofhh?hl=en",
    }, {
        "gradientColor_1":color1,
        "gradientColor_2":color2,
        "title":"Adblocker",
        "description": "No more ads. No more!",
        "image":"https://lh3.googleusercontent.com/xboK30Q-eBfJBr5ipEcJ4A_QpET20mujleS4fvGf7DAFM-K20WqcNx0rurGbbxQAlfYCitNz7DbF-Mehla1M7Rd9=w128-h128-e365-rj-sc0x00ffffff",
        "pathLink":"https://chrome.google.com/webstore/detail/adblocker-for-chrome-noad/alplpnakfeabeiebipdmaenpmbgknjce?hl=en",
    }, {
        "gradientColor_1":color1,
        "gradientColor_2":color2,
        "title":"Email Tracker",
        "description": "Track your sent mails",
        "image":"https://lh3.googleusercontent.com/-Qbe0s3I6huZBX4FZbwghJS-NQhR92K0HFmkcz9XxzDYrEjLq4Ig_xKbDk-Jrh2JhSZA5kwJYC74NXcWFEIDeBHH=w128-h128-e365-rj-sc0x00ffffff",
        "pathLink":"https://chrome.google.com/webstore/detail/email-tracker-for-gmail-m/ndnaehgpjlnokgebbaldlmgkapkpjkkb?hl=en",
    }];

    const codingCards = [{
        "gradientColor_1":color1,
        "gradientColor_2":color2,
        "title":"Acer Nitro 5",
        "description": "Bought by 105 students",
        "image":"https://images-na.ssl-images-amazon.com/images/I/71Pp8PLPNAL._SL1500_.jpg",
        "pathLink":"nostalgia",
    },{
        "gradientColor_1":color1,
        "gradientColor_2":color2,
        "title":"Lenovo Legion gaming laptop",
        "description": "Bought by 105 students",
        "image":"https://yt3.ggpht.com/ytc/AAUvwnglVjQeNSAVO9GgKkrjIbCO_y0rOx7Yxx-2bv9r_A=s176-c-k-c0x00ffffff-no-rj",
        "pathLink":"https://www.youtube.com/user/thenewboston",
    }];

    const networkingCards = [{
        "gradientColor_1":color1,
        "gradientColor_2":color2,
        "title":"Designer Mouse Pad for Laptop",
        "description": "Bought by 15 students",
        "image":"https://images-na.ssl-images-amazon.com/images/I/6181jZehG7L._SL1500_.jpg",
        "pathLink":"https://amzn.to/3mBGNnB",
    }, {
        "gradientColor_1":color1,
        "gradientColor_2":color2,
        "title":"Waterproof Gaming Mouse Pad",
        "description": "Bought by 5 students",
        "image":"https://images-na.ssl-images-amazon.com/images/I/71f9uIMJsNL._SL1500_.jpg",
        "pathLink":"https://amzn.to/2IcuC1y",
    }, {
        "gradientColor_1":color1,
        "gradientColor_2":color2,
        "title":"OnePlus Bullets wireless earphones",
        "description": "Bought by 105 students",
        "image":"https://images-na.ssl-images-amazon.com/images/I/61DKcGr12OL._SL1500_.jpg",
        "pathLink":"https://amzn.to/37Alv3r",
    }, {
        "gradientColor_1":color1,
        "gradientColor_2":color2,
        "title":"boAt Rockerz Bluetooh earphones",
        "description": "Bought by 10 students",
        "image":"https://images-na.ssl-images-amazon.com/images/I/61ku39qVEzL._SL1500_.jpg",
        "pathLink":"https://amzn.to/3lAZCpE",
    }, {
        "gradientColor_1":color1,
        "gradientColor_2":color2,
        "title":"Infinity JBL wireless earphones",
        "description": "Bought by 5 students",
        "image":"https://images-na.ssl-images-amazon.com/images/I/619OijH9HnL._SL1500_.jpg",
        "pathLink":"https://amzn.to/33D2QT6",
    }, {
        "gradientColor_1":color1,
        "gradientColor_2":color2,
        "title":"boAt Rockerz Bluetooth headphones",
        "description": "Bought by 15 students",
        "image":"https://images-na.ssl-images-amazon.com/images/I/61ihz46SLOL._SL1500_.jpg",
        "pathLink":"https://amzn.to/2VwOmQp",
    }, {
        "gradientColor_1":color1,
        "gradientColor_2":color2,
        "title":"Logitech B170 Wireless Mouse",
        "description": "Bought by 10 students",
        "image":"https://images-na.ssl-images-amazon.com/images/I/51kdFjyPRAL._SL1500_.jpg",
        "pathLink":"https://www.amazon.in/Logitech-B170-Wireless-Mouse-Black/dp/B01J0XWYKQ/ref=zg_bs_computers_3?_encoding=UTF8&psc=1&refRID=4VA3HBJTP2WGVP0EAQJR&smid=A14CZOWI0VEHLG",
    }, {
        "gradientColor_1":color1,
        "gradientColor_2":color2,
        "title":"Logitech Light Sync Gaming Mouse",
        "description": "Bought by gaming students",
        "image":"https://images-na.ssl-images-amazon.com/images/I/61UxfXTUyvL._SL1500_.jpg",
        "pathLink":"https://www.amazon.in/Logitech-G102-Customizable-Lighting-Programmable/dp/B08LT9BMPP/ref=sr_1_4_mod_primary_lightning_deal?dchild=1&keywords=gaming+mouse&qid=1608469670&s=computers&sbo=Tc8eqSFhUl4VwMzbE4fw%2Fw%3D%3D&smid=A14CZOWI0VEHLG&sr=1-4",
    }, {
        "gradientColor_1":color1,
        "gradientColor_2":color2,
        "title":"Keyboard",
        "description": "Bought by 15 students",
        "image":"https://images-na.ssl-images-amazon.com/images/I/61ihz46SLOL._SL1500_.jpg",
        "pathLink":"https://amzn.to/2VwOmQp",
    }, {
        "gradientColor_1":color1,
        "gradientColor_2":color2,
        "title":"ADDMAX multi-plug extension board",
        "description": "Bought by 15 students",
        "image":"https://images-na.ssl-images-amazon.com/images/I/81okyQFxdiL._SL1500_.jpg",
        "pathLink":"https://amzn.to/37AlRXP",
    }, {
        "gradientColor_1":color1,
        "gradientColor_2":color2,
        "title":"boAt Stone 170 5W Bluetooth Speaker ",
        "description": "Bought by 4 students",
        "image":"https://images-na.ssl-images-amazon.com/images/I/61Mq3HQ5MqL._SL1500_.jpg",
        "pathLink":"https://amzn.to/3mABHI0",
    }, {
        "gradientColor_1":color1,
        "gradientColor_2":color2,
        "title":"JBL GO Portable Wireless Bluetooth Speaker",
        "description": "Bought by 15 students",
        "image":"https://images-na.ssl-images-amazon.com/images/I/71nwG2LuLsL._SL1200_.jpg",
        "pathLink":"https://amzn.to/3ohJefm",
    }, {
        "gradientColor_1":color1,
        "gradientColor_2":color2,
        "title":"JBL Waterproof Portable Bluetooth Speaker",
        "description": "Bought by 10 students",
        "image":"https://images-na.ssl-images-amazon.com/images/I/81DRhqE04BL._SL1500_.jpg",
        "pathLink":"https://amzn.to/3qolPe6",
    }];

    const designCards = [{
        "gradientColor_1":color1,
        "gradientColor_2":color2,
        "title":"Philips 61013 Air 5-Watt LED Desklight",
        "description": "Bought by 5 students",
        "image":"https://images-na.ssl-images-amazon.com/images/I/71mI4aUUQYL._SL1500_.jpg",
        "pathLink":"https://amzn.to/3lwV0AB",
    },{
        "gradientColor_1":color1,
        "gradientColor_2":color2,
        "title":"Rechargeable LED Touch Desk Lamp",
        "description": "Bought by 10 students",
        "image":"https://images-na.ssl-images-amazon.com/images/I/51VohtD1dnL._SL1080_.jpg",
        "pathLink":"https://amzn.to/3g6eOtE",
    },{
        "gradientColor_1":color1,
        "gradientColor_2":color2,
        "title":"Rechargeable LED Touch Desk Lamp",
        "description": "Bought by 1 students",
        "image":"https://images-na.ssl-images-amazon.com/images/I/31pzH7KFoDL.jpg",
        "pathLink":"https://amzn.to/3qwQnun",
    },{
        "gradientColor_1":color1,
        "gradientColor_2":color2,
        "title":"Photo Clip Lights Indoor Decoration",
        "description": "Bought by 50 students",
        "image":"https://images-na.ssl-images-amazon.com/images/I/51JaxAi8puL.jpg",
        "pathLink":"https://amzn.to/3g36g6E",
    },{
        "gradientColor_1":color1,
        "gradientColor_2":color2,
        "title":"Decorative Fairy Lights",
        "description": "Bought by 45 students",
        "image":"https://images-na.ssl-images-amazon.com/images/I/615qNo%2BAe0L._SL1000_.jpg",
        "pathLink":"https://amzn.to/37wQWvh",
    },{
        "gradientColor_1":color1,
        "gradientColor_2":color2,
        "title":"Artificial Plants Bonsai Potted shrubs",
        "description": "Bought by 50 students",
        "image":"https://images-na.ssl-images-amazon.com/images/I/81vSA24EfCL._SL1500_.jpg",
        "pathLink":"https://amzn.to/37A2fTo",
    },{
        "gradientColor_1":color1,
        "gradientColor_2":color2,
        "title":"Artificial Plant pot",
        "description": "Bought by 30 students",
        "image":"https://images-na.ssl-images-amazon.com/images/I/71s%2B-MlydaL._SL1001_.jpg",
        "pathLink":"https://amzn.to/2L0224l",
    }
    
    ];

    const otherCards = [{
        "gradientColor_1":color1,
        "gradientColor_2":color2,
        "title":"Multicolour posters",
        "description": "Bought by 20 students",
        "image":"https://images-na.ssl-images-amazon.com/images/I/81BwL6msi8L._SL1500_.jpg",
        "pathLink":"https://amzn.to/3okOX4c",
    },{
        "gradientColor_1":color1,
        "gradientColor_2":color2,
        "title":"Wall poster",
        "description": "Bought by 10 students",
        "image":"https://images-na.ssl-images-amazon.com/images/I/713RslXCZ8L._SL1500_.jpg",
        "pathLink":"https://amzn.to/2L7CPFr",
    },{
        "gradientColor_1":color1,
        "gradientColor_2":color2,
        "title":"Breaking bad poster",
        "description": "Bought by 30 students",
        "image":"https://images-na.ssl-images-amazon.com/images/I/71uVHg4zTLL._SL1500_.jpg",
        "pathLink":"https://amzn.to/36FvEN3",
    },{
        "gradientColor_1":color1,
        "gradientColor_2":color2,
        "title":"Sherlock Holmes poster",
        "description": "Bought by 25 students",
        "image":"https://images-na.ssl-images-amazon.com/images/I/71R1LAb0oeL._SL1500_.jpg",
        "pathLink":"https://amzn.to/2VtSDUR",
    },{
        "gradientColor_1":color1,
        "gradientColor_2":color2,
        "title":"Multi-Purpose Laptop Table",
        "description": "Bought by 10 students",
        "image":"https://images-na.ssl-images-amazon.com/images/I/71laWT3LqBL._SL1500_.jpg",
        "pathLink":"https://amzn.to/2VzLUbM",
    }, {
        "gradientColor_1":color1,
        "gradientColor_2":color2,
        "title":"Laptop Table Foldable",
        "description": "Bought by 4 students",
        "image":"https://images-na.ssl-images-amazon.com/images/I/61afaQGKVYL._SL1444_.jpg",
        "pathLink":"https://amzn.to/2VwMOWz",
    }, {
        "gradientColor_1":color1,
        "gradientColor_2":color2,
        "title":"Multi-Purpose Laptop Table with Study Table",
        "description": "Bought by 3 students",
        "image":"https://images-na.ssl-images-amazon.com/images/I/614x3s4PWXL.jpg",
        "pathLink":"https://amzn.to/3owRSa7",
    },{
        "gradientColor_1":color1,
        "gradientColor_2":color2,
        "title":"Casio FX-82ES calculator",
        "description": "Bought by 4 students",
        "image":"https://images-na.ssl-images-amazon.com/images/I/61w1PMHiZoL._SL1000_.jpg",
        "pathLink":"https://amzn.to/36BiX5S",
    },{
        "gradientColor_1":color1,
        "gradientColor_2":color2,
        "title":"Casio FX-991EX calculator",
        "description": "Bought by 10 students",
        "image":"https://images-na.ssl-images-amazon.com/images/I/616ryRoQ5EL._SL1100_.jpg",
        "pathLink":"https://amzn.to/39F3mnp",
    }];

    // const allCards1 = networkingCards.concat(codingCards);
    

    const addCard = [{
        "gradientColor_1":color1,
        "gradientColor_2":color2,
        "title":"Something missing? Add a product",
        "description": "Your contribution matters",
        "image":addItem,
        "pathLink":"https://forms.gle/VmLxhSCpmdo1Fjy59",
    }];

    // for (let index = 0; index < allCards.length; index++) {
    //     itemslist["allCards"].push(
    //         ResourceCards(allCards[index])
    //     );
    // }
    // itemslist["allCards"].push(
    //     ResourceCards(addCard[0])
    // );
    for (let index=0; index<chromeCards_pers.length;index++){
        itemslist["chromeCards_pers"].push(
            ResourceCards_Small(chromeCards_pers[index])
        );
    }
    for (let index=0; index<chromeCards_acad.length;index++){
        itemslist["chromeCards_acad"].push(
            ResourceCards_Small(chromeCards_acad[index])
        );
    }
    for (let index=0; index<chromeCards_cool.length;index++){
        itemslist["chromeCards_cool"].push(
            ResourceCards_Small(chromeCards_cool[index])
        );
    }


    for (let index=0; index<2;index++){
        itemslist["codingCards_YT"].push(
            ResourceCards_Mix(codingCards[index])
        );
       
    }
    itemslist["codingCards_YT"].push(
        ExploreCards(addCard[0])
    );
    for (let index=0; index<codingCards.length;index++){
        itemslist["codingCards"].push(
            ResourceCards(codingCards[index])
        );
       
    }
    itemslist["codingCards"].push(
        ResourceCards(addCard[0])
    );
    for (let index=0; index<networkingCards.length;index++){
        itemslist["networkingCards"].push(
            ResourceCards(networkingCards[index])
        );
        
    }
    itemslist["networkingCards"].push(
        ResourceCards(addCard[0])
    );
    for (let index=0; index<designCards.length;index++){
        itemslist["designCards"].push(
            ResourceCards(designCards[index])
        );
        
    }
    itemslist["designCards"].push(
        ResourceCards(addCard[0])
    );
    for (let index=0; index<otherCards.length;index++){
        itemslist["otherCards"].push(
            ResourceCards(otherCards[index])
        );
       
    }
    itemslist["otherCards"].push(
        ResourceCards(addCard[0])
    );
    return(
        itemslist
    );
}

export default items
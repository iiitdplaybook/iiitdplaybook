// import React from "react";
import addItem from "../../Assets/SVG_for_cards/addItem.svg";
import ResourceCards from "./resourceCards"
import ResourceCards_Mix from "./resourceCards2"
import ExploreCards from "../ExploreCards/ExploreCards"

function items(){

    const color1 = "#fff";
    const color2 = "#fafafa";
    
    const itemslist = {
        "chromeCards":[],
        "codingCards":[],
        "codingCards_YT":[],
        "networkingCards":[],
        "designCards":[],
        "otherCards":[]
    };

    const chromeCards = [{
        "gradientColor_1":color1,
        "gradientColor_2":color2,
        "title":"Post It Notes",
        "description": "Bought by design students",
        "image":"",
        "pathLink":"nostalgia",
    }, {
        "gradientColor_1":color1,
        "gradientColor_2":color2,
        "title":"Luxor 5 Subject Exercise Book (250 pages)",
        "description": "Bought by 10 students",
        "image":"https://images-na.ssl-images-amazon.com/images/I/71rMIAkfNsL._SL1280_.jpg",
        "pathLink":"https://amzn.to/33GTGFf",
    }, {
        "gradientColor_1":color1,
        "gradientColor_2":color2,
        "title":"Luxor 5 Subject Notebook (300 pages)",
        "description": "Bought by 10 students",
        "image":"https://images-na.ssl-images-amazon.com/images/I/51HMBe9-5RL.jpg",
        "pathLink":"https://amzn.to/2Vvsm8m",
    }, {
        "gradientColor_1":color1,
        "gradientColor_2":color2,
        "title":"Classmate 6 Subject Spiral Binding Notebook",
        "description": "Bought by almost everyone",
        "image":"https://images-na.ssl-images-amazon.com/images/I/71WZfAOB9gL._SL1100_.jpg",
        "pathLink":"https://amzn.to/3g6FCKj",
    }, {
        "gradientColor_1":color1,
        "gradientColor_2":color2,
        "title":"Luxor 6 Subject Spiral Premium Notebook",
        "description": "Bought by 15 students",
        "image":"https://images-na.ssl-images-amazon.com/images/I/71tnM2LRTIL._SL1280_.jpg",
        "pathLink":"https://amzn.to/3g79Qww",
    }, {
        "gradientColor_1":color1,
        "gradientColor_2":color2,
        "title":"Classic Plain notebook",
        "description": "Bought by 10 students",
        "image":"https://images-na.ssl-images-amazon.com/images/I/91DHOv07HDL._SL1500_.jpg",
        "pathLink":"https://amzn.to/36CX1Y1",
    },{
        "gradientColor_1":color1,
        "gradientColor_2":color2,
        "title":"Cello Finegrip Ball Pen set ",
        "description": "Bought by almost everyone",
        "image":"https://images-na.ssl-images-amazon.com/images/I/71BxH9BTM2L._SL1500_.jpg",
        "pathLink":"https://amzn.to/2JC3ZmV",
    }, {
        "gradientColor_1":color1,
        "gradientColor_2":color2,
        "title":"Cello Butterflow ball pen set",
        "description": "Bought by almost everyone",
        "image":"https://images-na.ssl-images-amazon.com/images/I/61TxXDiHKbL._SL1500_.jpg",
        "pathLink":"https://amzn.to/3lAXOwS",
    }, {
        "gradientColor_1":color1,
        "gradientColor_2":color2,
        "title":"Cello Maxriter Ball Pen Set",
        "description": "Bought by good handwriting students",
        "image":"https://images-na.ssl-images-amazon.com/images/I/81esZ5d2ifL._SL1500_.jpg",
        "pathLink":"https://amzn.to/39CURcF",
    }, {
        "gradientColor_1":color1,
        "gradientColor_2":color2,
        "title":"Reynolds Trimax Liquid Gel Pens",
        "description": "Bought by fancy students",
        "image":"https://images-na.ssl-images-amazon.com/images/I/81TkraQtsXL._SL1500_.jpg",
        "pathLink":"https://amzn.to/33IpzgS",
    }, {
        "gradientColor_1":color1,
        "gradientColor_2":color2,
        "title":"Printer rim (500 sheets)",
        "description": "Bought by 25 students",
        "image":"https://images-na.ssl-images-amazon.com/images/I/816vukIX-KL._SL1500_.jpg",
        "pathLink":"https://amzn.to/3mDUUZh",
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
        "image":"https://images-na.ssl-images-amazon.com/images/I/61p3lA4N3uL._SL1000_.jpg",
        "pathLink":"nostalgia",
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
    for (let index=0; index<chromeCards.length;index++){
        itemslist["chromeCards"].push(
            ResourceCards(chromeCards[index])
        );
       
    }
    itemslist["chromeCards"].push(
        ResourceCards(addCard[0])
    );

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
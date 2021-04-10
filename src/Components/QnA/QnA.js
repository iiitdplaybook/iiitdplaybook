import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import "./QnA.css";
import firebase from "firebase";
import QnACardGrid from "./QnACardGrid";
import data from "./mockdata.json";

function QnA() {
    const [qna, setQna] = useState([]);

    const getQnA = async () => {
        const QnARef = firebase.database().ref("QnA");
        await QnARef.once("value", (snapshot) => {
            let items = [];
            snapshot.forEach((child) => {
                let childList = [];
                const dict = {};
                dict.question = child.val().question;
                dict.cover_image = child.val().cover_image;
                dict.key = child.key;
                for (let k in child.val().answers) {
                    const childDict = {};
                    childDict.link = child.val().answers[k].link;
                    childDict.image = child.val().answers[k].image;
                    childDict.heading = child.val().answers[k].heading;
                    childDict.description = child.val().answers[k].description;
                    childDict.verified = child.val().answers[k].verified;
                    childDict.key = k;
                    childList.push(childDict);
                }
                dict.answers = childList;
                items.push(dict);
            });
            setQna(items);
        });
    };

    useEffect(() => {
        getQnA();
    }, []);

    return (
        <div className="qna">
            <Navbar loggedIn={true} colorStatus={true} />
            <h1 className="main_heading">Quick Bites</h1>
            <h2 className="sub_heading">
                Small doses of information to get you started
            </h2>
            <div className="cardgrid">
                <QnACardGrid cardList={qna} />
            </div>
        </div>
    );
}

export default QnA;

import React, {useState, useEffect} from 'react'
import Navbar from '../Navbar/Navbar';
import './QnA.css'
import firebase from 'firebase';
import QnACardGrid from './QnACardGrid'

function QnA() {

    const [qna, setQna] = useState([])

    const getQnA = async () => {
        const allQnARef = firebase.database().ref('QnA');
        await allQnARef.once('value', (snapshot) => {
          let items = [];
          snapshot.forEach((child) => {
            let childList = [];
            const dict = {};
            dict.question = child.val().question;
            dict.key = child.key;
            for (let k in child.val().answers){
                const childDict = {};
                childDict.link = child.val().answers[k].link;
                childDict.image = child.val().answers[k].image;
                childDict.heading = child.val().answers[k].heading;
                childDict.description = child.val().answers[k].description;
                childDict.verified = child.val().answers[k].verified;
                childDict.key = k;
                childList.push(childDict);
            };
            dict.children = childList;
            items.push(dict);
          });
          setQna(items);
        });
      };
    
    useEffect(() => {
        getQnA();
    }, []);

    return (
        <div className='qna'>
            <Navbar loggedIn={true} colorStatus={true} />
            <div className='cardsDiv_qna'>
            <QnACardGrid itemList={qna} />
          </div>
        </div>
    )
}

export default QnA
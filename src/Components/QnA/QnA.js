import React, {useState, useEffect} from 'react'
import Navbar from '../Navbar/Navbar';
import './QnA.css'
import firebase from 'firebase';

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
            // child.answers.forEach((children) => {
            //     const childDict = {};
            //     childDict.link = children.val().link;
            //     childDict.image = children.val().image;
            //     childDict.heading = children.val().heading;
            //     childDict.verified = children.val().verified;
            //     childDict.key = children.key;
            //     childList.push(childDict);
            // });
            // dict.children = childList;
            dict.key = child.key;
            items.push(dict);
          });
          setQna(items);
          console.log(items);
        });
      };
    
    useEffect(() => {
        getQnA();
    }, []);

    return (
        <div className='qna'>
            <Navbar loggedIn={true} colorStatus={true} />
            
        </div>
    )
}

export default QnA

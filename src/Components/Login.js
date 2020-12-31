/** @format */

import React from "react";
import "./Login.css";
import firebase from "firebase";
import fire from '../fire';
import { auth, provider } from "../fire";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import yashwin from "../Assets/yashwin.png";
import kshitij from "../Assets/kshitij.jpg";
import pabitra from "../Assets/pabitra.jpeg";
import rahul from "../Assets/rahul.png";
import logo from "../Assets/Logo.png";
import Testimonials from "./TestimonialsName";
import FadeIn from "./FadeIn"
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { Link } from "react-router-dom";



function Login() {
  // const contri = [
  //   { pic: userProfile, text: "Name" },
  //   { pic: userProfile, text: "Name" },
  //   { pic: userProfile, text: "Name" },
  //   { pic: userProfile, text: "Name" },
  //   { pic: userProfile, text: "Name" },
  //   { pic: userProfile, text: "Name" },
  //   { pic: userProfile, text: "Name" },
  //   { pic: userProfile, text: "Name" },
  //   { pic: userProfile, text: "Name" },
  //   { pic: userProfile, text: "Name" },
  //   { pic: userProfile, text: "Name" },
  //   { pic: userProfile, text: "Name" },
  //   { pic: userProfile, text: "Name" },
  //   { pic: userProfile, text: "Name" },
  //   { pic: userProfile, text: "Name" },
  //   { pic: userProfile, text: "Name" },
  //   { pic: userProfile, text: "Name" },
  //   { pic: userProfile, text: "Name" },
  //   { pic: userProfile, text: "Name" },
  //   { pic: userProfile, text: "Name" },
  //   { pic: userProfile, text: "Name" },
  //   { pic: userProfile, text: "Name" },
  //   { pic: userProfile, text: "Name" },
  //   { pic: userProfile, text: "Name" },
  //   { pic: userProfile, text: "Name" },
   
  // ];

  const [contri, setcontri] = React.useState([]);

  // React.useEffect(()=>{
  //   const unsub = fire.firestore().collection('Testimonies').where("isApproved", "==", true).onSnapshot(snapshot =>{
  //       const data = snapshot.docs.map(doc => {return ({text:doc.data().Name.split(" ")[0], pic:doc.data().UserAvatar})});
  //       if (data!=null){
  //         setcontri(data)
  //       }
        
  //   });
  //   return () => {
  //       unsub();
  //   }
  // });

  const vel2 = 25;

  function loadUser(user){
    const firestoreUser = firebase.firestore().collection('users').doc(user.uid)
    const data = firestoreUser.get().then(function(doc) {
      if(!doc.exists){
        const userData={
          uid: user.uid,
          displayName : user.displayName,
          email: user.email,
          UserAvatar: user.photoURL
        }
        firestoreUser.set(userData).then(function() {
            console.log("Document successfully written!");
        });
        
      }
    });
  }

  const signIn = () => {
    auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result.user.displayName);
        localStorage.setItem("isSignedIn", true);
        loadUser(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
    
  };

  const useStyles = makeStyles({
    root: {
      width: 200,
      marginLeft: 50,
    },
    media: {
      height: 150,
    },
  });

  const classes = useStyles();


  return (
    <div className="login">
      <div className="login__logo">
        <img id="logo" src={logo} />
      </div>
      
      <div className="login__action">
        <div className='login__heading'>
        
          <h1 className='textCard2'>Student Playbook</h1>
          <h5 className='textCard3'>For the students, by the students</h5>
        </div>

        <div className='login__buttons'>
          <Button id="signIn" onClick={signIn}>Sign in with IIITD Mail</Button>
          <Button id="guest" component={Link} to={'/nostalgia'}>Join as a Guest</Button>
          {/* <Player
                autoplay
                loop
                src={blob}
                style={{ height: '300px', width: '300px', zIndex: '-1' }}
              >
              </Player> */}
        </div>
      </div>

      <div className='login__nameList'>
      <FadeIn delay={350} duration={1550}>
      <div className='login__creators'>
      <h5>Creators</h5>
        <div className='testi'>
          <div className='creatorCard'>
            <img src={kshitij}/>
            <p>Kshitij Agrawal</p>
            <a class="fa fa-linkedin fa-lg" href="https://www.linkedin.com/in/kshitij16/"  target="_blank"></a>
          </div>
          
          <div className='creatorCard'>
            <img src={pabitra}/>
            <p>Pabitra Bansal</p>
            <a class="fa fa-linkedin fa-lg" href="https://www.linkedin.com/in/pabitra-bansal-06039616a/"  target="_blank"></a>
          </div>
          
          
          <div className='creatorCard'>
            <img src={rahul}/>
            <p>Rahul Singh</p>
            <a class="fa fa-linkedin fa-lg" href="https://www.linkedin.com/in/rahul-singh-7aa84697/"  target="_blank"></a>
          </div>
          
          
          <div className='creatorCard'>
            <img src={yashwin}/>
            <p>Yashwin Agrawal</p>
            <a class="fa fa-linkedin fa-lg" href="https://www.linkedin.com/in/yashwin-agrawal-6b28bb176/"  target="_blank"></a>
          </div>
          
        </div>
      </div>
      </FadeIn>
      <FadeIn delay={1250} duration={1550}>
      <div className='login__testimonials'>
      <h5>Contributors</h5>
        <Testimonials id="contributors" portraits={contri} vel={vel2} scaleFactor={1}/>
      </div>
      </FadeIn>
      </div>
    </div>
  );
}

export default Login;

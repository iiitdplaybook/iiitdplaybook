/** @format */
import React from 'react';
import './Login.css';
import firebase from 'firebase';
import Creators from '../Footer/Creators';
import TeamMembers from '../Footer/Team';
import fire from '../../fire';
import { auth, provider } from '../../fire';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Testimonials from '../Testimonies/TestimonialsName';
import FadeIn from './../FadeIn';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const logo =
  'https://cdn.statically.io/gh/PabitraBansal/StudentPlaybook/6d20d536/src/Assets/Logo.png';

function Login() {
  // const contri = [
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
  let history = useHistory();

  function loadUser(user) {
    const firestoreUser = firebase
      .firestore()
      .collection('users')
      .doc(user.uid);
    const data = firestoreUser.get().then(function (doc) {
      if (!doc.exists) {
        const userData = {
          uid: user.uid,
          displayName: user.displayName,
          email: user.email,
          UserAvatar: user.photoURL,
        };
        firestoreUser.set(userData).then(function () {});
      }
    });
  }

  const signIn = () => {
    auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);
    auth
      .signInWithPopup(provider)
      .then((result) => {
        localStorage.setItem('isSignedIn', true);
        loadUser(result.user);
        history.push('/homepage');
      })
      .catch((error) => {});
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
    <div className='login'>
      <div className='login__logo'>
        <img id='logo' src={logo} />
      </div>

      <div className='login__action'>
        <div className='login__heading'>
          <h1 className='textCard2'>Student Playbook</h1>
          <h5 className='textCard3'>For the students, by the students</h5>
        </div>

        <div className='login__buttons'>
          <Button id='signIn' onClick={signIn}>
            Sign in with IIITD Mail
          </Button>
          <Button id='guest' component={Link} to={'/homepage'}>
            {/* <Button id="guest" component={Link} to={"/"}> */}
            Take a Sneak Peek
          </Button>
          {/* Don't delete
              <Player
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
          <div className='login__creators creators'>
            <Creators />
          </div>
        </FadeIn>
        <FadeIn delay={1250} duration={1550}>
          <div className='login__team team'>
            <TeamMembers />
          </div>
        </FadeIn>
      </div>
    </div>
  );
}

export default Login;

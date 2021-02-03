/** @format */
import React from "react";
import "./Login.css";
import firebase from "firebase";
import fire from "../../fire";
import { auth, provider } from "../../fire";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Testimonials from "../Testimonies/TestimonialsName";
import FadeIn from "./../FadeIn";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const yashwin = "https://cdn.statically.io/gh/PabitraBansal/StudentPlaybook/6d20d536/src/Assets/yashwin.png";
const kshitij = "https://cdn.statically.io/gh/PabitraBansal/StudentPlaybook/6d20d536/src/Assets/kshitij.jpg";
const pabitra = "https://cdn.statically.io/gh/PabitraBansal/StudentPlaybook/6d20d536/src/Assets/pabitra.jpeg";
const rahul = "https://cdn.statically.io/gh/PabitraBansal/StudentPlaybook/6d20d536/src/Assets/rahul.png";
const logo = "https://cdn.statically.io/gh/PabitraBansal/StudentPlaybook/6d20d536/src/Assets/Logo.png";

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
      .collection("users")
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
        localStorage.setItem("isSignedIn", true);
        loadUser(result.user);
        history.push("/homepage");
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
    <div className="login">
      <div className="login__logo">
        <img id="logo" src={logo} />
      </div>

      <div className="login__action">
        <div className="login__heading">
          <h1 className="textCard2">Student Playbook</h1>
          <h5 className="textCard3">For the students, by the students</h5>
        </div>

        <div className="login__buttons">
          <Button id="signIn" onClick={signIn}>
            Sign in with IIITD Mail
          </Button>
          <Button id="guest" component={Link} to={"/homepage"}>
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

      <div className="login__nameList">
        <FadeIn delay={350} duration={1550}>
          <div className="login__creators">
            <h5>Creators</h5>
            <div className="testi2">
              <a
                className="defaultClick"
                href="https://www.instagram.com/okkshitij/"
                target="_blank"
              >
                <div className="creatorCard">
                  <img src={kshitij} />
                  <p>
                    Kshitij <div className="removeText">&nbsp;Agrawal</div>
                  </p>
                  <a
                    className="fa fa-linkedin fa-lg"
                    href="https://www.linkedin.com/in/kshitij16/"
                    target="_blank"
                  ></a>
                  <a
                    className="fa fa-instagram fa-lg"
                    href="https://www.instagram.com/okkshitij/"
                    target="_blank"
                  ></a>
                </div>
              </a>

              <a
                className="defaultClick"
                href="https://www.instagram.com/pabitrabansal/"
                target="_blank"
              >
                <div className="creatorCard">
                  <img src={pabitra} />
                  <p>
                    Pabitra <div className="removeText">&nbsp;Bansal</div>{" "}
                  </p>
                  <a
                    className="fa fa-linkedin fa-lg"
                    href="https://www.linkedin.com/in/pabitra-bansal-06039616a/"
                    target="_blank"
                  ></a>
                  <a
                    className="fa fa-instagram fa-lg"
                    href="https://www.instagram.com/pabitrabansal/"
                    target="_blank"
                  ></a>
                </div>
              </a>

              <a
                className="defaultClick"
                href="https://www.instagram.com/am.i.a.normie.now/"
                target="_blank"
              >
                <div className="creatorCard">
                  <img src={rahul} />
                  <p>
                    Rahul <div className="removeText">&nbsp;Singh</div>{" "}
                  </p>
                  <a
                    className="fa fa-linkedin fa-lg"
                    href="https://www.linkedin.com/in/rahul-singh-7aa84697/"
                    target="_blank"
                  ></a>
                  <a
                    className="fa fa-instagram fa-lg"
                    href="https://www.instagram.com/am.i.a.normie.now/"
                    target="_blank"
                  ></a>
                </div>
              </a>

              <a
                className="defaultClick"
                href="https://www.instagram.com/yashwin_1/"
                target="_blank"
              >
                <div className="creatorCard">
                  <img src={yashwin} />
                  <p>
                    Yashwin <div className="removeText">&nbsp;Agrawal</div>{" "}
                  </p>
                  <a
                    className="fa fa-linkedin fa-lg"
                    href="https://www.linkedin.com/in/yashwin-agrawal-6b28bb176/"
                    target="_blank"
                  ></a>
                  <a
                    className="fa fa-instagram fa-lg"
                    href="https://www.instagram.com/yashwin_1/"
                    target="_blank"
                  ></a>
                </div>
              </a>
            </div>
          </div>
        </FadeIn>
        <FadeIn delay={1250} duration={1550}>
          <div className="login__testimonials">
            <h5>Contributors</h5>
            <Testimonials
              id="contributors"
              portraits={contri}
              vel={vel2}
              scaleFactor={1}
            />
          </div>
        </FadeIn>
      </div>
    </div>
  );
}

export default Login;

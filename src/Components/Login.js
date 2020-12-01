/** @format */

import React from "react";
import "./Login.css";
import firebase from "firebase";
import { auth, provider } from "../fire";
import { Button } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import yashwin from "../Assets/yashwin.png";
import kshitij from "../Assets/kshitij.jpg";
import pabitra from "../Assets/pabitra.jpeg";
import rahul from "../Assets/rahul.png";
import Testimonials from "./Testimonials";

function Login() {
  const portraits = [
    { pic: yashwin, text: "Yashwin" },
    { pic: kshitij, text: "Kshitij" },
    { pic: pabitra, text: "Pabitra" },
    { pic: rahul, text: "Rahul" },
  ];

  const signIn = () => {
    auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result.user.displayName);
        localStorage.setItem("isSignedIn", true);
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
      <h1>Login page</h1>
      <Button onClick={signIn}>Sign in with Google</Button>
      <div className="creators">
        <Card className={classes.root}>
          <CardActionArea target="_blank"
              href="https://www.linkedin.com/in/yashwin-agrawal-6b28bb176/">
            <CardMedia
              className={classes.media}
              image={yashwin}
              title="Yashwin Agrawal"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="h2">
                Yashwin Agrawal
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                bad ass nigga
              </Typography>
            </CardContent>
          </CardActionArea>
          {/* <CardActions>
            <Button
              size="small"
              color="primary"
              target="_blank"
              href="https://www.linkedin.com/in/yashwin-agrawal-6b28bb176/"
            >
              LinkedIn
            </Button>
          </CardActions> */}
        </Card>
        <Card className={classes.root}>
          <CardActionArea target="_blank"
              href="https://www.linkedin.com/in/kshitij16/">
            <CardMedia
              className={classes.media}
              image={kshitij}
              title="Kshitij Agrawal"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="h2">
                Kshitij Agrawal
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                almost bad ass nigga
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card className={classes.root}>
          <CardActionArea target="_blank"
              href="https://www.linkedin.com/in/pabitra-bansal-06039616a/">
            <CardMedia
              className={classes.media}
              image={pabitra}
              title="Pabitra Bansal"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="h2">
                Pabitra Bansal
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                cute ass nigga
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card className={classes.root}>
          <CardActionArea target="_blank"
              href="https://www.linkedin.com/in/rahul-singh-7aa84697/">
            <CardMedia
              className={classes.media}
              image={rahul}
              title="Rahul Singh"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="h2">
                Rahul Singh
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                god ass nigga
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
      <Testimonials portraits={portraits} />
    </div>
  );
}

export default Login;

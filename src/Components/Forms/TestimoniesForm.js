import firebase from "firebase";
import React from "react";
import Navbar from "../Navbar";
import { makeStyles } from "@material-ui/core/styles";
import { useStateValue } from "../../StateProvider";
import "./TestimoniesForm.css";
// Material UI for Form
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

import Button from "@material-ui/core/Button";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ImgUpload from "./ImgUpload";

const state = {
  UserAvatar:
    "https://www.gstatic.com/stadia/gamers/avatars/xxhdpi/avatar_53.png",
  Name: "Rahul Singh",
  Text: "",
  Topic: "",
  isApproved: false,
  timestamp: Date.now(),
};

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
    marginTop: "3%",
    fontFamily: "Poppins, sans-serif",
  },
}));

var storage = firebase.storage();
var storageRef = storage.ref();
var imagesRef = storageRef.child("ContributionImages");

export default function TestimoniesForm() {
  toast.configure();
  const notify = () =>
    toast.info("Testimony Submitted \nfor Review", {
      draggablePercent: 30,
    });
  const [{ user, isSignedIn, userName }] = useStateValue();

  function submitForm(event) {
    event.preventDefault();
    var topic = "";
    if (value == "Phases of College") {
      state.Topic = value + " - " + PoC_Value;
      topic = value + " - " + PoC_Value;
    } else {
      state.Topic = value;
      topic = value;
    }
    state.Name = userName;
    state.Text = testimonies;
    state.UserAvatar = firebase.auth().currentUser.photoURL;
    state.timestamp = firebase.firestore.Timestamp.now();
    // const db = firebase.firestore();
    // db.collection("Testimonies").add(state);
    var len = 0;
    firebase.database().ref('Testimonies/' + topic).once("value", function(snapshot) {
      len = snapshot.numChildren()+1;
      firebase.database().ref('Testimonies/' + topic + "/" + len).set(state);
    })

    notify();
    settestimonies("");
  }

  function showError() {
    toast.error("Exceeded Word Limit in Testimonies");
  }

  const classes = useStyles();

  const [value, setValue] = React.useState("General");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  React.useEffect(() => {
    if (value === "Clubs") {
      setHint(clubHint);
    } else if (value === "General") {
      setHint(defaultHint);
    } else if (value === "Phases of College" && PoC_Value === "Baby Steps") {
      setHint(babyStepsHint);
    } else if (value === "Phases of College" && PoC_Value === "Exploring") {
      setHint(exploringHint);
    } else if (
      value === "Phases of College" &&
      PoC_Value === "Defining Point"
    ) {
      setHint(definingHint);
    } else if (value === "Phases of College" && PoC_Value === "Graduating") {
      setHint(graduatingHint);
    } else if (value === "Phases of College" && PoC_Value === "Nostalgia") {
      setHint(nostalgiaHint);
    } else if (value === "Time Management") {
      setHint(timeManagementHint);
    } else if (value === "Online Semester Tips") {
      setHint(onlineSemHint);
    } else if (value === "Academics") {
      setHint(academicsHint);
    } else if (value === "Competitive Programming") {
      setHint(cpHint);
    } else if (value === "Hackathons") {
      setHint(hackathonsHint);
    } else if (value === "Research") {
      setHint(researchHint);
    } else if (value === "Placements") {
      setHint(placementHint);
    } else if (value === "Experiences/Stories") {
      setHint(experienceStoryHint);
    } else if (value === "Images") {
      setHint(imageHint);
    } else {
      setHint(defaultHint);
    }
  });

  const [testimonies, settestimonies] = React.useState("");
  const handleTestieChange = (event) => {
    settestimonies(event.target.value);
  };

  const [PoC_Value, setPoC_Value] = React.useState("");
  const PoC_ValueChange = (event) => {
    setPoC_Value(event.target.value);
  };

  const [hint, setHint] = React.useState("Share your Insights with others");
  const [word_count, setword_count] = React.useState(0);

  React.useEffect(() => {
    setword_count(testimonies.length);
  }, [testimonies]);

  const defaultHint = "Share your Insights with others";
  const clubHint =
    "Which club are you a part of? Which club helped you grow as person? In what ways did the club help?";
  const timeManagementHint =
    "What are your tried and tested techniques to be more productive? How do you manage time? How do you balance life/fun and deadlines?";
  const onlineSemHint =
    "Any tips for the online semester? How are you coping with the online semester? Any stories or feelings that you'd like share?";
  const babyStepsHint =
    "How was your experience when you first entered college?";
  const exploringHint =
    "How did you start exploring/experimenting/trying out new things?";
  const definingHint =
    "How did you find your calling/what you wanted to do in life?";
  const graduatingHint = "How was your experience when you graduated?";
  const nostalgiaHint =
    "When you look back to your college life after graduating what do you feel most nostalgic about?";
  const academicsHint =
    "How to get the most out of a course? How to plan well to get the best possible grades? How much GPA is considered good?";
  const cpHint =
    "How to start? (Good time to start, how to distribute your time, what all to study, how to practice etc.)";
  const hackathonsHint =
    "How to start taking part in hackathons? Where to find hackathons? Pros and cons of taking part in a hackathon";
  const researchHint =
    "How to get a research project? How much work does it require? Why should / shouldn't one go for research?";
  const placementHint =
    "What to keep in mind while preparing? Any interview tips? Any good resources?";
  const experienceStoryHint =
    "Any crazy or fun experiences and stories that you would like to share? ";
  const imageHint =
    "Any images from college you would like to share? (or drive link to the images)";

  return (
    <div>
      <Navbar loggedIn={true} colorStatus={true} />
      <form className={classes.root} noValidate autoComplete="off">
        <div className="formdiv">
          <h1 className="formlabel">
            For which part would you like to share your testimonies?
          </h1>
          <FormControl component="fieldset">
            <FormHelperText className="helperlabel">
              Choose one of the following and submit. You can submit the form
              again if you want to contribute for another section
            </FormHelperText>
            <div className="row">
              <div className="column">
                <RadioGroup
                  className="radio"
                  aria-label="testimonies"
                  name="testimonies1"
                  value={value}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    className="radioButtonLeft"
                    value="General"
                    control={<Radio />}
                    label="General"
                  />
                  <FormControlLabel
                    value="Phases of College"
                    control={<Radio />}
                    label="Phases of College"
                  />
                  <FormControlLabel
                    className="radioButtonRight"
                    value="Clubs"
                    control={<Radio />}
                    label="Clubs"
                  />
                  <FormControlLabel
                    value="Time Management"
                    control={<Radio />}
                    label="Time Management"
                  />
                  <FormControlLabel
                    value="Online Semester Tips"
                    control={<Radio />}
                    label="Online Semester Tips"
                  />
                  <FormControlLabel
                    value="Academics"
                    control={<Radio />}
                    label="Academics"
                  />
                </RadioGroup>
              </div>
              <div className="column">
                <RadioGroup
                  className="radio"
                  aria-label="testimonies"
                  name="testimonies1"
                  value={value}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="Competitive Programming"
                    control={<Radio />}
                    label="Competitive Programming"
                  />
                  <FormControlLabel
                    value="Hackathons"
                    control={<Radio />}
                    label="Hackathons"
                  />
                  <FormControlLabel
                    value="Research"
                    control={<Radio />}
                    label="Research"
                  />
                  <FormControlLabel
                    value="Placements"
                    control={<Radio />}
                    label="Placements"
                  />
                  <FormControlLabel
                    value="Experiences/Stories"
                    control={<Radio />}
                    label="Experiences/Stories"
                  />
                  <FormControlLabel
                    value="Images"
                    control={<Radio />}
                    label="Images"
                  />
                </RadioGroup>
              </div>
            </div>
          </FormControl>
          <br />
          <br />
          <br />
          <TextField
            disabled
            id="outlined-disabled"
            label="Name"
            defaultValue={userName}
            variant="outlined"
            className="nameLabel"
            color="secondary"
          />
          <br />
          <br />
          {value === "Phases of College" ? (
            <FormControl className="nameLabel" color="secondary">
              <InputLabel id="demo-simple-select-filled-label">
                Phases of College
              </InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={PoC_Value}
                onChange={PoC_ValueChange}
              >
                <MenuItem value="Baby Steps">Baby Steps</MenuItem>
                <MenuItem value="Exploring">Exploring</MenuItem>
                <MenuItem value="Defining Point">Defining Point</MenuItem>
                <MenuItem value="Graduating">Graduating</MenuItem>
                <MenuItem value="Nostalgia">Nostalgia</MenuItem>
              </Select>
            </FormControl>
          ) : null}
          <br />
          <br />
          {value === "Images" ? (
            <ImgUpload />
          ) : (
            <div>
              <FormLabel label="" className="nameLabel2" color="secondary">
                {"Write About: " + hint}
              </FormLabel>
              <br />
              <TextField
                id="outlined-textarea"
                label={`Your Testimony  (${word_count}/400)`}
                placeholder={defaultHint}
                multiline
                variant="outlined"
                className="testimonials"
                color="secondary"
                value={testimonies}
                onChange={handleTestieChange}
              />
            </div>
          )}
          <br />
          <p>
            Disclaimer: Your ID's profile picture will be displayed along with
            Name and your Testimony
          </p>
          <br />
          <Button
            className="button"
            size="lg"
            variant="contained"
            color="secondary"
            onClick={word_count <= 400 ? submitForm : showError}
          >
            <span className="span2">submit</span>
          </Button>
        </div>
      </form>
    </div>
  );
}

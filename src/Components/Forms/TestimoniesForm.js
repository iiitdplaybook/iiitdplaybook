import firebase from 'firebase';
import React from 'react';
import Navbar from "../Navbar";
import { makeStyles } from '@material-ui/core/styles';
import { useStateValue } from '../../StateProvider';
import './TestimoniesForm.css'
// Material UI for Form
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const state = {
    "UserAvatar": "https://www.gstatic.com/stadia/gamers/avatars/xxhdpi/avatar_53.png",
    "Name":"Rahul Singh",
    "Text":"",
    "Topic":"",
    "isApproved":false
};

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));
  

export default function TestimoniesForm(){

    toast.configure();
    const notify = () => toast.info("Testimony Submitted \nfor Review", {
        draggablePercent: 30
      });
    const [{user, isSignedIn, userName}] = useStateValue()

    function submitForm(event){
        event.preventDefault();
        state.Topic=value;
        state.Name=userName;
        state.Text=testimonies;
        state.UserAvatar = firebase.auth().currentUser.photoURL;
        const db = firebase.firestore();
        console.log("Sending to Firebase");
        // db.collection("Testimonies").add(state);
        notify();
        settestimonies('');
    }

    const classes = useStyles();

    const [value, setValue] = React.useState('General');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const [testimonies, settestimonies] = React.useState('');
    const handleTestieChange = (event) =>{
        settestimonies(event.target.value)
    };

    return(
        <div>
            <Navbar loggedIn={true} colorStatus={true}/>
            <form className={classes.root} noValidate autoComplete="off">
                <div className="formdiv">
                    <h1 className='formlabel'>For which part would you like to give your testimonies?</h1>
                    <FormControl component="fieldset">
                    {/* <FormLabel className='formlabel' component="legend">For which part would you like to give your testimonies?</FormLabel> */}
                    <RadioGroup className='radio' aria-label="testimonies" name="testimonies1" value={value} onChange={handleChange}>
                        <FormControlLabel className='radioButtonLeft' value="General" control={<Radio />} label="General" />
                        <FormControlLabel className='radioButtonRight' value="Clubs" control={<Radio />} label="Clubs" />
                        <FormControlLabel value="Time Management" control={<Radio />} label="Time Management" />
                        <FormControlLabel value="Online Semester Tips" control={<Radio />} label="Online Semester Tips" />
                        <FormControlLabel value="Academics" control={<Radio />} label="Academics" />
                        <FormControlLabel value="Competitive Programming" control={<Radio />} label="Competitive Programming" />
                        <FormControlLabel value="Hackathons" control={<Radio />} label="Hackathons" />
                        <FormControlLabel value="Research" control={<Radio />} label="Research" />
                        <FormControlLabel value="Placements" control={<Radio />} label="Placements" />
                        <FormControlLabel value="Images and Experiences" control={<Radio />} label="Images and Experiences" />
                    </RadioGroup>
                    <FormHelperText className='helperlabel'>Choose one of the following and submit, you can submit the form again for filling for another section</FormHelperText>
                    </FormControl>
                    <br/>
                    <br/>
                    <TextField
                    disabled
                    id="outlined-disabled"
                    label="Name"
                    defaultValue={userName}
                    variant="outlined"
                    className='nameLabel'
                    color="secondary"
                    />
                    <br/>
                    <TextField
                    id="outlined-textarea"
                    label="Your Testimony"
                    placeholder="Share your Insights with others"
                    multiline
                    variant="outlined"
                    className='testimonials'
                    color="secondary"
                    value={testimonies}
                    onChange={handleTestieChange}
                    />
                    <br/>
                    <p>Disclaimer: Your ID's profile picture will be displayed along with Name and your Testimony</p>
                    <br/>
                    <Button className='button' variant="contained" color="secondary" onClick={submitForm}>
                        Submit
                    </Button>
                </div>
            </form>
        </div>
    );
}
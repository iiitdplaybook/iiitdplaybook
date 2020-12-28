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
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

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

    // const [userName, setUserName] = React.useState('');

    function submitForm(event){
        event.preventDefault();
        if(value=="Phases of College") {
            state.Topic=value+' - '+PoC_Value; 
        }
        else{
            state.Topic=value;
        }
        state.Name=userName;
        state.Text=testimonies;
        state.UserAvatar = firebase.auth().currentUser.photoURL;
        const db = firebase.firestore();
        console.log("Sending to Firebase");
        db.collection("Testimonies").add(state);
        notify();
        settestimonies('');
    }

    function showError(){
        toast.error("Exceeded Word Limit in Testimonies")
    }

    const classes = useStyles();

    const [value, setValue] = React.useState('General');

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    React.useEffect(
        ()=>{
            if(value==="Clubs"){
                setHint(clubHint);
            }
            else if(value==="Time Management"){
                setHint(timeManagementHint);
            }
            else if(value==="Online Semester Tips"){
                setHint(onlineSemHint);
            }
            else {
                setHint(defaultHint)
            }
        });


    const [testimonies, settestimonies] = React.useState('');
    const handleTestieChange = (event) =>{
        settestimonies(event.target.value)
    };

    const [PoC_Value, setPoC_Value] = React.useState('');
    const PoC_ValueChange = (event)=>{
        setPoC_Value(event.target.value)
    }

    const [hint, setHint] = React.useState("Share your Insights with others");
    const [word_count, setword_count] = React.useState(0);

    React.useEffect(()=>{
        // console.log('word entry')
        setword_count(testimonies.length)
    }, [testimonies])

    const defaultHint = "Share your Insights with others"
    const clubHint = "Which club are you a part of? Which club helped you grow as person? In what ways did the club help?"
    const timeManagementHint = "What are your tried and tested techniques to be more productive? How do you manage time? How do you balance life/fun and deadlines?"
    const onlineSemHint = "Any tips for the online semester? How are you coping with the online semester? Any stories or feelings that you'd like share?"

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
                        <FormControlLabel value="Phases of College" control={<Radio />} label="Phases of College" />
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
                    <br/>
                    {(value==="Phases of College")?
                    <FormControl className='nameLabel' color="secondary">
                        <InputLabel id="demo-simple-select-filled-label">Phases of College</InputLabel>
                        <Select
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        value={PoC_Value}
                        onChange={PoC_ValueChange}>
                            <MenuItem value="Baby Steps">Baby Steps</MenuItem>
                            <MenuItem value='Exploring'>Exploring</MenuItem>
                            <MenuItem value='Defining Point'>Defining Point</MenuItem>
                            <MenuItem value='Graduating'>Graduating</MenuItem>
                            <MenuItem value='Nostalgia'>Nostalgia</MenuItem>
                        </Select>
                    </FormControl>
                    :null}
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
                    disabled
                    label=""
                    value={"Write About: " + hint}
                    className='nameLabel'
                    color="secondary"
                    />
                    <br/>
                    <TextField
                    id="outlined-textarea"
                    label={`Your Testimony  (${word_count}/400)`}
                    placeholder={defaultHint}
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
                    <Button className='button' variant="contained" color="secondary" onClick={(word_count<=400)?submitForm:showError}>
                        Submit
                    </Button>
                </div>
            </form>
        </div>
    );
}
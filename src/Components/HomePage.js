import React from 'react';
import firebase from 'firebase';
import { useStateValue } from '../StateProvider';
import wazzup from "../Assets/wazzup.jpg";
import confused from "../Assets/college_student_confused.jpg";
import exploring from "../Assets/exploring.jpg";
import graduation from "../Assets/graduation.jpg";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import "./HomePage.css";
import { Button } from '@material-ui/core';
import Footer from './Footer'
import Stars from './stars'
import useScript from './useScript';

import { Link } from "react-router-dom";

import colorScript from './color';
import Clouds from './clouds';


function HomePage() {

    const [{user, isSignedIn, userName}] = useStateValue()

    
    const MyComponent = () => {
            useScript({colorScript})
            return null;
        }

    return (
        <div className='homePage'>
            <div className='section_0' >
                {/* <img className='homePage_img' src={landscape}/> */}
                {/* <h1 className='welcome_text'>Welcome!</h1> */}
                
                {/* <canvas id="c"></canvas>
                <MyComponent></MyComponent> */}
                <div className='section_1' >
                    <h1 className='welcome_text'>Welcome!</h1>
                </div>
                
                
            </div>
            
            <div>
                {/* <Card className='homePageCard' variant="outlined">
                    <CardContent>
                        <h2 className='textCard'>Phases of College Life</h2>
                        <Typography className='textCard' color="textSecondary" gutterBottom>
                            Phases of College Life
                        </Typography> 
                    </CardContent>
                </Card> */}
                <h1 className='textCard'>Phases of College Life</h1>
            </div>

            <div className='timeline_section'>
                <VerticalTimeline className='vertical-timeline' layout='1-column-left'>
                    {/* <VerticalTimelineElement
                        iconStyle={{ background: 'rgb(16, 204, 82)', color: 'rgb(0, 255, 0)' }}
                        // date="Start"
                        // icon={<StarIcon />}
                    /> */}
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{background: 'linear-gradient(#FFAFBC, #FFC2A1)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #FFAFBC' }}
                        // date="1st Year"
                        // dateClassName="year_style"
                        iconStyle={{ background: '#FFAFBC'   , color: '#fff' }}
                    >

                        <h1 className="vertical-timeline-element-title">Childhood</h1>
                        {/* <p>You are here <br></br> Talk to people</p> */}
                        <br></br>
                        <ul>
                            <li>You are here</li>
                            <li>Talk to people</li>
                            <li>Adapt, Learn, Notice</li>   
                        </ul>
                        <img src={confused}/>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'linear-gradient(#FFC2A1, #FBD69A )', color: '#fff'}}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        // date="2nd Year"
                        // dateClassName="year_style"
                        iconStyle={{ background: '#FFC2A1', color: '#fff' }}
                    >
                        <h1 className="vertical-timeline-element-title">Exploring</h1>
                        <p>Gain Exposure</p>
                        <img src={exploring}/>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'linear-gradient(#FBD69A , #034C90)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        // date="3rd Year"
                        // dateClassName="year_style"
                        iconStyle={{ background: '#FBD69A', color: '#fff' }}
                    >
                        <Clouds/>
                        <h1 className="vertical-timeline-element-title">Defining Point</h1>
                        <p>Finding your calling</p>
                        <img src={graduation}/>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'linear-gradient(#004e92, #000428)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        // date="4th Year"
                        // dateClassName="year_style"
                        iconStyle={{ background: '#004e92', color: ' #000428' }}
                    >
                        <h1 className="vertical-timeline-element-title">Graduating</h1>
                        <p>Enjoying the last moments</p>
                        <img src={graduation}/>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'linear-gradient(#000428, #00010B)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        // date="Graduation"
                        // dateClassName="year_style"
                        iconStyle={{ background: '#000428', color: '#fff' }}
                    >   
                    <div id="stars_container">
                        <Stars/>
                    </div>
                    <h1 className="vertical-timeline-element-title">Nostalgia</h1>
                    <p>Let's take you down the memory lane</p>
                    
                    <Button className='nostalgia_button'>Ready for a ride?</Button>

                    </VerticalTimelineElement>
                    {/* <VerticalTimelineElement
                        iconStyle={{ background: 'rgb(255, 0, 0)', color: 'rgb(255, 0, 0)' }}
                        date="Death"
                    /> */}
                </VerticalTimeline>
                
            </div>

        </div>

    )
}

export default HomePage
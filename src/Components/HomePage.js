import React from 'react';
import firebase from 'firebase';
import { useStateValue } from '../StateProvider';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import tanjiro from '../Assets/tanjiro.jpg'
import Marquee from "react-marquee-slider";
import wazzup from "../Assets/wazzup.jpg";
import confused from "../Assets/college_student_confused.jpg";
import exploring from "../Assets/exploring.jpg";
import graduation from "../Assets/graduation.jpg";
import landscape from "../Assets/landscape.jpg";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import "./HomePage.css";
import { Button } from '@material-ui/core';

function HomePage() {

    const [{user, isSignedIn, userName}] = useStateValue()

    // const Reviews = () => (
    //     <Marquee key={key} velocity={25} scatterRandomly minScale={0.7}>
    //       {times(5, String).map(id => (
    //         <Box key={`marquee-example-review-${id}`} scale={scale}>
    //           <Review scale={scale}>
    //             <Avatar scale={scale}>
    //               <img src="https://randomuser.me/api/portraits/women/68.jpg" />
    //             </Avatar>
    //             <Content scale={scale}>
    //               <p>
    //                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
    //                 incididunt ut labore et dolore magna aliqua.
    //               </p>
    //             </Content>
    //           </Review>
    //         </Box>
    //       ))}
    //     </Marquee>
    //   );
    
    return (
        <div className='homePage'>
            <div className='section_1'>
                <img className='homePage_img' src={landscape}/>
                {/* <h1 className='welcome_text'>Welcome!</h1> */}
                <div className='section_1_text'>
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
                <VerticalTimeline className='timeline' layout='1-column-left'>
                    {/* <VerticalTimelineElement
                        iconStyle={{ background: 'rgb(16, 204, 82)', color: 'rgb(0, 255, 0)' }}
                        // date="Start"
                        // icon={<StarIcon />}
                    /> */}
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        // date="1st Year"
                        // dateClassName="year_style"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
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
                        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        // date="2nd Year"
                        // dateClassName="year_style"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    >
                        <h1 className="vertical-timeline-element-title">Exploring</h1>
                        <p>Gain Exposure</p>
                        <img src={exploring}/>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        // date="3rd Year"
                        // dateClassName="year_style"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    >
                        <h1 className="vertical-timeline-element-title">Defining Point</h1>
                        <p>Finding your calling</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        // date="4th Year"
                        // dateClassName="year_style"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    >
                        <h1 className="vertical-timeline-element-title">Graduating</h1>
                        <p>Enjoying the last moments</p>
                        <img src={graduation}/>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        // date="Graduation"
                        // dateClassName="year_style"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    >
                        <h1 className="vertical-timeline-element-title">Nostalgia</h1>
                        <p>Let's take you down the memory lane</p>
                        <Button>Ready for a ride?</Button>
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
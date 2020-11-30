import React from 'react';
import firebase from 'firebase';
import { useStateValue } from '../StateProvider';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import tanjiro from '../Assets/tanjiro.jpg'
import Marquee from "react-marquee-slider";
import wazzup from "../Assets/wazzup.jpg";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import "./HomePage.css";

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
            <VerticalTimeline className='timeline'>
                <VerticalTimelineElement
                    iconStyle={{ background: 'rgb(16, 204, 82)', color: 'rgb(0, 255, 0)' }}
                    // date="Start"
                    // icon={<StarIcon />}
                />
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    // date="1st Year"
                    // dateClassName="year_style"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">Childhood</h3>
                    {/* <p>You are here <br></br> Talk to people</p> */}
                    <br></br>
                    <ul>
                        <li>You are here</li>
                        <li>Talk to people</li>
                        <li>Adapt, Learn, Notice</li>   
                    </ul>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    // date="2nd Year"
                    // dateClassName="year_style"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">Exploring</h3>
                    <p>Gain Exposure</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    // date="3rd Year"
                    // dateClassName="year_style"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">Defining Point</h3>
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
                    <h3 className="vertical-timeline-element-title">Parting Out</h3>
                    <p>Enjoying the last moments</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    // date="Graduation"
                    // dateClassName="year_style"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">Nostalgia</h3>
                    <p>Look back to an amazing journey and bid farewell</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    iconStyle={{ background: 'rgb(255, 0, 0)', color: 'rgb(255, 0, 0)' }}
                    date="Death"
                />
            </VerticalTimeline>
        </div>

    )
}

export default HomePage

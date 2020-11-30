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
                <Card className='homePageCard' variant="outlined">
                    <CardContent>
                        <Typography className='textCard' color="textSecondary" gutterBottom>
                            Phases of College Life
                        </Typography> 
                    </CardContent>
                </Card>
            </div>
            <VerticalTimeline className='timeline'>
                <VerticalTimelineElement
                    iconStyle={{ background: 'rgb(16, 204, 82)', color: 'rgb(0, 255, 0)' }}
                    date="Start"
                    // icon={<StarIcon />}
                />
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="1st Year"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    
                >
                    <img src={wazzup} alt="wazzup" />
                    <h3 className="vertical-timeline-element-title">Creative Director</h3>
                    <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                    <p>
                    Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2nd Year"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    
                >
                    <img src={wazzup} alt="wazzup" />
                    <h3 className="vertical-timeline-element-title">Art Director</h3>
                    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                    <p>
                    Creative Direction, User Experience, Visual Design, SEO, Online Marketing
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="3rd Year"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    
                >
                    <img src={wazzup} alt="wazzup" />
                    <h3 className="vertical-timeline-element-title">Web Designer</h3>
                    <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
                    <p>
                    User Experience, Visual Design
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="4th Year"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    
                >
                    <img src={wazzup} alt="wazzup" />
                    <h3 className="vertical-timeline-element-title">Web Designer</h3>
                    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                    <p>
                    User Experience, Visual Design
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    iconStyle={{ background: 'rgb(255, 0, 0)', color: 'rgb(255, 0, 0)' }}
                    date="Death"
                    // icon={<StarIcon />}
                />
            </VerticalTimeline>
        </div>

    )
}

export default HomePage

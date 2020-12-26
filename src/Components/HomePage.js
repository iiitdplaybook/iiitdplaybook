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
    import Navbar from "./Navbar";
    import Footer from './Footer'
    import Stars from './stars'
    import useScript from './useScript';

    // import homeWallpaper from "../Assets/Home_wallpaper.png";
    import { Link } from "react-router-dom";

    // import colorScript from './color';
    import Clouds from './clouds';
    import Testimonials from './Testimonials';
    import userProfile from '../Assets/user.png';
    import imgWelcome from '../Assets/homewallpaper.svg';
    import imgQuestion from '../Assets/PhasesPics/question.svg';
    import imgDefine from '../Assets/PhasesPics/define.svg';
    import imgExplore from '../Assets/PhasesPics/explore2.svg';
    import imgGraduate from '../Assets/PhasesPics/graduate2.svg';
    import imgNostalgia from '../Assets/PhasesPics/nostalgia2.svg';
    import FadeIn from "./FadeIn"

    function HomePage() {

        const [{user, isSignedIn, userName}] = useStateValue()

        // const MyComponent = () => {
        //         useScript({colorScript})
        //         return null;
        //     }

            const portraits = [
                { pic: userProfile, text: "Being from a non-science background, I honestly did not know what to expect from an engineering college but the induction made me feel at ease and love it. I just knew that I have to make the most of college life and try to be part of events and clubs that interest me because I couldn’t imagine a college life with only academics", name: "Medhavi"},
                { pic: userProfile, text: "Loved it. Loved the people, hanging out late night in groups, the induction program, huge lecture halls, the infrastructure, and the courses. It was a very new experience. I felt super independent. I could pursue what I liked, the  knew whatever I study would be meaningful.", name: "Sonali"},
                { pic: userProfile, text: "I was not there for induction, so all I have experienced is the horror of deadlines and evaluations.", name: "Anunay"},
                { pic: userProfile, text: "Initial college life was very fun-filled. With lots of amazing activities in college and meeting new people and getting to know them was a really nice experience. 24*7 canteen and no hostel curfew timings are really great things that make you feel free.", name: "Shubhi"},
                { pic: userProfile, text: "When I first entered college I felt intimidated and like I didn't belong here, with a little anxiety about how people would be. But it took absolutely no time to shatter all my doubts and find this wonderful set of people and a room filled with opportunities. It was a different kind of environment that I was looking forward to being in.", name: "Muskan"},
                { pic: userProfile, text: ".", name: "username"},
                        
            ];
            
            const vel = 10;

        return (
            <div className='homePage'>
                <Navbar loggedIn={true} colorStatus={false}/>
                <div className='section_0' >
                    {/* <img className='homePage_img' src={landscape}/> */}
                    {/* <h1 className='welcome_text'>Welcome!</h1> */}
                    
                    {/* <canvas id="c"></canvas>
                    <MyComponent></MyComponent> */}
                    <div className='section_1' >
                        {/* <div id="particles-js"></div> */}
                        <h1 className='welcome_text'>Hello {userName.split(" ")[0]}</h1>
                        <h4 style={{textAlign: 'center', marginLeft: '20%', marginRight: '20%', color: '#e6e6e6'}}>Welcome to the only guide to hack college. The playbook provides you with multiple strategies that other students use, their experiences and stories, tools you can use to help you along the way and much more!</h4>
                       
                    </div>
                    {/* <img className="imgHero" src={imgWelcome}/>                                 */}
                    
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
                            animate={'false'}
                            // date="1st Year"
                            // dateClassName="year_style"
                            iconStyle={{ background: '#FFAFBC', color: '#fff' }}
                        >
                            <div className="containerBox">
                                <div className="containerBox_content">
                                <h1 className="vertical-timeline-element-title">Baby steps</h1>
                                {/* <p>You are here <br></br> Talk to people</p> */}
                                You get the most time in your first year, to do literally ANYTHING! 
                                <br/>

                                {/* <ul>
                                    <li>You are here</li>
                                    <li>Talk to people</li>
                                    <li>Adapt, Learn, Notice</li>   
                                </ul> */}
                                {/* <Button className='nostalgia_button' component={Link} to={'/nostalgia'}>Ready for a ride?</Button> */}
                                <img id="firstSteps" className="imgContainer" src={imgQuestion}/>                                
                                </div>
                                <div className="TestiContainer">
                                    <Testimonials portraits={portraits} vel={vel} scaleFactor={1.5}/>
                                </div>
                            </div>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'linear-gradient(#FFC2A1, #FBD69A )', color: '#fff'}}
                            contentArrowStyle={{ borderRight: '7px solid  #FFC2A1' }}
                            // date="2nd Year"
                            // dateClassName="year_style"
                            iconStyle={{ background: '#FFC2A1', color: '#fff' }}
                        >
                            
                            <Clouds/>
                            <div className="containerBox">
                            <div className="containerBox_content">
                            <h1 className="vertical-timeline-element-title">Exploring</h1>
                            <p>
                            <ul>
                                <li>Consume content (Podcasts, youtube videos, read books, follow people)</li>
                                <li>Hackathons</li>
                                <li>Network with people outside college</li>
                                <li>Network with people within college (Relationships > Networking)</li>
                                <li>Earn > Travel > Repeat (as much as you can)</li>
                                <li>Learn how to google</li>
                            </ul>
                            </p>
                            <img className="imgContainer" src={imgExplore}/>  
                            </div>
                            <div className="TestiContainer">
                            <Testimonials portraits={portraits} vel={vel} scaleFactor={1.5}/>
                            </div>
                            </div>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'linear-gradient(#FBD69A , #034C90)', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  #FBD69A' }}
                            // date="3rd Year"
                            // dateClassName="year_style"
                            iconStyle={{ background: '#FBD69A', color: '#fff' }}
                        >
                            <div className="containerBox">
                            <div className="containerBox_content">
                                <h1 className="vertical-timeline-element-title">Defining Point</h1>
                                <p>Finding your calling</p>
                                <ul>
                                <li>Live in the present</li>
                                <li>Do not follow someone else’s dream</li>
                                <li>Don’t confuse a job with a purpose</li>
                                <li>Say yes to the things that intrigue you.</li>
                                </ul>
                                <img className="imgContainer" src={imgDefine}/>  
                                </div>
                                <div className="TestiContainer">
                                    <Testimonials portraits={portraits} vel={vel} scaleFactor={1.5}/>
                                </div>
                            </div>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'linear-gradient(#004e92, #000428)', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  #004e92' }}
                            // date="4th Year"
                            // dateClassName="year_style"
                            iconStyle={{ background: '#004e92', color: ' #000428' }}
                        >
                            <div className="containerBox">
                            <div className="containerBox_content">
                                <h1 className="vertical-timeline-element-title">Graduating</h1>
                                <p>Enjoying the last moments</p>
                                <ul>
                                <li>Your Degree Means Little; Experience Trounces All</li>
                                <li>Invest In Evergreen Assets</li>
                                <li>Remember, Your First Job Isn’t Your Last</li>
                                <li>Be True To You</li>
                                </ul>
                                <img className="imgContainer" src={imgGraduate}/>
                                </div>
                                <div className="TestiContainer">
                                    <Testimonials portraits={portraits} vel={vel} scaleFactor={1.5}/>
                                </div>
                            </div>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'linear-gradient(#000428, #00010B)', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  #000428' }}
                            // date="Graduation"
                            // dateClassName="year_style"
                            iconStyle={{ background: '#000428', color: '#fff' }}
                        >   

                            <div id="stars_container">
                                <Stars/>
                            </div>
                        <div className="containerBox">
                        <div className="containerBox_content">
                            <div className="contentBox">
                            <h1 className="vertical-timeline-element-title">Nostalgia</h1>
                            <p>Let's take you down the memory lane</p>
                            
                            <Button className='nostalgia_button' component={Link} to={'/nostalgia'}>Let's dive in ></Button>
                            <img className="imgContainer" src={imgNostalgia}/>
                            </div>
                            <div className="TestiContainer">
                                <Testimonials portraits={portraits} vel={vel} scaleFactor={1.5}/>
                            </div>
                            </div>
                        </div>
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
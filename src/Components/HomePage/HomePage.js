import React from 'react';
import firebase from 'firebase';
import { useStateValue } from '../../StateProvider';
import 'react-vertical-timeline-component/style.min.css';
import './HomePage.css';
import Navbar from '../Navbar/Navbar';
import Stars from '../Stars/stars';

import Clouds from '../Clouds/clouds';
import Testimonials from '../Testimonies/Testimonials';
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ReactFullpage from '@fullpage/react-fullpage';
import ParticleAnim from '../ParticleAnim/ParticleAnim';
import Tilt from 'react-parallax-tilt';
import Footer from '../Footer/Footer';
import PhasesOfCollege from './PhasesOfCollege';

const babyStepsImg =
  'https://cdn.statically.io/gh/ananyalohani/iiitdplaybook/kshitij/src/Assets/homepage_illustrations/baby_steps.png';
const exploringImg =
  'https://cdn.statically.io/gh/ananyalohani/iiitdplaybook/kshitij/src/Assets/homepage_illustrations/exploring.png';
const definingImg =
  'https://cdn.statically.io/gh/ananyalohani/iiitdplaybook/kshitij/src/Assets/homepage_illustrations/defining_point.png';
const graduationImg =
  'https://cdn.statically.io/gh/ananyalohani/iiitdplaybook/kshitij/src/Assets/homepage_illustrations/graduation.png';
const nostalgiaImg =
  'https://cdn.statically.io/gh/ananyalohani/iiitdplaybook/kshitij/src/Assets/homepage_illustrations/nostalgia.png';

function HomePage() {
  const [{ user, isSignedIn, userName }] = useStateValue();
  const [portraits, setportraits] = useState([]);
  const [exploring, setexploring] = useState([]);
  const [definingPoint, setdefiningPoint] = useState([]);
  const [graduating, setgraduating] = useState([]);
  const [nostalgia, setnostalgia] = useState([]);

  const getTestimonies = async () => {
    let temp1 = [];
    let temp2 = [];
    let temp3 = [];
    let temp4 = [];
    let temp5 = [];
    // let temp3 = definingPoint;
    // let temp4 = graduating;
    // let temp5 = nostalgia;

    /////////////////////////////////////////////////////////////////////////////////////////////
    let babyStepRef = firebase
      .database()
      .ref('Testimonies/Phases of College - Baby Steps');
    await babyStepRef.once('value', (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        if (childSnapshot.val().isApproved == true) {
          let name = childSnapshot.val().Name;
          let text = childSnapshot.val().Text;
          let userProfile = childSnapshot.val().UserAvatar;
          let dict = {};
          dict.UserAvatar = userProfile;
          dict.Text = text;
          dict.Name = name;
          dict.Topic = 'Phases of College - Baby Steps';
          dict.isApproved = true;
          temp1.push(dict);
        }
      });
    });

    let exploringRef = firebase
      .database()
      .ref('Testimonies/Phases of College - Exploring');
    await exploringRef.once('value', (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        if (childSnapshot.val().isApproved == true) {
          let name = childSnapshot.val().Name;
          let text = childSnapshot.val().Text;
          let userProfile = childSnapshot.val().UserAvatar;
          let dict = {};
          dict.UserAvatar = userProfile;
          dict.Text = text;
          dict.Name = name;
          dict.Topic = 'Phases of College - Exploring';
          dict.isApproved = true;
          temp2.push(dict);
        }
      });
    });

    let definingptRef = firebase
      .database()
      .ref('Testimonies/Phases of College - Defining Point');
    await definingptRef.once('value', (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        if (childSnapshot.val().isApproved == true) {
          let name = childSnapshot.val().Name;
          let text = childSnapshot.val().Text;
          let userProfile = childSnapshot.val().UserAvatar;
          let dict = {};
          dict.UserAvatar = userProfile;
          dict.Text = text;
          dict.Name = name;
          dict.Topic = 'Phases of College - Defining Point';
          dict.isApproved = true;
          temp3.push(dict);
        }
      });
    });

    let graduatingRef = firebase
      .database()
      .ref('Testimonies/Phases of College - Graduating');
    await graduatingRef.once('value', (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        if (childSnapshot.val().isApproved == true) {
          let name = childSnapshot.val().Name;
          let text = childSnapshot.val().Text;
          let userProfile = childSnapshot.val().UserAvatar;
          let dict = {};
          dict.UserAvatar = userProfile;
          dict.Text = text;
          dict.Name = name;
          dict.Topic = 'Phases of College - Graduating';
          dict.isApproved = true;
          temp4.push(dict);
        }
      });
    });

    let nostalgiaRef = firebase
      .database()
      .ref('Testimonies/Phases of College - Nostalgia');
    await nostalgiaRef.once('value', (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        if (childSnapshot.val().isApproved == true) {
          let name = childSnapshot.val().Name;
          let text = childSnapshot.val().Text;
          let userProfile = childSnapshot.val().UserAvatar;
          let dict = {};
          dict.UserAvatar = userProfile;
          dict.Text = text;
          dict.Name = name;
          dict.Topic = 'Phases of College - Nostalgia';
          dict.isApproved = true;
          temp5.push(dict);
        }
      });
    });

    /////////////////////////////////////////////////////////////////////////////////////////////

    // document1.docs.forEach((item) => {
    //   temp1.push(item.data());
    // });
    // document2.docs.forEach((item) => {
    //   temp2.push(item.data());
    // });
    // document3.docs.forEach((item) => {
    //   temp3.push(item.data());
    // });
    // document4.docs.forEach((item) => {
    //   temp4.push(item.data());
    // });
    // document5.docs.forEach((item) => {
    //   temp5.push(item.data());
    // });

    setportraits(temp1);
    setexploring(temp2);
    setdefiningPoint(temp3);
    setgraduating(temp4);
    setnostalgia(temp5);
  };

  useEffect(() => {
    getTestimonies();
    return () => {};
  }, []);
  // Don't delete below
  // let portraits2 = [
  //   {
  //     UserAvatar: userProfile,
  //     Text:
  //       "Being from a non-science background, I honestly did not know what to expect from an engineering college but the induction made me feel at ease and love it. I just knew that I have to make the most of college life and try to be part of events and clubs that interest me because I couldn’t imagine a college life with only academics",
  //     Name: "Medhavi",
  //   },
  //   {
  //     UserAvatar: userProfile,
  //     Text:
  //       "Loved it. Loved the people, hanging out late night in groups, the induction program, huge lecture halls, the infrastructure, and the courses. It was a very new experience. I felt super independent. I could pursue what I liked, the  knew whatever I study would be meaningful.",
  //     Name: "Sonali",
  //   },
  //   {
  //     UserAvatar: userProfile,
  //     Text:
  //       "Being from a non-science background, I honestly did not know what to expect from an engineering college but the induction made me feel at ease and love it. I just knew that I have to make the most of college life and try to be part of events and clubs that interest me because I couldn’t imagine a college life with only academics",
  //     Name: "Medhavi",
  //   },
  //   {
  //     UserAvatar: userProfile,
  //     Text:
  //       "Loved it. Loved the people, hanging out late night in groups, the induction program, huge lecture halls, the infrastructure, and the courses. It was a very new experience. I felt super independent. I could pursue what I liked, the  knew whatever I study would be meaningful.",
  //     Name: "Sonali",
  //   },
  //   {
  //     UserAvatar: userProfile,
  //     Text:
  //       "Being from a non-science background, I honestly did not know what to expect from an engineering college but the induction made me feel at ease and love it. I just knew that I have to make the most of college life and try to be part of events and clubs that interest me because I couldn’t imagine a college life with only academics",
  //     Name: "Medhavi",
  //   },
  //   {
  //     UserAvatar: userProfile,
  //     Text:
  //       "Loved it. Loved the people, hanging out late night in groups, the induction program, huge lecture halls, the infrastructure, and the courses. It was a very new experience. I felt super independent. I could pursue what I liked, the  knew whatever I study would be meaningful.",
  //     Name: "Sonali",
  //   },
  //   {
  //     UserAvatar: userProfile,
  //     Text:
  //       "Being from a non-science background, I honestly did not know what to expect from an engineering college but the induction made me feel at ease and love it. I just knew that I have to make the most of college life and try to be part of events and clubs that interest me because I couldn’t imagine a college life with only academics",
  //     Name: "Medhavi",
  //   },
  //   {
  //     UserAvatar: userProfile,
  //     Text:
  //       "Loved it. Loved the people, hanging out late night in groups, the induction program, huge lecture halls, the infrastructure, and the courses. It was a very new experience. I felt super independent. I could pursue what I liked, the  knew whatever I study would be meaningful.",
  //     Name: "Sonali",
  //   },
  // ];

  return (
    <>
      <Navbar loggedIn={true} colorStatus={false} stickyCond={true} />
      <ReactFullpage
        fitToSection={false}
        scrollingSpeed={1000}
        navigation={window.innerWidth > 600 ? true : false}
        navigationPosition='left'
        navigationTooltips={[
          'Welcome',
          'Phases of College',
          'Baby Steps',
          'Exploring',
          'Defining Point',
          'Graduation',
          'Nostalgia',
        ]}
        bigSectionsDestination='top'
        recordHistory={false}
        touchSensitivity={10}
        fadingEffect={true}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className='section section_0'>
                <ParticleAnim />

                <div className='section_1'>
                  <Tilt trackOnWindow={true} perspective={500}>
                    <h1 className='welcome_text'>
                      Hello {userName.split(' ')[0]}
                    </h1>
                  </Tilt>
                  <h4
                    style={{
                      textAlign: 'center',
                      marginLeft: '20%',
                      marginRight: '20%',
                      color: '#e6e6e6',
                    }}
                  >
                    Welcome to the only guide to hack IIITD. The playbook
                    provides you with multiple strategies that other students
                    use, their experiences and stories, tools you can use to
                    help you along the way and much more!
                  </h4>
                </div>
                {/* <img className="imgHero" src={imgWelcome}/>                                 */}
              </div>
              <div className='section phases-of-college'>
                <PhasesOfCollege />
              </div>
              {/* BABY STEPS */}
              <div className='section baby-steps'>
                <div className='section-wrapper'>
                  <img
                    className='section-image'
                    src={babyStepsImg}
                    alt='Baby Steps'
                  />
                  <div className='section-container'>
                    <h1 className='section-title'>Baby Steps</h1>
                    <p className='section-text'>
                      You get the most time in your first year, to do literally
                      ANYTHING!
                    </p>
                  </div>
                  <Testimonials portraits={portraits} />
                </div>
              </div>
              {/* EXPLORING */}
              <div className='section exploring'>
                <Clouds/>
                <div className='section-wrapper'>
                  <img
                    className='section-image'
                    src={exploringImg}
                    alt='Exploring'
                  />
                  <div className='section-container'>
                    <h1 className='section-title'>Exploring</h1>
                    <p className='section-text'>
                      <ul>
                        <li>
                          Consume content (Podcasts, youtube videos, read books,
                          follow people)
                        </li>
                        <li>Hackathons</li>
                        <li>Network with people outside college</li>
                        <li>
                          Network with people within college (Relationships{' '}
                          {'>'} Networking)
                        </li>
                        <li>
                          Earn {'>'} Travel {'>'} Repeat (as much as you can)
                        </li>
                        <li>Learn how to google</li>
                      </ul>
                    </p>
                  </div>
                  <Testimonials portraits={exploring} />
                </div>
              </div>
              {/* DEFINING POINT */}
              <div className='section defining-point'>
                <div className='section-wrapper'>
                  <img
                    className='section-image'
                    src={definingImg}
                    alt='Defining Point'
                  />
                  <div className='section-container'>
                    <h1 className='section-title'>Defining Point</h1>
                    <p className='section-text'>
                      <ul>
                        <li>Finding your calling</li>
                        <li>Live in the present</li>
                        <li>Do not follow someone else’s dream</li>
                        <li>Don’t confuse a job with a purpose</li>
                        <li>Say yes to the things that intrigue you.</li>
                      </ul>
                    </p>
                  </div>
                  <Testimonials portraits={definingPoint} />
                </div>
              </div>
              {/* GRADUATION */}
              <div className='section graduation'>
                <div className='section-wrapper'>
                  <img
                    className='section-image'
                    src={graduationImg}
                    alt='Graduation'
                  />
                  <div className='section-container'>
                    <h1 className='section-title'>Graduation</h1>
                    <p className='section-text'>
                      <ul>
                        <li>Enjoying the last moments</li>
                        <li>
                          Your Degree Means Little; Experience Trounces All
                        </li>
                        <li>Invest In Evergreen Assets</li>
                        <li>Remember, Your First Job Isn’t Your Last</li>
                        <li>Be True To You</li>
                      </ul>
                    </p>
                  </div>
                  <Testimonials portraits={graduating} />
                </div>
              </div>
              {/* NOSTALGIA */}
              <div className='section nostalgia' id="stars_container">
                <div className='section-wrapper'>
                  <img
                    className='section-image'
                    src={nostalgiaImg}
                    alt='Nostalgia'
                  />
                  <div className='section-container'>
                    <h1 className='section-title'>Nostalgia</h1>
                    <p className='section-text'>
                      Let's take you down the memory lane
                    </p>
                  </div>
                  <Testimonials portraits={nostalgia} />
                </div>
                <Stars/>
              </div>
              <div className='section fp-auto-height'>
                <Footer />
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </>
  );
}

export default HomePage;

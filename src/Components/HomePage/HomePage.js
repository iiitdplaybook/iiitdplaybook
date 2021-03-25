import React from 'react';
import firebase from 'firebase';
import { useStateValue } from '../../StateProvider';
import 'react-vertical-timeline-component/style.min.css';
import './HomePage.css';
import Navbar from '../Navbar/Navbar';
import Stars from '../Stars/stars';

import Clouds from '../Clouds/clouds';
import Testimonials from '../Testimonies/Testimonials';
import { useState, useEffect, useRef } from 'react';
import 'react-toastify/dist/ReactToastify.css';

import ReactFullpage from '@fullpage/react-fullpage';
import ParticleAnim from '../ParticleAnim/ParticleAnim';
import Tilt from 'react-parallax-tilt';
import Footer from '../Footer/Footer';
import PhasesOfCollege from './PhasesOfCollege';

const babyStepsImg =
  'https://cdn.statically.io/gh/iiitdplaybook/iiitdplaybook/79223f1e/src/Assets/homepage_illustrations/baby_steps.png';
const exploringImg =
  'https://cdn.statically.io/gh/iiitdplaybook/iiitdplaybook/7a661570/src/Assets/homepage_illustrations/exploring.png';
const definingImg =
  'https://cdn.statically.io/gh/iiitdplaybook/iiitdplaybook/7a661570/src/Assets/homepage_illustrations/defining_point.png';
const graduationImg =
  'https://cdn.statically.io/gh/iiitdplaybook/iiitdplaybook/7a661570/src/Assets/homepage_illustrations/graduation.png';
const nostalgiaImg =
  'https://cdn.statically.io/gh/iiitdplaybook/iiitdplaybook/7a661570/src/Assets/homepage_illustrations/nostalgia.png';
const iiitd =
  'https://cdn.statically.io/gh/iiitdplaybook/iiitdplaybook/7a661570/src/Assets/homepage_illustrations/iiitd_pedestal.png';

function HomePage() {
  const [{ user, isSignedIn, userName }] = useStateValue();
  const [portraits, setPortraits] = useState([]);
  const [exploring, setExploring] = useState([]);
  const [definingPoint, setDefiningPoint] = useState([]);
  const [graduating, setGraduating] = useState([]);
  const [nostalgia, setNostalgia] = useState([]);
  const [greetingList, setGreetingList] = useState([]);
  const [randi, setRandi] = useState(0);

  const getGreetings = async () => {
    var greetingList = [];

    let greetingsRef = firebase.database().ref('Greetings');
    await greetingsRef.once('value', (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        const temp = [childSnapshot.val().prefix, childSnapshot.val().suffix];
        greetingList.push(temp);
      });
    });

    setRandi(Math.floor(Math.random() * Math.floor(greetingList.length)));
    setGreetingList(greetingList);
  };

  const getTestimonies = async () => {
    let temp1 = [];
    let temp2 = [];
    let temp3 = [];
    let temp4 = [];
    let temp5 = [];

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

    setPortraits(temp1);
    setExploring(temp2);
    setDefiningPoint(temp3);
    setGraduating(temp4);
    setNostalgia(temp5);
  };

  useEffect(() => {
    getTestimonies();
    getGreetings();
    return () => {};
  }, []);

  const sectionsRef = [];
  const numSections = 7;

  useEffect(() => {
    for (let i = 0; i < numSections; i++) {
      sectionsRef[i].setAttribute('style', 'height:100vh', '!important');
      console.log(sectionsRef[i]);
    }
  });

  return (
    <>
      <Navbar loggedIn={true} colorStatus={false} stickyCond={true} />
      <ReactFullpage
        fitToSection={true}
        scrollingSpeed={1000}
        navigation={window.innerWidth > 600 ? true : false}
        navigationPosition={'left'}
        navigationTooltips={[
          'Welcome',
          'Phases of College',
          'Baby Steps',
          'Exploring',
          'Defining Point',
          'Graduation',
          'Nostalgia',
        ]}
        bigSectionsDestination={'top'}
        recordHistory={false}
        touchSensitivity={10}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div
                ref={(ref) => (sectionsRef[0] = ref)}
                className='section section_0'
              >
                <ParticleAnim />

                <div className='section_1'>
                  <Tilt trackOnWindow={true} perspective={500}>
                    {!isSignedIn ? (
                      <h1 className='welcome_text'>Hello</h1>
                    ) : (
                      <h1 className='welcome_text'>
                        {greetingList?.[randi]?.[0]}
                        {userName.split(' ')[0]}
                        {greetingList?.[randi]?.[1]}
                        {console.log(greetingList)}
                      </h1>
                    )}
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
                <div className='logo-image'>
                  <img className='imgHero' src={iiitd} />
                </div>
              </div>
              <div
                ref={(ref) => (sectionsRef[1] = ref)}
                className='section phases-of-college'
              >
                <PhasesOfCollege />
              </div>
              {/* BABY STEPS */}
              <div
                ref={(ref) => (sectionsRef[2] = ref)}
                className='section baby-steps'
              >
                <div className='section-wrapper'>
                  <img
                    className='section-image'
                    src={babyStepsImg}
                    alt='Baby Steps'
                  />
                  <div className='section-container'>
                    <h1 className='section-title'>Baby Steps</h1>
                    <p className='section-text'>
                      You've got all the time in the world in your first year.
                      Use it to pursue a hobby, join a club, polish your
                      skillset, hang out with friends- pretty much whatever you
                      like!
                    </p>
                  </div>
                  <Testimonials portraits={portraits} />
                </div>
              </div>
              {/* EXPLORING */}
              <div
                ref={(ref) => (sectionsRef[3] = ref)}
                className='section exploring'
              >
                <Clouds />
                <div className='section-wrapper'>
                  <img
                    className='section-image'
                    src={exploringImg}
                    alt='Exploring'
                  />
                  <div className='section-container'>
                    <h1 className='section-title'>Exploring</h1>
                    <p className='section-text'>
                      Consume as much information as you can. Participate in
                      hackathons; get to know people in college, get to know
                      people outside college, travel to escape it all, explore
                      relationships. There is so much to do! (Psst. learn how to
                      Google).
                    </p>
                  </div>
                  <Testimonials portraits={exploring} />
                </div>
              </div>
              {/* DEFINING POINT */}
              <div
                ref={(ref) => (sectionsRef[4] = ref)}
                className='section defining-point'
              >
                <div className='section-wrapper'>
                  <img
                    className='section-image'
                    src={definingImg}
                    alt='Defining Point'
                  />
                  <div className='section-container'>
                    <h1 className='section-title'>Defining Point</h1>
                    <p className='section-text'>
                      Do not shy away from trying whatever intrigues you. Try to
                      find something you are passionate about. Follow your own
                      path, find your purpose, find your own ambition and
                      aspiration and don't forget to live in the present.
                    </p>
                  </div>
                  <Testimonials portraits={definingPoint} />
                </div>
              </div>
              {/* GRADUATION */}
              <div
                ref={(ref) => (sectionsRef[5] = ref)}
                className='section graduation'
              >
                <div className='section-wrapper'>
                  <img
                    className='section-image'
                    src={graduationImg}
                    alt='Graduation'
                  />
                  <div className='section-container'>
                    <h1 className='section-title'>Graduation</h1>
                    <p className='section-text'>
                      You may be leaving IIITD, but IIITD never leaves you. You
                      cannot say goodbye just yet. All the lessons you've
                      learnt, adventures you've embarked upon and most
                      importantly, the friends you've made are gonna stay with
                      you forever as you enter the next phase of your life.
                    </p>
                  </div>
                  <Testimonials portraits={graduating} />
                </div>
              </div>
              {/* NOSTALGIA */}
              <div
                ref={(ref) => (sectionsRef[6] = ref)}
                className='section nostalgia'
                id='stars_container'
              >
                <div className='section-wrapper'>
                  <img
                    className='section-image'
                    src={nostalgiaImg}
                    alt='Nostalgia'
                  />
                  <div className='section-container'>
                    <h1 className='section-title'>Nostalgia</h1>
                    <p className='section-text'>
                      From Odyssey to mid-sems, morning classes to late night
                      movie sessions, mess to brew bakes, impromptu travel plans
                      to midnight parantha breaks - come take a trip down the
                      memory lane with us and relive some of your favourite
                      moments.
                    </p>
                  </div>
                  <Testimonials portraits={nostalgia} />
                </div>
                <Stars />
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

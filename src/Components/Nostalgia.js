import React, {useState, useEffect} from "react";
import { useStateValue } from "../StateProvider";
import "./Nostalgia.css";
import Stars from "./stars";

import happiness from "../Assets/happiness.jpg";
import abba_nahi_maanenge from "../Assets/abba_nahi_maanenge.jpg";
import mai_merko_sab_ata_hai_mai_expert_hu from "../Assets/mai_merko_sab_ata_hai_mai_expert_hu.jpg";

import Testimonials from './TestimonialsImage';

import prateek from "../Assets/NostalgiaPics/prateek.jpg";
import jubin from "../Assets/NostalgiaPics/jubin.jpg";
import image1 from "../Assets/NostalgiaPics/DSC_001.JPG";
import image2 from "../Assets/NostalgiaPics/DSC_002.JPG";
import image3 from "../Assets/NostalgiaPics/DSC_003.JPG";
import image4 from "../Assets/NostalgiaPics/DSC_004.JPG";

import glow1 from "../Assets/NostalgiaPics/glow1.mp4";
import glow2 from "../Assets/NostalgiaPics/glow2.gif";
import canteen1 from "../Assets/NostalgiaPics/canteen.PNG";
import canteen2 from "../Assets/NostalgiaPics/canteen_2.jpg";
import imgInduction from "../Assets/NostalgiaPics/induction.PNG";

function Nostalgia() {
  const [{ user, isSignedIn, userName }] = useStateValue();

  useEffect(() => { window.scrollTo(0, 0); console.log("aer"); }, []) 

  const portraits = [
    { pic: image1, name: "18 January 2020"},
    { pic: image2, name: "18 January 2020"},
    { pic: image3, name: "19 January 2020"},
    { pic: image4, name: "19 January 2020"},
    { pic: jubin, name: "18 January 2020"},
    { pic: jubin, name: "19 January 2020"},
    { pic: prateek, name: "19 January 2020"},
    { pic: jubin, name: "18 January 2020"},
    ];

    const vel = 25;
    const da = "clockwise";
    const db = "counterclockwise";

  return (
    <div id="nostalgiaCont">
        <div id="stars_container">
        <Stars/>
        </div>

        <h1 className='heading_text'>Down the memory lane</h1>
        <h5 className='heading_desc'>Remember the time when...</h5>

        <div className='section'>
            <h2>The Early Days</h2>
            <p>
                Oh the sweet, naive, happy days!
                <br/><br/>
                The journey begins with a series of similar questions - <br/>
                "Where is the college located?" “Govind puri se left?” "Goving puri?" 
                <br/>The pain in explaining to others, “Nhi IIT nhi, ek I aur aayega”, and “Nhi IP ka college nahi hai”. 
                However, the biggest heartbreak dawns upon us is that SOTY IS A LIE. In fact, we soon realise that "BAS ABHI PADHLE, FIR TOH MAZE HI MAZE HAI" is the BIGGEST lie!
                <br/><br/>
                First day in college, waking up on your own, all dressed up and excited for the most amazing time you’ll ever have in this college, the INDUCTION. Exploring clubs, treasure hunts, karaoke nights, dj nights, night olympics, being introduced to mafia by your seniors and playing it all night. Letting loose all the pent up tension from the past two years in the matter of 1 week, the most amazing and exciting week.
                
                <br/><br/>
                <video width="320" height="240" style={{borderRadius:"10px"}} controls>
                <source src={glow1} type="video/mp4"></source>
                Your browser does not support the video tag.
                </video>
                <img src={glow2}/>
                <img src={imgInduction}/>

                <br/><br/>But then ofcourse, there are some perks such as no more boring uniforms, no more seating arrangements and phone and eating allowed in class. 

                You become a good student: Wake up 2 hours before class, have breakfast, take a shower, wear good clothes, go to class early, sit on the first bench (probably the last time you do this in your entire college life).
                Mess food tastes good and you go there for all meals. Induction was so much fun that reviews like, “There is a lot of workload in this college and no social life”, look like a lie. 
                You are carefree, play pool, attend club activities, watch netflix, and hang out with friends all day. 
                No sign of deadlines(the calm before the storm &#128520;).
                <br/><br/>

               

            </p>
        </div>
        <div className='section'>
            <h2>The 11:59 Struggle</h2>
            <p>
            And the calm finally fades away, slowly, one deadline at a time. Before you know it, you have 4 deadlines and 3 quizzes, and you keep wondering, how did this happen overnight?? 
            As the panic starts to kick in, you start to work - looking through the lecture slides to find when the hell did the professor teach this? And you realize that he didn’t :| 
            <br/><br/>
            <img classname='happiness_img' src={happiness}/>

            This is when your first best friend comes to the rescue, “GOOGLE”. Scrolling through hundreds of websites, talking to a dozen friends you somehow manage to reach the finishing line. 
            Now, the moment of truth, you run your code… ERROR. Time for the second best friend, “STACK OVERFLOW”. After 527 bugs, you fianlly get your code functioning and submit just in time.
            <br/><br/>
            Nothing beats that sigh of relief after hitting the “Turn In” button on Google Classroom, just minutes before the deadly “11:59 pm” mark. A tear trickled down your cheek as you closed your laptop and lied down on your bed, feeling on top of the world. This is when you begin to feel hungry.


            </p>
        </div>
        <div className='section'>
        <h2>3AM Maggi</h2>
            <p>
            Kuch khaane chalte hain 
            <br/><br/>
            Happy and starving, you walk towards the canteen with your entire gang, realizing on the way that , “Apne college mein bhi couples exist karte hain?” The moment you reach, you say, “Bhaiya bohot bhook lag rahi h, sabse jaldi kya mil sakta h?”. 
            The obvious response to which is, “MAGGI”. Then starts the wait game. This is when you realize, that it does not take 2 minutes to prepare maggi, but a millenia. “Bhaiya 2 minute ho gaye, maggi kab aayegi?”. “Bhaiya 20 minute ho gaye, maggi kab aayegi?”. “Bhaiya subah ho gayi, maggi kab aayegi???” 
            After waiting forever, you finally get your food and you enjoy it with the most interesting and crazy late night conversations, followed by a walk around the campus, feeling free and relaxed (for some time at least).
                <br></br>
                
            </p>
            
        </div>
        <div className='section'>
            <h2>Wind Point</h2>
            <p>
                Sab kuch toh ud jayega, bas tumhari deadlines rhe jayengi
                <br></br>
                100 kmph windspeed 
            </p>
        </div>
        <div className='section'>
            <h2>BCR</h2>
            <p>
                Foosball tournaments, listening to gossips, interview spots, collaborating on projects, watching movies.
                <br></br>
                Netflix and chill
                <br></br>
                Abandoned by day and Couples’ hotspot by night :)
            </p>
        </div>
        <div className='section'>
            <h2>Goa Trip</h2>
            <img classname='abba_nahi_maanenge_img' src={abba_nahi_maanenge}/>
            <p>
                4th year tak bhi nahi hone wali.
                <br></br>
                Abba nahi manenge
            </p>
        </div>
        <div className='section'>
            <h2>Ravi's Tapri</h2>
            <p>
                Bhaiya paise le lo? bhaiya? hello?
                <br></br>
                Chai + Maggi = nirvana
            </p>
        </div>
        <div className='section'>
            <h2>Exam Season Blues</h2>
            <p>
                Ngl, the only time when you’ll actually feel free
                <br></br>
                The only time you’ll follow your passion
            </p>
        </div>
        <div className='section'>
        <h2>The Delhi <strike>Safar</strike> Suffer</h2>
            <p className='para_text'>Delhi air pollution.
                <br></br>
                Nearby Places:
                <ol>
                    <li>Everest</li>
                    <li>Epicuria</li>
                    <li>Sonu ka Dhaba</li>
                    <li>Hauz Khas</li>
                </ol>
                <br></br>
                Solo trips in Delhi
                <br></br>
                Kyu ghoomne jana hai?
                <br></br>
                If you still want to you can visit the ..tomb etc.
                <br></br>
                Tasveer photowalks (about + images)
            </p>
        </div>
        <div className='section'>
            <h2>Cultural Fests</h2>
            <p>
                A day to remember :')
                <br/><br/>
                The only thing that you look forward to in the entire semester, FEST TIME. Even though there are 2 fests, everyone waits the entire year for just one of them, ODYSSEY, the cultural fest.
            </p>
            <div className="ImageTesti">
            <Testimonials portraits={portraits} vel={vel} scaleFactor={1.5} direc={da}/>
            </div>

            <p> Everyone working day and night for 4-6 months (10 times the amount of hard work you put in completing a deadline) - hundreds of meetings, thousands of sponsorship calls, crazy publicity, and so much more, everything boiling down to one night, the NIRVANA NIGHT. 
                When artists like <b id="textcolor">Gajendra Verma, Prateek Kuhad, The Local Train, and Jubin Nautiyal</b> walk up on the stage, ready to perform in front of thousands of people from all over Delhi, in a fest that you helped build, the lights hitting your eyes, the sound from the speakers pumping your chest, 
                that is the moment you feel pride in yourself and party like it is the last day of your life.
            </p>
            <div className="ImageTesti">
            <Testimonials portraits={portraits} vel={1.5*vel} scaleFactor={1.5} direc={db}/>
            </div>
            <p>
                Behind the scenes #Grind<br/>
                Fresher to OC:
                <img id='mai_merko_sab_ata_hai_mai_expert_hu_img' src={mai_merko_sab_ata_hai_mai_expert_hu} alt='expert'/>
                {/* <img classname='prateek_img' src={prateek}/> */}
                {/* <img classname='jubin_img' src={jubin} /> */}
                <p>
                    OC to Fresher: 
                    <br></br>
                    Sabko T-shirt milegi, kaam karo
                    <br></br>
                    <ul>
                        <li>Secret to people staying sane throughout the semester</li>
                        <li>Jokes apart, working for a fest and knowing YOU were the one who pulled it off is something that feels like a big achievement </li>
                        <li>It’s all very open and friendly, Freshers even get an opportunity to organize their own event.</li>
                    </ul>
                </p>
            </p>
            
            <p className='heirarchy'>
                Heirarchy
                <p>PK</p>
                <p>OC (+ OC ke dost)</p>
                <p>Asli kaam toh idhar hota h</p>
                <p>OT</p>
                <p>Free TShirt + "swag"</p>
                <p>Volunteers</p>
                <p>Free Tshirt</p>
                <p>Ngl, tum kaam karoge toh mazaa aayega</p>
            </p>
        </div>
    </div>
  )
}

export default Nostalgia
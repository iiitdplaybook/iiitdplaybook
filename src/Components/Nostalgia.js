import React, { useState, useEffect } from "react";
import { useStateValue } from "../StateProvider";
import "./Nostalgia.css";
import Stars from "./stars";
import Testimonials from "./Testimonies/TestimonialsImage";
import Navbar from "./Navbar";
import ScrollAnimation from "react-animate-on-scroll";
import Fade from "react-reveal/Fade";

const happiness_1 = "https://cdn.statically.io/gh/PabitraBansal/StudentPlaybook/6d20d536/src/Assets/NostalgiaPics/happiness_1.jpg";
const happiness_2 = "https://cdn.statically.io/gh/PabitraBansal/StudentPlaybook/6d20d536/src/Assets/NostalgiaPics/happiness_2.jpg";
const happiness_3 = "https://cdn.statically.io/gh/PabitraBansal/StudentPlaybook/6d20d536/src/Assets/NostalgiaPics/happiness_3.jpg";
const old_acad_lawn = "https://cdn.statically.io/gh/PabitraBansal/StudentPlaybook/6d20d536/src/Assets/NostalgiaPics/old_acad_lawn_3.PNG";
const bcr = "https://cdn.statically.io/gh/PabitraBansal/StudentPlaybook/6d20d536/src/Assets/NostalgiaPics/bcr.PNG";
const canteen = "https://cdn.statically.io/gh/PabitraBansal/StudentPlaybook/6d20d536/src/Assets/NostalgiaPics/canteen.PNG";
const canteen_2 = "https://cdn.statically.io/gh/PabitraBansal/StudentPlaybook/6d20d536/src/Assets/NostalgiaPics/canteen_2.jpg";
const epicuria = "https://cdn.statically.io/gh/PabitraBansal/StudentPlaybook/6d20d536/src/Assets/NostalgiaPics/epicuria.jpg";
const chai_addaa = "https://cdn.statically.io/gh/PabitraBansal/StudentPlaybook/6d20d536/src/Assets/NostalgiaPics/chai_addaa.jpg";
const library = "https://cdn.statically.io/gh/PabitraBansal/StudentPlaybook/6d20d536/src/Assets/NostalgiaPics/library.jpg";
const hkv = "https://cdn.statically.io/gh/PabitraBansal/StudentPlaybook/6d20d536/src/Assets/NostalgiaPics/hkv.jpg";
const abba_nahi_maanenge = "https://cdn.statically.io/gh/PabitraBansal/StudentPlaybook/6d20d536/src/Assets/abba_nahi_maanenge.jpg";
const mai_merko_sab_ata_hai_mai_expert_hu = "https://cdn.statically.io/gh/PabitraBansal/StudentPlaybook/6d20d536/src/Assets/mai_merko_sab_ata_hai_mai_expert_hu.jpg";

const prateek = "https://cdn.statically.io/gh/PabitraBansal/StudentPlaybook/6d20d536/src/Assets/NostalgiaPics/prateek.jpg";
const jubin = "https://cdn.statically.io/gh/PabitraBansal/StudentPlaybook/6d20d536/src/Assets/NostalgiaPics/jubin.jpg";
const image1 = "https://cdn.statically.io/gh/PabitraBansal/StudentPlaybook/6d20d536/src/Assets/NostalgiaPics/DSC_001.JPG";
const image2 = "https://cdn.statically.io/gh/PabitraBansal/StudentPlaybook/6d20d536/src/Assets/NostalgiaPics/DSC_002.JPG";
const image3 = "https://cdn.statically.io/gh/PabitraBansal/StudentPlaybook/6d20d536/src/Assets/NostalgiaPics/DSC_003.JPG";
const image4 = "https://cdn.statically.io/gh/PabitraBansal/StudentPlaybook/6d20d536/src/Assets/NostalgiaPics/DSC_004.JPG";

const glow1 = "https://cdn.statically.io/gh/PabitraBansal/StudentPlaybook/6d20d536/src/Assets/NostalgiaPics/glow1.mp4";
const glow2 = "https://cdn.statically.io/gh/PabitraBansal/StudentPlaybook/6d20d536/src/Assets/NostalgiaPics/glow2.gif";
const canteen1 = "https://cdn.statically.io/gh/PabitraBansal/StudentPlaybook/6d20d536/src/Assets/NostalgiaPics/canteen.PNG";
const canteen2 = "https://cdn.statically.io/gh/PabitraBansal/StudentPlaybook/6d20d536/src/Assets/NostalgiaPics/canteen_2.jpg";
const imgInduction = "https://cdn.statically.io/gh/PabitraBansal/StudentPlaybook/6d20d536/src/Assets/NostalgiaPics/induction.PNG";

function Nostalgia() {
  const [{ user, isSignedIn, userName }] = useStateValue();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const portraits = [
    { pic: image1, name: "18 January 2020" },
    { pic: image2, name: "18 January 2020" },
    { pic: image3, name: "19 January 2020" },
    { pic: image4, name: "19 January 2020" },
    { pic: jubin, name: "18 January 2020" },
    { pic: jubin, name: "19 January 2020" },
    { pic: prateek, name: "19 January 2020" },
    { pic: jubin, name: "18 January 2020" },
  ];

  const vel = 25;
  const da = "clockwise";
  const db = "counterclockwise";

  return (
    <div>
      <Navbar
        loggedIn={localStorage.getItem("isSignedIn")}
        colorStatus={false}
      />
      <div id="nostalgiaCont">
        <div id="stars_container">
          <Stars />
        </div>

        <h1 className="heading_text">Down the memory lane</h1>
        <h5 className="heading_desc">Remember the time when...</h5>

        <Fade duration={2000}>
          <div className="section">
            <h2>The Early Days</h2>
            <br></br>
            <p>
              Oh the sweet, naive, happy days!
              <br />
              <br />
              The journey begins with a series of similar questions - <br />
              "Where is the college located?" “Govind puri se left?” "Govind
              puri?"
              <br />
              The pain in explaining to others, “Nhi IIT nhi, ek I aur aayega”,
              and “Nhi IP ka college nahi hai”. However, the biggest heartbreak
              is that SOTY IS A LIE. In fact, we soon realise that "BAS ABHI
              PADHLE, FIR TOH MAZE HI MAZE HAI" is the BIGGEST lie!
              <br />
              <br />
              First day in college, waking up on your own, all dressed up and
              excited for the most amazing time you’ll ever have in this
              college, the INDUCTION. Exploring clubs, treasure hunts, karaoke
              nights, dj nights, night olympics, being introduced to mafia by
              your seniors and playing it all night. Letting loose all the pent
              up tension from the past two years in the matter of 1 week, the
              most amazing and exciting week.
              <br />
              <br />
            </p>
            <div className="section_media_2">
              <video height="240" style={{ borderRadius: "10px" }} controls>
                <source src={glow1} type="video/mp4"></source>
                Your browser does not support the video tag.
              </video>
              <img src={glow2} />

              <img src={imgInduction} />
            </div>
            <p>
              <br></br>But then ofcourse, there are some perks such as no more
              boring uniforms, no more seating arrangements and phone and eating
              allowed in class. You become a good student: Wake up 2 hours
              before class, have breakfast, take a shower, wear good clothes, go
              to class early, sit on the first bench (probably the last time you
              do this in your entire college life). Mess food tastes good and
              you go there for all meals. Induction was so much fun that reviews
              like, “There is a lot of workload in this college and no social
              life”, look like a lie. You are carefree, play pool, attend club
              activities, watch netflix, and hang out with friends all day. No
              sign of deadlines(the calm before the storm &#128520;).
              <br />
              <br />
            </p>
          </div>
        </Fade>

        <Fade duration={2000}>
          <div className="section">
            <h2>The 11:59 Struggle</h2>
            <br></br>
            <p>
              And the calm finally fades away, slowly, one deadline at a time.
              Before you know it, you have 4 deadlines and 3 quizzes, and you
              keep wondering, how did this happen overnight?? As the panic
              starts to kick in, you begin to work - looking through the lecture
              slides to find when the hell did the professor teach this? And you
              realize that he didn’t :|
              <br />
              <br />
            </p>
            <div className="section_media_2">
              <img className="happiness_img" src={happiness_1} />
              <img className="happiness_img" src={happiness_2} />
              <img className="happiness_img" src={happiness_3} />
            </div>
            <p>
              This is when your first best friend comes to the rescue, “GOOGLE”.
              Scrolling through hundreds of websites, talking to a dozen friends
              you somehow manage to reach the finishing line. Now, the moment of
              truth, you run your code… ERROR. Time for the second best friend,
              “STACK OVERFLOW”. After 527 bugs, you fianlly get your code
              functioning and submit just in time.
              <br />
              <br />
              Nothing beats that sigh of relief after hitting the “Turn In”
              button on Google Classroom, just minutes before the deadly “11:59
              pm” mark. A tear trickled down your cheek as you closed your
              laptop and lay down on your bed, feeling on top of the world. This
              is when you begin to feel hungry.
            </p>
          </div>
        </Fade>

        <Fade duration={2000}>
          <div className="section">
            <h2>3AM Maggi</h2>
            <br></br>
            <p>
              Kuch khaane chalte hain...
              <br />
              <br />
              Happy and starving, you walk towards the canteen with your entire
              gang, realizing on the way that , “Apne college mein bhi couples
              exist karte hain?” The moment you reach, you say, “Bhaiya bohot
              bhook lag rahi h, sabse jaldi kya mil sakta h?”. The obvious
              response to which is, “MAGGI”. Then starts the wait game. This is
              when you realize, that it does not take 2 minutes to prepare
              maggi, but a millennia. “Bhaiya 2 minute ho gaye, maggi kab
              aayegi?”. “Bhaiya 20 minute ho gaye, maggi kab aayegi?”. “Bhaiya
              subah ho gayi, maggi kab aayegi???” After waiting forever, you
              finally get your food and you enjoy it with the most interesting
              and crazy late night conversations, followed by a walk around the
              campus, feeling free and relaxed (for some time at least).
              <br></br>
              <br></br>
            </p>
            <div className="section_media">
              <img src={canteen} />
              <img src={canteen_2} />
            </div>
          </div>
        </Fade>

        <Fade duration={2000}>
          <div className="section">
            <h2>BCR</h2>
            <br></br>
            <div className="section__body">
              <p>
                Abandoned by day and Couples’ hotspot by night :)
                <br></br>
                One of the best places on campus to enjoy and relax with your
                friends. Foosball tournaments, listening to gossip, interview
                spots, collaborating on projects, watching movies, netflix and
                chill. This room has seen fest spam nights, festival
                celebrations, pubg game nights, birthday celebrations, deadline
                all nighters, and so much more. You can spend your entire day
                here with your squad, binge watching TV shows, movies, youtube
                videos, while enjoying the food you ordered, delivered right
                outside the building.
              </p>
              <br></br>
              <div className="section_media">
                <img src={bcr} />
              </div>
            </div>
          </div>
        </Fade>

        <Fade duration={2000}>
          <div className="section">
            <h2>Ravi's Tapri</h2>
            <br></br>
            <div className="section__body">
              <div className="section_media">
                <img id="ravi" src={chai_addaa} />
              </div>
              <p>
                “Next class 10 minute mein hai, chai peene chalein?” The newest
                addition to the college campus, yet the spot for the most
                amazing chai. Sitting on the bench in front of the shop,
                enjoying the warm sunlight in the cold winters, while waiting
                for that chai!!(We all miss that chai). The one place where you
                see faculty, staff and students, all waiting for that sip of
                relief. It’s not only the chai, but the maggi as well, reminding
                you of your home cooked and tasty maggi.
                <br></br>
                Chai + Maggi = Nirvana.
                <br></br>
                “Bhaiya paise lelo. Bhaiya?” All recharged after that shot of
                energy, you walk back to work :(
                <br></br>
              </p>
            </div>
          </div>
        </Fade>

        <Fade duration={2000}>
          <div className="section">
            <h2>Exam Season Blues</h2>
            <br></br>
            <p>
              Surprisingly, a time when you actually feel free. With no
              deadlines, even though you have a constant fear of the exams, you
              realize that you have time and don’t know what to do with it. This
              is when new ideas start filling your brain, plans of starting new
              things, learning new things, watching movies and tv shows. A time
              when group studies seem like a good option, lying in the library
              all day and night, you open the course books for the first time
              and realize that you should have attended classes more seriously.
              <br></br>
              <br></br>
            </p>
            <div className="section__body">
              <p>
                The night before the exam seems like the longest and the
                toughest night. Feeling anxious and losing confidence with every
                passing minute, you pull an all nighter with a good cup of
                coffee by your side, and before you realize, you see a beautiful
                sunrise in front of your eyes.
                <br></br>
                Time for the exam. Getting that good luck from your parents on
                the phone, you leave for the exam room. Praying to every god
                you’ve ever heard of, you put all your focus into that 1 hour
                and take a deep sigh of relief at the end (forgetting for a
                minute that you have another exam the next day).
                <br></br>
              </p>

              <div className="section_media">
                <img src={library} />
              </div>
            </div>
          </div>
        </Fade>

        <Fade duration={2000}>
          <div className="section">
            <h2>The Old Acad Lawn</h2>
            <br></br>
            <div className="section__body">
              <div className="section_media">
                <img src={old_acad_lawn} />
              </div>

              <p className="para_text">
                The best place to enjoy the warm sun on a cold day, the old acad
                lawn. From professors to students, everyone loves sitting on the
                grass here and enjoying the sun. Feels good to connect to nature
                and admire the lovely colorful flowers all around (better with a
                cup of chai or coffee). A place which is always open and can be
                used for relaxation whether it is a quick nap between classes or
                after lunch, whether it is hanging out with friends while
                bunking classes (don’t bunk classes :)) or just listening to
                some mellow music, this place always helps in finding some peace
                of mind.
              </p>
            </div>
          </div>
        </Fade>

        <Fade duration={2000}>
          <div className="section">
            <h2>
              The Delhi <strike>Safar</strike> Suffer
            </h2>
            <br></br>
            <p className="para_text">
              Delhi air pollution. Living in the midst of a state with the
              highest air pollution, one has still got to relax and travel to
              have fun. Ordering food is always an option, but sometimes a walk
              with your friends really cheers you up, be it to Everest for
              chinese or Sonu ka Dhaba. Not forgetting one the most visited
              places by IIITD students, Epicuria (takes more than a simple
              walk), along with its neighbor, Kalkaji, for some street food as
              well as good restaurants.
              <br></br>
              Festivals and ending of the exam season mark a time of partying,
              leading you straight towards Hauz Khas and Satya Niketan, not too
              far either.
              <br></br>
              Still feel like traveling? Tasveer photo walks are always there
              for rescue, which are not just limited to Delhi. And the biggest
              travel of all, the trip at the end of the semester, be it to Goa
              or Manali (Kasol too, if you know, you know), the best time to
              relax and let out all the stress and tension, feeling truly free.
              <br></br>
              <br></br>
            </p>
            <div className="section_media">
              <img src={epicuria} />
              <img src={hkv} />
            </div>
          </div>
        </Fade>

        <Fade duration={2000}>
          <div className="section">
            <h2>Cultural Fest</h2>
            <br></br>
            <p>
              A day (mostly night) to remember :')
              <br />
              <br />
              The only thing that you look forward to in the entire semester,
              FEST TIME. Even though there are 2 fests, everyone waits the
              entire year for just one of them, ODYSSEY, the cultural fest.
            </p>
            <div className="ImageTesti">
              <Testimonials
                portraits={portraits}
                vel={vel}
                scaleFactor={1.5}
                direc={da}
              />
            </div>
            <br></br>
            <p>
              {" "}
              Everyone working day and night for 4-6 months (10 times the amount
              of hard work you put in completing a deadline) - hundreds of
              meetings, thousands of sponsorship calls, crazy publicity, and so
              much more, everything boiling down to one night, the NIRVANA
              NIGHT. When artists like{" "}
              <b id="textcolor">
                Gajendra Verma, Prateek Kuhad, The Local Train, and Jubin
                Nautiyal
              </b>{" "}
              walk up on the stage, ready to perform in front of thousands of
              people from all over Delhi, in a fest that you helped build, the
              lights hitting your eyes, the sound from the speakers pumping your
              chest, that is the moment you feel pride in yourself and party
              like it is the last day of your life.
            </p>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default Nostalgia;

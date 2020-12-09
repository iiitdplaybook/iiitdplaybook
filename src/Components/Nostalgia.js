import React, {useState} from "react";
import { useStateValue } from "../StateProvider";
import "./Nostalgia.css";
import Stars from "./stars";
import prateek from "../Assets/prateek.jpg";
import jubin from "../Assets/jubin.jpg";
import happiness from "../Assets/happiness.jpg";
import abba_nahi_maanenge from "../Assets/abba_nahi_maanenge.jpg";
import mai_merko_sab_ata_hai_mai_expert_hu from "../Assets/mai_merko_sab_ata_hai_mai_expert_hu.jpg";

function Nostalgia() {
  const [{ user, isSignedIn, userName }] = useStateValue();

  return (
    <div id="nostalgiaCont">
        <div id="stars_container">
        <Stars/>
        </div>

        <h1 className='heading_text'>Down the memory lane</h1>
        <h5 className='heading_desc'>Remember the time when...</h5>

        <div className='section'>
            <h2>01. The Early Days</h2>
            <p>
                Good boy: Wake up 2 hours before class, have breakfast, take a shower, wear good clothes, go to class early, sit on first bench (probably the last time you do this in your entire college life).
                <br></br>
                Govind puri se left. Kya beta? IIT? IP?
                <br></br>
                Day Scholar = Ghar ka khaana
            </p>
        </div>
        <div className='section'>
            <h2>02. The 11:59 Struggle</h2>
            <img classname='happiness_img' src={happiness}/>
            <p>
                Work till 11:59 and party till 6 in the morning, literally. 
                Try not to sync your clock according to the deadlines
            </p>
        </div>
        <div className='section'>
            <h2>03. The Delhi <strike>Safar</strike> Suffer</h2>
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
            <h2>04. Wind Point</h2>
            <p>
                Sab kuch toh ud jayega, bas tumhari deadlines rhe jayengi
                <br></br>
                100 kmph windspeed 
            </p>
        </div>
        <div className='section'>
            <h2>05. BCR</h2>
            <p>
                Foosball tournaments, listening to gossips, interview spots, collaborating on projects, watching movies.
                <br></br>
                Netflix and chill
                <br></br>
                Abandoned by day and Couples’ hotspot by night :)
            </p>
        </div>
        <div className='section'>
            <h2>06. Goa Trip</h2>
            <img classname='abba_nahi_maanenge_img' src={abba_nahi_maanenge}/>
            <p>
                4th year tak bhi nahi hone wali.
                <br></br>
                Abba nahi manenge
            </p>
        </div>
        <div className='section'>
            <h2>07. Ravi's Tapri</h2>
            <p>
                Bhaiya paise le lo? bhaiya? hello?
                <br></br>
                Chai + Maggi = nirvana
            </p>
        </div>
        <div className='section'>
            <h2>08. Exam Season Blues</h2>
            <p>
                Ngl, the only time when you’ll actually feel free
                <br></br>
                The only time you’ll follow your passion
            </p>
        </div>
        <div className='section'>
            <h2>09. 3AM Maggi</h2>
            <p>
                The peak time when canteen is free
                <br></br>
                When you realize college mein couples exist karte hain 
            </p>
        </div>
        <div className='section'>
            <h2>10. Fest</h2>
            <p>
                Fresher to OC:
            </p>
            <img classname='mai_merko_sab_ata_hai_mai_expert_hu_img' src={mai_merko_sab_ata_hai_mai_expert_hu} alt='expert'/>
            <img classname='prateek_img' src={prateek}/>
            <img classname='jubin_img' src={jubin} />
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
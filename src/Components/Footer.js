import React from 'react'
import "./Footer.css";
import { Button } from '@material-ui/core';
import { Link } from "react-router-dom";
import yashwin from "../Assets/yashwin.png";
import kshitij from "../Assets/kshitij.jpg";
import pabitra from "../Assets/pabitra.jpeg";
import rahul from "../Assets/rahul.png";
// import { Link } from "react-router-dom";

function Footer() {
    
    return (
        <div id="bg">
            <div className="upper">
                <p>Want to contribute? It can as small as 2 lines or big as 2 pages. Your contribution matters</p>
                {/* <Button className='form_button' href='https://forms.gle/3Ynuz1rLDudMRYpf7' target='_blank'>I'll contribute</Button> */}
                <Button 
                  className='button2' 
                  component={Link} 
                  
                  to={"/contribute/testimonies"}>
                  <span className='span2'>YES! I'd like to contribute</span>
                </Button>
                <div className='testi2'>
          <div className='creatorCard'>
            <img src={kshitij}/>
            <p>Kshitij <div className='removeText'>&nbsp;Agrawal</div></p>
            <a class="fa fa-linkedin fa-lg" href="https://www.linkedin.com/in/kshitij16/"  target="_blank"></a>
          </div>
          
          <div className='creatorCard'>
            <img src={pabitra}/>
            <p>Pabitra <div className='removeText'>&nbsp;Bansal</div> </p>
            <a class="fa fa-linkedin fa-lg" href="https://www.linkedin.com/in/pabitra-bansal-06039616a/"  target="_blank"></a>
          </div>
          
          
          <div className='creatorCard'>
            <img src={rahul}/>
            <p>Rahul <div className='removeText'>&nbsp;Singh</div> </p>
            <a class="fa fa-linkedin fa-lg" href="https://www.linkedin.com/in/rahul-singh-7aa84697/"  target="_blank"></a>
          </div>
          
          
          <div className='creatorCard'>
            <img src={yashwin}/>
            <p>Yashwin <div className='removeText'>&nbsp;Agrawal</div> </p>
            <a class="fa fa-linkedin fa-lg" href="https://www.linkedin.com/in/yashwin-agrawal-6b28bb176/"  target="_blank"></a>
          </div>
          
        </div>
            </div>
            <div className="lower">
                <p>
                IIITD Student Playbook &copy; 2021
                </p>
            </div>
        </div>
    )
}

export default Footer

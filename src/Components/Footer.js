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
                <p>Support Us</p>
                <div className="supportUsButtons">
                  <Button id="supportBtn" target="_blank" href="https://www.buymeacoffee.com/iiitdplaybook">
                    <img className="buymeacoffeelogo" src={"https://bmc-dev.s3.us-east-2.amazonaws.com/assets/icons/bmc_icon_black.png"}/> Buy me a coffee
                  </Button>
                  {/* <Button id="supportBtn" target="_blank" href="https://www.patreon.com/iiitdplaybook">
                    <img className="pateronlogo" src={"https://cdn.vox-cdn.com/thumbor/a3z1idZDuso6ksgW6pDOZwCRJDw=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/9833961/patreon.jpg"}/>Patreon
                  </Button> */}
                {/* {<script type="text/javascript" src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js" data-name="bmc-button" data-slug="iiitdplaybook" data-color="#5F7FFF" data-emoji=""  data-font="Cookie" data-text="Buy me a coffee" data-outline-color="#000000" data-font-color="#ffffff" data-coffee-color="#FFDD00" ></script>}                 */}
                </div>
                <div className='testi2'>
          
        <a className="defaultClick" href="https://www.instagram.com/okkshitij/"  target="_blank">
          <div className='creatorCard'>
            <img src={kshitij}/>
            <p>Kshitij <div className='removeText'>&nbsp;Agrawal</div></p>
            <a class="fa fa-linkedin fa-lg" href="https://www.linkedin.com/in/kshitij16/"  target="_blank"></a>
            <a class="fa fa-instagram fa-lg" href="https://www.instagram.com/okkshitij/"  target="_blank"></a>
          </div>
          </a>
          
          <a className="defaultClick" href="https://www.instagram.com/pabitrabansal/"  target="_blank">
          <div className='creatorCard'>
            <img src={pabitra}/>
            <p>Pabitra <div className='removeText'>&nbsp;Bansal</div> </p>
            <a class="fa fa-linkedin fa-lg" href="https://www.linkedin.com/in/pabitra-bansal-06039616a/"  target="_blank"></a>
            <a class="fa fa-instagram fa-lg" href="https://www.instagram.com/pabitrabansal/"  target="_blank"></a>

          </div>
          </a>
          
          <a className="defaultClick" href="https://www.instagram.com/am.i.a.normie.now/"  target="_blank">
          <div className='creatorCard'>
            <img src={rahul}/>
            <p>Rahul <div className='removeText'>&nbsp;Singh</div> </p>
            <a class="fa fa-linkedin fa-lg" href="https://www.linkedin.com/in/rahul-singh-7aa84697/"  target="_blank"></a>
            <a class="fa fa-instagram fa-lg" href="https://www.instagram.com/am.i.a.normie.now/"  target="_blank"></a>

          </div>
          </a>
          
          <a className="defaultClick" href="https://www.instagram.com/yashwin_1/"  target="_blank">
          <div className='creatorCard'>
            <img src={yashwin}/>
            <p>Yashwin <div className='removeText'>&nbsp;Agrawal</div> </p>
            <a class="fa fa-linkedin fa-lg" href="https://www.linkedin.com/in/yashwin-agrawal-6b28bb176/"  target="_blank"></a>
            <a class="fa fa-instagram fa-lg" href="https://www.instagram.com/yashwin_1/"  target="_blank"></a>

          </div>
          </a>

        </div>
      </div>
            <div className="lower">
            {/* <a href="https://www.buymeacoffee.com/iiitdplaybook" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style={{height: '60px !important',width: '217px !important'}}/></a> */}
                <p>
                IIITD Student Playbook &copy; 2021
                </p>
            </div>
        </div>
    )
}

export default Footer

import React from "react";
import "./Footer.css";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const yashwin = "https://cdn.statically.io/gh/PabitraBansal/StudentPlaybook/6d20d536/src/Assets/yashwin.png";
const kshitij = "https://cdn.statically.io/gh/PabitraBansal/StudentPlaybook/6d20d536/src/Assets/kshitij.jpg";
const pabitra = "https://cdn.statically.io/gh/PabitraBansal/StudentPlaybook/6d20d536/src/Assets/pabitra.jpeg";
const rahul = "https://cdn.statically.io/gh/PabitraBansal/StudentPlaybook/6d20d536/src/Assets/rahul.png";

function Footer() {
  return (
    <div id="bg">
      <div className="upper">
        {localStorage.getItem("isSignedIn") ? (
          <>
            <p>
              Want to contribute? It can as small as 2 lines or big as 2 pages.
              Your contribution matters
            </p>

            <Button
              className="button2"
              component={Link}
              to={"/contribute/testimonies"}
            >
              <span className="span2">YES! I'd like to contribute</span>
            </Button>
          </>
        ) : (
          <></>
        )}
        <p>Support Us</p>
        <div className="supportUsButtons">
          <Button
            id="supportBtn"
            target="_blank"
            href="https://www.buymeacoffee.com/iiitdplaybook"
          >
            <img
              className="buymeacoffeelogo"
              src={
                "https://bmc-dev.s3.us-east-2.amazonaws.com/assets/icons/bmc_icon_black.png"
              }
            />{" "}
            Buy me a coffee
          </Button>
        </div>
        <div className="testi2">
          <a
            className="defaultClick"
            href="https://www.instagram.com/okkshitij/"
            target="_blank"
          >
            <div className="creatorCard">
              <img src={kshitij} />
              <p>
                Kshitij <div className="removeText">&nbsp;Agrawal</div>
              </p>
              <a
                className="fa fa-linkedin fa-lg"
                href="https://www.linkedin.com/in/kshitij16/"
                target="_blank"
              ></a>
              <a
                className="fa fa-instagram fa-lg"
                href="https://www.instagram.com/okkshitij/"
                target="_blank"
              ></a>
            </div>
          </a>

          <a
            className="defaultClick"
            href="https://www.instagram.com/pabitrabansal/"
            target="_blank"
          >
            <div className="creatorCard">
              <img src={pabitra} />
              <p>
                Pabitra <div className="removeText">&nbsp;Bansal</div>{" "}
              </p>
              <a
                className="fa fa-linkedin fa-lg"
                href="https://www.linkedin.com/in/pabitra-bansal-06039616a/"
                target="_blank"
              ></a>
              <a
                className="fa fa-instagram fa-lg"
                href="https://www.instagram.com/pabitrabansal/"
                target="_blank"
              ></a>
            </div>
          </a>

          <a
            className="defaultClick"
            href="https://www.instagram.com/am.i.a.normie.now/"
            target="_blank"
          >
            <div className="creatorCard">
              <img src={rahul} />
              <p>
                Rahul <div className="removeText">&nbsp;Singh</div>{" "}
              </p>
              <a
                className="fa fa-linkedin fa-lg"
                href="https://www.linkedin.com/in/rahul-singh-7aa84697/"
                target="_blank"
              ></a>
              <a
                className="fa fa-instagram fa-lg"
                href="https://www.instagram.com/am.i.a.normie.now/"
                target="_blank"
              ></a>
            </div>
          </a>

          <a
            className="defaultClick"
            href="https://www.instagram.com/yashwin_1/"
            target="_blank"
          >
            <div className="creatorCard">
              <img src={yashwin} />
              <p>
                Yashwin <div className="removeText">&nbsp;Agrawal</div>{" "}
              </p>
              <a
                className="fa fa-linkedin fa-lg"
                href="https://www.linkedin.com/in/yashwin-agrawal-6b28bb176/"
                target="_blank"
              ></a>
              <a
                className="fa fa-instagram fa-lg"
                href="https://www.instagram.com/yashwin_1/"
                target="_blank"
              ></a>
            </div>
          </a>
        </div>
      </div>
      <div className="lower">
        <p>IIITD Student Playbook &copy; 2021</p>
      </div>
    </div>
  );
}

export default Footer;

import "./footer.css";
import { BsMouse } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

import { TiSocialYoutube } from "react-icons/ti";
import { FaTwitch, FaTiktok } from "react-icons/fa";

function Footer() {
  return (
    <div id="footer" className="container footer-container">
      <h1>
        That's all{" "}
        <a href="#home">
          <h2>
            <BsMouse /> - scroll up -
          </h2>
        </a>
      </h1>
      <div className="social-links">
        <a href="https://www.instagram.com/brbfoodiegamer/"
        target={"Blank"}>
          <BsInstagram className="social" />
        </a>
        <a href="https://www.facebook.com/pedro.r.zabala" 
        target={"Blank"}>
          {" "}
          <FaFacebookF className="social" />
        </a>
        <a href="https://www.tiktok.com/@brbfoodbreakpedro"
        target={"Blank"}>
          {" "}
          <FaTiktok className="social" />
        </a>

        <a href="https://www.youtube.com/channel/UCDZXe_QiAsPUICHIkTo00ZA"
        target={"Blank"}>
          <TiSocialYoutube className="social" />
        </a>

        <a href="https://www.twitch.tv/gamelifteat" 
        target={"Blank"}>
          <FaTwitch className="social" />
        </a>
      </div>
    </div>
  );
}
export default Footer;

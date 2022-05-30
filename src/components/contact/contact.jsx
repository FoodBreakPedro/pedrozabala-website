import "./contact.css";
import { AiOutlineInstagram, 
        AiFillLinkedin, 
        AiFillFacebook,
        AiOutlineGithub } from "react-icons/ai";

function Contact() {
  return (
    <div id="contact" className="container contact-container">
      <h1>Contact Me</h1>
      <div className="contact-links">
      <a href="https://www.instagram.com/brbfoodiegamer/" 
      className="contact"
      target={"blank"}>
          <AiOutlineInstagram className="icon" />
          <h2>
            instagram <span>@brbfoodiegamer</span>
          </h2>
        </a>
      <a
          href="https://www.facebook.com/pedro.r.zabala"
          className="contact"
          target={"blank"}
        >
          <AiFillFacebook className="icon" />
          <h2>
            Facebook <span>/pedro.r.zabala</span>
          </h2>
        </a>

        <a
          href="https://www.linkedin.com/in/pedro-zabala/"
          className="contact"
          target={"blank"}
        >
          <AiFillLinkedin className="icon" />
          <h2>
            LinkedIn <span>@pedro-zabala</span>
          </h2>
        </a>

        <a
          href="https://github.com/FoodBreakPedro"
          className="contact"
          target={"blank"}
        >
          <AiOutlineGithub className="icon" />
          <h2>
            Github <span>@FoodBreakPedro</span>
          </h2>
        </a>

        
      </div>
    </div>
  );
}

export default Contact;

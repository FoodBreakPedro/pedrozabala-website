import './about.css';
import img from '../props/profile-pic.jpeg';
import Buttons from '../button/button';
import { BsMouse } from 'react-icons/bs';
import Typed from 'typed.js';
import { useEffect, useRef } from "react";

function About() {
  // Create Ref element.
  const titleString = useRef(null);

  useEffect(() => {
    const typed = new Typed(titleString.current, {
      strings: ["Full-Stack Web Developer",
        "Gamer",
        "MBA Student",
        "Photographer",
        "Entrepreneur",
        "Foodie"
      ], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 80,
      backSpeed: 30,
      backDelay: 500,
      loop: true
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div id='about' className='container about-container'>
        <div className='logo'>
          <img src={img} alt='' />

        </div>

      </div>
      <div className='containet title-container'>
        <p>

          I'm a</p>
        <h2><span ref={titleString}></span></h2>
      </div>
      <div className='container about-container'>


        <a href='#footer' className='scroll-down'>

          <h5>scroll down -&gt;</h5>
          <BsMouse className='scroll' />

        </a>


        <Buttons />

        <h2>
          <span id="bio">About Me</span> <br />

        </h2>
        <p>
          I'm an innovative, passionate, transparent, analytical, and inclusive person. I value respect, clear communication, growth, and cooperation. My experiences in the world of software development have taught me that being a leader is not about having the answers to everything but instead having the ability to recognize the strengths and weaknesses of those around you and empower them to succeed. Rewarding smart risks as much as success, praising others for being forthcoming on challenges they may face, and working together to find appropriate solutions. I hope to have more opportunities to demonstrate these skills and inspire others to be the best version of themselves.
        </p>
      </div>
    </>
  );
}

export default About;

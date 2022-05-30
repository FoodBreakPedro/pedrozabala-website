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
        <p className='text-indent'>
          I hold a degree on Information Technology from the
          Florida International University where I specialized on mobile application development
          experience for iOS and database administration. I'm currently working on my MBA from Capella University
          where I'm focusing on analytics, digital marketing, and general management. My experiences in
          the world of software development have taught me that being a leader is not about having
          the answers to everything but instead having the ability to recognize the strengths
          and weaknesses of those around you and empower them to succeed.

        </p><p className='text-indent'>
          I'm an innovative, passionate, transparent, analytical, and inclusive person who values
          respect, clear communication, growth, and cooperation. I often attribute my career path,
          problem solving skills, attention to details, and strategic
          planning to the fact that I could relate anything to video games and how they work.
           I'm the type of gamer who enjoys challenges and achievements
          as well as learning and analyzing mechanics so that I can help others improve
          their gaming skills.

        </p><p className='text-indent'>

          On my free time I enjoy watching and keeping up with the latest movies, social media and music
          trends but this can be quite difficult since unfortunately we only have 24 hours in a day. Occasionally,
          I also spent time practicing my photography skills.
        </p>
      </div>
    </>
  );
}

export default About;

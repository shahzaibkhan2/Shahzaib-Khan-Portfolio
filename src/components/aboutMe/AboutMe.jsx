import React from "react";
import styles from "./AboutMe.module.css";
import underlineIcon from "../../assets/underlineIcon.svg";
import profImg from "../../assets/aboutProfImg.jpg";

const AboutMe = () => {
  return (
    <div id="about" className={`${styles.about}`}>
      <div className={`${styles.about__title}`}>
        <h1>About Me</h1>
        <img src={underlineIcon} alt="About-Image" />
      </div>
      <div className={`${styles.about__sections}`}>
        <div className={`${styles.about__left}`}>
          <img src={profImg} alt="About-Intro" />
        </div>
        <div className={`${styles.about__right}`}>
          <div className={`${styles.about__paragraph}`}>
            <p>
              I'm Shahzaib, a Software Engineer and a passionate Front-End Web
              Developer with a strong foundation in React using JavaScript. Do
              you need an experienced front-end web developer?
            </p>
            <p>
              I'm here to help you build fully functional, responsive and
              elegant websites. I am using React library and languages like
              JavaScript, HTML and CSS as a core. I also use Tailwind CSS and
              Bootstrap for my front-end web development.
            </p>
          </div>
          <div className={`${styles.about__skills}`}>
            <div className={`${styles.about__skill}`}>
              <p>React Js</p> <hr style={{ width: "80%" }} />
            </div>
            <div className={`${styles.about__skill}`}>
              <p>JavaScript</p> <hr style={{ width: "75%" }} />
            </div>
            <div className={`${styles.about__skill}`}>
              <p>HTML & CSS</p> <hr style={{ width: "70%" }} />
            </div>
            <div className={`${styles.about__skill}`}>
              <p>Redux Toolkit</p> <hr style={{ width: "97%" }} />
            </div>
            <div className={`${styles.about__skill}`}>
              <p>Figma</p> <hr style={{ width: "57%" }} />
            </div>
            <div className={`${styles.about__skill}`}>
              <p>Tailwind CSS</p> <hr style={{ width: "67%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.about__achievements}`}>
        <div className={`${styles.about__achievement}`}>
          <h1>5+ </h1>
          <p>Years of Experience</p>
        </div>
        <hr />
        <div className={`${styles.about__achievement}`}>
          <h1>50+ </h1>
          <p>Projects Completed</p>
        </div>
        <hr />
        <div className={`${styles.about__achievement}`}>
          <h1>12+ </h1>
          <p>Satisfied Clients</p>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default AboutMe;

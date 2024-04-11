import React from "react";
import styles from "./Hero.module.css";
import profileImage from "../../assets/profilePic.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className={`${styles.hero}`}>
      <img src={profileImage} alt="Profile-Image" />
      <h1>
        <span>I'm Shahzaib Khan,</span> Frontend React Developer
      </h1>
      <p>
        I'm a Frontend Developer with a strong background in React and
        JavaScript Language over +5 years of experience.
      </p>
      <div className={`${styles.hero__action}`}>
        <div className={`${styles.hero__communicate}`}>
          <AnchorLink
            className={`${styles.anchor__link}`}
            offset={50}
            href="#contact"
          >
            Communicate with Me
          </AnchorLink>
        </div>
        <div className={`${styles.hero__resume}`}>My Resume</div>
      </div>
    </div>
  );
};

export default Hero;

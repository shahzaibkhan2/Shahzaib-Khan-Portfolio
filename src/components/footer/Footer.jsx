import React from "react";
import styles from "./Footer.module.css";
import shahzaibLogo2 from "../../assets/shahzaibLogo2.svg";
import linkedIn from "../../assets/Linkedin1.png";
import github from "../../assets/github1.png";
import discord from "../../assets/discord.png";
import facebook from "../../assets/facebook1.png";

const Footer = () => {
  return (
    <footer id="footer" className={`${styles.footer}`}>
      <div className={`${styles.footer__top}`}>
        <div className={`${styles.footer__top__left}`}>
          <img
            className={`${styles.footer__logo}`}
            src={shahzaibLogo2}
            alt="logo"
          />
          <p>
            I'm a Frontend Developer with a strong background in React and
            JavaScript Language over +5 years of experience.
          </p>
        </div>
        <div className={`${styles.footer__top__right}`}>
          <a
            href="https://www.linkedin.com/in/engr-shahzaib-khan1/"
            target="_blank"
            className={`${styles.footer__img__box}`}
          >
            <img
              className={`${styles.img__glow}`}
              src={linkedIn}
              alt="Linkedin"
            />
          </a>
          <a
            href="https://github.com/shahzaibkhan2"
            target="_blank"
            className={`${styles.footer__img__box}`}
          >
            <img className={`${styles.git__glow}`} src={github} alt="Github" />
          </a>
          <a href="#" className={`${styles.footer__img__box}`}>
            <img
              className={`${styles.img__glow}`}
              src={facebook}
              alt="Facebook"
            />
          </a>
          <a
            href="#"
            className={`${styles.footer__img__box} ${styles.discord__box}`}
          >
            <img
              className={`${styles.img__glow}`}
              src={discord}
              alt="Discord"
            />
          </a>
        </div>
      </div>
      <hr />
      <div className={`${styles.footer__bottom}`}>
        <p className={`${styles.footer__bottom__left}`}>
          © 2024 Shahzaib Khan. All Rights Reserved.
        </p>
        <div className={`${styles.footer__bottom__right}`}>
          <p>Terms of Services</p>
          <p>Privacy Policy</p>
          <p>Contact Me</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

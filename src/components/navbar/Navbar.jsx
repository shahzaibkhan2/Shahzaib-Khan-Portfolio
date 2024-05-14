import React, { useEffect, useRef } from "react";
import styles from "./Navbar.module.css";
import shahzaibLogo2 from "../../assets/shahzaibLogo2.svg";
import underlineIcon2 from "../../assets/underlineIcon2.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menuOpenIcon from "../../assets/menu_open.svg";
import menuCloseIcon from "../../assets/menu_close.svg";
import { useDispatch, useSelector } from "react-redux";
import { NavbarActions } from "../../store/navBarSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const stickyBg = useSelector((state) => state.NavbarSlice.stickyBg);
  const menu = useSelector((state) => state.NavbarSlice.menu);
  const menuRef = useRef();
  const openRef = useRef();

  const menuOpen = () => {
    menuRef.current.style.right = "0";
    openRef.current.style.display = "none";
  };

  const menuClose = () => {
    menuRef.current.style.right = "-270px";
    openRef.current.style.display = "block";
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 10
        ? dispatch(NavbarActions.setStickyBg(true))
        : dispatch(NavbarActions.setStickyBg(false));
    });
  }, []);

  return (
    <nav className={`${styles.navbar} ${stickyBg && styles.nav__bg}`}>
      <img className={`${styles.logo}`} src={shahzaibLogo2} alt="Logo" />
      <img
        ref={openRef}
        src={menuOpenIcon}
        alt="menu"
        className={`${styles.nav__menu__open}`}
        onClick={menuOpen}
      />
      <ul ref={menuRef} className={`${styles.nav__menu}`}>
        <img
          src={menuCloseIcon}
          alt="close"
          className={`${styles.nav__menu__close}`}
          onClick={menuClose}
        />
        <li>
          <AnchorLink className={`${styles.anchor__link}`} href="#home">
            <p onClick={() => dispatch(NavbarActions.setMenu("home"))}>Home</p>
          </AnchorLink>
          {menu === "home" && <img src={underlineIcon2} alt="home" />}
        </li>
        <li>
          <AnchorLink
            className={`${styles.anchor__link}`}
            offset={50}
            href="#about"
          >
            <p onClick={() => dispatch(NavbarActions.setMenu("about"))}>
              About Me
            </p>
          </AnchorLink>
          {menu === "about" && <img src={underlineIcon2} alt="About-me" />}
        </li>
        <li>
          <AnchorLink
            className={`${styles.anchor__link}`}
            offset={50}
            href="#services"
          >
            <p onClick={() => dispatch(NavbarActions.setMenu("services"))}>
              Services
            </p>
          </AnchorLink>
          {menu === "services" && <img src={underlineIcon2} alt="services" />}
        </li>
        <li>
          <AnchorLink
            className={`${styles.anchor__link}`}
            offset={50}
            href="#work"
          >
            <p onClick={() => dispatch(NavbarActions.setMenu("work"))}>
              Projects
            </p>
          </AnchorLink>
          {menu === "work" && <img src={underlineIcon2} alt="work" />}
        </li>
        <li className={`${styles.contact__me}`}>
          <AnchorLink
            className={`${styles.anchor__link}`}
            offset={50}
            href="#contact"
          >
            <p onClick={() => dispatch(NavbarActions.setMenu("contact"))}>
              Contact Me
            </p>
          </AnchorLink>
          {menu === "contact" && <img src={underlineIcon2} alt="contact-me" />}
        </li>
      </ul>
      <div
        className={`${styles.communicate__me} ${styles.pulse__effect} ${
          stickyBg && styles.communicate__border
        }`}
      >
        <AnchorLink
          className={`${styles.anchor__link}`}
          offset={50}
          href="#contact"
        >
          Contact
        </AnchorLink>
      </div>
    </nav>
  );
};

export default Navbar;

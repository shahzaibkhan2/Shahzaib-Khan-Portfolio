import React from "react";
import styles from "./ShowMore.module.css";
import project1 from "../../assets/product7.jpg";

const ShowMore = () => {
  return (
    <div className={`${styles.showmore}`} id="about">
      <div className={`${styles.left__showmore}`}>
        <img
          src={project1}
          alt="About-Image"
          className={`${styles.showmore__img}`}
        />
      </div>
      <div className={`${styles.right__showmore}`}>
        <h3>MY RECENT PROJECT</h3>
        <h2>ECOMMERCE WEBSITE</h2>
        <p>
          Introducing my ecommerce project, The Ecommerce Website with Login,
          Register, Reset Password and authentications created with Firebase and
          technologies like ECMAScript, HTML5, CSS3, React.js, Redux Toolkit,
          JavaScript, React Routers, Regular Expressions, React Icons and
          sophisticated JavaScript algorithms.
        </p>
        <p>
          This project raises the bar for web development by utilizing the
          capabilities of generative AI, Redux Toolkit for state management, and
          Git/GitHub for version control. It ensures an immersive user
          experience by delivering dynamic information and real-time changes
          through smooth Firebase connectivity and authentication.
        </p>
        <p>
          This project, which is fully functional and responsive on all devices,
          pushes the limits of what is possible in web development by fusing
          creativity and technology. This project is hosted live on Vercel at{" "}
          <a target="__blank" href="https://shahzaib-you-tube-clone.vercel.app">
            <br />
            <mark>Hosting Will Be Available Soon !</mark>
          </a>
        </p>
      </div>
    </div>
  );
};

export default ShowMore;

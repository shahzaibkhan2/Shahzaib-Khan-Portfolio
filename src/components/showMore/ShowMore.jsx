import React from "react";
import styles from "./ShowMore.module.css";
import project1 from "../../assets/youtube_clone_landing_page.jpg";

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
        <h2>YOUTUBE CLONE</h2>
        <p>
          Introducing my innovative project, The YouTube Clone created with the
          help of technologies like ECMAScript, HTML5, CSS3, React.js, Redux
          Toolkit JavaScript, and sophisticated JavaScript algorithms.
        </p>
        <p>
          This project raises the bar for web development by utilizing the
          capabilities of generative AI, Redux Toolkit for state management, and
          Git/GitHub for version control. It ensures an immersive user
          experience by delivering dynamic information and real-time changes
          through smooth API connectivity.
        </p>
        <p>
          This project, which is fully functional and responsive on all devices,
          pushes the limits of what is possible in web development by fusing
          creativity and technology. This project is hosted live on Vercel at{" "}
          <a target="__blank" href="https://shahzaib-you-tube-clone.vercel.app">
            <br />
            <mark>https://shahzaib-you-tube-clone.vercel.app</mark>
          </a>
        </p>
      </div>
    </div>
  );
};

export default ShowMore;

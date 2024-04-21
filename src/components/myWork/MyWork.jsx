import React from "react";
import styles from "./MyWork.module.css";
import underlineIcon from "../../assets/underlineIcon.svg";
import myworkData from "../../assets/myworkData.js";
import arrowIcon from "../../assets/arrow_icon.svg";

const MyWork = () => {
  return (
    <div id="work" className={`${styles.mywork}`}>
      <div className={`${styles.mywork__title}`}>
        <h1>My Projects</h1>
        <img src={underlineIcon} alt="Mywork-image" />
      </div>
      <div className={`${styles.mywork__container}`}>
        {myworkData.map((work, i) => {
          return (
            <a href={work.projectUrl} target="_blank">
              <img key={i} src={work.img} />
            </a>
          );
        })}
      </div>
      <div className={`${styles.mywork__showmore}`}>
        <p>Show More</p>
        <img src={arrowIcon} alt="Showmore-image" />
      </div>
    </div>
  );
};

export default MyWork;

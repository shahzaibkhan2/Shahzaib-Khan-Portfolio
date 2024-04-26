import React from "react";
import styles from "./MyWork.module.css";
import underlineIcon from "../../assets/underlineIcon.svg";
import myworkData from "../../assets/myworkData.js";
import arrowIcon from "../../assets/arrow_icon.svg";
import ShowMore from "../showMore/ShowMore";

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
            <a key={i} href={work.projectUrl} target="_blank">
              <img className={`${styles.caption__hover}`} src={work.img} />
            </a>
          );
        })}
      </div>
      <ShowMore />
      <div className={`${styles.mywork__showmore}`}>
        <p>Show More</p>
        <img src={arrowIcon} alt="Showmore-image" />
      </div>
    </div>
  );
};

export default MyWork;

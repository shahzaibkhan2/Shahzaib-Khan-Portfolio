import styles from "./WorkDetails.module.css";

function WorkDetails() {
  return (
    <div className={styles.main__container}>
      <div className={styles.left__text}>
        <h2 className={styles.heading}>YOUTUBE CLONE</h2>
        <p className={styles.sub__heading}>
          I Built a fully functional, responsive and beautiful Crypto Price App
          using JavaScript, HTML and CSS, Git and Github, Redux Toolkit and ECMA
          Script, API integrations and Authentications using fire base on
          ReactJs.
        </p>
        <p className={styles.sub__heading}>
          I fetched the Gecko API using advanced JavaScript async await methods
          and ECMA Script methods. This website is available on my Github ID. I
          have also hosted this website on Vercel to make it available to the
          public
        </p>
        <button>
          <a target="_blank" href="https://shahzaib-you-tube-clone.vercel.app">
            Visit Project
          </a>
        </button>
      </div>
      <div className={styles.gallery}>
        <div className={`${styles.box} ${styles.row__2}`}></div>
        <div className={`${styles.box} ${styles.col__2}`}></div>
        <div className={styles.box}></div>
        <div className={`${styles.box} ${styles.row__2}`}></div>
        <div className={`${styles.box} ${styles.col__2}`}></div>
        <div className={styles.box}></div>
        <div className={`${styles.box} ${styles.col__2}`}></div>
      </div>
    </div>
  );
}

export default WorkDetails;

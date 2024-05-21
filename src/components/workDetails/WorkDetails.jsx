import styles from "./WorkDetails.module.css";

function WorkDetails() {
  return (
    <div className={styles.main__container}>
      <div className={styles.left__text}>
        <h2 className={styles.heading}>YOUTUBE CLONE</h2>
        <p className={styles.sub__heading}>
          I Built a fully functional, responsive and beautiful YouTube Clone
          using JavaScript, HTML and CSS, Git and Github, Redux and ECMA Script
          on ReactJs. I fetched the YouTube API using advanced JavaScript async
          await methods and ECMA Script methods. This website is available on my
          Github ID. I have also hosted this website on Vercel at this address
          https://shahzaib-you-tube-clone.vercel.app to make it available to the
          public
        </p>
        <button>
          <a target="_blank" href="https://shahzaib-you-tube-clone.vercel.app">
            Visit Project
          </a>
        </button>
      </div>
      <div className={styles.gallery}>
        <div className={`${styles.box} ${styles.row__2}`}>Mobile View</div>
        <div className={`${styles.box} ${styles.col__2}`}>Laptop View</div>
        <div className={styles.box}>Logo</div>
        <div className={`${styles.box} ${styles.row__2}`}>Medium Play View</div>
        <div className={`${styles.box} ${styles.col__2}`}>Desktop</div>
        <div className={styles.box}>Tablet View</div>
        <div className={`${styles.box} ${styles.col__2}`}>
          Desktop Play View
        </div>
      </div>
    </div>
  );
}

export default WorkDetails;

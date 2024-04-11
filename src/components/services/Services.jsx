import React from "react";
import styles from "./Services.module.css";
import underlineIcon from "../../assets/underlineIcon.svg";
import servicesData from "../../assets/servicesData.js";
import arrowIcon from "../../assets/arrow_icon.svg";

const Services = () => {
  return (
    <div id="services" className={`${styles.services}`}>
      <div className={`${styles.services__title}`}>
        <h1>My Services</h1>
        <img src={underlineIcon} alt="Services-Image" />
      </div>
      <div className={`${styles.services__container}`}>
        {servicesData.map((service, i) => {
          return (
            <div key={i} className={`${styles.services__format}`}>
              <h3>{service.s_no}</h3>
              <h2>{service.s_name}</h2>
              <p>{service.s_desc}</p>
              <div className={`${styles.services__readmore}`}>
                <p>Read More</p>
                <img src={arrowIcon} alt="Arrow-icon" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;

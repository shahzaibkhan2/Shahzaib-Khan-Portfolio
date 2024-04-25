import styles from "./Contact.module.css";
import underlineIcon from "../../assets/underlineIcon.svg";
import mailIcon from "../../assets/mail_icon.svg";
import callIcon from "../../assets/call_icon.svg";
import locationIcon from "../../assets/location_icon.svg";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { configFiles } from "../../config/config.js";
import { useDispatch, useSelector } from "react-redux";
import { contactActions } from "../../store/contactSlice";

const Contact = () => {
  const formRef = useRef();
  const dispatch = useDispatch();
  const result = useSelector((state) => state.contactSlice.result);

  const sendEmail = (e) => {
    e.preventDefault();
    dispatch(contactActions.setResult("Sending..."));

    emailjs
      .sendForm(
        configFiles.emailJsServiceKey,
        configFiles.emailJsTemplateKey,
        formRef.current,
        {
          publicKey: configFiles.emailJsPublicKey,
        }
      )
      .then(
        () => {
          dispatch(contactActions.setResult("Message sent successfully !"));
        },
        () => {
          dispatch(
            contactActions.setResult("An error occured while sending message !")
          );
        }
      );
  };

  return (
    <div id="contact" className={`${styles.contact}`}>
      <div className={`${styles.contact__title}`}>
        <h1>Contact Me</h1>
        <img src={underlineIcon} alt="icon-image" />
      </div>
      <div className={`${styles.contact__section}`}>
        <div className={`${styles.shining__light}`}></div>
        <div className={`${styles.contact__left}`}>
          <h1>Let's Connect !</h1>
          <p>
            Clear communication is essential for successful projects. I'll work
            closely with you to understand your goals, provide regular updates,
            and ensure the final work meet your expectations.
          </p>
          <div className={`${styles.contact__details}`}>
            <div className={`${styles.contact__detail}`}>
              <img src={mailIcon} alt="mail-icon" />{" "}
              <p>drshahzeb47@gmail.com</p>
            </div>
            <div className={`${styles.contact__detail}`}>
              <img src={callIcon} alt="call-icon" /> <p>(+92-309-5122074)</p>
            </div>
            <div className={`${styles.contact__detail}`}>
              <img src={locationIcon} alt="location-icon" />{" "}
              <p>Street No.4, Gujranwala City, Pakistan</p>
            </div>
          </div>
        </div>
        <form
          onSubmit={sendEmail}
          ref={formRef}
          className={`${styles.contact__right}`}
        >
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter Name" name="name" />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="Enter Email" name="email" />
          <label htmlFor="">Write Your Message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter Message"
          ></textarea>
          <button type="submit" className={`${styles.submit__btn}`}>
            Submit Message
          </button>
          <span className={`${styles.send__msg}`}>{result}</span>
        </form>
      </div>
    </div>
  );
};

export default Contact;

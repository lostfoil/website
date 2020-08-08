import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer_parent}>
      <div className={styles.upper}>
        <span className={styles.ques}>
          <h1 className={styles.h1}>Got a Project ?</h1>
          <p className={styles.p}>
            Send us a word <span role="img">🤙</span>
            <br />
            <hr className={styles.p_hr} />
          </p>
        </span>
      </div>
      <div className={styles.lower}>
        <span className={styles.lower_left}>
          <a className={styles.mail} href="mailto:hello@lostfoil.com">
            hello@lostfoil.com
          </a>
          <p className={styles.address}>
            Room No. 380, Boys Hostel - 1<br />
            IIITM Campus, Gwalior, M.P
          </p>
          <ul className={styles.lower_left_ul}>
            <li className={styles.lower_left_li}>Privacy Policy</li>
            <li className={styles.lower_left_li}>Disclaimer</li>
            <li className={styles.lower_left_li}>Terms & Conditions</li>
          </ul>
        </span>
        <span className={styles.lower_right}>
          <span className={styles.lower_right_upper}>
            <h2 className={styles.sitemap}>Sitemap</h2>
            <ul>
              <li>About</li>
              <li>Team</li>
              <li>Projects</li>
              <li>Services</li>
            </ul>
          </span>
          <span className={styles.lower_right_upper}>
            <h2 className={styles.sitemap}>Sitemap</h2>
            <ul>
              <li>LinkedIn</li>
              <li>Behance</li>
              <li>Instagram</li>
              <li>Dribble</li>
              <li>Twitter</li>
            </ul>
          </span>
        </span>
      </div>
    </div>
  );
};
export default Footer;

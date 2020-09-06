import React, { FC } from 'react';
import styles from './footer.module.css';

const Footer: FC = () => {
  return (
    <div className={styles.footer_parent}>
      <div className={styles.upper}>
        <span className={styles.ques}>
          <h1 className={styles.h1}>Got a Project ?</h1>
          <p className={styles.p}>
            Send us a word{' '}
            <span role="img" aria-label="hello">
              🤙
            </span>
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
            <li className={styles.lower_left_li_diff}>Privacy Policy</li>
            <li className={styles.lower_left_li_diff}>Disclaimer</li>
            <li className={styles.lower_left_li_diff}>Terms & Conditions</li>
          </ul>
        </span>
        <span className={styles.lower_right}>
          <span className={styles.lower_right_upper}>
            <h2 className={styles.sitemap}>Sitemap</h2>
            <ul className={styles.lower_right_ul_first}>
              <li className={styles.lower_left_li}>About</li>
              <li className={styles.lower_left_li}>Team</li>
              <li className={styles.lower_left_li}>Projects</li>
              <li className={styles.lower_left_li}>Services</li>
            </ul>
          </span>
          <span className={styles.lower_right_upper}>
            <h2 className={styles.sitemap}>Social</h2>
            <ul className={styles.lower_right_ul}>
              <li className={styles.lower_left_li}>LinkedIn</li>
              <li className={styles.lower_left_li}>Behance</li>
              <li className={styles.lower_left_li}>Instagram</li>
              <li className={styles.lower_left_li}>Dribble</li>
              <li className={styles.lower_left_li}>Twitter</li>
            </ul>
          </span>
        </span>
      </div>
      <p className={styles.copyright}>© 2020 LostFoil Limited. All Rights Reserved. Privacy Policy</p>
    </div>
  );
};
export default Footer;

import React, { FC } from 'react';

import styles from './home.module.css';

import Hero from '../../components/hero/Hero';
import Services from '../../components/services/services';
import Footer from '../../components/footer/Footer';

const Home: FC = () => {
  return (
    <div className={styles.home}>
      <Hero />
      <Services />
      <Footer />
    </div>
  );
};
export default Home;

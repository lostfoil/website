import React, { FC } from 'react';

import styles from './home.module.css';

import ConcentricCircles from '../../components/concentricCircles/concentricCircle';
import Hero from '../../components/hero/Hero';
import Services from '../../components/services/services';
import Footer from '../../components/footer/Footer';
import ProjectSection from '../../components/projectSection/projectSection';
import { ReactComponent as CubeRight } from '../../assets/svgs/hero-cube-right.svg';
import { ReactComponent as Dotted } from '../../assets/svgs/hero-dotted.svg';
import { ReactComponent as Logo } from '../../assets/svgs/logo.svg';

const Home: FC = () => {
  return (
    <div className={styles.home}>
      <Logo className={styles.logo} />
      <ConcentricCircles
        color="rgb(80, 47, 255,0.4)"
        size1={14.125}
        size2={7}
        styles={{ top: '7rem', left: '-7.5rem', transform: `rotate(180deg)` }}
      />
      <ConcentricCircles
        color="#FEB600"
        size1={20}
        size2={10}
        styles={{ top: '20rem', right: '-10rem', transform: `rotate(90deg)` }}
      />
      <ConcentricCircles
        color="rgb(80, 47, 255,0.4)"
        size1={14.125}
        size2={7}
        styles={{ top: '93rem', left: '-7.5rem', transform: `rotate(180deg)` }}
      />
      <ConcentricCircles
        color="rgb(80, 47, 255,0.4)"
        size1={14.125}
        size2={7}
        styles={{ top: '157rem', left: '-7.5rem', transform: `rotate(180deg)` }}
      />
      <CubeRight className={styles.home_cube} />
      <Dotted className={styles.dotted} />
      <Hero />
      <ProjectSection />
      <Services />
      <Footer />
    </div>
  );
};
export default Home;

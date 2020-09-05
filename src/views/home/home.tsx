import React, { FC } from 'react';

import styles from './home.module.css';

import ConcentricCircles from '../../components/concentricCircles/concentricCircle';
import Hero from '../../components/hero/Hero';
import Services from '../../components/services/services';
import Footer from '../../components/footer/Footer';
import ProjectSection from '../../components/projectSection/projectSection';
import { ReactComponent as CubeRight } from '../../assets/svgs/hero-cube-right.svg';
import { ReactComponent as Dotted } from '../../assets/svgs/hero-dotted.svg';

const Home: FC = () => {
  return (
    <div className={styles.home}>
      <ConcentricCircles
        color="#502FFF"
        size1={20}
        size2={10}
        styles={{ top: '9rem', left: '-10rem', transform: `rotate(180deg)` }}
      />
      <ConcentricCircles
        color="#FEB600"
        size1={30}
        size2={18}
        styles={{ top: '20rem', right: '-15rem', transform: `rotate(90deg)` }}
      />
      <ConcentricCircles
        color="#502FFF"
        size1={20}
        size2={10}
        styles={{ top: '117rem', left: '-10rem', transform: `rotate(180deg)` }}
      />
      <ConcentricCircles
        color="rgb(80, 47, 255,0.4)"
        size1={20}
        size2={10}
        styles={{ top: '190rem', left: '-10rem', transform: `rotate(180deg)` }}
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

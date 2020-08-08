import React, { FC } from 'react';
import { useSpring, animated, config } from 'react-spring';
import styles from './hero.module.css';

import { ReactComponent as TriangleLeft } from '../../assets/svgs/hero-triangle-left.svg';
import { ReactComponent as TriangleRight } from '../../assets/svgs/hero-triangle-right.svg';
import { ReactComponent as CubeLeft } from '../../assets/svgs/hero-left-cube.svg';
import { ReactComponent as Dotted } from '../../assets/svgs/hero-dotted.svg';
import { ReactComponent as CubeRight } from '../../assets/svgs/hero-cube-right.svg';

type Trans = (x: number, y: number) => string;
const calc = (x: number, y: number) => [x - window.innerWidth / 2, y - window.innerHeight / 2];

const trans1: Trans = (x, y) => `translate3d(${x / 20}px,${0 + y / 20}px,0)`;
const trans2: Trans = (x, y) => `translate3d(${x / 15 + 35}px,${y / 15 - 25}px,0)`;
const trans3: Trans = (x, y) => `translate3d(${x / 12 - 25}px,${y / 12 - 25}px,0)`;
const trans4: Trans = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`;
const trans5: Trans = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`;
const trans6: Trans = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`;

const Hero: FC = () => {
  const [{ xy }, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));

  const headingTop = useSpring({
    from: { top: '-50rem' },
    top: '0rem',
    config: config.slow,
  });

  const dottedLoad = useSpring({
    from: {
      transform: `rotate(90deg)`,
      left: '80rem',
    },
    transform: `rotate(0deg)`,
    left: '-8rem',
    config: config.slow,
  });

  const SvgMan = useSpring({
    from: { bottom: '-40rem', opacity: 0 },
    opacity: 1,
    bottom: '0rem',
    config: config.slow,
  });

  return (
    <div className={styles.hero_parent} onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
      <animated.div className={styles.headings} style={headingTop}>
        <animated.div style={{ transform: xy.interpolate(trans1) }} className={styles.triangle_left}>
          <TriangleLeft className={styles.hero_svgs} />
        </animated.div>

        <animated.div
          style={{
            transform: xy.interpolate(trans2),
          }}
          className={styles.triangle_right}
        >
          <TriangleRight className={styles.hero_svgs} />
        </animated.div>

        <animated.div style={{ transform: xy.interpolate(trans3) }} className={styles.cube_left}>
          <CubeLeft className={styles.hero_svgs} />
        </animated.div>

        <animated.div style={{ left: dottedLoad.left, transform: xy.interpolate(trans4) }} className={styles.dotted}>
          <animated.div style={{ transform: dottedLoad.transform }}>
            <Dotted className={styles.hero_svgs} />
          </animated.div>
        </animated.div>

        <animated.div style={{ transform: xy.interpolate(trans5) }} className={styles.cube_right}>
          <CubeRight className={styles.hero_svgs} />
        </animated.div>

        <animated.div style={{ transform: xy.interpolate(trans6) }} className={styles.cube_left_below}>
          <CubeLeft className={styles.hero_svgs} />
        </animated.div>

        <h1 className={styles.h1}>
          We Design
          <br />
          to make you shine.
        </h1>
        <p className={styles.p}>
          Providing solutions to all your web needs - from designing your website to making it live, we have it all
          covered.
        </p>
      </animated.div>
      <animated.div style={SvgMan} className={styles.hero_image} />
    </div>
  );
};

export default Hero;

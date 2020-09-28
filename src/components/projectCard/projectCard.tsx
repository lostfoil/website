/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/no-this-in-sfc */
/* eslint-disable no-plusplus */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { FC, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

import styles from './projectCard.module.css';

interface ProjectCardProps {
  lefty: boolean;
  heading: string;
  para: string;
  color: string;
  borderOptions?: {
    borderTopWidth?: string;
    borderBottomWidth?: string;
    borderRightWidth?: string;
    borderLeftWidth?: string;
    borderColor?: string;
  };
  img: string;
  letter: string;
  letterBG: string;
  index: number;
}

const ProjectCard: FC<ProjectCardProps> = ({
  lefty,
  heading,
  para,
  color,
  borderOptions,
  img,
  letter,
  letterBG,
  index,
}) => {
  const [{ xy }, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));

  const [{ o }, setOpacity] = useSpring(() => ({
    o: 0,
  }));

  const [{ xTiltyTilt }, setTilt] = useSpring(() => ({
    xTiltyTilt: [0, 0],
  }));

  const disableCursor = () => {
    const cursor = document.getElementById('cursor');
    if (cursor?.style) cursor.style.visibility = 'hidden';

    setOpacity({ o: 1 });
  };

  const enableCursor = () => {
    const cursor = document.getElementById('cursor');
    if (cursor?.style) cursor.style.visibility = 'visible';

    setOpacity({ o: 0 });

    setTilt({
      xTiltyTilt: [0, 0],
    });
  };

  let counter = 0;
  const updateRate = 10;

  const isTimeToUpdate = () => {
    return counter++ % updateRate === 0;
  };

  const mouse = {
    _x: 0,
    _y: 0,
    x: 0,
    y: 0,
    updatePosition(event: React.MouseEvent) {
      const e = event || window.event;
      this.x = e.clientX - this._x;
      this.y = (e.clientY - this._y) * -1;
    },
    setOrigin(e: HTMLElement) {
      this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
      this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
    },
  };

  const tilt = (event: React.MouseEvent) => {
    const box = document.getElementsByClassName('bounding_box')[index] as HTMLElement;
    mouse.updatePosition(event);
    setTilt({ xTiltyTilt: [mouse.y / box.offsetHeight / 2, mouse.x / box.offsetWidth / 2] });
  };

  const updateDisplay = (event: React.MouseEvent) => {
    const box = document.getElementsByClassName('bounding_box')[index] as HTMLElement;
    // @ts-ignore
    const bodyCSS = parseFloat(getComputedStyle(document.querySelector('body')!)['font-size']);
    set({
      xy: [
        event.pageX - box?.getBoundingClientRect()?.left - window.scrollX - 6 * bodyCSS,
        event.pageY - box?.getBoundingClientRect()?.top - window.scrollY - 11 * bodyCSS,
      ],
    });

    if (isTimeToUpdate()) {
      tilt(event);
    }
  };

  const calcBackGroundPos = (x: number, y: number) => {
    return `${-x}px ${-y}px`;
  };

  const calcTransPosX = (x: number) => {
    return `${x}px`;
  };
  const calcTransPosY = (_: number, y: number) => {
    return `${y}px`;
  };

  const performTilt = (x: number, y: number) => {
    return `rotateX(${x}deg) rotateY(${y}deg)`;
  };

  useEffect(() => {
    const box = document.getElementsByClassName('bounding_box')[index] as HTMLElement;
    const update = () => {
      mouse.setOrigin(box);
    };
    window.addEventListener('resize', update);
    mouse.setOrigin(box);
    return () => {
      window.removeEventListener('resize', update);
    };
  }, [index, mouse]);

  return (
    <div className={styles.card_container}>
      <div className={lefty ? styles.descriptor_left : styles.descriptor_right} style={{ backgroundColor: color }}>
        <h2 className={styles.h1}>{heading}</h2>
        <p className={styles.p}>{para}</p>
      </div>
      <animated.div
        className={lefty ? `${styles.card_left} bounding_box` : `${styles.card_right} bounding_box`}
        // @ts-ignore
        style={{
          ...borderOptions,
          // @ts-ignore
          backgroundImage: `url(${img})`,
          // @ts-ignore
          transform: xTiltyTilt.interpolate(performTilt),
        }}
        onMouseMove={updateDisplay}
        onMouseEnter={disableCursor}
        onMouseLeave={enableCursor}
      >
        <animated.h1
          id="letter"
          className={styles.animated_letter}
          // @ts-ignore
          style={{
            // @ts-ignore
            backgroundImage: `url(${letterBG})`,
            // @ts-ignore
            backgroundPosition: xy.interpolate(calcBackGroundPos),
            // @ts-ignore
            top: xy.interpolate(calcTransPosY),
            // @ts-ignore
            left: xy.interpolate(calcTransPosX),
            // @ts-ignore
            opacity: o.interpolate((opacity) => opacity),
          }}
        >
          {letter}
        </animated.h1>
        <svg version="1.1">
          <defs>
            <filter id="myfilter">
              <feTurbulence id="turbulance" result="TURBULENCE" baseFrequency="0.08" numOctaves="1" seed="1" />
              <feDisplacementMap in="SourceGraphic" in2="TURBULENCE" scale="30" />
            </filter>
            <animate
              xlinkHref="#turbulance"
              attributeName="baseFrequency"
              values="0.04;0.08;0.04"
              dur="10s"
              repeatCount="indefinite"
            />
          </defs>
        </svg>
      </animated.div>
    </div>
  );
};
export default ProjectCard;

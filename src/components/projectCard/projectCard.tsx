/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { FC } from 'react';
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

  const disableCursor = () => {
    const cursor = document.getElementById('cursor');
    if (cursor?.style?.visibility) cursor.style.visibility = 'hidden';

    setOpacity({ o: 1 });
  };

  const enableCursor = () => {
    const cursor = document.getElementById('cursor');
    if (cursor?.style?.visibility) cursor.style.visibility = 'visible';

    setOpacity({ o: 0 });
  };

  const updateDisplay = (event: React.MouseEvent) => {
    const box = document.getElementsByClassName('bounding_box')[index];
    set({
      xy: [
        event.pageX - box?.getBoundingClientRect()?.left - window.scrollX - 100,
        event.pageY - box?.getBoundingClientRect()?.top - window.scrollY - 170,
      ],
    });
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

  return (
    <div className={styles.card_container}>
      <div className={lefty ? styles.descriptor_left : styles.descriptor_right} style={{ backgroundColor: color }}>
        <h2 className={styles.h1}>{heading}</h2>
        <p className={styles.p}>{para}</p>
      </div>
      <div
        className={lefty ? `${styles.card_left} bounding_box` : `${styles.card_right} bounding_box`}
        style={{ ...borderOptions, backgroundImage: `url(${img})` }}
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
              id="anim-dialiate"
              attributeName="baseFrequency"
              values="0.01;0.1;0.01"
              dur="10s"
              repeatCount="indefinite"
            />
          </defs>
        </svg>
      </div>
    </div>
  );
};
export default ProjectCard;

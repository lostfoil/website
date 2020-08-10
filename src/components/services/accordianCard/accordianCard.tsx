/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { FC } from 'react';
import { animated, SpringValue } from 'react-spring';
import styles from './accordion.module.css';

interface Svg {
  Svg: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  style: React.CSSProperties;
}

interface Props {
  width: SpringValue<string>;
  alignSelf: SpringValue<string>;
  justifyContent: SpringValue<string>;
  fontSize: SpringValue<string>;
  transform: SpringValue<string>;
  opacity: SpringValue<number>;
}

interface AccordionCardProps {
  props: Props;
  heading: string;
  para: string;
  svgs: Svg[];
  changeActive: React.Dispatch<React.SetStateAction<number>>;
  number: number;
  isActive: boolean;
  bgImage: string;
  bgColor: string;
}

const AccordionCard: FC<AccordionCardProps> = ({
  isActive,
  props: { width, justifyContent, alignSelf, opacity, fontSize, transform },
  heading,
  para,
  svgs,
  changeActive,
  number,
  bgImage,
  bgColor,
}) => {
  const handleClick = () => {
    changeActive(number);
  };

  return (
    <animated.div
      className={styles.card_parent}
      // @ts-ignore
      style={{ width, justifyContent, backgroundImage: `url(${bgImage})` }}
      onClick={handleClick}
    >
      <animated.div
        className={styles.card_back_color}
        // @ts-ignore
        style={{ justifyContent, backgroundColor: bgColor, display: isActive ? 'none' : 'block' }}
        onClick={handleClick}
      >
        {svgs.map((s) => {
          return (
            // @ts-ignore
            <animated.div style={{ ...s.style, opacity }} className={styles.svg_container}>
              <s.Svg />
            </animated.div>
          );
        })}
      </animated.div>
      <animated.h1
        className={styles.h1}
        // @ts-ignore
        style={{ display: isActive ? 'block' : 'none', alignSelf, fontSize }}
      >
        {heading}
      </animated.h1>
      <animated.h1
        className={styles.h1}
        // @ts-ignore
        style={{ display: isActive ? 'none' : 'block', opacity: 1 - Number(opacity), transform, alignSelf, fontSize }}
      >
        {heading}
      </animated.h1>
      <animated.p
        className={styles.p}
        // @ts-ignore
        style={{ display: isActive ? 'block' : 'none' }}
      >
        {para}
      </animated.p>
    </animated.div>
  );
};
export default AccordionCard;

import React from "react";
import { animated } from "react-spring";
import styles from "./accordion.module.css";

interface svg {
  Svg: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  style: React.CSSProperties;
}

interface Accordion {
  props: React.CSSProperties;
  heading: string;
  para: string;
  svgs: svg[];
  changeActive: React.Dispatch<React.SetStateAction<number>>;
  number: number;
  isActive: boolean;
  bgImage: string;
  bgColor: string;
}

const AccordionCard = ({
  isActive,
  props,
  heading,
  para,
  svgs,
  changeActive,
  number,
  bgImage,
  bgColor,
}: Accordion) => {
  const handleClick = () => {
    changeActive(number);
  };

  return (
    <animated.div
      className={styles.card_parent}
      style={{
        width: props.width,
        justifyContent: props.justifyContent,
        backgroundImage: `url(${bgImage})`,
      }}
      onClick={handleClick}
    >
      <animated.div
        className={styles.card_back_color}
        style={{
          justifyContent: props.justifyContent,
          backgroundColor: bgColor,
          display: isActive ? "none" : "block",
        }}
        onClick={handleClick}
      >
        {svgs.map((s) => {
          return (
            <animated.div
              style={{ ...s.style, opacity: props.opacity }}
              className={styles.svg_container}
            >
              <s.Svg />
            </animated.div>
          );
        })}
      </animated.div>
      <animated.h1
        className={styles.h1}
        style={{
          display: isActive ? "block" : "none",
          alignSelf: props.alignSelf,
          fontSize: props.fontSize,
        }}
      >
        {heading}
      </animated.h1>
      <animated.h1
        className={styles.h1}
        style={{
          display: isActive ? "none" : "block",
          opacity: 1 - Number(props.opacity),
          transform: props.transform,
          alignSelf: props.alignSelf,
          fontSize: props.fontSize,
        }}
      >
        {heading}
      </animated.h1>
      <animated.p
        className={styles.p}
        style={{
          display: isActive ? "block" : "none",
        }}
      >
        {para}
      </animated.p>
    </animated.div>
  );
};
export default AccordionCard;

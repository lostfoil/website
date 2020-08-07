import React from "react";
import { useSpring, animated } from "react-spring";

type componentProps = {
  size1: number;
  size2: number;
  color: string;
  styles: React.CSSProperties;
};
const ConcentricCircles = ({ size1, size2, color, styles }: componentProps) => {
  const props = useSpring({
    from: { strokeDashoffset: size1 * 60 },
    strokeDashoffset: 0,
    config: { duration: 3500 },
  });
  const props2 = useSpring({
    from: { strokeDashoffset: size2 * 60 },
    strokeDashoffset: 0,
    config: { duration: 3500 },
  });
  return (
    <svg
      height={`${size1}rem`}
      width={`${size1}rem`}
      style={{
        position: "absolute",
        ...styles,
      }}
    >
      <animated.circle
        cx={`${size1 / 2}rem`}
        cy={`${size1 / 2}rem`}
        r={`${size1 / 2}rem`}
        stroke={color}
        stroke-width="0.05rem"
        fill="transparent"
        style={{
          strokeDasharray: `${size1 * 60}`,
          strokeDashoffset: props.strokeDashoffset,
        }}
      />
      <animated.circle
        cx={`${size1 / 2}rem`}
        cy={`${size1 / 2}rem`}
        r={`${size2 / 2}rem`}
        stroke={color}
        stroke-width="0.05rem"
        fill="transparent"
        style={{
          strokeDasharray: `${size2 * 60}`,
          strokeDashoffset: props2.strokeDashoffset,
        }}
      />
    </svg>
  );
};
export default ConcentricCircles;

import React, { FC } from 'react';
import { useSpring, animated } from 'react-spring';

type ConcentricCirclesProps = {
  size1: number;
  size2: number;
  color: string;
  styles: React.CSSProperties;
};

const ConcentricCircles: FC<ConcentricCirclesProps> = ({ size1, size2, color, styles }) => {
  const c1Props = useSpring({
    from: { strokeDashoffset: size1 * 80 },
    strokeDashoffset: 0,
    config: { duration: 3500 },
  });
  const c2Props = useSpring({
    from: { strokeDashoffset: size2 * 80 },
    strokeDashoffset: 0,
    config: { duration: 3500 },
  });

  return (
    <svg
      height={`${size1}rem`}
      width={`${size1}rem`}
      style={{
        position: 'absolute',
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
          strokeDasharray: `${size1 * 80}`,
          strokeDashoffset: c1Props.strokeDashoffset,
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
          strokeDasharray: `${size2 * 80}`,
          strokeDashoffset: c2Props.strokeDashoffset,
        }}
      />
    </svg>
  );
};
export default ConcentricCircles;

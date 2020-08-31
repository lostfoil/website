import React, { FC } from 'react';
import { animated, SpringValue } from 'react-spring';
import styles from './cursor.module.css';

interface CursorProps {
  props: {
    xy: SpringValue<number[]>;
  };
}

const Cursor: FC<CursorProps> = ({ props: { xy } }) => {
  return (
    <animated.div
      style={{
        top: xy.interpolate((_x, y) => `calc(${y}px)`),
        left: xy.interpolate((x) => `calc(${x}px)`),
      }}
      className={styles.cursor}
      id="cursor"
    />
  );
};
export default Cursor;

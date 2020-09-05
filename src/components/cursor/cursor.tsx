import React, { FC } from 'react';
import { animated, SpringValue } from 'react-spring';
import styles from './cursor.module.css';

interface CursorProps {
  props: {
    xy: SpringValue<number[]>;
    height: SpringValue<string>;
    width: SpringValue<string>;
    marginTop: SpringValue<string>;
    marginLeft: SpringValue<string>;
  };
}

const Cursor: FC<CursorProps> = ({ props: { xy, height, width, marginTop, marginLeft } }) => {
  return (
    <animated.div
      style={{
        top: xy.interpolate((_x, y) => `calc(${y}px)`),
        left: xy.interpolate((x) => `calc(${x}px)`),
        height,
        width,
        marginTop,
        marginLeft,
      }}
      className={styles.cursor}
      id="cursor"
    />
  );
};
export default Cursor;

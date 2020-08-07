import React from "react";
import { animated } from "react-spring";
import styles from "./cursor.module.css";


//@ts-ignore
const Cursor = ({ props }) => {
  return (
    <animated.div
      style={{
        //@ts-ignore
        top: props.xy.interpolate((x, y) => `calc(${y}px)`),
        //@ts-ignore
        left: props.xy.interpolate((x, y) => `calc(${x}px)`),
      }}
      className={styles.cursor}
    />
  );
};
export default Cursor;

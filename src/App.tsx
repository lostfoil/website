import React from "react";
import { useSpring, animated } from "react-spring";
import styles from "./App.module.css";

import Home from "./views/home/home";
import Cursor from "./components/cursor/cursor";

function App() {
  const [props, set] = useSpring(() => ({ xy: [0, 0] }));
  return (
    <div
      className={styles.App}
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: [x, y] })}
    >
      <animated.div
        style={{
          position: "absolute",
          //@ts-ignore
          top: props.xy.interpolate((x, y) => `calc(${y}px - 1rem )`),
          //@ts-ignore
          left: props.xy.interpolate((x, y) => `calc(${x}px - 1rem )`),
          zIndex: 10,
        }}
      >
        <Cursor />
      </animated.div>
      <Home />
    </div>
  );
}

export default App;

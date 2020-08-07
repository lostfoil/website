import React from 'react';
import { useSpring } from 'react-spring';
import styles from './App.module.css';

import Home from './views/home/home';
import Cursor from './components/cursor/cursor';
import ConcentricCircles from './components/concentricCircles/concentricCircle';

function App() {
  const [props, set] = useSpring(() => ({ xy: [0, 0] }));
  return (
    <div className={styles.App} onMouseMove={({ clientX: x, clientY: y }) => set({ xy: [x, y] })}>
      <Cursor props={props} />
      <Home />
      <ConcentricCircles
        color="#502FFF"
        size1={20}
        size2={10}
        styles={{ top: '5rem', left: '-10rem', transform: `rotate(180deg)` }}
      />
      <ConcentricCircles
        color="#FEB600"
        size1={30}
        size2={18}
        styles={{ top: '20rem', right: '-15rem', transform: `rotate(90deg)` }}
      />
    </div>
  );
}

export default App;

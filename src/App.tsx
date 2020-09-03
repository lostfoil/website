import React, { FC } from 'react';
import { useSpring } from 'react-spring';
import styles from './App.module.css';

import Home from './views/home/home';
import Cursor from './components/cursor/cursor';

const App: FC = () => {
  const [props, set] = useSpring(() => ({ xy: [0, 0] }));
  return (
    <div className={styles.App} onMouseMove={({ clientX: x, clientY: y }) => set({ xy: [x, y] })}>
      <Cursor props={props} />
      <Home />
    </div>
  );
};

export default App;

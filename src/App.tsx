import React, { FC, useEffect, useRef } from 'react';
import { useSpring } from 'react-spring';
import styles from './App.module.css';

import Home from './views/home/home';
import Cursor from './components/cursor/cursor';
import Nav from './components/nav/Nav';

const App: FC = () => {
  const appRef = useRef(document.createElement('div'));
  const [props, set] = useSpring(() => ({ xy: [0, 0] }));
  const [sizeProps, setSize] = useSpring(() => ({
    height: '0.5rem',
    width: '0.5rem',
    marginTop: '-0.25rem',
    marginLeft: '-0.25rem',
  }));
  useEffect(() => {
    appRef.current.onmousemove = ({ clientX: x, clientY: y }) => set({ xy: [x, y] });
  }, [set]);
  return (
    <div id="app" className={styles.App} ref={appRef}>
      <Nav setCursor={set} setSize={setSize} />
      <Cursor props={Object.assign(props, sizeProps)} />
      <Home />
    </div>
  );
};

export default App;

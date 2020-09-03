/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { FC, useRef } from 'react';
import { SpringStartFn } from 'react-spring';
import styles from './nav.module.css';

interface NavProps {
  setCursor: SpringStartFn<{
    xy: number[];
  }>;
  setSize: SpringStartFn<{
    height: string;
    width: string;
    marginTop: string;
    marginLeft: string;
  }>;
}

const Nav: FC<NavProps> = ({ setCursor, setSize }) => {
  const burgerRef = useRef(null);
  const labelRef = useRef(document.createElement('label'));
  const labelCloseRef = useRef(document.createElement('label'));

  const changeCursor = (currentRef: React.MutableRefObject<HTMLLabelElement>) => {
    const width = currentRef.current.clientWidth;
    const height = currentRef.current.clientHeight;
    const app = document.getElementById('app') as HTMLElement;
    app.onmousemove = () => {};
    setCursor({
      xy: [
        currentRef.current.getBoundingClientRect().x + width / 2,
        currentRef.current.getBoundingClientRect().y + height / 2,
      ],
    });
    // @ts-ignore
    const bodyCSS = parseFloat(getComputedStyle(document.querySelector('body')!)['font-size']);
    setSize({
      height: `${width / bodyCSS}rem`,
      width: `${height / bodyCSS}rem`,
      marginTop: `${-height / 2 / bodyCSS}rem`,
      marginLeft: `${-width / 2 / bodyCSS}rem`,
    });
  };

  const revertCursor = () => {
    const app = document.getElementById('app') as HTMLElement;

    setSize({ height: '1rem', width: '1rem', marginTop: '-0.5rem', marginLeft: '-0.5rem' });
    app.onmousemove = ({ clientX: x, clientY: y }) => setCursor({ xy: [x, y] });
  };

  return (
    <nav className={styles.nav_parent}>
      <div className={styles.nav_left}>
        <input type="checkbox" value="false" className={styles.burger} id="burger-but" ref={burgerRef} />
        <label
          htmlFor="burger-but"
          ref={labelRef}
          className={styles.burger_hr_container}
          onMouseEnter={() => changeCursor(labelRef)}
          onMouseLeave={revertCursor}
        >
          <hr className={styles.burger_hr_top} />
          {/* <hr className={styles.burger_hr_middle} /> */}
          <hr className={styles.burger_hr_bottom} />
        </label>
        <div className={styles.nav_page}>
          <label
            htmlFor="burger-but"
            ref={labelCloseRef}
            onMouseEnter={() => changeCursor(labelCloseRef)}
            onMouseLeave={revertCursor}
            className={styles.burger_page_hr_container}
          >
            <span className={styles.inside_span}>
              <hr className={styles.burger_page_hr_top} />
              <hr className={styles.burger_page_hr_bottom} />
            </span>
          </label>
        </div>
      </div>
    </nav>
  );
};
export default Nav;

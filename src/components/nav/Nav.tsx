/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { FC, useRef, useState, RefObject } from 'react';
import { SpringStartFn, useSpring, animated, useChain, SpringHandle, UnknownProps, useTrail } from 'react-spring';
import styles from './nav.module.css';

import { ReactComponent as Logo } from '../../assets/svgs/logo.svg';

import navItemsArray from '../../assets/data/navData';

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

  const [isOpen, changeIsOpen] = useState(false);

  const openPropsRef = useRef() as RefObject<SpringHandle<UnknownProps>>;
  const openProps = useSpring({
    right: isOpen ? `0%` : '-100%',
    ref: openPropsRef,
  });

  const navTrailRef = useRef() as RefObject<SpringHandle<UnknownProps>>;
  const [navTrail, setTrail] = useTrail(navItemsArray.length, () => ({
    x: [-20],
    ref: navTrailRef,
  }));

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

  const toggleNav = () => {
    changeIsOpen(!isOpen);
    // @ts-ignore
    setTrail({ x: [isOpen ? -20 : 0] });
  };

  useChain(isOpen ? [openPropsRef, navTrailRef] : [navTrailRef, openPropsRef], [0, 0.5]);

  return (
    <nav className={styles.nav_parent}>
      <Logo className={styles.logo} />
      <div className={styles.nav_left}>
        <input
          type="checkbox"
          value="false"
          className={styles.burger}
          id="burger-but"
          ref={burgerRef}
          onChange={toggleNav}
        />
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
        <animated.div className={styles.nav_page} style={openProps}>
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
          <div className={styles.nav_upper}>
            <div className={styles.nav_left} />
            <ul className={styles.nav_right_ul}>
              {
                // @ts-ignore
                navTrail.map((props, index) => {
                  return (
                    <animated.li
                      className={styles.nav_ul_li}
                      style={{ right: props.x.interpolate((x: number) => `${x}rem`) }}
                    >
                      {navItemsArray[index].name}
                    </animated.li>
                  );
                })
              }
            </ul>
          </div>
        </animated.div>
      </div>
    </nav>
  );
};
export default Nav;
